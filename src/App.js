import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Contact from './components/contact';
import './App.css';

function App() {
  const [isLoginOverlayVisible, setLoginOverlayVisibility] = useState(false);

  const handleLoginClick = () => {
    console.log('Login function triggered');
    setLoginOverlayVisibility(true);
  };

  const handleLoginClose = () => {
    setLoginOverlayVisibility(false);
  };
  const [isSignupOverlayVisible, setSignupOverlayVisibility] = useState(false);

  const handleSignupClick = () => {
    console.log('Login function triggered');
    setSignupOverlayVisibility(true);
  };

  const handleSignnupClose = () => {
    setSignupOverlayVisibility(false);
  };
  return (
   <Router>
   <Routes>
     <Route path='/' element={<Home onLoginClick={handleLoginClick}  onSignupClick={handleSignupClick}/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path="/login" element={<Login onLoginClose={handleLoginClose}/>}  />
     <Route path="/signup" element={<Signup onSignupCLose={handleSignnupClose}/>}  />
   </Routes>
   {isLoginOverlayVisible && (
          <Login onLoginClose={handleLoginClose} />
        )}
   {isSignupOverlayVisible && (
          <Signup onSignupClose={handleSignnupClose} />
        )}
 </Router>
  );
}

export default App;
