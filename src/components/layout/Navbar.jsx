import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      if (Math.abs(y - lastY.current) > 12) {
        setHidden(y > lastY.current && y > 300);
        lastY.current = y;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation and with Escape
  useEffect(() => { setMobileOpen(false); setHidden(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    if (!mobileOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const isActive = (l) => l.end ? location.pathname === l.to : location.pathname.startsWith(l.to);

  return (
    <>
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[190] bg-[var(--t-bg)] flex flex-col justify-between px-6 pt-28 pb-10 md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {[...LINKS, { to: '/contact', label: 'Contact' }].map((l, i) => (
                <motion.div key={l.to} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.06 }}>
                  <Link to={l.to} className="flex items-baseline justify-between py-4 border-b border-[var(--t-border)]">
                    <span className="text-[30px] font-normal tracking-[-0.03em] text-[var(--t-fg)]">{l.label}</span>
                    <span className="text-[14px] text-[var(--t-faint)]">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-baseline justify-between py-4 border-b border-[var(--t-border)]">
                <span className="text-[30px] font-normal tracking-[-0.03em] text-[var(--t-fg)]">Resume</span>
                <span className="text-[14px] text-[var(--t-faint)]">PDF</span>
              </a>
            </nav>
            <div className="text-[14px] text-[var(--t-muted)]">Open to roles. Remote, hybrid or on-site, UK.</div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        aria-label="Main"
        animate={{ y: hidden && !mobileOpen ? -90 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[200] transition-colors duration-300 ${scrolled || mobileOpen ? 'bg-[var(--t-bg)] border-b border-[var(--t-border)]' : 'bg-transparent border-b border-transparent'}`}
      >
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 h-[60px] md:h-[68px] flex items-center justify-between gap-6">
          <Link to="/" className="inline-flex items-center gap-3 text-[15px] font-medium tracking-[-0.01em] text-[var(--t-fg)]">
            <img src="/profile.jpg" alt="" className="w-7 h-7 rounded-full object-cover object-[center_18%]" />
            Chinonso Ezeigbo
          </Link>

          <ul className="hidden md:flex items-center gap-8 m-0 p-0 list-none text-[15px]">
            {LINKS.filter((l) => !l.end).map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={`transition-colors underline-offset-[6px] decoration-1 ${isActive(l) ? 'text-[var(--t-fg)] underline' : 'text-[var(--t-muted)] hover:text-[var(--t-fg)]'}`}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--t-muted)] hover:text-[var(--t-fg)] transition-colors">CV</a>
            </li>
            <li>
              <Link to="/contact" className={`transition-colors underline-offset-[6px] decoration-1 ${location.pathname.startsWith('/contact') ? 'text-[var(--t-fg)] underline' : 'text-[var(--t-muted)] hover:text-[var(--t-fg)]'}`}>Contact</Link>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-[15px] text-[var(--t-fg)] py-2 pl-4"
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </motion.nav>
    </>
  );
}
