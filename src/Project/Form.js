import React, { useState } from 'react'
import '../App.css'

const UserForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const [values, setValues] = useState({
        fname: '',
        lname: '',
        email: ''
    });
    // console.log(values)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        //    setValues('');
        if (values.fname && values.lname && values.email) {
            setValid(true);
        }
        setSubmitted(true);
    }

    const handleChange = (e) => {
        // console.log(e)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='form-container'>
            <form className='register-form' onSubmit={handleSubmit}>
                {/* <p>Login Form</p> */}
                {
                    submitted && valid ? <div className='success'>Yeah!! Submitted Successfully</div> : <p>Login Form</p>
                }
                <input
                    type='text'
                    name='fname'
                    value={values.fname || ""}
                    placeholder='First Name'
                    className='input-field'
                    onChange={handleChange}
                />
                {submitted && !values.fname ? <small className='error'>Enter First Name</small> : ""}
                <input
                    type='text'
                    name='lname'
                    value={values.lname || ""}
                    placeholder='Last Name'
                    className='input-field'
                    onChange={handleChange}
                />
                {submitted && !values.lname ? <small className='error'>Enter Last Name</small> : ""}
                <input
                    type='email'
                    name='email'
                    value={values.email || ""}
                    placeholder='Email'
                    className='input-field'
                    onChange={handleChange}
                />
                {submitted && !values.email ? <small className='error'>Enter Email</small> : ""}
                <button type='submit' className='btn'>Register</button>
            </form>
        </div>
    )
}

export default UserForm