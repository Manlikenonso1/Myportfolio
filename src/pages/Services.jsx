import { Link } from 'react-router-dom';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../components/ui/FadeIn';

export default function Services() {
  return (
    <div className="w-full relative pb-32">
      
      {/* 1. HERO - SERVICES */}
      <section className="bg-[var(--bg)] relative overflow-hidden flex flex-col items-center gap-5 pt-[160px] pb-[120px] px-[var(--px)]">
        <div className="absolute inset-0 bg-[var(--bg3)] opacity-45 pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <FadeIn>
            <div className="font-['DM_Sans'] text-[18px] tracking-[.08em] uppercase text-[var(--muted)] mb-5">Expertise</div>
            <h1 className="font-['DM_Sans'] font-light text-[56px] leading-[1.3] text-[var(--white)] mx-auto mb-8 max-w-[1000px]">
              Strategic UI/UX design focused on business performance.
            </h1>
            <p className="text-[18px] text-white/50 leading-[1.8] max-w-[600px] mx-auto font-light">
              I merge product strategy, clean user experience logic, and high-end visual design to build software that drives engagement and accelerates development.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. GLOW BOARDS */}
      <section className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          
          <FadeIn direction="up">
            <div className="group relative p-[1px] rounded-[10px] bg-[var(--card)] border border-[var(--border)] overflow-hidden">
              <div className="bg-[var(--card)] rounded-[10px] p-8 md:p-12 h-full relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
                <div className="flex-1">
                  <div className="text-[14px] font-medium text-white/40 mb-4">01</div>
                  <h3 className="font-['DM_Sans'] text-[32px] md:text-[40px] font-bold text-white mb-6">Product Strategy & UI/UX Design</h3>
                  <p className="text-[18px] text-white/50 leading-[1.7] mb-10 font-light">
                    I translate complex business goals and user behaviors into intuitive digital interfaces. By mapping out comprehensive user journeys, refining hierarchy, and conducting thorough prototype testing, I build layouts that naturally reduce bounce rates and maximize user retention.
                  </p>
                  <Link to="/services/ux-strategy" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white font-medium text-[14px] hover:bg-white text-black transition-colors">
                    Explore process
                  </Link>
                </div>
                <div className="w-full md:w-[400px] aspect-square rounded-2xl overflow-hidden relative border border-white/10">
                   <img src="/service_ui_ux.png" alt="UX Strategy and Logic" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="group relative p-[1px] rounded-[10px] bg-[var(--card)] border border-[var(--border)] overflow-hidden">
              <div className="bg-[var(--card)] rounded-[10px] p-8 md:p-12 h-full relative z-10 flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
                <div className="flex-1">
                  <div className="text-[14px] font-medium text-white/40 mb-4">02</div>
                  <h3 className="font-['DM_Sans'] text-[32px] md:text-[40px] font-bold text-white mb-6">Design Systems & Brand Standards</h3>
                  <p className="text-[18px] text-white/50 leading-[1.7] mb-10 font-light">
                    To help your business scale, I build robust, WCAG-accessible component libraries in Figma, complete with typography matrices, robust color tokens, and responsive layouts. This ensures visual harmony across every screen and empowers your developers to build pixel-perfect products 10x faster.
                  </p>
                  <Link to="/services/design-systems" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white font-medium text-[14px] hover:bg-white text-black transition-colors">
                    Explore process
                  </Link>
                </div>
                <div className="w-full md:w-[400px] aspect-square rounded-2xl overflow-hidden relative border border-white/10">
                   <img src="/service_design_system.png" alt="Design Systems" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="group relative p-[1px] rounded-[10px] bg-[var(--card)] border border-[var(--border)] overflow-hidden">
              <div className="bg-[var(--card)] rounded-[10px] p-8 md:p-12 h-full relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
                <div className="flex-1">
                  <div className="text-[14px] font-medium text-white/40 mb-4">03</div>
                  <h3 className="font-['DM_Sans'] text-[32px] md:text-[40px] font-bold text-white mb-6">Interactive Prototyping & Motion</h3>
                  <p className="text-[18px] text-white/50 leading-[1.7] mb-10 font-light">
                    Static mockups only tell half the story. I bridge the gap by designing custom micro-interactions, container transitions, and high-fidelity testable prototypes. This validates complex feature logic, secures stakeholder buy-in, and eliminates code waste before engineering starts.
                  </p>
                  <Link to="/services/interactive-motion" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white font-medium text-[14px] hover:bg-white text-black transition-colors">
                    Explore process
                  </Link>
                </div>
                <div className="w-full md:w-[400px] aspect-square rounded-2xl overflow-hidden relative border border-white/10">
                   <img src="/service_interactive_motion.png" alt="Interactive Prototyping and Motion" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
