import React from 'react';
import { FaUserPlus, FaSearch, FaHandshake } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: 'Sign Up & Create Profile',
      description:
        'Create an account for employers or recruiters to post jobs. Click below to register.',
      linkText: 'Register Now',
      linkUrl: '/register'
    },
    {
      icon: <FaSearch />,
      title: 'Search or Post Jobs',
      description:
        'Browse available jobs or post new opportunities for skilled workers.',
    },
    {
      icon: <FaHandshake />,
      title: 'Connect & Work!',
      description:
        'Connect with employers or workers, complete jobs, and build your reputation.',
    }
  ];

  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <p className="how-it-works-subtitle">Simple steps to find jobs or hire skilled workers</p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {step.linkText && (
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
