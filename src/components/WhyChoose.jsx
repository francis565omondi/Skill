import React from 'react';

import { FaMapMarkerAlt, FaMobileAlt, FaStar, FaBriefcase, FaShieldAlt } from 'react-icons/fa';

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-heading">Why Choose SkillConnect?</h2>
        <div className="why-grid">
          <div className="why-card">
            <FaMapMarkerAlt className="why-icon" />
            <h3>Locally Focused</h3>
            <p>Find jobs or talent in your neighborhood</p>
          </div>
          <div className="why-card">
            <FaMobileAlt className="why-icon" />
            <h3>Mobile-Friendly</h3>
            <p>Use it anytime, anywhere</p>
          </div>
          <div className="why-card">
            <FaStar className="why-icon" />
            <h3>Trusted & Rated Profiles</h3>
            <p>View worker ratings, reviews, and past work</p>
          </div>
          <div className="why-card">
            <FaBriefcase className="why-icon" />
            <h3>Portfolio Tools</h3>
            <p>Upload samples, get endorsements, and stand out</p>
          </div>
          <div className="why-card">
            <FaShieldAlt className="why-icon" />
            <h3>Verified & Safe</h3>
            <p>Every user is vetted for a secure experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
