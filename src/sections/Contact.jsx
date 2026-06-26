import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    alert("Thank you for reaching out! Your message was logged.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-primary)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: '50px',
        alignItems: 'center' /* Centers text vertically next to the form */
      }}>
        
        {/* Left Side: Clean Text and Social Icon Buttons */}
        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: 'var(--text-main)' }}>
            Let's Connect!
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '35px', maxWidth: '450px' }}>
            I'm always interested in new opportunities, technical internships, and exciting frontend projects. Whether you have an open role, a question about my projects, or just want to connect professionally, feel free to drop a message!
          </p>

          {/* Social Media Circular Links */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://github.com/ramyasrimanukonda" target="_blank" rel="noreferrer" style={{
              width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://linkedin.com/in/ramya-sri-manukonda/" target="_blank" rel="noreferrer" style={{
              width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:ramyasrimanukonda@gmail.com" style={{
              width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>

        {/* Right Side: Clean Contact Form Card */}
        <form onSubmit={handleSubmit} style={{
          background: 'var(--bg-secondary)', padding: '40px', borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', gap: '20px'
        }}>
          <div>
            <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: '600', marginBottom: '8px' }}>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required style={{
              width: '100%', padding: '14px 16px', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none'
            }} />
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: '600', marginBottom: '8px' }}>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required style={{
              width: '100%', padding: '14px 16px', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none'
            }} />
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: '600', marginBottom: '8px' }}>Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required style={{
              width: '100%', padding: '14px 16px', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none'
            }} />
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: '600', marginBottom: '8px' }}>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or just say hello!" rows="5" required style={{
              width: '100%', padding: '14px 16px', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none', resize: 'vertical'
            }}></textarea>
          </div>

          <button type="submit" style={{
            width: '100%', padding: '14px', background: 'var(--accent)', color: 'var(--bg-primary)',
            border: 'none', borderRadius: '6px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '10px'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            <span>Send Message</span>
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;