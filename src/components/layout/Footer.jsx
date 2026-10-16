import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-white/5 pt-20 lg:pt-32 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="font-['DM_Sans'] text-[clamp(40px,5vw,60px)] font-bold tracking-tight leading-[1.1] mb-8">
              Let's create something<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue)] to-[var(--green)]">extraordinary.</span>
            </h2>
            <p className="text-white/50 text-[18px] max-w-[400px] mb-10">
              I'm always looking for ambitious projects and great teams to build digital products with.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-[15px] hover:scale-105 hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
              Get in touch
              <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                 <svg className="w-3 h-3 stroke-black fill-none stroke-[2]" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="font-['DM_Sans'] font-bold text-[18px] mb-2 text-white/90">Pages</h4>
              <Link to="/" className="text-white/40 hover:text-white transition-colors text-[15px]">Home</Link>
              <Link to="/about" className="text-white/40 hover:text-white transition-colors text-[15px]">About</Link>
              <Link to="/services" className="text-white/40 hover:text-white transition-colors text-[15px]">Services</Link>
              <Link to="/projects" className="text-white/40 hover:text-white transition-colors text-[15px]">Work</Link>
              <Link to="/contact" className="text-white/40 hover:text-white transition-colors text-[15px]">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-['DM_Sans'] font-bold text-[18px] mb-2 text-white/90">Social</h4>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white hover:translate-x-0.5 transition-all text-[15px]">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white hover:translate-x-0.5 transition-all text-[15px]">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white hover:translate-x-0.5 transition-all text-[15px]">Github</a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white hover:translate-x-0.5 transition-all text-[15px]">Dribbble</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="font-['DM_Sans'] text-[20px] font-bold tracking-tight flex items-center gap-2 hover:opacity-70 transition-opacity">
            Chinonso.
          </Link>
          <div className="text-white/30 text-[14px]">
            &copy; {new Date().getFullYear()} Chinonso Ezeigbo. Portfolio built with React.
          </div>
        </div>
      </div>
    </footer>
  );
}
