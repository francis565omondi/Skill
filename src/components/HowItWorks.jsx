import React from 'react';
import { FaUserPlus, FaSearch, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    icon: <FaUserPlus />,
    title: 'Create an Account',
    description: 'Sign up as a job seeker or recruiter to get started.',
    linkText: 'Sign Up',
    linkUrl: '/signup',
  },
  {
    id: 2,
    icon: <FaSearch />,
    title: 'Browse Jobs or Talents',
    description: 'Search for jobs or find skilled professionals easily.',
    linkText: 'Explore Now',
    linkUrl: '/jobs',
  },
  {
    id: 3,
    icon: <FaHandshake />,
    title: 'Connect and Work',
    description: 'Apply for jobs or hire directly through the platform.',
    linkText: 'Get Started',
    linkUrl: '/contact',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <p className="how-it-works-subtitle">Simple steps to find jobs or hire skilled workers</p>
      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {step.linkText && step.linkUrl && (
              <a href={step.linkUrl} className="step-link">
                {step.linkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
