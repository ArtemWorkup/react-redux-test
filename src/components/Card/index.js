import React from 'react';
import './style.scss';
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { APPROVE_ARTICLE, DELETE_ARTICLE } from "../../store/articlesReducer";

export const Card = ({ approved, title, description, thumb, date, index }) => {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const approve = () => {
        dispatch({
            type: APPROVE_ARTICLE,
            payload: index
        })
    }
    const remove = () => {
        dispatch({
            type: DELETE_ARTICLE,
            payload: index
        })
    }
    return(
        <div className='card'>
            {
                thumb &&
                <img src={thumb} alt={title} className='card-thumbnail' />
            }
            <div className='card-body'>
                {
                    title &&
                    <div className='card-title'>
                        {title}
                    </div>
                }
                {
                    description &&
                    <div className='card-content'>
                        {description}
                    </div>
                }
                <div className='card-date'>
                    { new Date(date).toLocaleDateString() }
                </div>
                {
                    !approved && user.isAdmin &&
                    <>
                        <Button onClick={approve}>Одобряю</Button>
                        <br />
                    </>
                }
                {
                    user.isAdmin && <Button className='red' onClick={remove}>Удаляю</Button>
                }
            </div>
        </div>
    );
}