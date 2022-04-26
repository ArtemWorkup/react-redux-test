import React from "react"
import './style.scss';
export const Input = ({
    onChange, value, className, placeholder,
    type, pattern, required, name
}) => {
    const inputProps = {
        onChange, value, placeholder,
        type, pattern, required, name,
        className: `input ${className}`
    }
    return  <input {...inputProps} />
}