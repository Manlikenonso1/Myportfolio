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
      sliceCount: 33,
      overview: "I designed and built Appsatile's design system from the ground up to give their products a unified, modern look. By setting up clean reusable components, clear type and color tokens, and solid guidelines, we cut down back-and-forth between designers and engineers and sped up product shipping.",
      objectives: "The goal was straightforward: remove design bottlenecks, eliminate visual inconsistencies across their apps, and give the engineering team a single source of truth they could build with quickly and confidently.",
      reviews: [
        { name: "Jerome Bell", role: "VP of Product, Appsatile", text: "Nonso built a clean, intuitive design system for us. It made handing work over to our engineers effortless and noticeably sped up our release cycles." },
        { name: "Dianne Russell", role: "Engineering Director", text: "Nonso organized our Figma components and design tokens so clearly that our front-end team was able to build pages in half the usual time." },
        { name: "Shane Collier", role: "Co-Founder & CTO", text: "He has an incredible eye for detail and structure. Working with his components made building and maintaining our screens a breeze." }
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
      sliceCount: 11,
      overview: "For Nikos Farm, I designed an e-commerce experience tailored to organic produce buyers. I created a clean product browse experience, a slide-out cart drawer for quick edits, and a simple checkout flow that makes ordering fresh farm food easy.",
      objectives: "The main focus was making mobile shopping fast and painless, highlighting farm-fresh photography, and encouraging higher order values with clear bundle discounts.",
      reviews: [
        { name: "Niko Vane", role: "Owner & Founder, Nikos Farm", text: "Nonso made our online farm shop look beautiful and inviting. Our customers constantly mention how easy it is to place an order." },
        { name: "Clara Brooks", role: "Digital Director", text: "The new cart experience and bundle recommendations made an immediate impact on our sales. It simply works." },
        { name: "Marcus Thorne", role: "Operations Lead", text: "The order views and product management screens Nonso designed saved our fulfillment team hours every single day." }
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
      sliceCount: 1,
      overview: "For Aptinfy, I crafted a distinct brand identity and geometric logo. The mark brings together ideas of connectivity, intelligence, and secure tech infrastructure. Alongside the mark, I built a cohesive color palette, modern typography hierarchy, and branded templates for their marketing and product decks.",
      objectives: "The goal was to create a bold, memorable identity that looks just as sharp as a 16px favicon in a browser tab as it does on a conference banner, projecting confidence and technical polish.",
      reviews: [
        { name: "Sarah Jenkins", role: "VP of Product, Aptinfy", text: "Nonso gave Aptinfy an identity that immediately resonated with our audience. The new mark feels both sharp and authentic." },
        { name: "Liam O'Connor", role: "Marketing Director", text: "The brand guide and asset kit Nonso handed off made designing our landing pages and marketing collateral completely seamless." },
        { name: "Bessie Cooper", role: "Creative Director", text: "A thoughtfully balanced mark with great attention to proportion and versatility. Fantastic work all around." }
      ]
    },
    'cook-by-ugo': {
      id: 'cook-by-ugo',
      title: "Cook by Ugo",
      type: "Food & Hospitality",
      category: "Restaurant & Ordering Experience",
      role: "Lead UI/UX & Brand Designer",
      heroImg: "/cook-by-ugo-thumbnail.png",
      liveLink: null,
      sliceCount: 10,
      overview: "Cook by Ugo brings authentic Nigerian home cooking to Newcastle upon Tyne. I designed a food-led digital brand identity and responsive ordering website—taking customers smoothly from browsing signature dishes to customizing meal spice levels, selecting delivery times, and completing checkout with ease.",
      objectives: "The primary objective was translating the warmth of homemade West African dining into a modern digital experience. I focused on mouth-watering visual hierarchy, clear menu categories, and a frictionless mobile ordering flow that boosted direct takeout orders.",
      reviews: [
        { name: "Ugochukwu Nwosu", role: "Founder & Head Chef, Cook by Ugo", text: "Nonso captured the warmth and soul of our kitchen perfectly. Customers find the online ordering so simple, and our direct orders increased noticeably right after launch." },
        { name: "Amaka O.", role: "Operations Lead, Cook by Ugo", text: "The meal customization flow and cart drawer make order management effortless. He created an interface that feels authentic and looks world-class." },
        { name: "Liam Davies", role: "Digital Marketing Consultant", text: "A stunning food e-commerce experience. Nonso balanced expressive Nigerian branding with an intuitive, clean checkout journey." }
      ]
    },
    'lazyzone': {
      id: 'lazyzone',
      title: "LazyZoneLabs",
      type: "Product & Interface Design",
      category: "AI Creator Suite & Web App",
      role: "Lead Product Designer",
      heroImg: "/lazyzone-thumbnail.png",
      liveLink: null,
      sliceCount: 10,
      overview: "LazyZoneLabs is an all-in-one AI creator workspace uniting automated scriptwriting, realistic text-to-speech studio generation, and AI video clipping. I designed the complete end-to-end web application and dark-mode design system—giving creators high-leverage tools wrapped in a focused, distraction-free environment.",
      objectives: "The core challenge was orchestrating three heavy creative workflows—writing, audio synthesis, and timeline video slicing—into one cohesive interface. I established a visual identity anchored by quiet charcoal surfaces and decisive red accents, stripping away friction so creators can focus on production.",
      reviews: [
        { name: "Devin Vance", role: "Co-Founder, LazyZoneLabs", text: "Nonso designed a clean, high-performance workspace that our creator community loves. He took complex AI pipelines and made them feel effortless and intuitive to use." },
        { name: "Elena Rostova", role: "Head of Product", text: "The studio audio controls and video clipping timeline Nonso designed solved our biggest UX bottleneck. Our engagement numbers jumped significantly after this release." },
        { name: "Marcus Chen", role: "Lead Full-Stack Engineer", text: "The component architecture and state specs Nonso handed off were rock solid. Handover was seamless, and building the dark UI was faster than any previous sprint." }
      ]
    },
    'lazyzonelab': {
      id: 'lazyzone',
      title: "LazyZoneLabs",
      type: "Product & Interface Design",
      category: "AI Creator Suite & Web App",
      role: "Lead Product Designer",
      heroImg: "/lazyzone-thumbnail.png",
      liveLink: null,
      sliceCount: 10,
      overview: "LazyZoneLabs is an all-in-one AI creator workspace uniting automated scriptwriting, realistic text-to-speech studio generation, and AI video clipping. I designed the complete end-to-end web application and dark-mode design system—giving creators high-leverage tools wrapped in a focused, distraction-free environment.",
      objectives: "The core challenge was orchestrating three heavy creative workflows—writing, audio synthesis, and timeline video slicing—into one cohesive interface. I established a visual identity anchored by quiet charcoal surfaces and decisive red accents, stripping away friction so creators can focus on production.",
      reviews: [
        { name: "Devin Vance", role: "Co-Founder, LazyZoneLabs", text: "Nonso designed a clean, high-performance workspace that our creator community loves. He took complex AI pipelines and made them feel effortless and intuitive to use." },
        { name: "Elena Rostova", role: "Head of Product", text: "The studio audio controls and video clipping timeline Nonso designed solved our biggest UX bottleneck. Our engagement numbers jumped significantly after this release." },
        { name: "Marcus Chen", role: "Lead Full-Stack Engineer", text: "The component architecture and state specs Nonso handed off were rock solid. Handover was seamless, and building the dark UI was faster than any previous sprint." }
      ]
    },
    'huntly': {
      id: 'huntly',
      title: "HuntlyAi",
      type: "Product Design",
      category: "AI Job Search & Application Tracker",
      role: "Lead Product Designer",
      heroImg: "/huntly-thumbnail.png",
      liveLink: null,
      sliceCount: 10,
      overview: "HuntlyAi is an intelligent application workspace designed to bring sanity and clarity to the modern job search. By centralizing application pipelines, Gmail follow-up reminders, and resume tracking into one organized dashboard, Huntly helps job seekers stay on top of every opportunity without the cognitive overload.",
      objectives: "A job search is inherently fragmented across job boards, email inboxes, and multiple resume files. My objective was designing a calm, structured experience using an organic botanical color palette, clean table views, and automated status alerts that transform an overwhelming process into a clear daily action plan.",
      reviews: [
        { name: "Julian Thorne", role: "Co-Founder & CEO, HuntlyAi", text: "Nonso brought incredible clarity to our product. He took a chaotic job tracking workflow and designed an interface that feels genuinely calming and intuitive to use." },
        { name: "Sophia Martinez", role: "Head of Growth", text: "The onboarding flow and application dashboard Nonso designed had an immediate impact on our retention. Users constantly praise how easy it is to keep track of interviews." },
        { name: "David Kim", role: "Lead Full-Stack Engineer", text: "Nonso's Figma components and design tokens made front-end development seamless. The visual hierarchy and state treatments were thoughtful from day one." }
      ]
    },
    'huntly-ai': {
      id: 'huntly',
      title: "HuntlyAi",
      type: "Product Design",
      category: "AI Job Search & Application Tracker",
      role: "Lead Product Designer",
      heroImg: "/huntly-thumbnail.png",
      liveLink: null,
      sliceCount: 10,
      overview: "HuntlyAi is an intelligent application workspace designed to bring sanity and clarity to the modern job search. By centralizing application pipelines, Gmail follow-up reminders, and resume tracking into one organized dashboard, Huntly helps job seekers stay on top of every opportunity without the cognitive overload.",
      objectives: "A job search is inherently fragmented across job boards, email inboxes, and multiple resume files. My objective was designing a calm, structured experience using an organic botanical color palette, clean table views, and automated status alerts that transform an overwhelming process into a clear daily action plan.",
      reviews: [
        { name: "Julian Thorne", role: "Co-Founder & CEO, HuntlyAi", text: "Nonso brought incredible clarity to our product. He took a chaotic job tracking workflow and designed an interface that feels genuinely calming and intuitive to use." },
        { name: "Sophia Martinez", role: "Head of Growth", text: "The onboarding flow and application dashboard Nonso designed had an immediate impact on our retention. Users constantly praise how easy it is to keep track of interviews." },
        { name: "David Kim", role: "Lead Full-Stack Engineer", text: "Nonso's Figma components and design tokens made front-end development seamless. The visual hierarchy and state treatments were thoughtful from day one." }
      ]
    },
    'huntlyai': {
      id: 'huntly',
      title: "HuntlyAi",
      type: "Product Design",
      category: "AI Job Search & Application Tracker",
      role: "Lead Product Designer",
      heroImg: "/huntly-thumbnail.png",
      liveLink: null,
      sliceCount: 10,
      overview: "HuntlyAi is an intelligent application workspace designed to bring sanity and clarity to the modern job search. By centralizing application pipelines, Gmail follow-up reminders, and resume tracking into one organized dashboard, Huntly helps job seekers stay on top of every opportunity without the cognitive overload.",
      objectives: "A job search is inherently fragmented across job boards, email inboxes, and multiple resume files. My objective was designing a calm, structured experience using an organic botanical color palette, clean table views, and automated status alerts that transform an overwhelming process into a clear daily action plan.",
      reviews: [
        { name: "Julian Thorne", role: "Co-Founder & CEO, HuntlyAi", text: "Nonso brought incredible clarity to our product. He took a chaotic job tracking workflow and designed an interface that feels genuinely calming and intuitive to use." },
        { name: "Sophia Martinez", role: "Head of Growth", text: "The onboarding flow and application dashboard Nonso designed had an immediate impact on our retention. Users constantly praise how easy it is to keep track of interviews." },
        { name: "David Kim", role: "Lead Full-Stack Engineer", text: "Nonso's Figma components and design tokens made front-end development seamless. The visual hierarchy and state treatments were thoughtful from day one." }
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
                 <div className="text-[var(--muted)] text-[14px] leading-[1.6]">An in-depth look at the design decisions, user flow, and final interface.</div>
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
            project.id === 'appsatile' ? 'bg-[#f8f9fa]' : project.id === 'cook-by-ugo' ? 'bg-[#1b4332]' : project.id === 'lazyzone' ? 'bg-[#080808]' : project.id === 'huntly' ? 'bg-[#102219]' : 'bg-[#0d0f0d]'
          }`}>
            {Array.from({ length: project.sliceCount || 50 }, (_, i) => i + 1).map((num) => {
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
              Have an upcoming project or need design help with an existing product? Let's chat.
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
