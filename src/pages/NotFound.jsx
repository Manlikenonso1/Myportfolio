import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fu').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      <section id="error-section" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '220px var(--px) 140px', background: 'var(--bg)', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '100px', fontWeight: 700, color: 'var(--white)', lineHeight: 1, marginBottom: '24px' }}>404</h1>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, color: '#cda8e5', marginBottom: '24px', letterSpacing: '-1px' }}>Oops, Page Not Found</h2>
        <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 40px' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back to where you need to be.
        </p>
        <Link to="/" className="btn-primary" style={{ padding: '16px 36px', fontSize: '16px', borderRadius: '8px' }}>Back To Homepage</Link>
      </section>
    </div>
  );
}
