import { Link } from 'react-router-dom';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../components/ui/FadeIn';
import SEO from '../components/ui/SEO';

export default function Services() {
  return (
    <div className="w-full relative pb-32">
      <SEO 
        title="Services · Chinonso Ezeigbo" 
        description="End-to-end product design services: UI/UX design, Figma design systems, interactive prototypes, user research, and dev handoff." 
      />
      
      {/* 1. HERO - SERVICES */}
      <section className="bg-[var(--bg)] relative overflow-hidden flex flex-col items-center gap-5 pt-[160px] pb-[120px] px-[var(--px)]">
        <div className="absolute inset-0 bg-[var(--bg3)] opacity-45 pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <FadeIn>
            <div className="font-['DM_Sans'] text-[18px] tracking-[.08em] uppercase text-[var(--muted)] mb-5">Services</div>
            <h1 className="font-['DM_Sans'] font-light text-[56px] leading-[1.3] text-[var(--white)] mx-auto mb-8 max-w-[1000px]">
              Thoughtful design that helps your product grow.
            </h1>
            <p className="text-[18px] text-white/50 leading-[1.8] max-w-[640px] mx-auto font-light">
              I help product teams turn complex ideas into clean, user-friendly experiences, from user research and wireframes to complete design systems.
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
                    I turn complicated workflows into clean, straightforward interfaces. By mapping out how users move through your app and testing key flows early, I build layouts that help people get things done without getting confused.
                  </p>
                  <Link to="/services/ux-strategy" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white font-medium text-[14px] hover:bg-white hover:text-black hover:scale-105 transition-all">
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
                    Inconsistent designs slow your engineering team down. I create organized Figma component libraries with clear colors, fonts, and responsive components, giving your team a reliable blueprint that saves hours of development time.
                  </p>
                  <Link to="/services/design-systems" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white font-medium text-[14px] hover:bg-white hover:text-black hover:scale-105 transition-all">
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
                    Static mockups don't show how an app actually feels to use. I design smooth transitions and realistic, clickable prototypes so your team can test the actual flow and get everyone aligned before building.
                  </p>
                  <Link to="/services/interactive-motion" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white font-medium text-[14px] hover:bg-white hover:text-black hover:scale-105 transition-all">
                    Explore process
                  </Link>
                </div>
                <div className="w-full md:w-[400px] aspect-square rounded-2xl overflow-hidden relative border border-white/10">
                   <img src="/service_interactive_motion.png" alt="Interactive Prototyping and Motion" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="group relative p-[1px] rounded-[10px] bg-[var(--card)] border border-[var(--border)] overflow-hidden">
              <div className="bg-[var(--card)] rounded-[10px] p-8 md:p-12 h-full relative z-10 flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
                <div className="flex-1">
                  <div className="text-[14px] font-medium text-white/40 mb-4">04</div>
                  <h3 className="font-['DM_Sans'] text-[32px] md:text-[40px] font-bold text-white mb-6">User Research & Usability Audits</h3>
                  <p className="text-[18px] text-white/50 leading-[1.7] mb-10 font-light">
                    Good design starts with knowing what's actually broken. I conduct user interviews, heuristic evaluations, and usability audits to pinpoint friction in your flows so every design decision is grounded in real evidence, not guesswork.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link to="/services/user-research" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white font-medium text-[14px] hover:bg-white hover:text-black hover:scale-105 transition-all">
                      Explore process
                    </Link>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[14px] text-white/50 hover:text-white transition-colors">
                      Request an audit &rarr;
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-[400px] aspect-square rounded-2xl overflow-hidden relative border border-white/10">
                   <img src="/service_user_research.jpg" alt="User Research & Usability Audits" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="group relative p-[1px] rounded-[10px] bg-[var(--card)] border border-[var(--border)] overflow-hidden">
              <div className="bg-[var(--card)] rounded-[10px] p-8 md:p-12 h-full relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
                <div className="flex-1">
                  <div className="text-[14px] font-medium text-white/40 mb-4">05</div>
                  <h3 className="font-['DM_Sans'] text-[32px] md:text-[40px] font-bold text-white mb-6">Developer Handoff & Accessibility</h3>
                  <p className="text-[18px] text-white/50 leading-[1.7] mb-10 font-light">
                    Pretty designs that engineers can't build are worthless. I deliver pixel-perfect Figma specs with documented tokens, interaction notes, and WCAG accessibility guidelines baked in, so your dev team builds exactly what was designed, first time.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link to="/services/developer-handoff" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white font-medium text-[14px] hover:bg-white hover:text-black hover:scale-105 transition-all">
                      Explore process
                    </Link>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[14px] text-white/50 hover:text-white transition-colors">
                      Discuss handoff &rarr;
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-[400px] aspect-square rounded-2xl overflow-hidden relative border border-white/10">
                   <img src="/service_dev_handoff.jpg" alt="Developer Handoff & Accessibility" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
