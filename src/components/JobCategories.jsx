import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaBroom, FaTools, FaCar, FaBolt, FaBaby, FaLeaf, FaBriefcase 
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
  },
  {
    title: 'Baby Sitting',
    description: 'Take care of children at home or events.',
    jobs: 10,
    icon: <FaBaby />,
    route: '/jobs/babysitting'
  },
  {
    title: 'Gardening',
    description: 'Beautify lawns and maintain plants and gardens.',
    jobs: 12,
    icon: <FaLeaf />,
    route: '/jobs/gardening'
  },
  {
    title: 'Remote Work',
    description: 'Work from anywhere on global tasks and projects.',
    jobs: 27,
    icon: <FaBriefcase />,
    route: '/jobs/remote'
  },
  {
    title: 'Translation',
    description: 'Translate documents or interpret across languages.',
    jobs: 14,
    icon: <FaTools />,
    route: '/jobs/translation'
  },
  {
    title: 'IT & Tech Support',
    description: 'Fix, support, or maintain global tech systems.',
    jobs: 22,
    icon: <FaBolt />,
    route: '/jobs/it'
  },
  {
    title: 'Logistics & Delivery',
    description: 'Coordinate or carry out deliveries worldwide.',
    jobs: 30,
    icon: <FaCar />,
    route: '/jobs/logistics'
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
              <FaBriefcase className="icon" /> {category.jobs} Jobs Available
            </div>
          </div>
        ))}
      </div>

      {/* Register Now CTA */}
      <div className="register-cta">
        <h3>Don't see your skill listed?</h3>
        <p>Join now and get discovered by employers looking for talent like yours.</p>
        <Link to="/signup">
          <button className="register-btn">Register Now</button>
        </Link>
      </div>
    </section>
  );
};

export default JobCategories;
