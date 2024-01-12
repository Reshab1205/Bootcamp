import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Header/Navbar'
import LandingPage from './Components/Pages/LandingPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RegisterForm from './Components/Form/RegisterForm';
import LoginForm from './Components/Form/LoginForm';
import Score from './Components/hooks/Score';

function App() {
  
  return (
    <div className="App">
    <div>
    <Navbar />

    

    <Router>
      <Routes>
      <Route path='/' element={<LandingPage />}></Route>
        <Route path='/register' element={<RegisterForm />}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/score' element={<Score />}></Route>
      </Routes>
    </Router>


    
    {/* <div>
      <Footer />
    </div> */}

    </div>
    </div>
  );
}

export default App;
