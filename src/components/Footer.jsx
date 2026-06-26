import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      padding: '30px 20px', 
      textAlign: 'center', 
      background: 'var(--bg-secondary)', 
      color: 'var(--text-muted)', 
      fontSize: '0.85rem',
      fontFamily: 'monospace',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <p style={{ marginBottom: '8px' }}>Designed & Built by Manukonda Ramya Sri[cite: 1]</p>
      <p style={{ color: 'rgba(148, 163, 184, 0.5)' }}>
        Powered by React.js & Vite • {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;