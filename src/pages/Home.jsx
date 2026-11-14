import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../components/ui/FadeIn';
import SEO from '../components/ui/SEO';

export default function Home() {
  return (
    <div className="w-full relative">
      <SEO title="Chinonso Ezeigbo · Product Designer" description="Product designer creating web and mobile products that are simple to use and straightforward to build." />
      
      {/* 1. HERO - compact, proof first, work visible below */}
      <section className="relative flex flex-col items-center px-6 pt-32 md:pt-36 pb-12 overflow-hidden bg-[var(--bg)]">
        <FadeIn className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="mb-6 text-[12px] font-medium tracking-[0.2em] text-white/50 uppercase">Chinonso Ezeigbo · Product Designer</div>

          <h1 className="font-['DM_Sans'] text-[clamp(36px,5.4vw,72px)] font-medium leading-[1.05] tracking-[-0.035em] text-center max-w-[960px] mb-6 pb-1 text-white">
            Design systems and complex products, made simple to use.
          </h1>

          <p className="text-[17px] md:text-[19px] text-white/65 text-center max-w-[640px] leading-[1.6] mb-8">
            I design web and mobile apps that feel simple to use, keep people's data safe, and are a pleasure for developers to build.
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden w-full max-w-[820px] mb-8">
            {[
              ['4+', 'years in product design'],
              ['3', 'years in-house on a B2B SaaS product'],
              ['70+', 'component design system, co-built'],
              ['MSc', 'Cyber Security'],
            ].map(([value, label]) => (
              <div key={label} className="bg-[var(--bg)] px-5 py-5 text-center md:text-left">
                <dt className="sr-only">{label}</dt>
                <dd className="m-0">
                  <span className="block font-['DM_Sans'] text-[28px] md:text-[32px] font-medium text-white tracking-tight leading-none mb-2">{value}</span>
                  <span className="block text-[13px] text-white/55 leading-[1.4]">{label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link to="/projects" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-black font-semibold text-[15px] text-center transition-all duration-300">
              View projects
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-[15px] text-center border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              Get in touch
            </Link>
          </div>

          <a href="mailto:cezeigbo4@gmail.com" className="mt-6 text-[15px] text-white/60 hover:text-white underline underline-offset-4 decoration-white/30 transition-colors">
            cezeigbo4@gmail.com
          </a>
        </FadeIn>
      </section>

      {/* 3. SELECTED WORK */}
      <section className="pt-0 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
            <h2 className="font-['DM_Sans'] text-[clamp(20px,2.2vw,26px)] font-medium tracking-tight text-white leading-none">Selected projects</h2>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
              View All Projects
              <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { id: 'appsatile', title: 'Appsatile Design System', tag: 'Design System · 70+ components', alt: 'Appsatile design system components and tokens', pill: 'bg-black/40 border-white/15 text-white/85' },
              { id: 'appsatile-workspace', title: 'Appsatile Workspace', tag: 'Product Design · Rebuild', alt: 'Appsatile Workspace business productivity suite', pill: 'bg-black/40 border-white/15 text-white/85' },
              { id: 'lazyzone', title: 'LazyZoneLabs', tag: 'AI Creator Suite', alt: 'LazyZoneLabs AI Creator Suite', pill: 'bg-black/40 border-white/15 text-white/85' },
              { id: 'keel', title: 'Keel', tag: 'Security App · Concept', alt: 'Keel work account safety app concept', pill: 'bg-black/40 border-white/15 text-white/85' },
            ].map((p, i) => (
              <FadeIn key={p.id} direction="up" delay={Math.min(i, 3) * 0.1} className={i === 0 ? 'md:col-span-3' : ''}>
                <Link to={`/projects/${p.id}`} className="group block w-full rounded-2xl overflow-hidden relative bg-[var(--card)] border border-white/10 hover:border-white/20 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                  <img src={`/${p.id}-thumbnail.webp`} loading="lazy" decoding="async" className={`w-full ${i === 0 ? 'aspect-[4/3] md:aspect-[16/9]' : 'aspect-[4/3]'} object-cover transition-transform duration-500 group-hover:scale-[1.03]`} alt={p.alt} />
                  <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 z-20">
                    <div className={`px-4 py-1.5 rounded-full border text-[12px] font-medium tracking-wide mb-3 inline-block ${p.pill}`}>{p.tag}</div>
                    <h3 className="sr-only">{p.title}</h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-white font-semibold text-[15px] hover:bg-white/10 transition-all group">
              View All Projects
              <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. LOGO SECTION */}
      <section className="py-16 border-y border-white/5 bg-[var(--bg)]/50 overflow-hidden">
        <FadeIn className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
          <div className="text-[12px] font-medium tracking-[0.2em] uppercase text-white/50 mb-10 border-b border-white/10 pb-4 w-full text-center">
            Worked with
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8">
             <Link to="/projects/appsatile"  className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/60 transition-all duration-300 hover:text-white">Appsatile</Link>
             <Link to="/projects/huntly"      className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/60 transition-all duration-300 hover:text-white">HuntlyAi</Link>
             <Link to="/projects/lazyzone"    className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/60 transition-all duration-300 hover:text-white">LazyZoneLabs</Link>
             <Link to="/projects/cook-by-ugo" className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/60 transition-all duration-300 hover:text-white">Cook by Ugo</Link>
             <Link to="/projects/nikos-farm"  className="font-['DM_Sans'] font-medium text-[22px] tracking-tight text-white/60 transition-all duration-300 hover:text-white">Nikos Farm</Link>
          </div>
        </FadeIn>
      </section>


    </div>
  );
}
