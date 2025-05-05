import React from 'react';
import WhatWeOffer from '../components/WhatWeOffer';
import WhyChoose from '../components/WhyChoose';
import WhoItIsFor from '../components/WhoIsItFor';
import OurImpact from '../components/OurImpact';
import JoinCTA from '../components/JoinCTA';

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-box">
          <h2>About SkillConnect</h2>
          <h3>Connecting Local Skills to Real Opportunities</h3>
          <p>
            SkillConnect is more than just a job platform — it's a movement to empower skilled workers and local businesses by building meaningful, trusted connections. 
            Whether you're a professional cleaner, plumber, electrician, tailor, or driver, SkillConnect gives you the tools to grow your craft, gain visibility, and get hired faster.
          </p>

          <div className="vision-mission-container">
            <div className="vision-mission-card">
              <span className="icon">🌍</span>
              <h4>Our Vision</h4>
              <p>
                To become Africa's most trusted digital bridge between talent and opportunity — where every skill counts, every job matters, and every community thrives.
              </p>
            </div>

            <div className="vision-mission-card">
              <span className="icon">🚀</span>
              <h4>Our Mission</h4>
              <p>
                To empower skilled workers and small businesses by making job access smarter, faster, and more community-driven through a digital-first platform.
              </p>
            </div>
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
