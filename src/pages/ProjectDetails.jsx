import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FadeIn } from '../components/ui/FadeIn';
import SEO from '../components/ui/SEO';

export default function ProjectDetails() {
  const { id } = useParams();
  
  const projectsData = {
    'appsatile': {
      id: 'appsatile',
      title: "Appsatile",
      type: "Design System",
      category: "Design Architecture",
      role: "Lead UI/UX Designer",
      heroImg: "/appsatile-thumbnail.png",
      liveLink: null,
      overview: "At Appsatile, I spearheaded the creation and implementation of a comprehensive, scalable design system. The goal was to unify the visual language across all company products, ensuring a consistent user experience while massively accelerating developer velocity. This involved creating extensive component libraries, defining strict typography and color tokens, and documenting interaction guidelines.",
      objectives: "The primary objective was to reduce design-to-development handoff time by 40% and eliminate visual inconsistencies across core applications. By establishing a single source of truth for all UI components, I empowered product teams to build faster and with higher confidence.",
      reviews: [
        { name: "Jerome Bell", role: "VP of Product, Appsatile", text: "Nonso delivered a completely transformative design system architecture. It accelerated our frontend development cycle by 40%." },
        { name: "Dianne Russell", role: "Engineering Director", text: "The systematic integration of Nonso's React and Figma libraries shaved weeks off development and bridged all handoff gaps." },
        { name: "Shane Collier", role: "Co-Founder & CTO", text: "Absolute flawless systems execution. He manages structural token variables and visual logic with perfect precision." }
      ]
    },
    'nikos-farm': {
      id: 'nikos-farm',
      title: "Nikos Farm",
      type: "E-Commerce",
      category: "E-Commerce Interface",
      role: "Lead Product Designer",
      heroImg: "/nikos-farm-thumbnail.png",
      liveLink: null,
      overview: "At Nikos Farm, I designed a premium, organic-focused e-commerce experience from the ground up. I built a user-friendly product grid, a glassmorphic sidebar shopping cart drawer, and a streamlined checkout flow to maximize customer conversions.",
      objectives: "The primary objective was to lift mobile conversions by 32% and increase Average Order Value (AOV) by establishing structured volume-discount triggers. I focused on sensory visual design and frictionless cart interactions.",
      reviews: [
        { name: "Niko Vane", role: "Owner & Founder, Nikos Farm", text: "Nonso completely reimagined how organic produce is sold online. The storefront is visually stunning, and customers keep praising the smooth checkout process." },
        { name: "Clara Brooks", role: "Digital Director", text: "The glassmorphic shopping cart and discount triggers designed by Nonso led to an immediate 35% bump in average order value. A strategic masterpiece." },
        { name: "Marcus Thorne", role: "Operations Lead", text: "The integrated admin crop and distribution dashboard has simplified our shipping logs. Stunning aesthetic combined with sheer functional power." }
      ]
    },
    'aptinfy': {
      id: 'aptinfy',
      title: "Aptinfy",
      type: "Logo & Brand Identity",
      category: "Brand Design",
      role: "Lead Identity Designer",
      heroImg: "/aptinfy-thumbnail.png",
      liveLink: null,
      overview: "At Aptinfy, I designed a modern, geometric logo and a comprehensive visual brand identity. The logo mark blends modular connectivity with a clean, tech-focused emblem representing intelligence and secure data nodes. I established a vibrant purple-to-pink gradient system, premium dark-mode presentation templates, and systematic typography guidelines to create a high-fidelity visual experience.",
      objectives: "The primary objective was to build a modern, high-tech logo mark that scales perfectly from a 16x16 pixel favicon to massive marketing billboards, while conveying trust, connectivity, and mathematical precision.",
      reviews: [
        { name: "Sarah Jenkins", role: "VP of Product, Aptinfy", text: "Nonso's visual identity package completely transformed how our brand is perceived. The new logo is both futuristic and highly professional." },
        { name: "Liam O'Connor", role: "Marketing Director", text: "The systematic color guidelines and visual assets Nonso provided made launching our product landing page a breeze." },
        { name: "Bessie Cooper", role: "Creative Director", text: "A clean, mathematically balanced logo mark. The visual execution is absolutely flawless." }
      ]
    }
  };

  const project = projectsData[id] || projectsData['appsatile'];



  return (
    <div className="w-full relative bg-[#0a0a0a]">
      <SEO title={`${project.title} | Case Study`} description={project.overview.slice(0, 150) + "..."} image={project.heroImg} />
      
      {/* 1. HERO HEADER */}
      <section className="bg-[var(--bg3)] pt-32 pb-16 px-6 text-center border-b border-[var(--border)]">
        <FadeIn>
          <h1 className="font-['DM_Sans'] text-[32px] md:text-[48px] font-bold text-white tracking-tight mb-4">Project Details</h1>
          <div className="flex items-center justify-center gap-2 text-[14px] text-[var(--muted)] font-['Inter_Tight']">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>-</span>
            <span className="text-white">Project Details</span>
          </div>
        </FadeIn>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-16">
        {/* 2. META ROW */}
        <FadeIn delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-[var(--border)] pb-8 mb-12">
           <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div>
                 <div className="text-[12px] font-bold tracking-widest text-[#555] uppercase mb-1">Role</div>
                 <div className="text-white font-medium">{project.role}</div>
              </div>
              <div>
                 <div className="text-[12px] font-bold tracking-widest text-[#555] uppercase mb-1">Category</div>
                 <div className="text-white font-medium">{project.category}</div>
              </div>
              <div className="max-w-[400px]">
                 <div className="text-white font-['DM_Sans'] font-bold text-[24px] mb-2">{project.title}</div>
                 <div className="text-[var(--muted)] text-[14px] leading-[1.6]">Comprehensive audit architecture across development.</div>
              </div>
           </div>
           
           {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="shrink-0 px-8 py-3.5 rounded-[4px] bg-[var(--blue)] hover:bg-[var(--blue-dk)] text-white text-[14px] font-bold transition-all shadow-[0_0_20px_rgba(57,123,251,0.2)]">
                {project.liveLink.includes('figma.com') ? 'View Figma Prototype' : 'Visit Live Site'}
              </a>
           )}
        </FadeIn>

        <FadeIn direction="up" className="w-full mb-32">
          <div className={`w-full flex flex-col gap-0 rounded-2xl md:rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10 leading-none ${
            project.id === 'appsatile' ? 'bg-[#f8f9fa]' : 'bg-[#0d0f0d]'
          }`}>
            {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => {
              const prefix = project.id;
              
              if (prefix === 'appsatile' && num === 10) {
                return (
                  <iframe 
                    key={num}
                    src={`/appsatile-10.html`} 
                    className="w-full min-h-[800px] border-none block m-0 p-0 align-bottom bg-transparent"
                    style={{ border: 'none', margin: 0, padding: 0, display: 'block' }}
                    title={`Appsatile Section ${num}`}
                  />
                );
              }
              
              const isVideo = prefix === 'appsatile' && [3, 16, 21, 31].includes(num);
              
              return isVideo ? (
                <video 
                  key={num}
                  src={`/${prefix}-${num}.mp4`} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto block m-0 p-0 align-bottom object-cover"
                  style={{ display: 'block', margin: 0, padding: 0 }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <img 
                  key={num}
                  src={`/${prefix}-${num}.png`} 
                  alt={`${project.title} Section ${num}`} 
                  className="w-full h-auto block m-0 p-0 align-bottom object-cover" 
                  style={{ display: 'block', margin: 0, padding: 0 }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }} 
                />
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* 7. REVIEWS */}
      <section className="bg-[var(--bg2)] py-20 border-y border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6">
           <FadeIn direction="up">
             <h2 className="font-['DM_Sans'] text-[24px] font-bold text-white mb-10">Review</h2>
           </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {project.reviews.map((quote, i) => (
                 <FadeIn key={i} delay={i * 0.1}>
                   <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] h-full">
                      <div className="flex gap-4 items-center mb-6">
                        <div className="w-12 h-12 rounded bg-[#0a0a0a] border border-[var(--border)] flex items-center justify-center font-bold text-white/30 text-[14px]">
                          {quote.name.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-['DM_Sans'] font-bold text-white text-[16px]">{quote.name}</div>
                          <div className="text-[12px] text-[var(--muted)] mt-1">{quote.role}</div>
                          <div className="flex gap-1 text-[var(--green)] mt-2">
                            <svg className="w-3 h-3 fill-[var(--green)]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg className="w-3 h-3 fill-[var(--green)]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg className="w-3 h-3 fill-[var(--green)]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg className="w-3 h-3 fill-[var(--green)]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <svg className="w-3 h-3 fill-[#333]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                         </div>
                       </div>
                     </div>
                     <p className="text-[14px] text-white/50 leading-[1.6]">"{quote.text}"</p>
                  </div>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>

      {/* 8. BACK TO WORK */}
      <section className="bg-[var(--bg)] py-32 text-center">
         <FadeIn className="max-w-[800px] mx-auto px-6 mb-16">
            <h2 className="font-['DM_Sans'] text-[36px] md:text-[48px] font-bold text-white leading-tight mb-6">
              Interested in collaborating?
            </h2>
            <p className="text-[var(--muted)] text-[16px] leading-[1.6]">
              Let's build something magical together. Get in touch to discuss your next project.
            </p>
         </FadeIn>

         <FadeIn delay={0.1} className="flex justify-center gap-4 mt-12 pb-12">
            <Link to="/projects" className="px-10 py-4 rounded-[4px] border border-[var(--border)] text-white text-[16px] font-bold transition-all hover:bg-white hover:text-black">
               Back to Projects
            </Link>
            <Link to="/contact" className="px-10 py-4 rounded-[4px] bg-[var(--blue)] hover:bg-[var(--blue-dk)] text-white text-[16px] font-bold transition-all shadow-[0_0_20px_rgba(57,123,251,0.2)]">
               Get in Touch
            </Link>
         </FadeIn>
      </section>

    </div>
  );
}
