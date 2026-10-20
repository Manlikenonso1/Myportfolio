import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (mobileOpen) {
      setMobileOpen(false);
      document.body.style.overflow = '';
    } else {
      setMobileOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(30px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[190] bg-[var(--bg)]/90 flex flex-col items-center justify-center gap-8"
          >
            <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.8, opacity: 0 }}
               transition={{ delay: 0.1 }}
               className="flex flex-col items-center gap-8 text-[32px] font-bold font-['DM_Sans']"
            >
              <Link to="/" onClick={toggleMenu} className="hover:text-[var(--blue)] transition-colors">Home</Link>
              <Link to="/about" onClick={toggleMenu} className="hover:text-[var(--blue)] transition-colors">About</Link>
              <Link to="/services" onClick={toggleMenu} className="hover:text-[var(--blue)] transition-colors">Services</Link>
              <Link to="/projects" onClick={toggleMenu} className="hover:text-[var(--blue)] transition-colors">Work</Link>
              <Link to="/contact" onClick={toggleMenu} className="hover:text-[var(--blue)] transition-colors">Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-[200] pt-3 px-4 md:pt-6 md:px-6 pointer-events-none flex justify-center">
        <motion.div 
          animate={{
            width: scrolled ? '800px' : '100%',
            maxWidth: '1200px',
            backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'rgba(0,0,0,0)',
            padding: isMobile ? '10px 18px' : (scrolled ? '12px 24px' : '20px 32px')
          }}
          className={`flex justify-between items-center rounded-2xl pointer-events-auto border border-white/10 `}
        >
          {/* Logo & Availability Badge */}
          <div className="flex items-center gap-3.5 z-10">
            <Link to="/" className="font-['DM_Sans'] text-[18px] md:text-[22px] font-medium tracking-tight text-white flex items-center gap-1 hover:opacity-70 transition-opacity">
              designbynonso.
            </Link>
            <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium tracking-wide text-white/70">
              <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green)]"></span>
              </span>
              <span>Available</span>
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-[12px] font-medium tracking-[0.12em] uppercase text-white/55">
            <li><NavLink to="/" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>About</NavLink></li>
            <li><NavLink to="/services" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>Services</NavLink></li>
            <li><NavLink to="/projects" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>Work</NavLink></li>
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-[var(--white)] text-[#000000] hover:bg-white/90 text-[14px] font-semibold transition-all">
              Connect
            </Link>
          </div>
          {/* Mobile Hamburger Menu icon */}
          <button onClick={toggleMenu} className="flex md:hidden flex-col gap-1.5 w-6 z-[201] pointer-events-auto hover:opacity-70 transition-opacity">
            <span className={`h-0.5 bg-white transition-all w-full ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 bg-white transition-all w-full ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 bg-white transition-all w-full ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </motion.div>
      </nav>
    </>
  );
}
