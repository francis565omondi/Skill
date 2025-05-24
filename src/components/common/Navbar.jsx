import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(""); // seeker or employer

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      setIsLoggedIn(!!token);
      setUserRole(user?.role || "");
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserRole("");
    window.location.href = "/";
  };

  const getDashboardLink = () => {
    if (userRole === "employer") return "/employer-dashboard";
    if (userRole === "seeker") return "/seeker-dashboard";
    return "/dashboard";
  };

  const getDashboardLabel = () => {
    if (userRole === "employer") return "Employer Dashboard";
    if (userRole === "seeker") return "Seeker Dashboard";
    return "Dashboard";
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">SkillConnect</Link>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>

        {!isLoggedIn ? (
          <li>
  <Link to="/select-signup" onClick={toggleMenu}>
    <button className="btn-login">Sign Up</button>
  </Link>
</li>
        ) : (
          <>
            <li>
              <Link to={getDashboardLink()} onClick={toggleMenu}>
                <button className="btn-login">{getDashboardLabel()}</button>
              </Link>
            </li>
            <li>
              <button className="btn-login" onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
