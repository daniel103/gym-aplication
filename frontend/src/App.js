import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import AddWorkout from './Pages/AddWorkout/AddWorkout';
import TrainingExercise from './Components/TrainingExercise/TrainingExercise';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path='/add' element={<AddWorkout />}/> 
          <Route path='/trainingexercise' element={<TrainingExercise />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
