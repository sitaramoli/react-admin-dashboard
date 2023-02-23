import React from 'react';
import './Input.scss';

const Input = ({ label, children, type, name, id, value, onChange, placeholder }) => {
    return (
        <div className='input'>
            <label className='input__label'>{label} {children}</label>
            <input type={type} name={name} id={id} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}

export default Input;