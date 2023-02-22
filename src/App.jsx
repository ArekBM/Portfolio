import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Preloader from './components/Preloader';
import './styles.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer)
  }, []);

  return (
    <Router>
      <Preloader load={load} id={load ? 'no-scroll' : 'scroll'} />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
