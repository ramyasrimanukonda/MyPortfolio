import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" style={{ padding: '80px 20px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '40px',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Left Content Side */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: '500', marginBottom: '10px' }}>
            Hello, I'm
          </p>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '700', 
            lineHeight: '1.2',
            marginBottom: '20px', 
            color: '#a5b4fc'
          }}>
            Manukonda Ramya Sri
          </h1>
          
          <p style={{ 
            color: 'var(--text-muted)', 
            marginBottom: '30px', 
            lineHeight: '1.6', 
            fontSize: '1.05rem'
          }}>
            Computer Science and Engineering student with a strong focus on algorithmic logic, real-time data integration, and responsive interface engineering. Backed by solid data structures foundations, academic consistency, and certified generative AI competencies, I specialize in architecting interactive web ecosystems and robust frontend automation modules.
          </p>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Bhimavaram, Andhra Pradesh, India</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 7013638643</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>ramyasrimanukonda@gmail.com</span>
            </div>
          </div>

          {/* Buttons/Links Layout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/ramyasrimanukonda" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://linkedin.com/in/ramya-sri-manukonda/" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://leetcode.com/u/RamyaSri_M_4236/" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold' }}>
                LC
              </a>
              <a href="https://www.salesforce.com/trailblazer/c4g0jz4djz3upqddsr" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold' }}>
                SF
              </a>
            </div>

            <a href="PASTE_YOUR_GOOGLE_DRIVE_URL_HERE" target="_blank" rel="noreferrer" style={{ padding: '10px 20px', background: '#a5b4fc', color: '#000', textDecoration: 'none', borderRadius: '4px', fontWeight: '600' }}>
              View Resume (PDF)
            </a>
          </div>
        </div>

        {/* Right Photo Side */}
        <div style={{ flex: '0.8', display: 'flex', justifyContent: 'center', minWidth: '280px' }}>
          <div style={{
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            border: '3px solid #a5b4fc',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            overflow: 'hidden'
          }}>
            <img 
              src="/My_Profile.jpeg" 
              alt="Manukonda Ramya Sri" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
