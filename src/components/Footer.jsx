//import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__columns">
          <div className="footer__column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">For the Record</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Communities</h4>
            <ul>
              <li><a href="#">For Artists</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Vendors</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Web Player</a></li>
              <li><a href="#">Free Mobile App</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__social">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__language">
          <button>
            <i className="fas fa-globe"></i> English
          </button>
        </div>
        <div className="footer__legal">
          <ul>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">About Ads</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        <div className="footer__copyright">
          © 2025 Groovify
        </div>
      </div>
    </footer>
  );
};

export default Footer;
