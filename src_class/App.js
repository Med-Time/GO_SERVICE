import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Form from './components/Form';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';

  function App() {
    // const [Mode,setMode] = useState('light');
  // const ToggleMode = ()=>{
  //   if(Mode ==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = 'black';
  //   }
  // else{
  //   setMode('light');
  //   document.body.style.backgroundColor = 'white';
  // }
  // }
    return (
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
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={
          <> <Navbar /> <About /></>}/>
        <Route path="/contact" element={
          <> <Navbar /> <Contact /></>}/>
        </Routes>
      </Router>
    );
  }
  
  export default App;