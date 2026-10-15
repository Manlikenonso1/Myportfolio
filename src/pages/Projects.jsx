import { Link } from 'react-router-dom';
import { FadeIn } from '../components/ui/FadeIn';
import PageHeader from '../components/sections/PageHeader';
import CallToAction from '../components/sections/CallToAction';
import SEO from '../components/ui/SEO';

export default function Projects() {
  return (
    <div className="w-full relative pb-10 bg-[var(--bg)]">
      <SEO title="Projects | Chinonso Ezeigbo" description="A collection of structured UI/UX case studies." />

      {/* 1. HERO */}
      <PageHeader title="Projects" breadcrumbText="Work" />

      {/* 2. RECENT PROJECTS (APPSATILE & NIKOS FARM) */}
      <section className="px-6 py-20 max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="font-['DM_Sans'] text-[32px] md:text-[40px] font-bold text-white mb-12">Featured Projects</h2>
        </FadeIn>
        
        <div className="flex flex-col gap-24">
          {/* Appsatile Showcase */}
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 border-b border-white/10 pb-6">
               <div>
                 <div className="text-[var(--muted)] text-[14px] uppercase tracking-widest font-bold mb-2">Design System</div>
                 <h3 className="font-['DM_Sans'] text-[32px] md:text-[48px] font-bold text-white">Appsatile</h3>
               </div>
               <Link to="/projects/appsatile" className="px-8 py-3 rounded-full border border-[var(--border)] bg-black text-white font-medium text-[14px] hover:bg-white hover:text-black transition-colors w-fit">
                 View Case Study
               </Link>
            </div>
            <Link to="/projects/appsatile" className="block w-full rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden group">
               <img src="/appsatile-thumbnail.png" alt="Appsatile Design System" className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 opacity-80 group-hover:opacity-100" />
            </Link>
          </FadeIn>

          {/* LazyZoneLabs Showcase */}
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 border-b border-white/10 pb-6">
               <div>
                 <div className="text-[var(--muted)] text-[14px] uppercase tracking-widest font-bold mb-2">AI Creator Suite & Web App</div>
                 <h3 className="font-['DM_Sans'] text-[32px] md:text-[48px] font-bold text-white">LazyZoneLabs</h3>
               </div>
               <Link to="/projects/lazyzone" className="px-8 py-3 rounded-full border border-[var(--border)] bg-black text-white font-medium text-[14px] hover:bg-white hover:text-black transition-colors w-fit">
                 View Case Study
               </Link>
            </div>
            <Link to="/projects/lazyzone" className="block w-full rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden group">
               <img src="/lazyzone-thumbnail.png" alt="LazyZoneLabs AI Creator Suite" className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 opacity-85 group-hover:opacity-100" />
            </Link>
          </FadeIn>

          {/* HuntlyAi Showcase */}
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 border-b border-white/10 pb-6">
               <div>
                 <div className="text-[var(--muted)] text-[14px] uppercase tracking-widest font-bold mb-2">AI Job Search & Application Workspace</div>
                 <h3 className="font-['DM_Sans'] text-[32px] md:text-[48px] font-bold text-white">HuntlyAi</h3>
               </div>
               <Link to="/projects/huntly" className="px-8 py-3 rounded-full border border-[var(--border)] bg-black text-white font-medium text-[14px] hover:bg-white hover:text-black transition-colors w-fit">
                 View Case Study
               </Link>
            </div>
            <Link to="/projects/huntly" className="block w-full rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden group">
               <img src="/huntly-thumbnail.png" alt="HuntlyAi Application Workspace" className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 opacity-85 group-hover:opacity-100" />
            </Link>
          </FadeIn>

          {/* Nikos Farm Showcase */}
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 border-b border-white/10 pb-6">
               <div>
                 <div className="text-[var(--muted)] text-[14px] uppercase tracking-widest font-bold mb-2">E-Commerce</div>
                 <h3 className="font-['DM_Sans'] text-[32px] md:text-[48px] font-bold text-white">Nikos Farm</h3>
               </div>
               <Link to="/projects/nikos-farm" className="px-8 py-3 rounded-full border border-[var(--border)] bg-black text-white font-medium text-[14px] hover:bg-white hover:text-black transition-colors w-fit">
                 View Case Study
               </Link>
            </div>
            <Link to="/projects/nikos-farm" className="block w-full rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden group">
               <img src="/nikos-farm-thumbnail.png" alt="Nikos Farm E-Commerce" className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 opacity-80 group-hover:opacity-100" />
            </Link>
          </FadeIn>

          {/* Cook by Ugo Showcase */}
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 border-b border-white/10 pb-6">
               <div>
                 <div className="text-[var(--muted)] text-[14px] uppercase tracking-widest font-bold mb-2">Food & Hospitality</div>
                 <h3 className="font-['DM_Sans'] text-[32px] md:text-[48px] font-bold text-white">Cook by Ugo</h3>
               </div>
               <Link to="/projects/cook-by-ugo" className="px-8 py-3 rounded-full border border-[var(--border)] bg-black text-white font-medium text-[14px] hover:bg-white hover:text-black transition-colors w-fit">
                 View Case Study
               </Link>
            </div>
            <Link to="/projects/cook-by-ugo" className="block w-full rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden group">
               <img src="/cook-by-ugo-thumbnail.png" alt="Cook by Ugo Digital Experience" className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 opacity-85 group-hover:opacity-100" />
            </Link>
          </FadeIn>

          {/* Aptinfy Showcase */}
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 border-b border-white/10 pb-6">
               <div>
                 <div className="text-[var(--muted)] text-[14px] uppercase tracking-widest font-bold mb-2">Brand Identity</div>
                 <h3 className="font-['DM_Sans'] text-[32px] md:text-[48px] font-bold text-white">Aptinfy</h3>
               </div>
               <Link to="/projects/aptinfy" className="px-8 py-3 rounded-full border border-[var(--border)] bg-black text-white font-medium text-[14px] hover:bg-white hover:text-black transition-colors w-fit">
                 View Case Study
               </Link>
            </div>
            <Link to="/projects/aptinfy" className="block w-full rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden group">
               <img src="/aptinfy-thumbnail.png" alt="Aptinfy Logo Branding" className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 opacity-80 group-hover:opacity-100" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="px-6 py-32 max-w-[1200px] mx-auto border-t border-[var(--border)]">
        <FadeIn className="text-center mb-16">
          <div className="text-[14px] text-[var(--muted)] tracking-[0.2em] uppercase font-bold mb-4">Testimonials</div>
          <h2 className="font-['DM_Sans'] text-[40px] md:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
            Hear What They're Saying About Me
          </h2>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Chelsea Hardy", role: "Lead Product Architect, Appsatile", text: "Nonso has a rare ability to understand complex product requirements and translate them into clean, intuitive screens. Working with him was an absolute pleasure." },
            { name: "Theresa Webb", role: "Product Lead, Nikos Farm", text: "Nonso delivered ahead of schedule with exceptional quality. The new storefront interface has received overwhelmingly positive feedback from our customers." },
            { name: "Cody Fisher", role: "VP of Engineering, Aptinfy", text: "Nonso brought clarity and structure to our brand and product UI. He communicates clearly, delivers on time, and makes the whole process easy." }
          ].map((quote, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] h-full flex flex-col justify-between hover:border-white/20 transition-colors">
                <div>
                  <div className="flex gap-4 items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--bg2)] border border-[var(--border)] flex items-center justify-center font-bold text-white/40 text-[14px]">
                      {quote.name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-['DM_Sans'] font-bold text-white text-[16px]">{quote.name}</div>
                      <div className="text-[12px] text-[var(--muted)] mt-1">{quote.role}</div>
                      <div className="flex gap-1 text-[var(--green)] mt-2">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-[14px] text-white/60 leading-[1.6]">"{quote.text}"</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 6. CLIENT LOGOS */}
      <section className="py-[60px] border-y border-[var(--border)] bg-[#050505]">
        <FadeIn className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
          <div className="font-['DM_Sans'] text-[16px] font-bold text-white mb-6 w-full text-center">
            Clients & Collaborations
          </div>
          <div className="flex justify-center items-center flex-wrap gap-10 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 mt-4">
             <div className="font-['DM_Sans'] font-bold text-[24px] tracking-tight text-white">Appsatile</div>
             <div className="font-['DM_Sans'] font-bold text-[24px] tracking-tight text-white">HuntlyAi</div>
             <div className="font-['DM_Sans'] font-bold text-[24px] tracking-tight text-white">LazyZone</div>
             <div className="font-['DM_Sans'] font-bold text-[24px] tracking-tight text-white">Cook by Ugo</div>
             <div className="font-['DM_Sans'] font-bold text-[24px] tracking-tight text-white">Talstrike</div>
             <div className="font-['DM_Sans'] font-bold text-[24px] tracking-tight text-white">cloudnet IQ</div>
             <div className="font-['DM_Sans'] font-bold text-[24px] tracking-tight text-white">Nikos Farm</div>
             <div className="font-['DM_Sans'] font-bold text-[24px] tracking-tight text-white">Aptinfy</div>
          </div>
        </FadeIn>
      </section>

      {/* 7. CALL TO ACTION */}
      <CallToAction />

    </div>
  );
}
