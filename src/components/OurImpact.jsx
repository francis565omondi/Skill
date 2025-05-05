import React from 'react';

import { FaChartLine, FaHandsHelping, FaUsers } from 'react-icons/fa';

const OurImpact = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <h2 className="impact-heading">Our Impact</h2>
        <p className="impact-description">
          We're helping to reduce unemployment, raise income levels, and strengthen local economies — one skill at a time.
        </p>
        <div className="impact-highlights">
          <div className="impact-card">
            <FaChartLine className="impact-icon" />
            <h3>Boosting Local Economies</h3>
            <p>By connecting skilled workers with job opportunities, we empower communities and help stimulate local growth.</p>
          </div>
          <div className="impact-card">
            <FaUsers className="impact-icon" />
            <h3>Creating Job Opportunities</h3>
            <p>We’re reducing unemployment by helping workers find jobs that match their skills and businesses find qualified talent.</p>
          </div>
          <div className="impact-card">
            <FaHandsHelping className="impact-icon" />
            <h3>Empowering Workers</h3>
            <p>SkillConnect believes dignity in work begins with opportunity — we provide workers with tools to succeed and grow.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
