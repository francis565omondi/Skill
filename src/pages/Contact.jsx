import React from 'react';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-subtext">
          We'd love to hear from you — whether you're a skilled worker, a local employer, or just curious about SkillConnect.
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><FaPhoneAlt className="icon" /> +254 768 287 564</p>
            <p><FaEnvelope className="icon" /> support@skillconnect.africa</p>
            <p><FaMapMarkerAlt className="icon" /> 40609, Usenge, Kenya</p>

            <div className="contact-socials">
              <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <h3>Send a Message</h3>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
