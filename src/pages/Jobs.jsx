import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import JobCategories from '../components/JobCategories';
import JobLists from '../components/JobLists';

function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content glass-effect">
            <h1 className="hero-title typing-text">Land Your Dream Job Today</h1>
            <p className="hero-subtitle">
              Discover thousands of job opportunities from top companies, tailored to your skills and interests.
            </p>
            <div className="hero-search-wrapper">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="jobs-categories">
        <div className="jobs-categories-content">
          <h2>Explore Job Categories</h2>
          <p>Find jobs that match your skills and interests.</p>
          <JobCategories setSelectedCategory={setSelectedCategory} />
        </div>
      </section>

      {/* Filters and Listings Section */}
      <section className="jobs-main">
        <div className="jobs-main-content">
          <aside className="jobs-filters">
            <h3>Filter Jobs</h3>
            <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </aside>
          <div className="jobs-listings">
            <h3>Available Jobs</h3>
            <JobLists searchTerm={searchTerm} selectedCategory={selectedCategory} />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="jobs-cta">
        <div className="jobs-cta-content">
          <h2>Ready to Take the Next Step?</h2>
          <p>Create your profile and start applying in minutes.</p>
          <Link to="/signup">
            <button className="register-btn">Get Started Now</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Jobs;
