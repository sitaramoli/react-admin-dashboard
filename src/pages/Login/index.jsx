import React from 'react'
import LoginForm from './LoginForm';
import logo from './../../assets/logo.svg'
import './index.scss'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const signupRoute = () => {
        navigate('/signup');
    }
    return (
        <div className='login'>
            <div className="login__header">
                <figure>
                    <img className='login__header__logo' src={logo} alt="logo" />
                </figure>
                <div className="login__header__title">Dashboard Kit</div>
            </div>
            <LoginForm />
            <div className="login__footer">
                <span>Don’t have an account?</span>
                <span className='login__footer__signup' onClick={signupRoute}>Sign up</span>
            </div>
        </div>
    )
}

export default Login;