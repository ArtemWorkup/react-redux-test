import React from "react";
import './style.scss';

export const Textarea = ({
    value,
    onChange,
    className,
    rows,
    placeholder,
    required,
    name
}) => {
    const textareaProps = {
        value,
        onChange: onChange,
        rows,
        className: `input ${className}`,
        placeholder,
        required,
        name
    }
    return <textarea {...textareaProps} />;
}