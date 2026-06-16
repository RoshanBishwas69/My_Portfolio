import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Dotnet_Workshop7_MAUI_APP',
      category: 'dotnet',
      description: 'A cross-platform mobile and desktop application developed using .NET MAUI. Showcases custom style overrides, layout elements, and UI rendering optimized for Android, iOS, and Windows.',
      tech: ['.NET MAUI', 'C#', 'XAML', 'CSS'],
      github: 'https://github.com/RoshanBishwas69/Dotnet_Workshop7_MAUI_APP',
      type: 'Mobile & Desktop App',
      icon: <FaMobileAlt />
    },
    {
      id: 2,
      title: 'Dotnet_Workshop5 & 6',
      category: 'dotnet',
      description: 'Advanced backend console apps and Web API systems illustrating asynchronous programming, LINQ queries, database integrations using EF Core, and clean RESTful endpoint configurations.',
      tech: ['C#', '.NET Core', 'ASP.NET Web API', 'EF Core'],
      github: 'https://github.com/RoshanBishwas69/Dotnet_Workshop5',
      type: 'Backend REST API',
      icon: <FaCode />
    },
    {
      id: 3,
      title: 'workshop3-paas-demo',
      category: 'web',
      description: 'A responsive React landing page showcasing customized layouts and dynamic visual sections. Demonstrates component reusability, structural design patterns, and clean routing.',
      tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/RoshanBishwas69/workshop3-paas-demo',
      type: 'Web Application',
      icon: <FaLaptopCode />
    },
    {
      id: 4,
      title: 'Application-Development-Tasks',
      category: 'dotnet',
      description: 'A structural collection of dotnet application tasks demonstrating advanced C# language constructs, SOLID programming principles, unit testing tasks, and memory optimization.',
      tech: ['C#', '.NET CLI', 'XUnit Testing', 'OOP Design'],
      github: 'https://github.com/RoshanBishwas69/Application-Development-Tasks',
      type: 'Task Collections',
      icon: <FaCode />
    },
    {
      id: 5,
      title: 'DotnetWorkshop3 & 4',
      category: 'dotnet',
      description: 'Fundamental hands-on workshops in C# covering object-oriented design patterns, interface segregation, file handling streams, and event-driven architectures.',
      tech: ['C#', '.NET Framework', 'File Streams', 'Event Handling'],
      github: 'https://github.com/RoshanBishwas69/DotnetWorkshop3',
      type: 'C# Workshop Project',
      icon: <FaCode />
    },
    {
      id: 6,
      title: 'gitdemo',
      category: 'web',
      description: 'A web prototype showcasing frontend layouts, semantic HTML elements, and custom CSS setups, developed to demonstrate Git operations and versioning processes.',
      tech: ['HTML5', 'CSS3', 'Git', 'Vercel Deploy'],
      github: 'https://github.com/RoshanBishwas69/gitdemo',
      type: 'Frontend Demo',
      icon: <FaLaptopCode />
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="section">
      <div className="projects-container container">
        <h2 className="section-title">My Projects</h2>
        
        {/* Category Filters */}
        <div className="projects-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'dotnet' ? 'active' : ''}`}
            onClick={() => setFilter('dotnet')}
          >
            .NET / C#
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Frontend
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-header">
                <div className="project-icon-badge">
                  {project.icon}
                </div>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-tech-list">
                {project.tech.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tech-tag">{tag}</span>
                ))}
              </div>

              <div className="project-footer">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <FaGithub /> Code Repo <FaExternalLinkAlt className="external-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
