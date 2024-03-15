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
          <Route path="/login" element={<><Navbar /> <Login /></>} />
          <Route path="/about" element={<><Navbar /> <About /></>} />
          <Route path="/faq" element={<><Navbar /> <FAQ /></>} />
          <Route path="/contact" element={<><Navbar /> <Contact /></>} />
          <Route path="*" element={<><h1>404 Not Found</h1></>} />
          <Route path="/education" element={<><Navbar /> <Education/></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;