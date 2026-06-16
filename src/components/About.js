import React from 'react';
import { FaServer, FaLaptopCode, FaMobileAlt, FaDatabase, FaGitAlt, FaTools } from 'react-icons/fa';
import { SiDotnet, SiReact, SiJavascript, SiHtml5, SiCss } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import './About.css';

const About = () => {
  const skills = [
    {
      category: 'Backend Development',
      icon: <FaServer className="category-icon" />,
      items: [
        { name: 'C# Programming', icon: <TbBrandCSharp /> },
        { name: '.NET Core / ASP.NET', icon: <SiDotnet /> },
        { name: 'Entity Framework Core', icon: <FaDatabase /> },
        { name: 'RESTful API Services', icon: <FaServer /> },
      ],
    },
    {
      category: 'Mobile & Desktop',
      icon: <FaMobileAlt className="category-icon" />,
      items: [
        { name: '.NET MAUI', icon: <SiDotnet /> },
        { name: 'WPF / Windows Forms', icon: <FaLaptopCode /> },
        { name: 'Cross-Platform App UI', icon: <FaMobileAlt /> },
        { name: 'Custom Styles & Layouts', icon: <SiCss /> },
      ],
    },
    {
      category: 'Frontend Web',
      icon: <FaLaptopCode className="category-icon" />,
      items: [
        { name: 'React.js', icon: <SiReact /> },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
        { name: 'HTML5 & CSS3', icon: <SiHtml5 /> },
        { name: 'Responsive UI Design', icon: <SiCss /> },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: <FaTools className="category-icon" />,
      items: [
        { name: 'Git Version Control', icon: <FaGitAlt /> },
        { name: 'GitHub Collaboration', icon: <FaGitAlt /> },
        { name: 'Visual Studio / Code', icon: <FaLaptopCode /> },
        { name: 'JSON & API Testing', icon: <FaTools /> },
      ],
    },
  ];

  return (
    <section id="about" className="section">
      <div className="about-container container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-bio glass-card">
            <h3>My Background</h3>
            <p>
              I am a passionate Software Engineer focused on building robust applications. My experience spans across desktop, mobile, and web environments, allowing me to build solutions that operate seamlessly on any platform.
            </p>
            <p>
              A major portion of my codebase consists of C# and .NET frameworks, which I leverage for backend system architecture, API services, and desktop/mobile client applications. On the frontend, I create responsive, interactive, and modular user interfaces with React.js and modern styling principles.
            </p>
            <p>
              I value writing readable, maintainable code, implementing object-oriented design patterns, and constantly learning new tools to improve my workflow.
            </p>
          </div>

          <div className="about-stats-grid">
            <div className="stat-card glass-card">
              <span className="stat-number">C#</span>
              <span className="stat-label">Core Language</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number">.NET</span>
              <span className="stat-label">Framework Focus</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number">MAUI</span>
              <span className="stat-label">Mobile & Desktop</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number">React</span>
              <span className="stat-label">Web Frontend</span>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Technical Expertise</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-card glass-card">
                <div className="skill-header">
                  {skillGroup.icon}
                  <h4>{skillGroup.category}</h4>
                </div>
                <ul className="skill-list">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li key={sIdx} className="skill-item">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
