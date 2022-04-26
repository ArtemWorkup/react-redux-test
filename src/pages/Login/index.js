import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Form, Input, Modal } from "../../components";
import './style.scss';
import { LOGIN } from "../../store/userReducer";
import { USERS } from "../../constants";

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const [ error, setError ] = useState(null);
    const close = () => navigate(-1);
    const handleChange = e => {
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }
    const handleSubmit = () => {
        auth({
            ...state,
            error: setError,
            success: payload => dispatch({
                type: LOGIN,
                payload: payload
            }) && close()
        });
    }
    return(
        <Modal close={close} title='Вход'>
            <Form error={error} onSubmit={handleSubmit}>
                <Input
                    placeholder='E-mail'
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={state.email}
                    required
                />
                <div className='invalid-feedback'>Некорректное заполнение</div>
                <Input
                    placeholder='Password'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    value={state.password}
                    required
                />
                <div className='invalid-feedback'>Некорректное заполнение</div>
                <Button type='submit'>Войти</Button>
            </Form>
        </Modal>
    );
}

//Этого должно быть в другом месте, но пока полежит здесь
const auth = ({ email, password, error, success }) => {
    const user = USERS.find(u => u.email === email);
    if(user && user.password === password)
        success(user);
    error(`Авторизация не удалася`);
}