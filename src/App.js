import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Popup from './components/Popup';
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import { useState, useEffect } from 'react';



function App() {

  const [isPopupVisable, setPopupVisible] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setPopupVisible(true)
    },10000)
  },[])

 
  return (

   
    <div className="App">
     
    <nav>
        <h2 className='header'>Social-app</h2>
          <ul>
            <li className='home'>
              <Link to="/">Home</Link>
            </li>
            <li className='login'>
              <Link to="/login">Login</Link>
            </li>
            <li className='signup'>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signUp" element={<SignUp />}/>
        </Routes>
        <Popup trigger={isPopupVisable} setPopupVisible={setPopupVisible}>
        
          <h3>My popup</h3>
        </Popup>
      </div>
    
  );
}

export default App;
