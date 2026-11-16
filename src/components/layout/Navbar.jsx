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
                    <span className="font-['Fraunces'] text-[38px] font-normal tracking-[-0.03em] text-[var(--t-fg)]">{l.label}</span>
                    <span className="text-[14px] text-[var(--t-faint)]">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-baseline justify-between py-4 border-b border-[var(--t-border)]">
                <span className="font-['Fraunces'] text-[38px] font-normal tracking-[-0.03em] text-[var(--t-fg)]">Resume</span>
                <span className="text-[14px] text-[var(--t-faint)]">PDF</span>
              </a>
            </nav>
            <div className="flex items-center gap-2.5 text-[14px] font-medium text-[var(--t-fg)]">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              Open to full-time roles · Remote or UK
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        aria-label="Main"
        animate={{ y: hidden && !mobileOpen ? -110 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[200] pt-3.5 px-4 md:pt-5 md:px-6 pointer-events-none flex justify-center"
      >
        <div
          className={`flex justify-between items-center gap-3 md:gap-4 pointer-events-auto rounded-full border transition-all duration-300 w-full max-w-[840px] px-3.5 py-2 md:px-5 md:py-2.5 ${
            scrolled
              ? 'border-white/80 dark:border-white/15 shadow-[0_12px_36px_rgba(20,19,18,0.10),inset_0_1px_0_rgba(255,255,255,0.85)]'
              : 'border-white/60 dark:border-white/10 shadow-[0_8px_24px_rgba(20,19,18,0.06),inset_0_1px_0_rgba(255,255,255,0.85)]'
          }`}
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(247,245,240,0.82))',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" data-cursor="Home" className="font-['Fraunces'] text-[21px] md:text-[23px] font-normal tracking-tight text-[var(--t-fg)] hover:text-[var(--t-accent)] transition-colors inline-flex items-baseline">
              Chinonso
              <span className="hidden sm:inline-block text-[14px] font-normal text-[var(--t-muted)] ml-2 pl-2 border-l border-[var(--t-border)]">
                Product Designer
              </span>
            </Link>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 m-0 p-0.5 list-none shrink-0">
            {LINKS.map((l) => {
              const active = isActive(l);
              return (
                <li key={l.to} className="relative">
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={`relative block px-4 py-2 text-[14px] font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                      active
                        ? 'bg-[var(--t-fg)]/10 text-[var(--t-fg)]'
                        : 'text-[var(--t-muted)] hover:text-[var(--t-fg)] hover:bg-[var(--t-fg)]/5'
                    }`}
                  >
                    {l.label}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block px-4 py-2 text-[14px] font-medium rounded-full text-[var(--t-muted)] hover:text-[var(--t-fg)] hover:bg-[var(--t-fg)]/5 transition-all duration-200 whitespace-nowrap"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="group hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--t-fg)] text-[var(--t-bg)] text-[14px] font-medium tracking-tight transition-all duration-300 hover:bg-[var(--t-accent)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              Let's talk
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="flex md:hidden flex-col justify-center gap-1.5 w-10 h-10 px-2 z-[201]"
            >
              <span className={`h-0.5 bg-[var(--t-fg)] transition-all w-full ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 bg-[var(--t-fg)] transition-all w-full ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 bg-[var(--t-fg)] transition-all w-full ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
