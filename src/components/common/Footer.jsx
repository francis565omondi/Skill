import React from 'react';
 // Import the custom CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>SkillConnect</h3>
            <p>Connecting talented workers with the right opportunities in your local community.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>123 Market St, Suite 456</li>
                <li>San Francisco, CA 94103</li>
                <li>(123) 456-7890</li>
                <li>info@skillconnect.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Follow us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.tiktok.com" className="social-icon tiktok" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.youtube.com" className="social-icon youtube" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 SkillConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
