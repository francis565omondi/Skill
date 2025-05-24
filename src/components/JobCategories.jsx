import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaBroom, FaTools, FaCar, FaBolt, FaBriefcase
} from 'react-icons/fa';

const jobCategories = [
  {
    title: 'Cleaning',
    description: 'Maintain homes, offices, and commercial spaces.',
    jobs: 24,
    icon: <FaBroom />,
    route: '/jobs/cleaning'
  },
  {
    title: 'Plumbing',
    description: 'Install and repair water systems and fixtures.',
    jobs: 18,
    icon: <FaTools />,
    route: '/jobs/plumbing'
  },
  {
    title: 'Driving',
    description: 'Transport goods or passengers safely.',
    jobs: 32,
    icon: <FaCar />,
    route: '/jobs/driving'
  },
  {
    title: 'Electrical',
    description: 'Handle wiring, lighting, and electrical repairs.',
    jobs: 15,
    icon: <FaBolt />,
    route: '/jobs/electrical'
  }
];

const JobCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="job-categories">
      <h2 className="job-title">Explore Job Categories</h2>
      <div className="category-grid">
        {jobCategories.map((category, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => navigate(category.route)}
          >
            <div className="icon-wrapper">{category.icon}</div>
            <h3>{category.title}</h3>
            <p className="description">{category.description}</p>
            <div className="job-count">
              <FaBriefcase className="icon" /> {category.jobs}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategories;
