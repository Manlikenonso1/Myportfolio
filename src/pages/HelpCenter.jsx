import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/sections/PageHeader';

export default function HelpCenter() {
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
      



{/* PAGE HEADER */}
<PageHeader title="Help Center" breadcrumbText="Help Center" />

{/* FAQ SECTION */}
<section id="faq">
  <div className="wrap faq-wrap">
    {/* General Faq */}
    <div className="faq-group fu d1">
      <div className="faq-group-title">General Faq</div>
      <div className="faq-list">
        <details className="faq-item">
          <summary>What services do you offer?</summary>
          <div className="faq-answer">I offer comprehensive digital product design services, specializing in Product Strategy, UI/UX Design, Design System creation, and interactive high-fidelity prototyping.</div>
        </details>
        <details className="faq-item">
          <summary>How can I get started on a project?</summary>
          <div className="faq-answer">Simply reach out via the contact form below or drop me an email. I will schedule an initial 30-minute alignment consultation to discuss your vision, scope, timeline, and deliverables.</div>
        </details>
        <details className="faq-item">
          <summary>How do you approach UI/UX design work?</summary>
          <div className="faq-answer">My approach is highly user-centric and data-driven. I audit existing conversion funnels, map out user personas, refine information architecture, and iteratively build prototypes to ensure design fits your user's mental models perfectly.</div>
        </details>
        <details className="faq-item">
          <summary>Do you involve me closely during the design process?</summary>
          <div className="faq-answer">Yes, absolutely. I believe in transparent and collaborative partnerships. I conduct weekly milestone check-ins, share ongoing work via Figma view-links, and require your input during core feedback cycles.</div>
        </details>
        <details className="faq-item">
          <summary>How long does a typical project take?</summary>
          <div className="faq-answer">Project timelines vary depending on the scope of deliverables. A complete SaaS or mobile application redesign typically takes between 4 to 8 weeks, including user journey audits and handoff setups.</div>
        </details>
        <details className="faq-item">
          <summary>What tools do you use for design?</summary>
          <div className="faq-answer">I primarily design in Figma, ensuring all assets are fully responsive, organized into variables, and built using nested auto-layouts. I also utilize Loom for async reviews, and Slack or Teams for ongoing messaging.</div>
        </details>
      </div>
    </div>


    {/* Process */}
    <div className="faq-group fu d3">
      <div className="faq-group-title">Process</div>
      <div className="faq-list">
        <details className="faq-item">
          <summary>What is your design process?</summary>
          <div className="faq-answer">My workflow follows four clear phases: Discovery & Heuristics, Layout Information Architecture, High-Fidelity UI Execution, and final Interactive Handoff accompanied by documentation.</div>
        </details>
        <details className="faq-item">
          <summary>How involved will I be in the design process?</summary>
          <div className="faq-answer">You are a vital partner. I require your insights during the initial alignment phase and your review during weekly milestone sign-offs. Your feedback directly shapes the layout.</div>
        </details>
        <details className="faq-item">
          <summary>Do you conduct user research?</summary>
          <div className="faq-answer">Yes, I conduct competitor audits, survey target demographics, and test interactive prototypes with real users to ensure design decisions are rooted in evidence rather than assumptions.</div>
        </details>
      </div>
    </div>
  </div>
</section>

{/* NEED HELP CARDS */}
<section id="help-cards">
  <div className="wrap">
    <div className="hc-header fu">
      <div className="hc-eyebrow">HELP CENTER</div>
      <h2 className="hc-h2">Need Answers? I've Got You Covered</h2>
      <p className="hc-p">I believe in absolute transparency and clear communication. Browse the categories below to understand my collaboration methods, revision policies, post-handoff guidelines, and deliverables.</p>
    </div>
    
    <div className="hc-grid">
      <div className="hc-card fu d1">
        <div className="hc-icon">
          <svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="hc-title">Kickstart Your Project</div>
        <div className="hc-desc">Learn how to initiate a new project, what briefing information I need from you, and how our onboarding phase works in detail.</div>
      </div>
      <div className="hc-card fu d2">
        <div className="hc-icon">
          <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="hc-title">Collaboration Model</div>
        <div className="hc-desc">Discover how I collaborate over Slack or Microsoft Teams, handle asynchronous feedback, and conduct weekly alignment calls.</div>
      </div>

      <div className="hc-card fu d1">
        <div className="hc-icon">
          <svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="hc-title">Design Deliverables</div>
        <div className="hc-desc">Explore the exact assets you receive upon project completion, including source Figma files, structured brand guides, and design token configurations.</div>
      </div>
      <div className="hc-card fu d2">
        <div className="hc-icon">
          <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 4L12 14.01l-3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="hc-title">Revisions & Feedback</div>
        <div className="hc-desc">Understand how iterative revision cycles work, my constructive review check-ins, and how I execute overall quality sign-offs.</div>
      </div>
      <div className="hc-card fu d3">
        <div className="hc-icon">
          <svg viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="hc-title">Post-Launch Support</div>
        <div className="hc-desc">Encountering layout queries post-handoff? I offer a dedicated 30-day bug-polishing support phase for your engineering team free of charge.</div>
      </div>
    </div>
  </div>
</section>

{/* CONTACT CHINONSO */}
<section id="contact-alves" style={{background: "var(--bg)", padding: "120px var(--px)"}}>
  <div className="wrap contact-wrap fu">
    <div className="ca-left">
      <h2 className="ca-h2">Contact Chinonso</h2>
      <div className="ca-info-list">
        <div className="ca-info-item">
          <div className="ca-info-label">E-MAIL:</div>
          <a href="mailto:hello@chinonsoezeigbo.com" className="ca-info-val">hello@chinonsoezeigbo.com</a>
        </div>
        <div className="ca-info-item">
          <div className="ca-info-label">PHONE:</div>
          <a href="tel:+10000000000" className="ca-info-val">+1 (000) 000-0000</a>
        </div>
        <div className="ca-info-item">
          <div className="ca-info-label">OFFICE:</div>
          <div className="ca-info-val">For live consultations, connect<br/>with me by dropping an<br/>email in business hours.</div>
        </div>
      </div>
    </div>
    
    <div className="ca-right">
      <form className="ca-form" action="#" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
        <div className="ca-form-row">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required /> {/* Typo from design 'Mail Name' probably meant Mail Address or Email */}
        </div>
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="ca-submit">Send Your Message</button>
      </form>
    </div>
  </div>
</section>


    </div>
  );
}
