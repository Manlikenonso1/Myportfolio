import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTokens } from '../../tokens/TokenProvider';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const lastY = useRef(0);
  const location = useLocation();
  const { tk, set } = useTokens();

  // Compact after 40px. Slides away when scrolling down, returns when scrolling up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - lastY.current) > 6) {
        setHidden(y > lastY.current && y > 320);
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
  const pillFor = hovered ?? LINKS.find(isActive)?.to ?? null;
  const themeLabel = `Switch to ${tk.theme === 'dark' ? 'light' : 'dark'} theme`;

  return (
    <>
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div id="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[190] bg-[var(--t-bg)] flex flex-col justify-between px-6 pt-28 pb-10 md:hidden">
            <nav aria-label="Mobile" className="flex flex-col">
              {[...LINKS, { to: '/contact', label: 'Contact' }].map((l, i) => (
                <motion.div key={l.to} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.06 }}>
                  <Link to={l.to} className="flex items-baseline justify-between py-4 border-b border-[var(--t-border)]">
                    <span className="font-['DM_Sans'] text-[44px] font-medium tracking-[-0.04em] text-[var(--t-fg)]">{l.label}</span>
                    <span className="font-mono text-[13px] text-[var(--t-faint)]">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center gap-2.5 text-[14px] font-medium text-[var(--t-fg)]">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              Open to full-time roles · Remote or North East England
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        aria-label="Main"
        animate={{ y: hidden && !mobileOpen ? -120 : 0 }}
        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed top-0 left-0 right-0 z-[200] pt-3 px-4 md:pt-5 md:px-6 pointer-events-none flex justify-center"
      >
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className={`flex justify-between items-center gap-4 pointer-events-auto border transition-[background-color,border-color,box-shadow,border-radius] duration-300 ${
            scrolled ? 'bg-[var(--t-bg)]/85 backdrop-blur-xl border-[var(--t-border)] shadow-[0_10px_40px_rgba(0,0,0,0.18)]' : 'bg-transparent border-transparent'
          }`}
          style={{ borderRadius: 'var(--t-radius-lg)', width: scrolled ? 'min(100%, 760px)' : 'min(100%, 1200px)', padding: scrolled ? '8px 10px 8px 20px' : '12px 12px 12px 20px' }}
        >
          {/* Logo */}
          <motion.div layout="position" className="flex items-center gap-3.5">
            <Link to="/" data-cursor="Home" className="font-['DM_Sans'] text-[19px] md:text-[21px] font-medium tracking-tight text-[var(--t-fg)] hover:opacity-70 transition-opacity">
              designbynonso<span className="text-[var(--t-accent-text)] transition-colors duration-300">.</span>
            </Link>
            {!scrolled && (
              <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--t-border)] text-[11.5px] font-medium tracking-wide text-[var(--t-muted)]">
                <span className="relative flex h-2 w-2">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open to full-time roles
              </div>
            )}
          </motion.div>

          {/* Desktop links: a pill slides to the link you hover, and rests on the current page */}
          <motion.ul layout="position" onMouseLeave={() => setHovered(null)} className="hidden md:flex items-center gap-1 m-0 p-1 list-none">
            {LINKS.map((l) => (
              <li key={l.to} className="relative">
                {pillFor === l.to && (
                  <motion.span layoutId="nav-pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute inset-0 bg-[var(--t-fg)]/10" style={{ borderRadius: 'var(--t-radius)' }} />
                )}
                <NavLink to={l.to} end={l.end} onMouseEnter={() => setHovered(l.to)} onFocus={() => setHovered(l.to)} onBlur={() => setHovered(null)}
                  className={`relative block px-4 py-2 text-[14px] font-medium transition-colors ${isActive(l) ? 'text-[var(--t-fg)]' : 'text-[var(--t-muted)] hover:text-[var(--t-fg)]'}`}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>

          {/* Actions */}
          <motion.div layout="position" className="flex items-center gap-2">
            <button type="button" onClick={() => set('theme', tk.theme === 'dark' ? 'light' : 'dark')} aria-label={themeLabel} title={themeLabel}
              className="hidden md:flex w-10 h-10 items-center justify-center border border-[var(--t-border)] text-[var(--t-fg)] hover:bg-[var(--t-fg)]/10 transition-colors" style={{ borderRadius: 'var(--t-radius)' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={tk.theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="flex">
                  {tk.theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <Link to="/contact" className="group hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--t-accent)] text-[#fff] text-[14px] font-semibold transition-all hover:brightness-110 active:scale-[0.97]" style={{ borderRadius: 'var(--t-radius)' }}>
              Let's talk
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <button type="button" onClick={() => setMobileOpen(o => !o)} aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="flex md:hidden flex-col justify-center gap-1.5 w-10 h-10 px-2 z-[201]">
              <span className={`h-0.5 bg-[var(--t-fg)] transition-all w-full ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 bg-[var(--t-fg)] transition-all w-full ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 bg-[var(--t-fg)] transition-all w-full ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  );
}
