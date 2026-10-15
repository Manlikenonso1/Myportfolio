import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
              <a href="/resume.pdf" download onClick={toggleMenu} className="hover:text-[var(--blue)] transition-colors">Resume</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-[200] pt-6 px-6 pointer-events-none flex justify-center">
        <motion.div 
          animate={{
            width: scrolled ? '800px' : '100%',
            maxWidth: '1200px',
            backgroundColor: scrolled ? 'rgba(5,5,5,0.7)' : 'rgba(10,10,10,0.2)',
            padding: scrolled ? '12px 24px' : '20px 32px'
          }}
          className={`flex justify-between items-center rounded-3xl pointer-events-auto transition-shadow duration-500 border border-white/10 backdrop-blur-xl ${scrolled ? 'shadow-2xl shadow-blue-900/10' : ''}`}
        >
          {/* Logo */}
          <Link to="/" className="font-['DM_Sans'] text-[22px] font-bold tracking-tight text-white z-10 flex items-center gap-1">
            Nonso.
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-[14px] font-medium text-white/60">
            <li><NavLink to="/" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>About</NavLink></li>
            <li><NavLink to="/services" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>Services</NavLink></li>
            <li><NavLink to="/projects" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>Work</NavLink></li>
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/resume.pdf" download className="px-5 py-2.5 rounded-full text-white/70 hover:text-white text-[14px] font-medium transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Resume
            </a>
            <Link to="/contact" className="px-5 py-2.5 rounded-full bg-[var(--white)] text-[#000000] hover:bg-white/90 text-[14px] font-semibold transition-all">
              Connect
            </Link>
          </div>
          {/* Mobile Hamburger Menu icon */}
          <button onClick={toggleMenu} className="flex md:hidden flex-col gap-1.5 w-6 z-[201] pointer-events-auto">
            <span className={`h-0.5 bg-white transition-all w-full ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 bg-white transition-all w-full ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 bg-white transition-all w-full ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </motion.div>
      </nav>
    </>
  );
}
