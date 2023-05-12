import React from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const linkButton = () => {
    navigate("/add")
  }
  return (
    <div className='Home-page'>
      <h1>Home</h1>
      <div className='Home-container'>
      <button id='workout' className='Home-btn'>workout</button>
      <button id='add' className='Home-btn' onClick={linkButton}>add</button>
      <button id='language' className='Home-btn'>language</button>    
      <button id='about' className='Home-btn'>about</button>
      </div>
    </div>
  )
}

export default Home