import { useRef, useState } from "react";

export const Form = ({
    children,
    onSubmit,
    error
}) => {
    const [ isValid, setValid ] = useState(true);
    const ref = useRef('');
    const handler = e => {
        e.preventDefault();
        e.stopPropagation();
        setValid(true);
        if(ref.current.checkValidity()) {
            onSubmit();
        } else {
            setValid(false);
        }
    }
    return(
        <form noValidate onSubmit={handler} ref={ref} className={`${!isValid && 'validation'}`}>
            {error && <div className='error'>{error}</div>}
            {children}
        </form>
    );
}