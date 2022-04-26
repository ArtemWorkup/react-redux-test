import ReactDOM from 'react-dom';
import './style.scss';
import { useEffect, useState } from "react";

export const Modal = ({
    title,
    children,
    close
}) => {
    const [ active, setActive ] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 350)
    });
    const onClose = () => {
        setActive(false);
        setTimeout(close, 350);
    }
    return ReactDOM.createPortal(
        <>
            <div className={`modal ${active && 'active'}`}>
                <div className='modal-header'>
                    <h2>{title}</h2>
                    <Close cb={onClose} />
                </div>
                {children}
            </div>
            <div className={`modal-bg ${active && 'active'}`} onClick={onClose}></div>
        </>,
        document.getElementById('root')
    );
}

const Close = ({ cb }) => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={cb} className='modal-header__close'>
        <path d="M18 6.5L6 18.5" stroke="#081744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6.5L18 18.5" stroke="#081744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)