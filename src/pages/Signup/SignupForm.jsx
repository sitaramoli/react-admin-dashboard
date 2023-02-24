import React from 'react';
import Button from './../../components/Button/Button';
import Input from './../../components/Input/Input';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import './SignupForm.scss';
import useSignup from './useSignup';


const SignupForm = () => {

    const { formData, onInputChange, loading, handleFormSubmit } = useSignup();

    return (
        <form className="signup-form">
            <div className="signup-form__header">
                <p className="signup-form__header__title">Sign up to Dashboard Kit</p>
            </div>
            <Input label='Fullname' type='text' name='fullname' value={formData.fullname} onChange={onInputChange} placeholder='Fullname' />
            <Input label='Email' type='email' name='email' value={formData.email} onChange={onInputChange} placeholder='Email address' />
            <Input label='Password' type='password' name='password' id='password' value={formData.password} onChange={onInputChange} placeholder="Password" />
            <Input label='Confirm Password' type='password' name='confirm_password' id='confirm_password' value={formData.confirm_password} onChange={onInputChange} placeholder="Confirm Password" />
            {loading ? <LoadingSpinner /> : <Button text='Sign Up' type='button' onClick={handleFormSubmit} />}
        </form>
    )
}

export default SignupForm