import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-white/5 pt-20 lg:pt-32 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="font-['DM_Sans'] text-[clamp(40px,5vw,60px)] font-medium tracking-tight leading-[1.1] mb-8">
              Let's make your product<br/>
              <span className="text-white/45">easier to use.</span>
            </h2>
            <p className="text-white/50 text-[18px] max-w-[400px] mb-10">
              Tell me what is confusing your users and I'll show you how I'd fix it.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-white text-black font-semibold text-[15px] transition-all duration-300">
              Get in touch
              <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                <ArrowRight size={13} strokeWidth={2.5} className="text-black" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="font-['DM_Sans'] font-medium text-[18px] mb-2 text-white/90">Pages</h4>
              <Link to="/" className="text-white/40 hover:text-white transition-colors text-[15px]">Home</Link>
              <Link to="/about" className="text-white/40 hover:text-white transition-colors text-[15px]">About</Link>
              <Link to="/services" className="text-white/40 hover:text-white transition-colors text-[15px]">Services</Link>
              <Link to="/projects" className="text-white/40 hover:text-white transition-colors text-[15px]">Projects</Link>
              <Link to="/help-center" className="text-white/40 hover:text-white transition-colors text-[15px]">Help Center</Link>
              <Link to="/contact" className="text-white/40 hover:text-white transition-colors text-[15px]">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-['DM_Sans'] font-medium text-[18px] mb-2 text-white/90">Contact</h4>
              <Link to="/contact" className="text-white/40 hover:text-white transition-colors text-[15px]">Send a Message &rarr;</Link>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="font-['DM_Sans'] text-[20px] font-medium tracking-tight flex items-center gap-2 hover:opacity-70 transition-opacity">
            designbynonso.
          </Link>
          <div className="text-white/30 text-[14px]">
            &copy; {new Date().getFullYear()} Chinonso Ezeigbo. Portfolio built with React.
          </div>
        </div>
      </div>
    </footer>
  );
}
