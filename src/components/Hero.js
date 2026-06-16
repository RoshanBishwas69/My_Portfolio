import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaEnvelope, FaCode, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-badge"><FaCode /> Welcome to my space</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="highlight-text">Roshan Bishwas</span>
          </h1>
          
          <h2 className="hero-subtitle">
            .NET / C# Developer & Full-Stack Engineer
          </h2>
          
          <p className="hero-description">
            I build high-performance cross-platform apps, backend services, and interactive web experiences. Specialized in .NET MAUI, ASP.NET Core, and React.js.
          </p>

          <div className="hero-tech-tags">
            <span className="tech-tag">C#</span>
            <span className="tech-tag">.NET Core</span>
            <span className="tech-tag">.NET MAUI</span>
            <span className="tech-tag">React.js</span>
            <span className="tech-tag">SQL</span>
          </div>

          <div className="hero-ctas">
            <Link to="projects" smooth={true} duration={500} offset={-80} className="btn-primary">
              View Work <FaArrowRight />
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80} className="btn-secondary">
              Let's Connect
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/RoshanBishwas69" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:roshanbishwas69@gmail.com" className="social-icon" title="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-frame">
            <div className="glowing-border"></div>
            <img 
              src={`${process.env.PUBLIC_URL}/profile_avatar.png`} 
              alt="Roshan Bishwas" 
              className="avatar-image" 
            />
          </div>
        </div>
      </div>
      
      {/* Dynamic scrolling indicator */}
      <div className="scroll-indicator">
        <Link to="about" smooth={true} duration={500} offset={-80} className="mouse-wheel">
          <span className="wheel"></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
