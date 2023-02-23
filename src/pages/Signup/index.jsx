import React from 'react';
import SignupForm from './SignupForm';
import logo from './../../assets/logo.svg';

import './index.scss';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const loginRoute = () => {
        navigate('/');
    }

    return (
        <div className='signup'>
            <div className="signup__header">
                <figure>
                    <img className='signup__header__logo' src={logo} alt="logo" />
                </figure>
                <div className="signup__header__title">Dashboard Kit</div>
            </div>
            <SignupForm />
            <div className="signup__footer">
                <span>Already have an account?</span>
                <span className='signup__footer__login' onClick={loginRoute}>Log in</span>
            </div>
        </div>
    )
}

export default Signup;