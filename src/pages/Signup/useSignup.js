import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useSignup = () => {

    const [loading, setLoading] = useState(false);


    const [formData, setFormData] = useState({ fullname: '', email: '', password: '', confirm_password: '' });
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleFormSubmit = () => {
        if (formData.password !== formData.confirm_password) {
            toast.error('Passwords did not match');
        }
        else {
            signup(formData);
        }
    }

    const navigate = useNavigate();

    const signup = async (formData) => {
        setLoading(true);
        await axios.post('https://react-admin-dashboard-395cd-default-rtdb.firebaseio.com/users.json', { ...formData }).
            then((response) => {
                toast.success('Account created successfully');
                navigate('/');
            }).catch((error) => {
                toast.error(error);
            }).finally(() => {
                setLoading(false)
            });
    };

    return { formData, loading, onInputChange, handleFormSubmit }
}
export default useSignup;