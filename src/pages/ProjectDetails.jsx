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
      overview: "Appsatile is a fast-growing SaaS suite. When I joined, three different product teams were building screens at the same time without a shared foundation. I designed and built their design system from scratch so both designers and engineers could move faster without breaking visual consistency.",
      problem: "Every squad was basically creating their own buttons, modals, and input fields. Buttons had different corner radii on different pages, handoffs took hours of back-and-forth in Slack, and fixing a simple color change meant updating dozens of disconnected code files.",
      deliverables: ["Component Library", "Design Tokens Architecture", "Interactive Figma Specs", "WCAG 2.1 AA Compliance", "Documentation Guide"],
      metrics: [
        { value: "50%", label: "Faster handoffs to engineers" },
        { value: "100%", label: "Accessible contrast across all screens" },
        { value: "0", label: "Mismatched components across teams" }
      ],
      decisions: [
        {
          pillar: "01. Tokens that match how devs actually write CSS",
          rationale: "Instead of picking random hex values across Figma frames, I set up a clear three-tier token system for colors, spacing, and font sizes. Every token mapped 1:1 to a CSS variable in code, so developers never had to guess whether a gap was 16px or 20px."
        },
        {
          pillar: "02. Naming components to match React props",
          rationale: "I sat down with their front-end leads to see how they structure their components. Then I named every Figma variant, boolean switch, and state (hover, active, disabled) to mirror their React props exactly. That made handoff practically self-explanatory."
        },
        {
          pillar: "03. Accessibility built in from day one",
          rationale: "I checked color contrast across every single text and background pair to make sure they passed WCAG AA standards. I also included clear keyboard focus outlines and large enough touch targets so no one had to come back and fix accessibility bugs later."
        }
      ],
      reviews: [
        { name: "Joseph Schnedir", role: "Founder, Appsatile", avatar: "/appsatile-logo.png", text: "Chinonso built a clean, intuitive design system for us. It made handing work over to our engineers effortless and noticeably sped up our release cycles." },
        { name: "Dianne Russell", role: "Engineering Director", text: "Chinonso organized our Figma components and design tokens so clearly that our front-end team was able to build pages in half the usual time." },
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
      liveLink: "https://nikosfarm.com/",
      sliceCount: 11,
      overview: "Nikos Farm sells fresh organic fruit and vegetables directly to local customers. I redesigned their online shop from the ground up to make ordering farm produce as fast and simple as possible on mobile phones.",
      problem: "Over 70% of their shoppers were visiting on mobile, but nearly 7 out of 10 people were dropping out before finishing their order. The checkout took too many steps, produce availability was confusing, and customers weren't sure how fresh the food would actually be when it arrived.",
      deliverables: ["E-Commerce UX Flow", "Slide-Out Cart Drawer", "Product Catalog Grid", "Harvest Origin Badges", "Mobile Checkout UI"],
      metrics: [
        { value: "+34%", label: "Increase in completed mobile orders" },
        { value: "+22%", label: "Higher average order size from bundles" },
        { value: "-44%", label: "Drop in cart abandonment" }
      ],
      decisions: [
        {
          pillar: "01. Slide-out cart instead of kicking people to a new page",
          rationale: "Instead of redirecting shoppers to a separate cart page every time they picked something, I built an interactive drawer. Customers can change quantities, see bundle discounts update live, and select their delivery slot without losing their place in the shop."
        },
        {
          pillar: "02. Putting harvest dates right on product cards",
          rationale: "People buy from local farms because they want real freshness. I added clear harvest dates, farmer notes, and simple storage tips right onto the product cards, which gave first-time buyers immediate confidence to check out."
        },
        {
          pillar: "03. Designing for the thumb on mobile",
          rationale: "Since most people order on their phones while on the move, I anchored all the main actions like add-to-cart buttons, quantity counters, and the checkout button to the bottom half of the screen where thumbs naturally reach."
        }
      ],
      reviews: [
        { name: "Diamond Nicholas", role: "Owner, Nikos Farm", avatar: "/nikos-farm-logo.png", text: "Chinonso made our online farm shop look beautiful and inviting. Our customers constantly mention how easy it is to place an order." },
        { name: "Clara Brooks", role: "Digital Director", text: "The new cart experience and bundle recommendations made an immediate impact on our sales. It simply works." },
        { name: "Marcus Thorne", role: "Operations Lead", text: "The order views and product management screens Chinonso designed saved our fulfillment team hours every single day." }
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
      overview: "Aptinfy is a tech startup focused on secure cloud infrastructure. I created their brand identity, visual system, and presentation templates to help them look confident and polished when pitching to enterprise clients and investors.",
      problem: "Their original logo was generic and hard to recognize. Even worse, it completely blurred together whenever it was scaled down to a small size, like in a browser tab or mobile app icon. They needed an identity that felt technical and trustworthy without looking boring.",
      deliverables: ["Geometric Logo Suite", "Scalable Favicon Matrix", "Brand Guidelines Book", "Typography Hierarchy", "Pitch Deck Master Templates"],
      metrics: [
        { value: "16px to 4K", label: "Clean legibility at any resolution" },
        { value: "100%", label: "Consistent branding across all decks" },
        { value: "3 Weeks", label: "From first sketch to full handoff" }
      ],
      decisions: [
        {
          pillar: "01. Clean circular geometry that scales down cleanly",
          rationale: "I built the logo using balanced circular geometry and bold, simple negative space. That way, the mark stays sharp and recognizable whether it is a tiny 16-pixel favicon in a browser tab or a massive graphic at a conference."
        },
        {
          pillar: "02. Deep tech tones paired with warm lavender",
          rationale: "Instead of defaulting to standard corporate blue, I paired rich dark surfaces with vibrant purple and electric lavender gradients. It communicates security and technical depth while still feeling modern and memorable."
        },
        {
          pillar: "03. Ready-to-use templates the team could actually work with",
          rationale: "I handed off clean SVG exports with proper bounding boxes, plus exact color variables and Google Slides master decks. The marketing and sales team could immediately build customer-facing decks without asking how to use the logo."
        }
      ],
      reviews: [
        { name: "Sarah Jenkins", role: "VP of Product, Aptinfy", text: "Chinonso gave Aptinfy an identity that immediately resonated with our audience. The new mark feels both sharp and authentic." },
        { name: "Liam O'Connor", role: "Marketing Director", text: "The brand guide and asset kit Chinonso handed off made designing our landing pages and marketing collateral completely seamless." },
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
      overview: "Cook by Ugo brings authentic Nigerian home cooking to Newcastle upon Tyne. I designed their direct ordering website and brand identity, giving customers a smooth way to browse dishes, customize spice levels, and order takeout in minutes.",
      problem: "Third-party delivery apps were taking up to 30% commission on every order and locking away customer data. The restaurant needed their own ordering website that made ordering takeout quick and effortless, while showing off the authentic warmth of West African hospitality.",
      deliverables: ["Brand Identity System", "Direct Takeout Platform", "Spice & Side Configurator", "Pickup Scheduling Flow", "Mobile First UI"],
      metrics: [
        { value: "+45%", label: "Growth in direct orders in two months" },
        { value: "90s", label: "Average time to complete an order" },
        { value: "30%", label: "Commission fees saved on direct sales" }
      ],
      decisions: [
        {
          pillar: "01. Food photography first with clear spice selectors",
          rationale: "Nigerian dishes are vibrant and rich. I led with large, mouth-watering dish photos and added simple spice toggles (Mild, Traditional, Extra Hot) and side dish pickers so both longtime fans and first-time guests could order with zero confusion."
        },
        {
          pillar: "02. Quick checkout in under 90 seconds",
          rationale: "Nobody wants to fill out a long form when they are hungry. I cut the ordering journey down to three simple steps: pick your food, choose a pickup or delivery slot, and pay with Apple Pay or card."
        },
        {
          pillar: "03. Warm branding with modern polish",
          rationale: "I blended deep forest greens and warm gold accents with clean, modern typography. It honors Nigerian culinary traditions while presenting the business as a top-tier, trustworthy local kitchen."
        }
      ],
      reviews: [
        { name: "Ugochukwu Nwosu", role: "Founder & Head Chef, Cook by Ugo", text: "Chinonso captured the warmth and soul of our kitchen perfectly. Customers find the online ordering so simple, and our direct orders increased noticeably right after launch." },
        { name: "Amaka O.", role: "Operations Lead, Cook by Ugo", text: "The meal customization flow and cart drawer make order management effortless. He created an interface that feels authentic and looks world-class." },
        { name: "Liam Davies", role: "Digital Marketing Consultant", text: "A stunning food e-commerce experience. Chinonso balanced expressive Nigerian branding with an intuitive, clean checkout journey." }
      ]
    },
    'lazyzone': {
      id: 'lazyzone',
      title: "LazyZoneLabs",
      type: "Product & Interface Design",
      category: "AI Creator Suite & Web App",
      role: "Lead Product Designer",
      heroImg: "/lazyzone-thumbnail.png",
      liveLink: "https://www.lazyzonelabs.com/",
      sliceCount: 10,
      overview: "LazyZoneLabs is an all-in-one AI tool for content creators who need to write scripts, generate realistic voiceovers, and edit video clips without jumping between different apps. I designed the complete web application interface from scratch.",
      problem: "Creators were juggling three separate subscription tools just to make one short-form video. The biggest design challenge was avoiding cognitive overload: packing writing prompts, audio waveforms, and video timelines into a single screen can easily become cluttered and intimidating.",
      deliverables: ["End-to-End Web App UI", "High-Focus Dark Design System", "Interactive Audio/Video Timeline", "Prompt Engineering Controls", "Handoff Specs"],
      metrics: [
        { value: "42%", label: "Faster time to produce and export video" },
        { value: "3-in-1", label: "Consolidated workflow into one screen" },
        { value: "88%", label: "New creators finishing their first video" }
      ],
      decisions: [
        {
          pillar: "01. Showing tools only when creators need them",
          rationale: "Instead of crowding the screen with dozens of sliders at once, the workspace adapts based on what you are doing. When you are writing, it feels like a clean doc. When you move to voiceover or video slicing, the waveform and trimming tools slide in smoothly."
        },
        {
          pillar: "02. A dark UI built for long editing sessions",
          rationale: "Creators often edit for hours at a time. I used soft layered charcoal surfaces instead of harsh pure blacks to minimize eye strain, saving bold red accents strictly for active recording states, cuts, and the export button."
        },
        {
          pillar: "03. An interactive timeline that doesn't punish mistakes",
          rationale: "Editing needs to feel fast and forgiving. I designed simple drag handles for trimming, instant audio previews, and standard keyboard shortcuts so creators can split and rearrange clips without worrying about losing their work."
        }
      ],
      reviews: [
        { name: "Stangly Sunday", role: "Founder, Lazyzonelab", avatar: "/lazyzonelab-logo.png", text: "Chinonso designed a clean, high-performance workspace that our creator community loves. He took complex AI pipelines and made them feel effortless and intuitive to use." },
        { name: "Elena Rostova", role: "Head of Product", text: "The studio audio controls and video clipping timeline Chinonso designed solved our biggest UX bottleneck. Our engagement numbers jumped significantly after this release." },
        { name: "Marcus Chen", role: "Lead Full-Stack Engineer", text: "The component architecture and state specs Chinonso handed off were rock solid. Handover was seamless, and building the dark UI was faster than any previous sprint." }
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
      overview: "HuntlyAi is a workspace designed to help job seekers manage their applications, interview stages, and follow-ups in one calm, organized dashboard.",
      problem: "Job hunting is stressful enough on its own. Most candidates try to stay organized with messy spreadsheets, random email alerts, and multiple resume files scattered across tabs. It feels chaotic, and it's easy to miss deadlines or forget who you reached out to.",
      deliverables: ["Dashboard & Kanban Architecture", "Slide-Over Detail Drawer", "Automated Follow-Up Reminders", "Calm Botanical Design System", "Figma Components"],
      metrics: [
        { value: "65%", label: "Faster time to log and track applications" },
        { value: "4.9/5", label: "User satisfaction rating" },
        { value: "0", label: "Lost context with slide-over drawers" }
      ],
      decisions: [
        {
          pillar: "01. A calm color palette that lowers anxiety",
          rationale: "Most CRM tools look cold, gray, and corporate. I chose an organic botanical palette with soft greens and warm neutral tones to create a peaceful environment that feels encouraging rather than overwhelming to open every morning."
        },
        {
          pillar: "02. Slide-over details so you never lose your place",
          rationale: "Instead of making users jump between different pages, clicking any job card opens a side drawer with the job post, interview notes, and the tailored resume side-by-side. You get full context in one glance without opening ten tabs."
        },
        {
          pillar: "03. Helpful reminders without the stress",
          rationale: "I used subtle color-coded tags showing days since last contact to gently remind people when to follow up, avoiding aggressive red warning badges that cause unnecessary panic."
        }
      ],
      reviews: [
        { name: "Julian Thorne", role: "Co-Founder & CEO, HuntlyAi", text: "Chinonso brought incredible clarity to our product. He took a chaotic job tracking workflow and designed an interface that feels genuinely calming and intuitive to use." },
        { name: "Sophia Martinez", role: "Head of Growth", text: "The onboarding flow and application dashboard Chinonso designed had an immediate impact on our retention. Users constantly praise how easy it is to keep track of interviews." },
        { name: "David Kim", role: "Lead Full-Stack Engineer", text: "Chinonso's Figma components and design tokens made front-end development seamless. The visual hierarchy and state treatments were thoughtful from day one." }
      ]
    }
  };

  // Aliases
  projectsData['lazyzonelab'] = projectsData['lazyzone'];
  projectsData['huntly-ai'] = projectsData['huntly'];
  projectsData['huntlyai'] = projectsData['huntly'];

  const project = projectsData[id] || projectsData['appsatile'];

  return (
    <div className="w-full relative bg-[#0a0a0a] min-h-screen">
      <SEO title={`${project.title} | Case Study`} description={project.overview.slice(0, 150) + "..."} image={project.heroImg} />
      
      {/* Background Flora Patterns */}
      {/* 1. HERO HEADER */}
      <section className="relative z-10 bg-[var(--bg3)] pt-32 pb-16 px-6 text-center border-b border-[var(--border)]">
        <FadeIn>
          <h1 className="font-['DM_Sans'] text-[32px] md:text-[52px] font-bold text-white tracking-tight mb-4">{project.title}</h1>
          <div className="flex items-center justify-center gap-2 text-[14px] text-[var(--muted)] font-['Inter_Tight']">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link to="/projects" className="hover:text-white transition-colors">Work</Link>
            <span className="text-white/30">/</span>
            <span className="text-white">{project.title}</span>
          </div>
        </FadeIn>
      </section>

      <section className="relative z-10 max-w-[1200px] mx-auto px-6 py-16">
        {/* 2. META ROW & QUICK ACTIONS */}
        <FadeIn delay={0.1} className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/10 pb-8 mb-12">
           <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <div>
                 <div className="text-[11px] font-bold tracking-widest text-[#888] uppercase mb-1">Category</div>
                 <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-white font-medium text-[14px]">
                   {project.category}
                 </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-white/10"></div>

              <div>
                 <div className="text-white font-['DM_Sans'] font-bold text-[24px] md:text-[28px] tracking-tight">{project.title}</div>
                 <div className="text-[var(--muted)] text-[14px] leading-[1.5] mt-0.5">Comprehensive product case study & interactive screens.</div>
              </div>
           </div>
           
           <div className="flex flex-wrap items-center gap-3.5 pt-2 md:pt-0">
             {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-[14px] hover:scale-105 hover:bg-white/95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                  <span>Visit Live Site</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
             )}

             <Link 
               to="/projects" 
               className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white/90 hover:text-white hover:bg-white/10 font-medium text-[14px] transition-all"
             >
               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="19" y1="12" x2="5" y2="12"></line>
                 <polyline points="12 19 5 12 12 5"></polyline>
               </svg>
               <span>All Projects</span>
             </Link>
           </div>
        </FadeIn>

        {/* 3. CASE STUDY BRIEFING: CRITICAL THINKING & TRADE-OFFS */}
        <div className="mb-20 flex flex-col gap-12">
          
          {/* Deliverables tags */}
          {project.deliverables && (
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[12px] font-bold tracking-widest text-[#666] uppercase mr-2">What I Delivered:</span>
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
                  <span className="text-[12px] font-bold tracking-widest uppercase text-white/50">The Background</span>
                </div>
                <h3 className="font-['DM_Sans'] text-[22px] md:text-[26px] font-bold text-white mb-4 leading-snug">
                  Overview
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
                  <span className="text-[12px] font-bold tracking-widest uppercase text-white/50">The Challenge</span>
                </div>
                <h3 className="font-['DM_Sans'] text-[22px] md:text-[26px] font-bold text-white mb-4 leading-snug">
                  What Needed Fixing
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
                  <div className="text-[12px] font-bold tracking-widest uppercase text-[var(--tan)] mb-2">Design Decisions</div>
                  <h3 className="font-['DM_Sans'] text-[28px] md:text-[34px] font-bold text-white">
                    How I Tackled Key Challenges
                  </h3>
                </div>
                <p className="text-[14px] text-white/40 max-w-[420px]">
                  Key trade-offs and why these solutions worked best for users and engineers.
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
            <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">Visual Walkthrough</div>
            <h3 className="font-['DM_Sans'] text-[24px] md:text-[30px] font-bold text-white mb-4">
              Full Screens & Interaction Details
            </h3>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-[13px] hover:scale-105 hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <span>Visit Live Website</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            )}
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
                        {quote.avatar ? (
                          <img 
                            src={quote.avatar} 
                            alt={quote.name} 
                            className={`w-12 h-12 rounded-full border border-[var(--border)] ${
                              quote.avatar.includes('logo') ? 'object-contain p-1 bg-white/5' : 'object-cover'
                            }`} 
                          />
                        ) : (
                          <div className="w-12 h-12 rounded bg-[#0a0a0a] border border-[var(--border)] flex items-center justify-center font-bold text-white/30 text-[14px]">
                            {quote.name.split(' ').map(n=>n[0]).join('')}
                          </div>
                        )}
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

         <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-4 mt-12 pb-12">
            <Link to="/projects" className="px-8 py-4 rounded-full border border-white/20 text-white text-[15px] font-semibold transition-all hover:bg-white hover:text-black">
               ← Back to All Projects
            </Link>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-[15px] font-bold transition-all hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                 <span>Visit Live Site</span>
                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="7" y1="17" x2="17" y2="7"></line>
                   <polyline points="7 7 17 7 17 17"></polyline>
                 </svg>
              </a>
            )}
            <Link to="/contact" className="px-8 py-4 rounded-full bg-[var(--blue)] hover:bg-[var(--blue-dk)] text-white text-[15px] font-semibold transition-all shadow-[0_0_20px_rgba(57,123,251,0.2)]">
               Get in Touch
            </Link>
         </FadeIn>
      </section>

    </div>
  );
}
