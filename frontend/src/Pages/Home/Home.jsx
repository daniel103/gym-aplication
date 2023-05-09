import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Home-page'>
      <h1>Home</h1>
      <div className='Home-container'>
      <button id='workout'>workout</button>
      <Link to="/add"> 
      <button id='add'>add</button>
      </Link>
      <button id='language'>language</button>    
      <button id='about'>about</button>
      </div>
    </div>
  )
}

export default Home