import React, { useState } from 'react'
import './RegisterForm.css'
import { useNavigate } from 'react-router-dom'


const RegisterForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        'username': '',
        'email': '',
        'password': ''

    })

    const [errors, setErrors] = useState({
        'username': '',
        'email': '',
        'password': ''
    })

    const validateForm = () => {
        let valid = true;

        if(!formData.username.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: 'Username is required'
            }))
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: ''
            }));
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!formData.email.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is required'
            }))
            valid = false;
        } else if (!emailRegex.test(formData.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid Email Address'
            }))
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: ''
            }))
        }
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        if(!formData.password.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password is required'
            }))
            valid = false;
        } else if (!passwordRegex.test(formData.password)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password must be at least 8 characters long and contain at least one letter and one number',
            }))
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: ''
            }))
        }
        return valid
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm ()) {
            console.log('formdata', formData);
            alert('Form Submitted')
            navigate("/login")
        } else {
            console.log('Form Validation Failed');
        }


    }


    return (
        <>
            <div className='center-box'>
            <p>Register Form</p>
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input name='username' id='username' type='text' value={formData.username} onChange={handleChange} />
                    {errors.username && <span>{errors.username}</span>}
                    <br />
                    <br />
                    <label>Email:</label>
                    <input name='email' id='email' type='email' value={formData.email} onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                    <br />
                    <br />
                    <label>Password:</label>
                    <input name='password' id='password' type='password' value={formData.password} onChange={handleChange} />
                    {errors.password && <span>{errors.password}</span>}
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default RegisterForm
