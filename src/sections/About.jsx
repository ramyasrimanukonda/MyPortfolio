import React from 'react';

function About() {
  const coreLanguages = ["Java", "JavaScript (ES6+)", "Python (Basic)"];
  const webAndTools = ["React.js", "HTML5 & CSS3", "Google Firebase", "Git & GitHub", "VS Code"];
  const coreSubjects = ["Object-Oriented Programming (OOPS) in Java", "Operating Systems (OS)", "Database Management Systems (DBMS)"];
  
  const codingProfiles = [
    { name: "LeetCode", url: "https://leetcode.com/Ramya_Sri" },
    { name: "Codeforces", url: "https://codeforces.com/profile/Manukonda_Ramya_Sri" },
    { name: "CodeChef", url: "https://www.codechef.com/users/Manukonda_Ramya_Sri" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/Ramya_Sri_Manukonda" }
  ];

  const educationTimeline = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Shri Vishnu Engineering College for Women, Bhimavaram",
      duration: "2024 – Present",
      grade: "CGPA: 9.72"
    },
    {
      degree: "Intermediate (State Board)",
      institution: "Narayana Junior College, Vijayawada",
      duration: "2022 – 2024",
      grade: "Percentage: 98.1%"
    },
    {
      degree: "SSC (Board of Secondary Education)",
      institution: "Sai Vikas Educational Institutions, Chilakaluripet",
      duration: "Passed 2022",
      grade: "Percentage: 96.33%"
    }
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--text-main)', fontWeight: '700' }}>
        About Me & Education
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '50px', alignItems: 'start' }}>
        {/* Left Column: Personal Narrative, Tech Matrix, & Academic Coursework */}
        <div>
          <p style={{ color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '20px', fontSize: '1.1rem' }}>
            Hello! I am an engineering student driven by a deep interest in writing clean, elegant, and production-ready code. My technical journey spans building feature-rich applications in React and solving complex algorithmic challenges.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '30px', fontSize: '1.05rem' }}>
            I enjoy transforming logical problems into fully functional front-end realities, specializing in creating interactive data visualizers and real-time syncing platforms that optimize user interactions.
          </p>
          
          {/* Coding Profile Badges */}
          <h4 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--text-main)', fontWeight: '600' }}>
            Competitive Coding Profiles:
          </h4>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {codingProfiles.map((profile, index) => (
              <a 
                key={index} 
                href={profile.url} 
                target="_blank" 
                rel="noreferrer" 
                style={{
                  padding: '8px 14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.2s'
                }}
              >
                {profile.name} ↗
              </a>
            ))}
          </div>

          {/* Quick Skill & Subject Matrices */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '30px' }}>
            <div>
              <h5 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Languages</h5>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {coreLanguages.map((lang, idx) => (
                  <li key={idx} style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '6px' }}>▹ {lang}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Frameworks & Tools</h5>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {webAndTools.map((tool, idx) => (
                  <li key={idx} style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '6px' }}>▹ {tool}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core CS Coursework Sub-Section */}
          <div>
            <h5 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Core CS Concepts</h5>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '6px' }}>
              {coreSubjects.map((subject, idx) => (
                <li key={idx} style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>▹ {subject}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Academic Report Timeline Card Stack */}
        <div style={{ background: 'var(--bg-primary)', padding: '35px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'var(--accent)', fontFamily: 'monospace' }}>
            // Academic Performance
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {educationTimeline.map((edu, index) => (
              <div 
                key={index} 
                style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  borderLeft: '2px solid rgba(56, 189, 248, 0.3)'
                }}
              >
                {/* Node indicator point */}
                <div style={{
                  position: 'absolute', left: '-6px', top: '4px', width: '10px', height: '10px',
                  borderRadius: '50%', background: 'var(--accent)'
                }}></div>
                
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: '600', marginBottom: '4px' }}>
                  {edu.degree}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {edu.institution}
                </p>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>{edu.duration}</span>
                  <span style={{ color: 'var(--accent)', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;