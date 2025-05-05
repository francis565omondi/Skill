import React from 'react';

import { FaUserPlus } from 'react-icons/fa';

const JoinCTA = () => {
  return (
    <section className="join-cta-section">
      <div className="join-cta-container">
        <FaUserPlus className="join-cta-icon" />
        <h2>Join SkillConnect Today</h2>
        <p>Create your profile. Post your job. Find work or talent that fits.</p>
        <button className="join-cta-button">Get Started</button>
        <small className="join-tagline">Because real change starts with connection.</small>
      </div>
    </section>
  );
};

export default JoinCTA;
