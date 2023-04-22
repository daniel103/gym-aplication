import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
