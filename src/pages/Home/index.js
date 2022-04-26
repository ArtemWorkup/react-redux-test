import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';
import { Card, Input } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../store/userReducer";

export const Home = () => {
    const articles = useSelector(store => store.articles.list);
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const [ query, setQuery ] = useState('');
    const logout = () => dispatch({ type: LOGOUT });
    const handleSearch = e => setQuery(e.target.value);
    return(
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header-content'>
                        <h3 className='header-title'>
                            Привет, {user.username || 'Гость'}
                        </h3>
                        {
                            user.username ?
                                <span className='header-link' onClick={logout}>Выйти</span> :
                                <Link to='/login' className='header-link'>Войти</Link>
                        }
                    </div>
                </div>
            </header>
            <main className='main'>
                <div className='container'>
                    <h1>Последние новости</h1>
                    <Input placeholder='Поиск по новостям' value={query} onChange={handleSearch}/>
                    {
                        user.username &&
                        <Link to='/create-article'>{user.isAdmin ? 'Добавить' : 'Предложить'} новость</Link>
                    }
                    <section className='articles'>
                        {
                            articles &&
                            articles
                            .sort((a, b) => a.date > b.date ? -1 : 1)
                            .filter(article => user.username || article.approved)
                            .filter(article => article.title.includes(query) || article.description.includes(query))
                            .map((article, index) => <Card {...article} index={index} />)
                        }
                    </section>
                </div>
            </main>
        </>
    );
}