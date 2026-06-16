import React from 'react';
import { Link } from 'react-scroll';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container container">
        <div className="footer-brand">
          <Link to="home" smooth={true} duration={500} className="footer-logo">
            Roshan<span>.dev</span>
          </Link>
          <p className="footer-tagline">
            Designing and coding responsive, high-performance cross-platform software.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul className="footer-nav">
            <li>
              <Link to="home" smooth={true} duration={500} offset={-80}>Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-80}>About</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-80}>Projects</Link>
            </li>
            <li>
              <Link to="timeline" smooth={true} duration={500} offset={-80}>Timeline</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-80}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Roshan Bishwas. All rights reserved.
          </p>
          <p className="tech-stack-info">
            Built with <FaHeart className="heart-icon" /> using React &amp; Vanilla CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
