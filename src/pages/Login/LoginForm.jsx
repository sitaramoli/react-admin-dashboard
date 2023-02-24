import React from 'react'
import Button from './../../components/Button/Button';
import Checkbox from './../../components/Checkbox/Checkbox';
import Input from './../../components/Input/Input';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import './LoginForm.scss'
import useLogin from './useLogin';
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {

    const { loading, formData, handleFormSubmit, onInputChange, remember, onRememberChange } = useLogin();
    return (
        <form className="login-form">
            <div className="login-form__header">
                <p className="login-form__header__title">Log In to Dashboard Kit</p>
                <p className="login-form__header__subtitle">Enter your email and password below</p>
            </div>
            <Input label='Email' type='email' name='email' value={formData.email} onChange={onInputChange} placeholder='Email address' />
            <Input label='Password' type='password' name='password' id='password' value={formData.password} onChange={onInputChange} placeholder="Password" >
                <span>Forgot password?</span>
            </Input>
            <Checkbox text='Remember me' checked={remember} onChange={onRememberChange} />
            {loading ? <LoadingSpinner /> : <Button text='Log In' type='button' onClick={handleFormSubmit} />}
        </form>
    )
}

export default LoginForm;