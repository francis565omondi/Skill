import React from 'react';

const Testimonial = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>What Our Users Say</h2>
        <p className="testimonial-subtitle">Success stories from workers and employers</p>

        <div className="testimonial-cards">
          {/* Testimonial 1 */}
          <div className="testimonial-card left">
            <div className="avatar">
              <img src="lucia_otieno.jpg" alt="Lucia Otieno" />
            </div>
            <div className="testimonial-content">
              <p className="name"><strong>Lucia Otieno</strong></p>
              <p className="role">House Cleaner</p>
              <p className="quote">
                "SkillConnect helped me find steady work and grow my business. It’s easy to use and the support is excellent!"
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card right">
            <div className="avatar">
              <img src="joseph_situma.jpg" alt="Joseph Situma" />
            </div>
            <div className="testimonial-content">
              <p className="name"><strong>Joseph Situma</strong></p>
              <p className="role">Business Owner</p>
              <p className="quote">
                "Finding skilled workers is now simple and fast. SkillConnect has made hiring easier and more efficient."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
