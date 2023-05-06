import React from 'react';
import {useState} from "react"
import "./Register.css";
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {useForm} from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched'
  });

  const onSubmit = async (data) => {
    try {
      reset();
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/`, data)
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

      const handleConfirmPasswordClick = () => {
        setConfirmPasswordEye(!confirmPasswordEye);
      };

      const password = watch("password");


  return (
    <div className='register'> 
        <form className='register-container' onSubmit={handleSubmit(onSubmit)}>
        <h1>crate new user</h1>
        <TextField
         {...register('firstName', {required: "firstName is required" })}
        id="outlined-password-input"
        label="firstName"
        type="text"
        autoComplete="current-password"
        /><br/>
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <TextField
        {...register('lastName', {required: "lastName is required" })}
        id="outlined-password-input"
        label="lastName"
        type="text"
        autoComplete="current-password"
        /><br/>
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <TextField
        {...register('username', {required: "username is required" })}
        id="outlined-password-input"
        label="username"
        type="text"
        autoComplete="current-password"
        /><br/>
        {errors.username && <p>{errors.username.message}</p>}
        <TextField
        {...register('email', {required: "email is required" })}
        id="outlined-password-input"
        label="email"
        type="text"
        autoComplete="current-password"
        /><br/>
        {errors.email && <p>{errors.email.message}</p>}
        <TextField
        {...register('password', {required: "password is required" })}
        id="outlined-password-input"
        label="password"
        type={confirmPasswordEye === false ? "password" : "text"}
        autoComplete="current-password"
        /><br/>
        {errors.password && <p>{errors.password.message}</p>}
        <div className="eye">
          {confirmPasswordEye === false ? (
          <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
          ) : (
          <AiFillEye onClick={handleConfirmPasswordClick} />
          )}
        </div>
        <TextField
        {...register('confirmPassword', {required: "confirmPassword is required",
        validate: (value) => 
        value === password || "The password do not match",
        })}
        id="outlined-password-input"
        label="confirmPassword"
        type={confirmPasswordEye === false ? "password" : "text"}
        autoComplete="current-password"
        /><br/>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <Button type="submit" variant="contained" color="success">
        Create New user
      </Button><br />
      <Button type="submit" variant="outlined" onClick={() => navigate("/login")}>
        Login
      </Button>
        </form>
    </div>
  )
}

export default Register