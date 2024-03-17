import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Form from './components/Form';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Education from './components/Education';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log('Login Successful');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log('Logout Successful');
    setIsLoggedIn(false);
  };
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
              <Slider />
              <Form />
              <Footer />
            </>
          } />
          <Route path="/login" element={<> 
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Login onLogin={handleLogin} /></>} />
          <Route path="/about" element={<>
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} /><About /></>} />
          <Route path="/faq" element={<> 
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} /><FAQ /></>} />
          <Route path="/contact" element={<> <Contact /></>} />
          <Route path="*" element={<><h1>404 Not Found</h1></>} />
          <Route path="/education" element={<> 
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} /><Education/></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;