import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Users, FileText, CheckCircle2, Headphones } from 'lucide-react';
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
          <div className="faq-answer">I design web and mobile apps, craft cohesive design systems, and build interactive prototypes that make development faster and more reliable.</div>
        </details>
        <details className="faq-item">
          <summary>How can I get started on a project?</summary>
          <div className="faq-answer">Send me a message through the contact form below or drop me an email. We'll set up a quick 20–30 minute chat to talk through your goals, timeline, and what you're looking to build.</div>
        </details>
        <details className="faq-item">
          <summary>How do you approach UI/UX design work?</summary>
          <div className="faq-answer">I keep it practical and user-focused. I look at who is using your product, where they run into confusion or friction, and design clean, intuitive screens that make completing tasks feel effortless.</div>
        </details>
        <details className="faq-item">
          <summary>Do you involve me closely during the design process?</summary>
          <div className="faq-answer">Yes, we stay closely connected. I share live Figma links and record quick video walkthroughs so you can review progress, leave comments anytime, and never wonder what's being worked on.</div>
        </details>
        <details className="faq-item">
          <summary>How long does a typical project take?</summary>
          <div className="faq-answer">Most projects take between 2 to 6 weeks depending on size. A focused feature or redesign can be done in a couple of weeks, while a full product from scratch takes a bit longer.</div>
        </details>
        <details className="faq-item">
          <summary>What tools do you use for design?</summary>
          <div className="faq-answer">Figma is my primary tool for all UI and design system work. For communication and project management, I use Slack, Loom for quick async video walkthroughs, and Google Meet or Zoom for live calls.</div>
        </details>
      </div>
    </div>


    {/* Process */}
    <div className="faq-group fu d3">
      <div className="faq-group-title">Process</div>
      <div className="faq-list">
        <details className="faq-item">
          <summary>What is your design process?</summary>
          <div className="faq-answer">Four straightforward steps: Discovery (learning about your users and goals), Architecture & Wireframes (mapping the layout and flows), High-Fidelity UI (crafting polished screens and components), and Handoff (preparing clean specs for your developers).</div>
        </details>
        <details className="faq-item">
          <summary>How involved will I be in the design process?</summary>
          <div className="faq-answer">You'll be involved at key milestones. We kick off together to align on goals, check in regularly as designs evolve, and do reviews before wrapping up each phase.</div>
        </details>
        <details className="faq-item">
          <summary>Do you conduct user research?</summary>
          <div className="faq-answer">Yes. I speak with users, test early interactive prototypes, and audit competing products to make sure design choices are backed by real feedback, not guesswork.</div>
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
      <p className="hc-p">Here's what working together looks like, from initial kickoff and day-to-day communication to final file handoffs and post-launch support.</p>
    </div>
    
    <div className="hc-grid">
      <div className="hc-card fu d1">
        <div className="hc-icon flex items-center justify-center">
          <Rocket size={24} strokeWidth={2} className="text-[var(--blue)]" />
        </div>
        <div className="hc-title">Kickstart Your Project</div>
        <div className="hc-desc">How we get started, the basic info needed to begin, and what the first week looks like.</div>
      </div>
      <div className="hc-card fu d2">
        <div className="hc-icon flex items-center justify-center">
          <Users size={24} strokeWidth={2} className="text-[var(--blue)]" />
        </div>
        <div className="hc-title">Collaboration Model</div>
        <div className="hc-desc">How we stay in sync through regular updates, Slack/Teams chats, and quick video walkthroughs.</div>
      </div>

      <div className="hc-card fu d1">
        <div className="hc-icon flex items-center justify-center">
          <FileText size={24} strokeWidth={2} className="text-[var(--blue)]" />
        </div>
        <div className="hc-title">Design Deliverables</div>
        <div className="hc-desc">Everything you receive at the finish line: clean Figma source files, reusable components, and developer-ready specs.</div>
      </div>
      <div className="hc-card fu d2">
        <div className="hc-icon flex items-center justify-center">
          <CheckCircle2 size={24} strokeWidth={2} className="text-[var(--blue)]" />
        </div>
        <div className="hc-title">Revisions & Feedback</div>
        <div className="hc-desc">How feedback works during each phase, so you have plenty of opportunities to review and refine before anything goes live.</div>
      </div>
      <div className="hc-card fu d3">
        <div className="hc-icon flex items-center justify-center">
          <Headphones size={24} strokeWidth={2} className="text-[var(--blue)]" />
        </div>
        <div className="hc-title">Post-Launch Support</div>
        <div className="hc-desc">Have questions while your developers build? I stick around after handoff to answer questions, review builds, and make sure everything matches.</div>
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
          <a href="mailto:godswill.ec@gmail.com" className="ca-info-val">godswill.ec@gmail.com</a>
        </div>
        <div className="ca-info-item">
          <div className="ca-info-label">PHONE:</div>
          <a href="tel:+10000000000" className="ca-info-val">+1 (000) 000-0000</a>
        </div>
        <div className="ca-info-item">
          <div className="ca-info-label">OFFICE:</div>
          <div className="ca-info-val">Available for remote work<br/>worldwide. Drop me an email<br/>anytime.</div>
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
