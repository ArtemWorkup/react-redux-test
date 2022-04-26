import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Modal } from "../../components";
import { Textarea } from "../../components/Textarea";
import { CREATE_ARTICLE } from "../../store/articlesReducer";

export const CreateArticle = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        title: '',
        description: '',
        thumb: '',
        date: new Date()
    });
    const close = () => navigate(-1);
    const handleChange = e => {
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = () => {
        dispatch({
            type: CREATE_ARTICLE,
            payload: {
                ...state,
                approved: !!user.isAdmin
            }
        });
        close();
    }
    if(!user.username) return <></>;
    return(
        <Modal title='Добавить статью' close={close}>
            <Form onSubmit={handleSubmit}>
                <Input
                    onChange={handleChange}
                    value={state.title}
                    name='title'
                    placeholder='Заголовок'
                    required
                />
                <Input
                    onChange={handleChange}
                    value={state.thumb}
                    name='thumb'
                    placeholder='Ссылка на миниатюру'
                    required
                />
                <Textarea
                    onChange={handleChange}
                    value={state.description}
                    name='description'
                    placeholder='Содержание'
                    rows={6}
                    required
                />
                <Button type='submit'>Добавить</Button>
            </Form>
        </Modal>
    )
}