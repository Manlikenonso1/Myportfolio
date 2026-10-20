import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
          <div className="mb-8 text-[12px] font-medium tracking-[0.2em] text-white/50 uppercase">Chinonso Ezeigbo · Designer</div>

          <h1 className="font-['DM_Sans'] text-[clamp(40px,6.2vw,88px)] font-medium leading-[1.05] tracking-[-0.035em] text-center max-w-[1000px] mb-10 pb-2 text-white">
            Where security thinking meets beautiful design.
          </h1>

          <p className="text-[17px] md:text-[19px] text-white/65 text-center max-w-[600px] leading-[1.65] mb-12">
            I'm a designer with a background in Cyber Security. I design thoughtful web and mobile apps that feel simple to use and are a pleasure for developers to build.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-black font-semibold text-[15px] text-center transition-all duration-300">
              Start a project
            </Link>
            <Link to="/projects" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-[15px] text-center border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              View my work
            </Link>
          </div>

        </FadeIn>
      </section>

      {/* 2. LOGO SECTION */}
      <section className="py-16 border-y border-white/5 bg-[var(--bg)]/50 overflow-hidden">
        <FadeIn className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
          <div className="text-[12px] font-medium tracking-[0.2em] uppercase text-white/30 mb-10 border-b border-white/10 pb-4 w-full text-center">
            Selected Clients & Collaborations
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8">
             <Link to="/projects/appsatile"  className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white">Appsatile</Link>
             <Link to="/projects/huntly"      className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white">HuntlyAi</Link>
             <Link to="/projects/lazyzone"    className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white">LazyZone</Link>
             <Link to="/projects/cook-by-ugo" className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white">Cook by Ugo</Link>
             <span className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/30 cursor-default">Talstrike</span>
             <span className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/30 cursor-default">cloudnet IQ</span>
             <Link to="/projects/nikos-farm"  className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/30 transition-all duration-300 hover:text-white">Nikos Farm</Link>
          </div>
        </FadeIn>
      </section>

      {/* 3. SELECTED WORK */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
            <h2 className="font-['DM_Sans'] text-[clamp(32px,5vw,56px)] font-medium tracking-tight text-white leading-none">Selected<br/>Work</h2>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
              View All Work
              <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 'hsbc', title: 'HSBC UK', tag: 'Mobile Banking · Concept', alt: 'HSBC UK mobile banking app redesign concept', pill: 'bg-black/40 border-white/15 text-white/85' },
              { id: 'keel', title: 'Keel', tag: 'Security App · Concept', alt: 'Keel work account safety app concept', pill: 'bg-black/40 border-white/15 text-white/85' },
              { id: 'lazyzone', title: 'LazyZoneLabs', tag: 'AI Creator Suite', alt: 'LazyZoneLabs AI Creator Suite', pill: 'bg-black/40 border-white/15 text-white/85' },
              { id: 'huntly', title: 'HuntlyAi', tag: 'AI Job Workspace', alt: 'HuntlyAi Application Workspace', pill: 'bg-black/40 border-white/15 text-white/85' },
              { id: 'appsatile', title: 'Appsatile', tag: 'Design System', alt: 'Appsatile Design System', pill: 'bg-black/40 border-white/15 text-white/85' },
            ].map((p, i) => (
              <FadeIn key={p.id} direction="up" delay={Math.min(i, 3) * 0.1} className={i === 0 ? 'md:col-span-2' : ''}>
                <Link to={`/projects/${p.id}`} className="group block w-full rounded-2xl overflow-hidden relative bg-[var(--card)] border border-white/10 hover:border-white/20 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                  <img src={`/${p.id}-thumbnail.webp`} loading="lazy" decoding="async" className={`w-full ${i === 0 ? 'aspect-[4/3] md:aspect-[16/9]' : 'aspect-[4/3]'} object-cover transition-transform duration-700`} alt={p.alt} />
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                    <div className={`px-4 py-1.5 rounded-full border text-[12px] font-medium tracking-wide mb-3 inline-block ${p.pill}`}>{p.tag}</div>
                    <h3 className="sr-only">{p.title}</h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-white font-semibold text-[15px] hover:bg-white/10 transition-all group">
              View All Work
              <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* 4. EXPERTISE - GLASS ACCORDION/CARDS */}
      <section className="py-32 px-6 border-y border-white/5 bg-[var(--bg2)]/30 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-center relative z-10">
          <FadeIn>
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit min-w-max text-[12px] font-medium tracking-widest text-white/50 uppercase mb-8">What I Do</div>
            <h2 className="font-['DM_Sans'] text-[clamp(40px,5vw,60px)] font-medium tracking-tight text-white leading-[1.1] mb-6">Design that solves real problems.</h2>
            <p className="text-white/50 text-[18px] leading-[1.7] mb-10">
              Good design goes deeper than how a screen looks. I work with founders and engineering teams to understand how people actually use your product, removing confusion and building layouts that make sense.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 text-white font-semibold hover:text-[var(--blue)] transition-colors group">
              Learn more about me
              <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

          <div className="flex flex-col gap-4">
            <FadeIn direction="up">
              <Link to="/services/ux-strategy" className="group flex items-center justify-between p-8 rounded-2xl bg-[var(--card)] hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20">
                <div className="flex items-center gap-6">
                  <div className="text-[14px] text-white/30 font-medium group-hover:text-white/50">01</div>
                  <h3 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-medium">Interface Design</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-[var(--bg)]">
                  <ArrowRight size={18} strokeWidth={2} className="text-white" />
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <Link to="/services/interactive-motion" className="group flex items-center justify-between p-8 rounded-2xl bg-[var(--card)] hover:bg-[var(--blue)]/10 transition-colors border border-white/5 hover:border-[var(--blue)]/30">
                <div className="flex items-center gap-6">
                  <div className="text-[14px] text-white/30 font-medium group-hover:text-[var(--blue)]/50">02</div>
                  <h3 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-medium group-hover:text-[var(--blue)]">Prototyping</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-[var(--blue)]/30 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-[var(--blue)]/20">
                  <ArrowRight size={18} strokeWidth={2} className="text-[var(--blue)]" />
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <Link to="/services/design-systems" className="group flex items-center justify-between p-8 rounded-2xl bg-[var(--card)] hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20">
                <div className="flex items-center gap-6">
                  <div className="text-[14px] text-white/30 font-medium group-hover:text-white/50">03</div>
                  <h3 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-medium">Design Systems</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-[var(--bg)]">
                  <ArrowRight size={18} strokeWidth={2} className="text-white" />
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <Link to="/services/user-research" className="group flex items-center justify-between p-8 rounded-2xl bg-[var(--card)] hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20">
                <div className="flex items-center gap-6">
                  <div className="text-[14px] text-white/30 font-medium group-hover:text-white/50">04</div>
                  <h3 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-medium">User Research</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-[var(--bg)]">
                  <ArrowRight size={18} strokeWidth={2} className="text-white" />
                </div>
              </Link>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <Link to="/services/developer-handoff" className="group flex items-center justify-between p-8 rounded-2xl bg-[var(--card)] hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20">
                <div className="flex items-center gap-6">
                  <div className="text-[14px] text-white/30 font-medium group-hover:text-white/50">05</div>
                  <h3 className="font-['DM_Sans'] text-[24px] md:text-[32px] font-medium">Dev Handoff</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-[var(--bg)]">
                  <ArrowRight size={18} strokeWidth={2} className="text-white" />
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
