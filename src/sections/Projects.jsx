import React from 'react';

function Projects() {
  const projectList = [
    {
      title: "Notifly: Campus Notification System",
      description: "Engineered a bidirectional, secure, targeted campus platform with real-time data syncing using Google Firebase. Developed an admin dashboard featuring rich-text circular editing, PDF uploads, and dynamic CSV export options.",
      tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Google Firebase", "EmailJS"],
      github: "https://github.com/ramyasrimanukonda"
    },
    
    {
      title: "Algo Visualizer: Pathfinding Tool",
      description: "Implemented Dijkstra's Algorithm to find and visualize the shortest path between nodes in real-time. Built a grid manipulation system with weighted nodes and obstacles dynamically.",
      tags: ["JavaScript", "Algorithms (DSA)", "DOM Optimization", "CSS Grid"],
      github: "https://github.com/ramyasrimanukonda"
    },
    {
      title: "Personal Portfolio Ecosystem",
      description: "A unique, job-ready personal portfolio built using React to learn production-level state structures, dynamic component mapping, and responsive modular code styling.",
      tags: ["React.js", "Vite", "Component Architecture", "Modern CSS"],
      github: "https://github.com/ramyasrimanukonda"
    }
  ];

  return (
    <section id="projects">
      <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Featured Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
        {projectList.map((project, index) => (
          <div key={index} style={{
            background: 'var(--bg-secondary)', padding: '30px', borderRadius: '8px',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--text-main)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px', fontSize: '0.95rem' }}>
                {project.description}
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', color: 'var(--accent)', background: 'rgba(56, 189, 248, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', fontSize: '0.9rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;