import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
