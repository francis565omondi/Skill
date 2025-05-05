import React from 'react';
import {
  FaThumbsUp,
  FaUserShield,
  FaBrain,
  FaUsers
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaThumbsUp />,
      title: 'Easy to Use',
      description: 'Simple interface designed for workers of all technical abilities.'
    },
    {
      icon: <FaUserShield />,
      title: 'Verified Employers',
      description: 'All employers are vetted to ensure security and legitimacy.'
    },
    {
      icon: <FaBrain />,
      title: 'Skills-Based Matching',
      description: 'Advanced algorithm matches workers with appropriate jobs.'
    },
    {
      icon: <FaUsers />,
      title: 'Community Driven',
      description: 'Built by and for local communities across the country.'
    }
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us</h2>
      <p className="section-subtitle">What makes SkillHub the best platform for skilled workers</p>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div className="reason-card" key={index}>
            <div className="reason-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
