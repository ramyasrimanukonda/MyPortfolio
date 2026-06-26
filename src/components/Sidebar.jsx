import React from 'react';

function Sidebar() {
  return (
    <aside style={{
      position: 'fixed',
      top: 0,
      left: 'max(0px, calc((100vw - 1200px) / 2))', /* Centers sidebar perfectly on big screens */
      width: '40%',
      height: '100vh',
      padding: '100px 40px 100px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'transparent',
      zIndex: 10
    }} className="portfolio-sidebar">
      
      {/* Top Block: Bio Metadata */}
      <div>
        <h1 style={{ 
          fontSize: '2.8rem', 
          fontWeight: '800', 
          letterSpacing: '-1px', 
          marginBottom: '8px', 
          color: 'var(--text-main)' 
        }}>
          Manukonda Ramya Sri
        </h1>
        <h2 style={{ 
          fontSize: '1.15rem', 
          fontWeight: '500', 
          color: 'var(--text-main)', 
          marginBottom: '20px',
          letterSpacing: '-0.2px'
        }}>
          Frontend Developer & CSE Student
        </h2>
        <p style={{ 
          color: 'var(--text-muted)', 
          lineHeight: '1.6', 
          fontSize: '0.95rem', 
          maxWidth: '300px' 
        }}>
          Building responsive web systems, performance-tuned tools, and interactive algorithmic visualizations.
        </p>

        {/* Mid Block: Premium Section Nav Indicators */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '60px' }}>
          <a href="#about" style={{ 
            color: 'var(--text-main)', 
            textDecoration: 'none', 
            fontSize: '0.75rem', 
            fontWeight: '700', 
            letterSpacing: '1.5px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px' 
          }}>
            <span style={{ width: '40px', height: '1px', background: 'var(--text-main)', transition: '0.3s' }}></span> ABOUT
          </a>
          <a href="#projects" style={{ 
            color: 'var(--text-muted)', 
            textDecoration: 'none', 
            fontSize: '0.75rem', 
            fontWeight: '700', 
            letterSpacing: '1.5px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px' 
          }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--text-muted)', transition: '0.3s' }}></span> PROJECTS
          </a>
          <a href="#credentials" style={{ 
            color: 'var(--text-muted)', 
            textDecoration: 'none', 
            fontSize: '0.75rem', 
            fontWeight: '700', 
            letterSpacing: '1.5px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px' 
          }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--text-muted)', transition: '0.3s' }}></span> CREDENTIALS
          </a>
          <a href="#contact" style={{ 
            color: 'var(--text-muted)', 
            textDecoration: 'none', 
            fontSize: '0.75rem', 
            fontWeight: '700', 
            letterSpacing: '1.5px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px' 
          }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--text-muted)', transition: '0.3s' }}></span> CONTACT
          </a>
        </nav>
      </div>

      {/* Bottom Block: Access Hub */}
      <div>
        <a href="/Resume_MRS_8.pdf" download="Resume_MRS_8.pdf" style={{
          padding: '10px 20px', 
          border: '1px solid var(--accent)', 
          color: 'var(--accent)',
          textDecoration: 'none', 
          borderRadius: '4px', 
          fontWeight: '600', 
          display: 'inline-block',
          fontSize: '0.8rem', 
          marginBottom: '30px', 
          letterSpacing: '1px',
          background: 'transparent',
          transition: 'all 0.2s'
        }}>
          Download Resume (PDF)
        </a>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="https://github.com/ramyasrimanukonda" target="_blank" rel="noreferrer" style={{ 
            color: 'var(--text-main)', 
            textDecoration: 'none', 
            fontSize: '0.85rem', 
            fontWeight: '500',
            fontFamily: 'monospace'
          }}>
            GitHub ↗
          </a>
          <a href="https://linkedin.com/in/ramya-sri-manukonda/" target="_blank" rel="noreferrer" style={{ 
            color: 'var(--text-main)', 
            textDecoration: 'none', 
            fontSize: '0.85rem', 
            fontWeight: '500',
            fontFamily: 'monospace'
          }}>
            LinkedIn ↗
          </a>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;