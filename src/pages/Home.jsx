import { Link } from 'react-router-dom';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../components/ui/FadeIn';
import SEO from '../components/ui/SEO';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <div className="w-full relative">
      <SEO title="Chinonso Ezeigbo" description="Crafting digital products that feel almost magic." />
      
      {/* 1. HERO - MASSIVE TYPOGRAPHY & MESH GLOW */}
      <section className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 overflow-hidden bg-[var(--bg)]">

        <FadeIn className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center mt-20">
          <div className="px-5 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green)]"></span>
            </span>
            <span className="text-[13px] font-medium tracking-wide text-white/80 uppercase">Available for new opportunities</span>
          </div>

          <h1 className="font-['DM_Sans'] text-[clamp(48px,8vw,110px)] font-bold leading-[1.0] tracking-[-0.03em] text-center max-w-[1000px] mb-10 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Where security thinking meets beautiful design.
          </h1>

          <p className="text-[18px] md:text-[22px] text-white/50 text-center max-w-[640px] leading-[1.6] mb-12 font-light">
            I'm a UI/UX designer with a background in Cyber Security. I design thoughtful web and mobile apps that feel simple to use and are a pleasure for developers to build.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-[15px] text-center hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Start a project
            </Link>
            <Link to="/projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-white font-semibold text-[15px] text-center border border-white/20 hover:bg-white/10 hover:scale-105 hover:border-white/40 transition-all duration-300">
              View my work
            </Link>
          </div>

          {/* Impact Stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-16">
            {[
              { value: '6+', label: 'Products shipped' },
              { value: '3+', label: 'Years of experience' },
              { value: '8+', label: 'Happy clients' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="font-['DM_Sans'] text-[44px] font-bold text-white leading-none">{s.value}</span>
                <span className="text-[12px] text-white/40 font-medium tracking-[0.15em] uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 2. LOGO SECTION */}
      <section className="py-16 border-y border-white/5 bg-[var(--bg)]/50 backdrop-blur-3xl overflow-hidden">
        <FadeIn className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
          <div className="text-[12px] font-medium tracking-[0.2em] uppercase text-white/30 mb-10 border-b border-white/10 pb-4 w-full text-center">
            Selected Clients & Collaborations
          </div>
          <div className="grid grid-cols-4 gap-x-14 gap-y-8 place-items-center">
             <Link to="/projects/appsatile"  className="font-['DM_Sans'] font-bold text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-0.5">Appsatile</Link>
             <Link to="/projects/huntly"      className="font-['DM_Sans'] font-bold text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-0.5">HuntlyAi</Link>
             <Link to="/projects/lazyzone"    className="font-['DM_Sans'] font-bold text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-0.5">LazyZone</Link>
             <Link to="/projects/cook-by-ugo" className="font-['DM_Sans'] font-bold text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-0.5">Cook by Ugo</Link>
             <span className="font-['DM_Sans'] font-bold text-[22px] tracking-tight text-white/30 cursor-default">Talstrike</span>
             <span className="font-['DM_Sans'] font-bold text-[22px] tracking-tight text-white/30 cursor-default">cloudnet IQ</span>
             <Link to="/projects/nikos-farm"  className="font-['DM_Sans'] font-bold text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-0.5">Nikos Farm</Link>
             <Link to="/projects/aptinfy"     className="font-['DM_Sans'] font-bold text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-0.5">Aptinfy</Link>
          </div>
        </FadeIn>
      </section>

      {/* 3. SELECTED WORK */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
            <h2 className="font-['DM_Sans'] text-[clamp(32px,5vw,56px)] font-bold tracking-tight text-white leading-none">Selected<br/>Work</h2>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
              View All Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="up">
              <Link to="/projects/appsatile" className="group block w-full rounded-3xl overflow-hidden relative bg-[var(--card)] border border-white/10 hover:border-white/20 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none transition-opacity group-hover:opacity-70"></div>
                <img src="/appsatile-thumbnail.png" className="w-full aspect-[4/3] object-cover opacity-60 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105" alt="Appsatile Design System" />
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-[12px] font-medium tracking-wide mb-3 inline-block">Design System</div>
                  <h3 className="font-['DM_Sans'] text-[36px] font-bold text-white">Appsatile</h3>
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <Link to="/projects/lazyzone" className="group block w-full rounded-3xl overflow-hidden relative bg-[var(--card)] border border-white/10 hover:border-white/20 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none transition-opacity group-hover:opacity-70"></div>
                <img src="/lazyzone-thumbnail.png" className="w-full aspect-[4/3] object-cover opacity-65 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105" alt="LazyZoneLabs AI Creator Suite" />
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="px-4 py-1.5 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-200 text-[12px] font-medium tracking-wide mb-3 inline-block">AI Creator Suite</div>
                  <h3 className="font-['DM_Sans'] text-[36px] font-bold text-white">LazyZoneLabs</h3>
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <Link to="/projects/huntly" className="group block w-full rounded-3xl overflow-hidden relative bg-[var(--card)] border border-white/10 hover:border-white/20 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none transition-opacity group-hover:opacity-70"></div>
                <img src="/huntly-thumbnail.png" className="w-full aspect-[4/3] object-cover opacity-65 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105" alt="HuntlyAi Application Workspace" />
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="px-4 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-200 text-[12px] font-medium tracking-wide mb-3 inline-block">AI Job Workspace</div>
                  <h3 className="font-['DM_Sans'] text-[36px] font-bold text-white">HuntlyAi</h3>
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <Link to="/projects/cook-by-ugo" className="group block w-full rounded-3xl overflow-hidden relative bg-[var(--card)] border border-white/10 hover:border-white/20 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none transition-opacity group-hover:opacity-70"></div>
                <img src="/cook-by-ugo-thumbnail.png" className="w-full aspect-[4/3] object-cover opacity-65 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105" alt="Cook by Ugo Digital Experience" />
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-[12px] font-medium tracking-wide mb-3 inline-block">Food & Hospitality</div>
                  <h3 className="font-['DM_Sans'] text-[36px] font-bold text-white">Cook by Ugo</h3>
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <Link to="/projects/nikos-farm" className="group block w-full rounded-3xl overflow-hidden relative bg-[var(--card)] border border-white/10 hover:border-white/20 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none transition-opacity group-hover:opacity-70"></div>
                <img src="/nikos-farm-thumbnail.png" className="w-full aspect-[4/3] object-cover opacity-60 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105" alt="Nikos Farm E-Commerce" />
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-[12px] font-medium tracking-wide mb-3 inline-block">E-Commerce</div>
                  <h3 className="font-['DM_Sans'] text-[36px] font-bold text-white">Nikos Farm</h3>
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <Link to="/projects/aptinfy" className="group block w-full rounded-3xl overflow-hidden relative bg-[var(--card)] border border-white/10 hover:border-white/20 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none transition-opacity group-hover:opacity-70"></div>
                <img src="/aptinfy-thumbnail.png" className="w-full aspect-[4/3] object-cover opacity-60 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105" alt="Aptinfy Logo Branding" />
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-[12px] font-medium tracking-wide mb-3 inline-block">Brand Identity</div>
                  <h3 className="font-['DM_Sans'] text-[36px] font-bold text-white">Aptinfy</h3>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* 4. EXPERTISE - GLASS ACCORDION/CARDS */}
      <section className="py-32 px-6 border-y border-white/5 bg-[var(--bg2)]/30 backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--blue)]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-center relative z-10">
          <FadeIn>
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit min-w-max text-[12px] font-medium tracking-widest text-white/50 uppercase mb-8">What I Do</div>
            <h2 className="font-['DM_Sans'] text-[clamp(40px,5vw,60px)] font-bold tracking-tight text-white leading-[1.1] mb-6">Design that solves real problems.</h2>
            <p className="text-white/50 text-[18px] leading-[1.7] mb-10">
              Good design goes deeper than how a screen looks. I work with founders and engineering teams to understand how people actually use your product, removing confusion and building layouts that make sense.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 text-white font-semibold hover:text-[var(--blue)] transition-colors group">
              Learn more about me
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </FadeIn>

          <div className="flex flex-col gap-4">
            <FadeIn direction="up">
              <Link to="/services/ux-strategy" className="group flex items-center justify-between p-8 rounded-3xl bg-[var(--card)] hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20">
                <div className="flex items-center gap-6">
                  <div className="text-[14px] text-white/30 font-medium group-hover:text-white/50">01</div>
                  <h3 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-bold">UI/UX Design</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-[var(--bg)]">
                  <svg className="w-5 h-5 stroke-white fill-none stroke-2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <Link to="/services/interactive-motion" className="group flex items-center justify-between p-8 rounded-3xl bg-[var(--card)] hover:bg-[var(--blue)]/10 transition-colors border border-white/5 hover:border-[var(--blue)]/30">
                <div className="flex items-center gap-6">
                  <div className="text-[14px] text-white/30 font-medium group-hover:text-[var(--blue)]/50">02</div>
                  <h3 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-bold group-hover:text-[var(--blue)]">Prototyping</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-[var(--blue)]/30 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-[var(--blue)]/20">
                  <svg className="w-5 h-5 stroke-[var(--blue)] fill-none stroke-2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <Link to="/services/design-systems" className="group flex items-center justify-between p-8 rounded-3xl bg-[var(--card)] hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20">
                <div className="flex items-center gap-6">
                  <div className="text-[14px] text-white/30 font-medium group-hover:text-white/50">03</div>
                  <h3 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-bold">Design Systems</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-[var(--bg)]">
                  <svg className="w-5 h-5 stroke-white fill-none stroke-2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <Link to="/services/user-research" className="group flex items-center justify-between p-8 rounded-3xl bg-[var(--card)] hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20">
                <div className="flex items-center gap-6">
                  <div className="text-[14px] text-white/30 font-medium group-hover:text-white/50">04</div>
                  <h3 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-bold">User Research</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-[var(--bg)]">
                  <svg className="w-5 h-5 stroke-white fill-none stroke-2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <Link to="/services/developer-handoff" className="group flex items-center justify-between p-8 rounded-3xl bg-[var(--card)] hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20">
                <div className="flex items-center gap-6">
                  <div className="text-[14px] text-white/30 font-medium group-hover:text-white/50">05</div>
                  <h3 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-bold">Dev Handoff</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-[var(--bg)]">
                  <svg className="w-5 h-5 stroke-white fill-none stroke-2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
