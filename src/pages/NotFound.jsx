import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/ui/SEO';
import { FadeIn } from '../components/ui/FadeIn';

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden bg-[var(--bg)] pt-32 pb-20">
      <SEO title="Page Not Found · Chinonso Ezeigbo" description="The page you are looking for does not exist." />
      
      {/* Ambient background glow */}

      <FadeIn className="max-w-[600px] mx-auto text-center relative z-10 flex flex-col items-center">
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[12px] font-bold tracking-widest text-[var(--blue)] uppercase mb-6">
          Error 404
        </span>
        
        <h1 className="font-['DM_Sans'] text-[clamp(60px,10vw,120px)] font-medium tracking-tighter text-white leading-none mb-4">
          404
        </h1>
        
        <h2 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-medium text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="font-['Inter_Tight'] text-[16px] text-white/50 leading-[1.7] mb-10 max-w-[480px]">
          The screen you're looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back to the portfolio.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-white text-black font-semibold text-[15px] hover:bg-white/95 transition-all"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          <span>Return to Homepage</span>
        </Link>
      </FadeIn>
    </div>
  );
}
