import React, { useState } from "react";
import {
  FaUser,
  FaBell,
  
  FaLock,
  FaGlobe,
  FaFileAlt,
  FaCreditCard,
  FaTrashAlt,
  FaCogs,
} from "react-icons/fa";

const Settings = () => {
  // State for toggles, inputs etc
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [language, setLanguage] = useState("English");
  const [privacy, setPrivacy] = useState("Public");

  return (
    <div className="main-content">
      <h2>
        <FaCogs style={{ marginRight: "8px" }} />
        Settings
      </h2>

      {/* Profile Settings */}
      <section className="settings-section">
        <h3><FaUser style={{ marginRight: "6px" }} /> Profile Settings</h3>
        <label>
          Full Name:
          <input type="text" placeholder="Francis Otieno" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="youremail@example.com" />
        </label>
      </section>

      {/* Notification Settings */}
      <section className="settings-section">
        <h3><FaBell style={{ marginRight: "6px" }} /> Notification Settings</h3>
        <label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
          />
          SMS Notifications
        </label>
      </section>

      {/* Privacy Settings */}
      <section className="settings-section">
        <h3><FaLock style={{ marginRight: "6px" }} /> Privacy Settings</h3>
        <label>
          Profile Visibility:
          <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
            <option value="Public">Public</option>
            <option value="Connections">Connections Only</option>
            <option value="Private">Private</option>
          </select>
        </label>
      </section>

      {/* Language Settings */}
      <section className="settings-section">
        <h3><FaGlobe style={{ marginRight: "6px" }} /> Language</h3>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          {/* Add more languages */}
        </select>
      </section>

      {/* Document Upload */}
      <section className="settings-section">
        <h3><FaFileAlt style={{ marginRight: "6px" }} /> Resume / CV</h3>
        <input type="file" />
        <p>Upload your latest resume to improve job matching.</p>
      </section>

      {/* Payment Methods */}
      <section className="settings-section">
        <h3><FaCreditCard style={{ marginRight: "6px" }} /> Payment Methods</h3>
        <p>Add your payment methods for premium features (if any).</p>
        {/* Dummy input for payment info */}
        <input type="text" placeholder="Card Number" maxLength={16} />
      </section>

      {/* Account Actions */}
      <section className="settings-section">
        <h3><FaTrashAlt style={{ marginRight: "6px" }} /> Account Actions</h3>
        <button className="btn-secondary" style={{ color: "red", borderColor: "red" }}>
          Delete Account
        </button>
      </section>
    </div>
  );
};

export default Settings;
