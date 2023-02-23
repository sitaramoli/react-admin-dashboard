import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [remember, setRemember] = useState(false);
    const onRememberChange = () => {
        setRemember(!remember);
    }
    const [formData, setFormData] = useState({ email: '', password: '' });
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFormSubmit = () => {
        if (formData.email === '' || formData.password === '') {
            toast.error('Please fill both Email and Password fields');
        }
        else {
            login(formData);
        }
    }

    const navigate = useNavigate();

    const login = async (userCreditionals) => {
        setLoading(true);
        await axios.get(`http://localhost:3000/users`).then((response) => {
            const user = response.data.find(user => userCreditionals.email === user.email);
            if (user && userCreditionals.password === user.password) {
                toast.success('logged in');
                navigate('/dashboard');
            }
            else if (!user) {
                toast.error('User doesn\'t extst');
            }
            else {
                toast.error('Password is incorrect');
            }
        }).catch((error) => {
            toast.error(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    return { loading, formData, handleFormSubmit, onInputChange, remember, onRememberChange };
}

export default useLogin;