import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { FadeIn, FadeInStagger } from '../ui/FadeIn';

export default function AboutBio() {
  return (
    <section className="bg-[var(--bg)] pt-[150px] pb-[100px] px-[var(--px)]">
      <div className="max-w-[var(--max)] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-[48px] lg:gap-[80px] items-start">
        
        <FadeIn>
          <div className="flex flex-col">
            <div className="mb-5 text-[12px] font-medium tracking-[0.2em] text-white/50 uppercase">About · Product Designer, Newcastle UK</div>
            <h1 className="font-['DM_Sans'] font-normal text-[36px] md:text-[56px] leading-[1.15] tracking-tight text-[var(--white)] mb-6">
              Product designer who makes complex products simple.
            </h1>
            <p className="font-['Inter_Tight'] text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.6] mb-4 w-full max-w-[640px]">
              I'm Chinonso Ezeigbo, a product designer with a master's degree in Cyber Security from Aston University. I love clean, polished interfaces, and I care just as much about data clarity, user privacy, and building software people can actually trust.
            </p>
            <p className="font-['Inter_Tight'] text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.6] mb-[30px] w-full max-w-[640px]">
              Over 4+ years, I've designed B2B SaaS products, AI assistants, design systems and mobile apps, working closely with founders and developers to turn complex product ideas into simple, reliable screens.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[30px] max-w-[640px]">
              {['Design Systems & Tokens', 'WCAG Accessibility', 'Figma & Prototyping', 'Smooth Dev Handoff'].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-[12px] bg-[var(--card)] border border-[var(--border)] rounded-[8px] py-4 px-[22px] w-full font-['Inter_Tight'] text-[16px] md:text-[18px] text-[var(--white)]">
                  <span className="w-[18px] h-[18px] shrink-0 rounded-full bg-[var(--blue)] flex items-center justify-center">
                    <Check size={11} strokeWidth={3} className="text-white" />
                  </span>
                  {badge}
                </div>
              ))}
            </div>
            
            <p className="font-['Inter_Tight'] text-[16px] md:text-[18px] text-[var(--white)] leading-[1.6]">
              Have a project in mind or just want to chat design?{' '}
              <Link to="/contact" className="text-[var(--blue)] no-underline hover:underline">Let's talk</Link>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="order-first lg:order-last">
          <div className="w-[200px] h-[200px] lg:w-[340px] lg:h-[340px] rounded-[20px] bg-[var(--card)] overflow-hidden relative shrink-0 border border-white/10">
            <img 
              src="/profile.jpg" 
              alt="Chinonso Ezeigbo" 
              className="w-full h-full object-cover object-[center_20%]"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
