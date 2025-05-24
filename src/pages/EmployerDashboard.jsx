import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaThLarge,
  FaBriefcase,
  FaClipboardList,
  FaCogs,
  FaPlusCircle,
  FaCalendarAlt,
} from "react-icons/fa";

const EmployerDashboard = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-section">
          {profilePic ? (
            <img src={profilePic} alt="Employer" className="profile-img" />
          ) : (
            <FaUserCircle className="default-icon" />
          )}
          <label htmlFor="upload" className="upload-label">Change Logo</label>
          <input type="file" id="upload" onChange={handleProfileChange} />
        </div>

        <nav>
          <ul>
            <li className="active">
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <FaThLarge /> Overview
              </Link>
            </li>
            <li>
              <Link to="/post-job" style={{ color: "inherit", textDecoration: "none" }}>
                <FaPlusCircle /> Post a Job
              </Link>
            </li>
            <li>
              <Link to="/my-jobs" style={{ color: "inherit", textDecoration: "none" }}>
                <FaBriefcase /> My Jobs
              </Link>
            </li>
            <li>
              <Link to="/applications" style={{ color: "inherit", textDecoration: "none" }}>
                <FaClipboardList /> Applications
              </Link>
            </li>
            <li>
              <Link to="/settings" style={{ color: "inherit", textDecoration: "none" }}>
                <FaCogs /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header">
          <h1>Welcome Back, Employer!</h1>
          <p>Manage your job posts and applicants here.</p>
        </div>

        {/* Summary Cards */}
        <div className="stats-cards">
          <div className="card">
            <FaBriefcase className="card-icon" />
            <h3>Jobs Posted</h3>
            <p>12</p>
          </div>
          <div className="card">
            <FaClipboardList className="card-icon" />
            <h3>Applications Received</h3>
            <p>89</p>
          </div>
          <div className="card">
            <FaCalendarAlt className="card-icon" />
            <h3>Interviews Scheduled</h3>
            <p>7</p>
          </div>
        </div>

        {/* Recent Job Postings */}
        <div className="job-postings">
          <h2>Recent Job Posts</h2>
          <ul>
            <li>
              <strong>Electrician</strong> – Nairobi – <span>5 Applications</span>
            </li>
            <li>
              <strong>Driver</strong> – Kisumu – <span>12 Applications</span>
            </li>
            <li>
              <strong>Cleaner</strong> – Mombasa – <span>3 Applications</span>
            </li>
          </ul>
        </div>

        {/* Action */}
        <div className="actions">
          <Link to="/post-job">
            <button className="btn-primary">Post a New Job</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
