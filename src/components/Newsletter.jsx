import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to handle the email submission
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>Never Miss an Opportunity</h2>
        <p>Subscribe to our newsletter to receive weekly job alerts and helpful career tips</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="email-input"
          />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
        <p className="privacy">We respect your privacy and will never share your information</p>
      </div>
    </section>
  );
};

export default Newsletter;
