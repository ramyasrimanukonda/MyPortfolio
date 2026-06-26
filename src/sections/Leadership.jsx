import React from 'react';

function Leadership() {
  const activities = [
    {
      role: "Founder & Operator",
      organization: "Cotton & Crumbs Food Venture",
      location: "Bhimavaram, India",
      duration: "March 2026",
      summary: "Managed business logistics, creative branding, and public-facing operations for a specialized student culinary stall at SVECW.",
      bullets: [
        "Handled menu pricing structures, budget planning, and localized inventory coordination.",
        "Designed promotional items including custom coupons, visual posters, and display menus.",
        "Cultivated active team communication and high-quality customer relation touchpoints under fast-paced stall conditions.",
        "Developed crucial real-world public engagement, sales promotion, and entrepreneurial skills."
      ],
      tags: ["Entrepreneurship", "Graphic Design", "Team Management"]
    },
    {
      role: "Technical Presenter",
      organization: "Poster Presentation, SVECW",
      location: "Bhimavaram, India",
      duration: "2024",
      summary: "Researched, designed, and presented an advanced technical poster layout on emerging tech concepts to faculty and peer groups.",
      bullets: [
        "Conducted structured domain analysis on 'Dual Reality' systems and interactive paradigms.",
        "Translated intricate software ideas into high-impact, scannable infographics and slide flows.",
        "Delivered clear public speaking briefs answering real-time technical questions from evaluators.",
        "Promoted technical engagement and collaborative knowledge sharing across college departments."
      ],
      tags: ["Public Speaking", "Technical Research", "Visual Communication"]
    }
  ];

  return (
    <section id="leadership" style={{ background: 'var(--bg-secondary)' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '45px', color: 'var(--text-main)', fontWeight: '700', textAlign: 'center' }}>
        Leadership & Extracurricular
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px' }}>
        {activities.map((item, index) => (
          <div key={index} style={{
            background: 'var(--bg-primary)',
            padding: '35px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              {/* Header block with icon, titles, and timestamp pill */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  {/* Circular Avatar Graphic */}
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--accent)'
                  }}>
                    {index === 0 ? "🍩" : "📊"}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: '#a5b4fc', fontWeight: '700' }}>{item.role}</h3>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: '600', marginTop: '2px' }}>{item.organization}</h4>
                  </div>
                </div>
                {/* Duration Pill */}
                <span style={{
                  background: 'rgba(165, 180, 252, 0.1)', color: '#a5b4fc', padding: '6px 12px',
                  borderRadius: '20px', fontSize: '0.8rem', fontFamily: 'monospace', fontWeight: '600', whiteSpace: 'nowrap'
                }}>
                  {item.duration}
                </span>
              </div>

              {/* Sub-Metadata Row */}
              <div style={{ display: 'flex', gap: '20px', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>📍 {item.location}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>📅 {item.duration}</div>
              </div>

              {/* Core Intro Summary Paragraph */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                {item.summary}
              </p>

              {/* Blue Arrow Bullets List matching image_cab647.png */}
              <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                {item.bullets.map((bullet, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '10px', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.8rem', marginTop: '2px' }}>▶</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pill Tags Row at bottom */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {item.tags.map((tag, i) => (
                <span key={i} style={{
                  background: 'rgba(255,255,255,0.03)', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.08)',
                  padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '500'
                }}>
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Leadership;
