import React from 'react';

import { FaUserCog, FaHome, FaTools } from 'react-icons/fa';

const WhoItIsFor = () => {
  return (
    <section className="who-section">
      <div className="who-container">
        <h2 className="who-heading">Who It's For</h2>
        <div className="who-grid">
          <div className="who-card">
            <FaUserCog className="who-icon" />
            <h3>Skilled Workers</h3>
            <p>Electricians, masons, plumbers, carpenters, mechanics, housekeepers, cooks, drivers, and more</p>
          </div>
          <div className="who-card">
            <FaHome className="who-icon" />
            <h3>Small Businesses & Households</h3>
            <p>Anyone looking for dependable, skilled help nearby</p>
          </div>
          <div className="who-card">
            <FaTools className="who-icon" />
            <h3>Service Providers</h3>
            <p>Professionals ready to offer their services to clients who need them</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItIsFor;
