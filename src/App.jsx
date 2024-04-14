import React, { useState, useEffect } from 'react';
import Home from '../pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    loading ? (
      <Preloader />
    ) : (
      <>
        <Router>
          <div className='homeContainer'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/services' element={<Services />} />
            </Routes>
          </div>
        </Router>
      </>
    )
  );
};

export default App;
