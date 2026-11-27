import { Link } from 'react-router-dom';

const EMAIL = 'cezeigbo4@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ezeigbochinonso';

export default function Footer() {
  const quiet = 'text-[var(--t-muted)] hover:text-[var(--t-fg)] transition-colors';
  return (
    <footer className="mt-20 md:mt-28 bg-[var(--t-bg)] text-[var(--t-fg)]">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="border-t border-[var(--t-border)] pt-12 md:pt-16 pb-12 grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-10 md:gap-24">
          <div>
            <p className="m-0 text-[15px] text-[var(--t-faint)] mb-3">Hiring a product designer?</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-[clamp(26px,3.5vw,46px)] leading-[1.1] tracking-[-0.03em] text-[var(--t-fg)] underline underline-offset-[6px] decoration-1 decoration-[var(--t-faint)] hover:decoration-[var(--t-fg)] transition-colors break-all"
            >
              {EMAIL}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 text-[15px] md:pt-1">
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              <li><Link to="/projects" className={quiet}>Projects</Link></li>
              <li><Link to="/about" className={quiet}>About</Link></li>
              <li><Link to="/contact" className={quiet}>Contact</Link></li>
            </ul>
            <ul className="m-0 p-0 list-none flex flex-col gap-2">
              <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={quiet}>LinkedIn</a></li>
              <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={quiet}>CV (PDF)</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 py-6 border-t border-[var(--t-border)] text-[14px] text-[var(--t-faint)]">
          <span>© {new Date().getFullYear()} Chinonso Ezeigbo</span>
          <span>Newcastle upon Tyne, UK</span>
        </div>
      </div>
    </footer>
  );
}
