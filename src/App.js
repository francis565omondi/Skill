// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Jobs from './pages/Jobs';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* ✅ Wrap main content in container */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
