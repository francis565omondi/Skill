import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaBriefcase,
  FaBookmark,
  FaCalendarAlt,
  FaCogs,
  FaThLarge,
  FaFileUpload,
} from "react-icons/fa";

const Dashboard = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [resume, setResume] = useState(null);
  const [bio, setBio] = useState("Enthusiastic plumber with 5+ years of experience.");
  const [profession, setProfession] = useState("Plumber");
  const [skills, setSkills] = useState(["Piping", "Maintenance", "Customer Service"]);
  const [preference, setPreference] = useState("Full-time");

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) setResume(file.name);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-section">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-img" />
          ) : (
            <FaUserCircle className="default-icon" />
          )}
          <label htmlFor="upload" className="upload-label">Change Photo</label>
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
              <Link to="/jobs" style={{ color: "inherit", textDecoration: "none" }}>
                <FaBriefcase /> Explore Jobs
              </Link>
            </li>
            <li>
              <Link to="/applications" style={{ color: "inherit", textDecoration: "none" }}>
                <FaBookmark /> Applications
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
          <h1>Welcome, Francis!</h1>
          <p>Here's your overview for today.</p>
        </div>

        {/* Summary Stats */}
        <div className="stats-cards">
          <div className="card">
            <FaBriefcase className="card-icon" />
            <h3>Jobs Applied</h3>
            <p>15</p>
          </div>
          <div className="card">
            <FaBookmark className="card-icon" />
            <h3>Jobs Saved</h3>
            <p>5</p>
          </div>
          <div className="card">
            <FaCalendarAlt className="card-icon" />
            <h3>Interviews</h3>
            <p>3</p>
          </div>
        </div>

        {/* Seeker Profile Section */}
        <div className="seeker-profile">
          <h2>Your Profile</h2>
          <p><strong>Profession:</strong> {profession}</p>
          <p><strong>Bio:</strong> {bio}</p>
          <p><strong>Skills:</strong> {skills.join(", ")}</p>
          <p><strong>Work Preference:</strong> {preference}</p>

          <div className="resume-upload">
            <label htmlFor="resume"><FaFileUpload /> Upload Resume: </label>
            <input type="file" id="resume" onChange={handleResumeUpload} />
            {resume && <p>Uploaded: {resume}</p>}
          </div>
        </div>

        {/* Actions */}
        <div className="actions">
          <Link to="/jobs">
            <button className="btn-primary">Explore Jobs</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
