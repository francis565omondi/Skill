// src/pages/Home.js
import React from 'react';
import JobCategories from '../components/JobCategories';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
    <section className="home-section" id="home">
      <div className="content">
        <h1>Welcome to SkillConnect</h1>
        <p>Connecting skilled workers with the right job opportunities.</p>
        <a href="#jobs" className="btn-explore">Explore Jobs</a>
      </div>
    </section>
    <JobCategories/>
    <HowItWorks/>
    <WhyChooseUs/>
    <Testimonials/>
    <Newsletter/>
    </>
  );
};

export default Home;
