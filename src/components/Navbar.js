import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="home" smooth={true} duration={500} className="navbar-logo" onClick={closeMenu}>
          Roshan<span>.dev</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="home" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="timeline" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMenu}>
              Timeline
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* GitHub Button */}
        <div className="nav-actions">
          <a
            href="https://github.com/RoshanBishwas69"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-github"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <Link to="home" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="about" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="timeline" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMenu}>
              Timeline
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="mobile-nav-item" style={{ marginTop: '2rem' }}>
            <a
              href="https://github.com/RoshanBishwas69"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-github"
              style={{ width: '80%', display: 'flex', justifyContent: 'center' }}
            >
              <FaGithub style={{ marginRight: '8px' }} /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
