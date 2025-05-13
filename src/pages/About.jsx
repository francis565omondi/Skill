import React from 'react';
import WhatWeOffer from '../components/WhatWeOffer';
import WhyChoose from '../components/WhyChoose';
import WhoItIsFor from '../components/WhoIsItFor';
import OurImpact from '../components/OurImpact';
import JoinCTA from '../components/JoinCTA';

const About = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1>About SkillConnect</h1>
            <p>
              Connecting Local Skills to Real Opportunities. SkillConnect is more than just a job platform —
              it's a movement to empower skilled workers and local businesses by building meaningful, trusted connections.
              Whether you're a professional cleaner, plumber, electrician, tailor, or driver, SkillConnect gives you the tools
              to grow your craft, gain visibility, and get hired faster.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <div className="mv-wrapper">
          <div className="mv-card vision">
            <span role="img" aria-label="globe">🌍</span>
            <h2>Our Vision</h2>
            <p>
              To become Africa's most trusted digital bridge between talent and opportunity — 
              where every skill counts, every job matters, and every community thrives.
            </p>
          </div>
          <div className="mv-card mission">
            <span role="img" aria-label="rocket">🚀</span>
            <h2>Our Mission</h2>
            <p>
              To empower skilled workers and small businesses by making job access smarter, 
              faster, and more community-driven through a digital-first platform.
            </p>
          </div>
        </div>
      </section>
      <WhatWeOffer/>
      <WhyChoose/>
      <WhoItIsFor/>
      <OurImpact/>
      <JoinCTA/>

      <div className="about-skillconnect-wrapper">
      </div>
    </>
  );
};

export default About;