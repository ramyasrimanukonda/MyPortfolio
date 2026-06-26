import React from 'react';

function Credentials() {
  const hackathons = [
    { 
      title: "Winner — Failathon 2.0 Tournament", 
      organization: "Shri Vishnu Engineering College for Women", 
      year: "2025", 
      desc: "Secured top standing in the technical debugging and operational error-resolution challenge." 
    },
    { 
      title: "DigiPol Hackathon — Security Core", 
      organization: "Hyderabad Police Ecosystem Initiative", 
      year: "2026", 
      desc: "Selected to compete in resolving client-side 'Real-time phishing detection' validation challenges." 
    },
    { 
      title: "Amaravathi Quantum Valley Hackathon", 
      organization: "AQV Alternative Computing Forum", 
      year: "2024", 
      desc: "Collaborated on architectural logic and computational processing paths." 
    },
    { 
      title: "PIVOT Innovation Challenge", 
      organization: "SVECW Incubation Cell", 
      year: "2024", 
      desc: "Earned formal innovation certification for technical product prototyping and pitch execution." 
    }
  ];

  const technicalCertifications = [
    { title: "NPTEL: Introduction to Internet of Things", badge: "🌐", status: "Elite Certification" },
    { title: "Infosys Springboard: Programming in Python", badge: "🐍", status: "Core Evaluation Passed" },
    { title: "Google Cloud Boost Arcade Program", badge: "☁️", status: "Cloud Learning Milestones Completed" },
    { title: "GeeksforGeeks: Aptitude & Reasoning Masterclass", badge: "📊", status: "Analytical Skill Track Completion" },
    { title: "GDGOC SVECW: 3-Day Frontend Web Development", badge: "💻", status: "Hands-on UI Architecture Workshop" }
  ];

  return (
    <section id="credentials" style={{ background: 'var(--bg-primary)' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '45px', color: 'var(--text-main)', fontWeight: '700' }}>
        Participations & Credentials
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '50px', alignItems: 'start' }}>
        
        {/* Left Column: Internship Experience, Scholar Status, & Hackathons */}
        <div>
          {/* NEW: Generative AI Virtual Internship Spotlight Badge */}
          <div style={{ 
            background: 'rgba(168, 85, 247, 0.05)', /* Soft purple tint to differentiate it */
            border: '1px solid rgba(168, 85, 247, 0.2)', 
            padding: '20px', 
            borderRadius: '8px', 
            marginBottom: '25px' 
          }}>
            <h4 style={{ color: '#c084fc', fontSize: '0.85rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>
              // Technical Experience Milestone
            </h4>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>
              Virtual Intern — Generative AI Track
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Completed a structured simulation program focused on Generative AI paradigms. Explored foundational models, prompt engineering structures, and methods for integrating cognitive capabilities into application logic.
            </p>
          </div>

          {/* FFE Scholar Recognition */}
          <div style={{ 
            background: 'rgba(56, 189, 248, 0.05)', 
            border: '1px solid rgba(56, 189, 248, 0.2)', 
            padding: '20px', 
            borderRadius: '8px', 
            marginBottom: '35px' 
          }}>
            <h4 style={{ color: 'var(--accent)', fontSize: '0.85rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>
              // Selective Scholar Recognition
            </h4>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>
              FFE Scholar (Foundation for Excellence)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Selected into the elite national professional support network based on strict technical potential, academic consistency, and engineering merit tracking.
            </p>
          </div>

          <h3 style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '20px', fontFamily: 'monospace' }}>
            // Hackathons & Technical Competitions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {hackathons.map((item, index) => (
              <div key={index} style={{
                background: 'var(--bg-secondary)', padding: '20px', borderRadius: '6px',
                borderLeft: '4px solid var(--accent)', border: '1px solid rgba(255, 255, 255, 0.03)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: '600' }}>{item.title}</h4>
                  <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontFamily: 'monospace' }}>{item.year}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '4px' }}>{item.organization}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', opacity: '0.8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Verified Certifications Stack */}
        <div style={{ background: 'var(--bg-secondary)', padding: '35px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'var(--accent)', fontFamily: 'monospace' }}>
            // Validated Certifications
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {technicalCertifications.map((cert, index) => (
              <div 
                key={index} 
                style={{
                  background: 'var(--bg-primary)', 
                  padding: '16px 20px', 
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.03)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px'
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>{cert.badge}</span>
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: '600', marginBottom: '3px' }}>
                    {cert.title}
                  </h4>
                  <span style={{ 
                    color: 'var(--accent)', 
                    background: 'rgba(56, 189, 248, 0.08)', 
                    padding: '2px 6px', 
                    borderRadius: '4px', 
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    fontWeight: '600'
                  }}>
                    {cert.status}
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

export default Credentials;