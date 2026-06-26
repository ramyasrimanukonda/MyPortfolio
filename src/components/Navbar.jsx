import React from 'react';

function Navbar() {
  return (
    <nav style={{
      position: 'fixed', 
      top: 0, 
      left: 0,
      width: '100%', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '20px 10%', 
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>Portfolio.</div>
      <div style={{ display: 'flex', gap: '30px' }}>
  <a href="#home" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Home</a>
  <a href="#about" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>About</a>
  <a href="#projects" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Projects</a>
  <a href="#credentials" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Credentials</a>
  <a href="#leadership" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Leadership</a> {/* Added Link */}
  <a href="#contact" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
</div>
    </nav>
  );
}

export default Navbar;