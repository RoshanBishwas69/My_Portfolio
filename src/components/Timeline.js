import React from 'react';
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      date: 'December 2025',
      title: 'Mobile & Desktop App Specialization',
      subtitle: '.NET MAUI Development Workshop',
      description: 'Learned cross-platform app patterns by building native-rendered mobile and desktop apps. Implemented customized layouts, styling overrides, navigation shells, and responsive client interfaces.',
      icon: <FaLaptopCode />,
      tag: 'Specialization'
    },
    {
      id: 2,
      date: 'November 2025',
      title: 'Backend Systems & API Integration',
      subtitle: 'ASP.NET Core & Entity Framework Training',
      description: 'Focused on creating scalable APIs, relational data modeling with EF Core, asynchronous database transactions in SQL Server, and implementing authentication protocols and dependency injection structures.',
      icon: <FaCode />,
      tag: 'Backend Core'
    },
    {
      id: 3,
      date: 'April 2025',
      title: 'Collaborative Development & Versioning',
      subtitle: 'Git & GitHub Workflows',
      description: 'Mastered git operations, merge request workflows, code reviews, and remote branch management while prototyping web landing pages and interactive forms.',
      icon: <FaLaptopCode />,
      tag: 'Workflow'
    },
    {
      id: 4,
      date: '2024 - Present',
      title: 'Software Engineering Journey',
      subtitle: 'Academic Foundations & Practical Coding',
      description: 'Engaged in deep study of Object-Oriented Programming (OOP) architectures, algorithm structures, database designs, and full-stack web applications.',
      icon: <FaGraduationCap />,
      tag: 'Academic'
    }
  ];

  return (
    <section id="timeline" className="section">
      <div className="timeline-container container">
        <h2 className="section-title">My Journey</h2>
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, idx) => (
            <div key={item.id} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot-container">
                <div className="timeline-dot">
                  {item.icon}
                </div>
              </div>
              
              <div className="timeline-card glass-card">
                <span className="timeline-date">{item.date}</span>
                <span className="timeline-tag">{item.tag}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
