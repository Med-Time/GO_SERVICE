/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Form from './components/Form';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Education from './components/Education';
import Transportation from './components/Transportation';
import Environment from './components/Environment';
import Health from './components/Health';
import NavbarLogout from './components/NavbarLogout';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Slider />
              <Form />
              <Footer />
            </>
          } />
          <Route path="/login" element={<>
            <Navbar />
            <Login/></>} />
          <Route path="/about" element={
            // eslint-disable-next-line react/jsx-pascal-case
            localStorage.getItem("token") ? <><NavbarLogout/><About /> </> : <><Navbar /><About /></>} />
          <Route path="/faq" element={
          localStorage.getItem("token") ? <><NavbarLogout/><FAQ /> </> : <><Navbar /><FAQ /></>} />
          <Route path="/contact" element={
          localStorage.getItem("token") ? <><NavbarLogout/><Contact /> </> : <><Navbar /><Contact /></>} />
          <Route path="*" element={<><h1>404 Not Found</h1></>} />
          <Route path="/education" element={
            localStorage.getItem("token") ? <>
            <Education/> </> : <Login/> } />
          <Route path="/health" element={
            localStorage.getItem("token") ? <><Health/> </> : <Login/> } />
          <Route path="/transportation" element={
          localStorage.getItem("token") ? <>
            <Transportation /></> : <Login/> } />
          <Route path="/environment" element={
          localStorage.getItem("token") ? <>
            <Environment /></> : <Login/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;