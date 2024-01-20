import Navbar from './components/Navbar';
import Slider from './components/Slider'; 
import Form from './components/Form';
import './App.css';
import Footer from './components/Footer';
import React,{ useState } from 'react';

function App() {
  const [Mode,setMode] = useState('light');
  const ToggleMode = ()=>{
    if(Mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
  }
  return (
    <>
    <Navbar mode = {Mode} toggleMode = {ToggleMode}/>
    <Slider />
    <Form/>
    <Footer/>
    </>
  );
}

export default App;
