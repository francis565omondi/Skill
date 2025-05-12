import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Brief */}
        <div className="footer-top">
          <h3 className="footer-logo">SkillConnect</h3>
          <p className="footer-tagline">
            Bridging skilled talent with real opportunities.
          </p>
        </div>

        {/* Links & Socials */}
        <div className="footer-middle">
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 SkillConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
