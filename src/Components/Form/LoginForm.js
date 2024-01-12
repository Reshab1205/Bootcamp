import React, { useState } from 'react'

const LoginForm = () => {

    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
    });

    const [errors, setErrors] = useState({
        'email': '',
        'password': ''
    })

    const validateForm = () => {
        let valid = true;


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
        const { name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateForm()) {
            console.log('formdata',formData);
            alert('Login successfull')
        }else {
            alert('Login failed')
        }
    }


  return (
    <>
    <div className='center-box'>
    <p>Login Form</p>
        <form onSubmit={handleSubmit}>
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

export default LoginForm