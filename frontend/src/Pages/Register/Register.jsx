import React, { useState } from 'react';
import {Button, TextField} from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";


const Register = () => {
    let negative = useNavigate()
    
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({ mode: 'onTouched' });

    const onSubmit = async (data) => {
        try {
            reset();
            const res = await axios.post( `${process.env.REACT_APP_API_URL}`, data )
            negative('/login')
        } catch (error) {
            console.log(error)
        }
    }

    const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

    const handleConfirmPasswordClick = () => {
        setConfirmPasswordEye(!confirmPasswordEye);
    };

    const password = watch("password");

    const eyeIcon = () => {
        try {
            {confirmPasswordEye === false ? (
                <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
              ) : (
                <AiFillEye onClick={handleConfirmPasswordClick} />
              )}
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                {...register("firstName", {required: "firstNmae is required"})}
                type="text"
                label="firstName"
                variant="outlined" />
            <TextField
                {...register("lastName", {required: "lastName is required"})}
                type="text"
                label="lastName"
                variant="outlined" />
            <TextField
                {...register("userName", {required: "userName is required"})}
                type="text"
                label="userName"
                variant="outlined" />
            <TextField
                {...register("email", {required: "email is required"})}
                type="text"
                label="email"
                variant="outlined" />
            <TextField
                {...register("password", {required: "password is required"})}
                type="text"
                label="password"
                variant="outlined"
                onClick={eyeIcon}
            />
            <TextField
                {...register("confirmPassword", {required: "confirmPassword is required"})}
                type="text"
                label="confirmPassword"
                variant="outlined" 
                onClick={eyeIcon}
            />
        </form>
    </div>
  )
}

export default Register
