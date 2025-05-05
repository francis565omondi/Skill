import React from 'react';


const WhatWeOffer = () => {
  return (
    <section className="offer-section">
      <div className="offer-container">
        <h2 className="offer-heading">What We Offer</h2>
        <div className="offer-grid">

          <div className="offer-card">
            <div className="offer-icon">👷‍♂️</div>
            <h3>For Workers</h3>
            <p>
              Build your profile, showcase your skills, and connect with job opportunities near you — no middlemen, no delays.
            </p>
          </div>

          <div className="offer-card">
            <div className="offer-icon">💼</div>
            <h3>For Employers & Clients</h3>
            <p>
              Post jobs, browse qualified professionals, and hire with confidence from a pool of verified, rated talent.
            </p>
          </div>

          <div className="offer-card">
            <div className="offer-icon">⚡</div>
            <h3>Smart Matching</h3>
            <p>
              Our system connects the right job to the right talent using skills, ratings, and location — all in real-time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
