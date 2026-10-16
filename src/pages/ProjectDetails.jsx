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
      overview: "I designed and built Appsatile's enterprise SaaS design system from the ground up, establishing visual consistency, reducing technical debt, and accelerating sprint velocity across three separate product teams.",
      problem: "Appsatile had scaled rapidly across three independent front-end squads without a shared design foundation. Teams were duplicating components with subtle styling discrepancies, creating visual fragmentation, slow release cycles, and accessibility regressions.",
      deliverables: ["Component Library", "Design Tokens Architecture", "Interactive Figma Specs", "WCAG 2.1 AA Compliance", "Documentation Guide"],
      metrics: [
        { value: "50%", label: "Faster sprint implementation" },
        { value: "100%", label: "WCAG 2.1 AA compliant" },
        { value: "0", label: "Component token drift" }
      ],
      decisions: [
        {
          pillar: "01. Tokenized Architecture over Ad-Hoc Styles",
          rationale: "Rather than hardcoding hex values into individual Figma layers, I created a three-tier token hierarchy (Global, Semantic, Component-level). This made dark mode seamless and gave developers a 1:1 CSS variable mapping that eliminated guessing during implementation."
        },
        {
          pillar: "02. Component Variant Symmetry with React Props",
          rationale: "Every Figma component variant, boolean property, and state (hover, focus, disabled, active) was named to mirror React component props exactly. Handover documentation became self-explanatory, cutting down engineering questions by half."
        },
        {
          pillar: "03. Accessibility as a Default Constraint",
          rationale: "All text and surface combinations were audited to pass WCAG AA contrast standards. Dedicated keyboard focus indicators and tap-target boundaries (minimum 44x44px) were built into base components, preventing downstream accessibility debt."
        }
      ],
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
      overview: "For Nikos Farm, I designed a high-converting e-commerce experience tailored to organic produce buyers, featuring intuitive seasonal browsing, instant farm bundle recommendations, and a frictionless slide-out checkout.",
      problem: "The original storefront had a 68% mobile cart abandonment rate. Customers struggled with a clunky multi-step checkout, found seasonal produce availability confusing, and hesitated to purchase without clear harvest date and provenance signals.",
      deliverables: ["E-Commerce UX Flow", "Slide-Out Cart Drawer", "Product Catalog Grid", "Harvest Origin Badges", "Mobile Checkout UI"],
      metrics: [
        { value: "+34%", label: "Mobile checkout conversion" },
        { value: "+22%", label: "Average order value via bundles" },
        { value: "-44%", label: "Reduction in cart abandonment" }
      ],
      decisions: [
        {
          pillar: "01. Slide-Out Cart Drawer with Direct Delivery Booking",
          rationale: "Instead of routing shoppers to a separate checkout page, I designed an interactive cart drawer where customers can modify quantities, pick their harvest delivery slot, and apply bundle savings without ever losing their place in the catalog."
        },
        {
          pillar: "02. Building Trust with Origin and Harvest Timestamps",
          rationale: "Organic food shoppers care deeply about freshness. I introduced prominent harvest date tags, farmer notes, and clear storage advice on every product card, eliminating hesitation and converting casual visitors into repeat subscribers."
        },
        {
          pillar: "03. Thumb-Zone Mobile Checkout Optimization",
          rationale: "With over 70% of shoppers on mobile, all key interactive elements (quantity steppers, bundle add-ons, and payment triggers) were anchored to the natural thumb reach area at the bottom of the viewport, reducing friction."
        }
      ],
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
      overview: "For Aptinfy, I crafted a distinct geometric brand identity and scalable design system. The mark brings together concepts of connectivity, intelligence, and secure cloud infrastructure across digital and enterprise touchpoints.",
      problem: "Preparing for venture fundraising and enterprise rollout, Aptinfy needed a modern visual identity that conveyed technical sophistication without feeling sterile. Their existing mark was visually generic and disintegrated when scaled down to favicon and mobile app sizes.",
      deliverables: ["Geometric Logo Suite", "Scalable Favicon Matrix", "Brand Guidelines Book", "Typography Hierarchy", "Pitch Deck Master Templates"],
      metrics: [
        { value: "16px to 4K", label: "Pixel-perfect scalability" },
        { value: "100%", label: "Brand consistency across decks" },
        { value: "3 Weeks", label: "Sprint delivery timeline" }
      ],
      decisions: [
        {
          pillar: "01. Mathematical Geometric Proportions",
          rationale: "I engineered the mark using precise circular ratios and balanced negative space. This ensures visual harmony and legibility at every scale, from a 16px browser tab icon to high-resolution keynote screens."
        },
        {
          pillar: "02. High-Contrast Palette with Technical Optimism",
          rationale: "To avoid corporate clichés while preserving cybersecurity authority, I paired deep obsidian backgrounds with vibrant purple and electric lavender gradients. This created a confident, modern aesthetic that stood out in pitch meetings."
        },
        {
          pillar: "03. Developer-Ready Token Kit and Master Templates",
          rationale: "I exported clean SVG assets with documented viewboxes, along with CSS hex variables and Figma presentation masters. The marketing and engineering teams were able to roll out consistent landing pages and decks immediately."
        }
      ],
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
      overview: "Cook by Ugo brings authentic Nigerian dining to Newcastle upon Tyne. I designed a sensory-led digital brand identity and responsive ordering website that takes customers smoothly from browsing signature dishes to fast checkout.",
      problem: "The business relied heavily on third-party food delivery platforms that took up to 30% commission per order and restricted brand presentation. Cook by Ugo needed an intuitive direct-ordering platform that made customization easy and encouraged customers to order directly.",
      deliverables: ["Brand Identity System", "Direct Takeout Platform", "Spice & Side Configurator", "Pickup Scheduling Flow", "Mobile First UI"],
      metrics: [
        { value: "+45%", label: "Direct order growth in 60 days" },
        { value: "90s", label: "Average order completion time" },
        { value: "30%", label: "Commission fees saved vs aggregators" }
      ],
      decisions: [
        {
          pillar: "01. Sensory-First Dish Presentation with Customization",
          rationale: "Authentic West African food relies on rich colors and aromas. I prioritized full-bleed photography paired with foolproof spice toggles (Mild, Traditional, Extra Hot) and side dish pickers so customers could tailor dishes with total confidence."
        },
        {
          pillar: "02. Streamlined 3-Step Express Checkout",
          rationale: "Eliminated registration barriers and unnecessary questions. Diners select dishes, customize condiments, choose a pickup or delivery slot, and complete checkout with Apple Pay or card in under 90 seconds."
        },
        {
          pillar: "03. Balancing Cultural Authenticity with Modern UI",
          rationale: "Blended deep forest green tones and warm golden highlights with minimalist typography. This honored Nigerian culinary traditions while presenting the brand as a polished, world-class dining destination."
        }
      ],
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
      overview: "LazyZoneLabs is an all-in-one AI creator workspace combining automated scriptwriting, realistic voice synthesis, and timeline video slicing into a focused, distraction-free web application.",
      problem: "Content creators were toggling across three separate tools to produce short-form video content. Packing complex prompt generation, audio waveform modulation, and multi-track video editing into one screen risked overwhelming users with extreme cognitive load.",
      deliverables: ["End-to-End Web App UI", "High-Focus Dark Design System", "Interactive Audio/Video Timeline", "Prompt Engineering Controls", "Handoff Specs"],
      metrics: [
        { value: "42%", label: "Faster content export cycle" },
        { value: "3-in-1", label: "Consolidated workflow tools" },
        { value: "88%", label: "Onboarding task completion" }
      ],
      decisions: [
        {
          pillar: "01. Progressive Disclosure over Feature Clutter",
          rationale: "Instead of showing every parameter simultaneously, the workspace dynamically adapts to the creator's current step: script ideation, voice synthesis, or video clipping. Secondary tools remain accessible without cluttering the primary canvas."
        },
        {
          pillar: "02. Low Eye-Strain Dark System with Decisive Red Accents",
          rationale: "Creators work for long sessions in dark environments. I used soft layered charcoal tones (60% to 90% opacity) rather than pure black, reserving saturated red accents exclusively for recording states, active clips, and primary export triggers."
        },
        {
          pillar: "03. Non-Destructive Interactive Timeline",
          rationale: "Designed visual clip handles, split points, and audio envelopes with forgiving undo states and keyboard shortcuts. Creators can scrub, trim, and sync audio tracks with instantaneous visual feedback."
        }
      ],
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
      overview: "HuntlyAi is an intelligent application workspace designed to bring clarity and structure to the modern job search by centralizing application pipelines, follow-up reminders, and resume tracking into one organized dashboard.",
      problem: "Job searching is mentally exhausting. Candidates juggle spreadsheets, messy Gmail threads, and multiple resume versions across several browser tabs, leading to missed interviews, duplicate applications, and cognitive burnout.",
      deliverables: ["Dashboard & Kanban Architecture", "Slide-Over Detail Drawer", "Automated Follow-Up Reminders", "Calm Botanical Design System", "Figma Components"],
      metrics: [
        { value: "65%", label: "Faster application logging" },
        { value: "4.9/5", label: "User satisfaction rating" },
        { value: "0", label: "Context loss via drawer views" }
      ],
      decisions: [
        {
          pillar: "01. Botanical Visual Psychology to Reduce Anxiety",
          rationale: "Job search software often looks like cold enterprise sales software. I established a soothing organic botanical palette with forest greens and warm off-whites, deliberately chosen to lower user stress during high-stakes job searches."
        },
        {
          pillar: "02. Kanban Pipeline with Slide-Over Resume Drawer",
          rationale: "Instead of opening new pages or external tabs, clicking an opportunity slides open a focused drawer with job details, interview history, and the matched resume side-by-side, preserving workflow momentum."
        },
        {
          pillar: "03. Actionable Reminders without Notification Fatigue",
          rationale: "Color-coded days-elapsed tags and gentle reminder badges surface when it is time to send a follow-up note, keeping users organized without flooding them with anxiety-inducing notifications."
        }
      ],
      reviews: [
        { name: "Julian Thorne", role: "Co-Founder & CEO, HuntlyAi", text: "Nonso brought incredible clarity to our product. He took a chaotic job tracking workflow and designed an interface that feels genuinely calming and intuitive to use." },
        { name: "Sophia Martinez", role: "Head of Growth", text: "The onboarding flow and application dashboard Nonso designed had an immediate impact on our retention. Users constantly praise how easy it is to keep track of interviews." },
        { name: "David Kim", role: "Lead Full-Stack Engineer", text: "Nonso's Figma components and design tokens made front-end development seamless. The visual hierarchy and state treatments were thoughtful from day one." }
      ]
    }
  };

  // Aliases
  projectsData['lazyzonelab'] = projectsData['lazyzone'];
  projectsData['huntly-ai'] = projectsData['huntly'];
  projectsData['huntlyai'] = projectsData['huntly'];

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

        {/* 3. CASE STUDY BRIEFING: CRITICAL THINKING & TRADE-OFFS */}
        <div className="mb-20 flex flex-col gap-12">
          
          {/* Deliverables tags */}
          {project.deliverables && (
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[12px] font-bold tracking-widest text-[#666] uppercase mr-2">Core Deliverables:</span>
                {project.deliverables.map((item, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-medium text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Overview & Problem Statement Cards */}
          <FadeIn delay={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[var(--blue)]/10 border border-[var(--blue)]/30 flex items-center justify-center text-[var(--blue)] font-bold text-[14px]">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  </div>
                  <span className="text-[12px] font-bold tracking-widest uppercase text-white/50">Executive Overview</span>
                </div>
                <h3 className="font-['DM_Sans'] text-[22px] md:text-[26px] font-bold text-white mb-4 leading-snug">
                  The Mission & Context
                </h3>
                <p className="font-['Inter_Tight'] text-[15px] md:text-[16px] text-white/70 leading-[1.7]">
                  {project.overview}
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-[14px]">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  </div>
                  <span className="text-[12px] font-bold tracking-widest uppercase text-white/50">The Core Friction</span>
                </div>
                <h3 className="font-['DM_Sans'] text-[22px] md:text-[26px] font-bold text-white mb-4 leading-snug">
                  The Problem Space
                </h3>
                <p className="font-['Inter_Tight'] text-[15px] md:text-[16px] text-white/70 leading-[1.7]">
                  {project.problem || project.objectives}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Critical Thinking & Trade-Offs Deep Dive */}
          {project.decisions && (
            <FadeIn delay={0.25} className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-[var(--border)]">
                <div>
                  <div className="text-[12px] font-bold tracking-widest uppercase text-[var(--tan)] mb-2">Design Rationale</div>
                  <h3 className="font-['DM_Sans'] text-[28px] md:text-[34px] font-bold text-white">
                    Critical Decisions & Architecture Trade-Offs
                  </h3>
                </div>
                <p className="text-[14px] text-white/40 max-w-[420px]">
                  Why specific patterns, layouts, and token structures were selected over common alternatives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.decisions.map((dec, idx) => (
                  <div key={idx} className="p-7 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex flex-col justify-between hover:border-white/20 transition-all">
                    <div>
                      <div className="font-['DM_Sans'] text-[16px] font-bold text-[var(--blue)] mb-3">
                        {dec.pillar}
                      </div>
                      <p className="font-['Inter_Tight'] text-[14px] text-white/60 leading-[1.7]">
                        {dec.rationale}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Measurable Outcomes & Credibility Stats */}
          {project.metrics && (
            <FadeIn delay={0.3} className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center sm:text-left sm:border-r last:border-none border-white/10 sm:pr-6 sm:last:pr-0">
                  <div className="font-['DM_Sans'] text-[36px] md:text-[44px] font-bold text-white tracking-tight leading-none mb-2">
                    {metric.value}
                  </div>
                  <div className="text-[13px] md:text-[14px] text-white/50 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </FadeIn>
          )}

          {/* Transition to Visual Walkthrough */}
          <div className="pt-10 border-t border-white/10 flex flex-col items-center text-center">
            <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">Visual System</div>
            <h3 className="font-['DM_Sans'] text-[24px] md:text-[30px] font-bold text-white">
              Interface Architecture & Design Slices
            </h3>
          </div>

        </div>

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
