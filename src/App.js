import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SeekerSignup from './pages/SeekerSignup'; 

import Jobs from './pages/Jobs';
import Dashboard from './pages/Dashboard';
import Settings from './components/Settings';
import Applications from './components/Applications';
import EmployerDashboard from './pages/EmployerDashboard';
import SelectSignup from './pages/SelectSignup';
import EmployerSignup from './pages/EmployerSignup';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/select-signup" element={<SelectSignup />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/signup/employer" element={<EmployerSignup />} />
          {/* Use SignUp component here for seeker */}
          <Route path="/signup/seeker" element={<SeekerSignup />} />

          {/* 🔒 Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applications"
            element={
              <ProtectedRoute>
                <Applications />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
