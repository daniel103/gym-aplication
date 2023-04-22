import {useState, React} from 'react';
import {Button, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from "axios"


const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(false) 
  const [formValue, setFormValue] = useState({});

  const { register, handleSubmit, formState: { error }} = useForm()

  const handleInputChange = (e) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (user) => {
    try {
      const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, {
        email: user.email,
        password: user.password
      })
      if (data.status === "success") {
        setUser(true);
        navigate("/");
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <h1>Sign In</h1>
        <form action="GET" onSubmit={() => onSubmit(user)}><br />
        <TextField
        onChange={handleInputChange}
        id="outlined-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
        /><br/>
        <TextField
        onChange={handleInputChange}
        id="outlined-password-input"
        label="password"
        type="text"
        autoComplete="current-password"
        /><br/>
            <Button color="primary" variant="contained">Sing in</Button>
        </form>
            <Button color="success" variant="outlined">Register</Button>
    </div>
  )
}

export default Login