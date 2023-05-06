import './Login.css';
import {useState, React} from 'react';
import {Button, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from "axios";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(false) 
  const [formValue, setFormValue] = useState({});

  const { register, handleSubmit, formState: { errors }} = useForm()

  const handleInputChange = (e) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const onSubmit = async (user) => {
    try {
      const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/user/login/`, {
        email: user.email,
        password: user.password
      })
      navigate("/");
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='Login-page'>
      <Container maxWidth="sm">
        <Box className="Sign-in">
        <div>
        <form onSubmit={handleSubmit(onSubmit)} className='form-container'><br />
        <h1>Sign In</h1>
        <TextField
           {...register("email")}
        onChange={handleInputChange}
        id="outlined-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
        /><br/>
        {errors.Email && <p>{errors.Email.message}</p>}
        <TextField
        {...register("password")}
        onChange={handleInputChange}
        id="outlined-password-input"
        label="password"
        type="text"
        autoComplete="current-password"
        /><br/>
        {errors.password && <p>{errors.password.message}</p>}
            <Button type='submit' color="primary" variant="contained">Sing in</Button><br />
        </form>
            <Button color="success" variant="outlined" onClick={() => navigate("/register")}>Register</Button>
          </div>
      </Box>
      </Container>
    </div>
  )
}

export default Login