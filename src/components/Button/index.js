import React from "react";
import './style.scss';

export const Button = ({ 
    children, className, onClick, type
}) => {
    const buttonProps = {
        children, onClick, type,
        className: `btn ${className}`
    }
    return <button {...buttonProps} />;
}