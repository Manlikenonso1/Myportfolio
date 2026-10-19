import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink, ArrowLeft, ArrowRight, Info, AlertTriangle, Star } from 'lucide-react';
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
      role: "UI/UX Designer",
      heroImg: "/appsatile-thumbnail.webp",
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
      process: [
        {
          title: "Research before components",
          text: "I started with a moodboard of established design systems and SaaS UI kits, then mapped what Appsatile needed against the Material 3 structure. That gave me a six-part plan: foundations, base components, selection modules, app shell, data views and theming.",
          before: "/appsatile-process-1-before.webp", beforeLabel: "Moodboard · reference systems",
          after: "/appsatile-process-1-after.webp", afterLabel: "Structure plan · Material 3 audit"
        },
        {
          title: "One naming rule for every token",
          text: "Every token follows category / role / state, and never a colour name. A primitive like Primary/brand/600 is aliased to a semantic token like action/primary/default, which the button uses. Swapping a brand colour then updates every component at once.",
          before: "/appsatile-process-2-before.webp", beforeLabel: "Token naming convention",
          after: "/appsatile-process-2-after.webp", afterLabel: "System overview · 4 token layers"
        },
        {
          title: "Same screen, both themes",
          text: "Because components only use semantic tokens, dark mode is a token swap, not a redesign. I tested it on a real, dense screen: the Research Planning task view with its sidebar, list, tags and detail panel.",
          before: "/appsatile-process-3-before.webp", beforeLabel: "Light mode",
          after: "/appsatile-process-3-after.webp", afterLabel: "Dark mode · same components"
        }
      ],
      reviews: [
        { name: "Joseph Schnedir", role: "Founder, Appsatile", avatar: "/appsatile-logo.png", text: "Chinonso made an immediate difference on our product team. In just six weeks, he simplified our key user journeys and made our entire app easier to use. A thoughtful, talented designer." }
      ]
    },
    'aerovia': {
      id: 'aerovia',
      title: "Aerovia",
      concept: true,
      type: "Product & Interface Design",
      category: "Airline & Travel Web App",
      role: "UI/UX Designer",
      heroImg: "/aerovia-thumbnail.webp",
      liveLink: null,
      sliceCount: 10,
      overview: "Aerovia is a flight booking web platform engineered to eliminate stress and turbulence from travel planning. I designed the complete journey from destination inspiration to confirmed digital boarding passes, introducing a transparent 6-step waypoint architecture that does away with hidden fees and deceptive drip pricing.",
      problem: "Most airline websites are notorious for high cognitive fatigue: surprise baggage charges emerge on the very last step, ambiguous checkout flows leave travelers lost in multi-leg confusion, and cramped comparison tables make it nearly impossible to evaluate what each fare actually includes.",
      deliverables: ["End-to-End Booking UX Flow", "6-Step Guided Progress Architecture", "Transparent Fare Matrix", "Runway Teal Design System", "Responsive Mobile Web Experience"],
      metrics: [
        { value: "0", label: "Hidden fees at checkout" },
        { value: "6-Step", label: "Clear waypoint booking flow" },
        { value: "100%", label: "Upfront baggage & seat pricing" }
      ],
      decisions: [
        {
          pillar: "01. Six stops, one clear path",
          rationale: "Instead of ambiguous multi-page forms, a persistent waypoint progress bar anchors every step: Search → Flights → Fare → Travelers → Payment → Confirmed. Travelers always know exactly where they are and how many steps remain."
        },
        {
          pillar: "02. Compare at a glance with honest inclusions",
          rationale: "Rather than forcing users to click through separate tabs to compare baggage and seat rules, I designed side-by-side fare cards (Best, Cheapest, Fastest) with color-coded tags and immediate price impact preview."
        },
        {
          pillar: "03. Calm teal aesthetic built for trust",
          rationale: "Travel anxiety is high during high-stakes booking. I paired deep Runway Teal with crisp negative space and warm amber accent badges to signal clarity and security without looking like another generic corporate travel portal."
        }
      ],
      process: [
        {
          title: "From Flyboo to Aerovia",
          text: "The flow started as a first draft called Flyboo, in a bright sky blue. I renamed it Aerovia for a calmer, more premium feel, and added one amber accent reserved for the recommended flight.",
          before: "/aerovia-process-1-before.webp", beforeLabel: "First draft · Flyboo",
          after: "/aerovia-process-1-after.webp", afterLabel: "Final · Aerovia"
        },
        {
          title: "Re-coloured for accessibility",
          text: "White text on the original sky blue (#0097DB) scored 3.3:1, which fails WCAG AA. The new Runway teal (#0F766E) scores 5.5:1 and passes, so every button and label stays readable.",
          before: "/aerovia-process-2-before.webp", beforeLabel: "Sky blue · 3.3:1 contrast",
          after: "/aerovia-process-2-after.webp", afterLabel: "Runway teal · 5.5:1 contrast"
        },
        {
          title: "Designing the wait",
          text: "Instead of a blank page while flights load, skeleton cards hold the layout, then results slide in from the top pick down. I prototyped this in Figma with Smart Animate.",
          before: "/aerovia-process-3-before.webp", beforeLabel: "Loading · skeleton",
          after: "/aerovia-process-3-after.webp", afterLabel: "Loaded · staggered reveal"
        }
      ],
      video: {
        src: "/aerovia-prototype.mp4",
        slice: 8,
        box: { left: '8.333%', width: '83.333%', top: '42.92%', height: '57.08%' }
      },
      reviews: []
    },
    'nikos-farm': {
      id: 'nikos-farm',
      title: "Nikos Farm",
      type: "E-Commerce",
      category: "E-Commerce Interface",
      role: "Product Designer",
      heroImg: "/nikos-farm-thumbnail.webp",
      liveLink: "https://nikosfarm.com/",
      sliceCount: 10,
      overview: "Nikos Farm sells fresh organic fruit and vegetables directly to local customers. I redesigned their online shop from the ground up to make ordering farm produce as fast and simple as possible on mobile phones.",
      problem: "The old site didn't show what the farm sold or what it cost. The homepage led with a stock photo, product cards had no prices or buy buttons, and checking a product meant leaving the shop page.",
      deliverables: ["E-Commerce UX Flow", "Slide-Out Cart Drawer", "Product Catalog Grid", "Harvest Origin Badges", "Mobile Checkout UI"],
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
      process: [
        {
          title: "A hero that shows the produce",
          text: "The old site opened on a stock photo of a tea plantation with a big AGRICULTURE overlay, so nothing on screen said what the farm actually sells. The new hero uses an aerial shot of the land with the four products in gold-ringed circles, a warmer type pairing and one clear Buy Now action.",
          before: "/nikos-farm-before-poster.webp", beforeVideo: "/nikos-farm-before.mp4", beforeLabel: "Old site · nikosfarm.com",
          after: "/nikos-farm-process-1-after.webp", afterLabel: "Final hero"
        },
        {
          title: "Product cards built around the photo",
          text: "The first cards were dark, text-heavy and had no price or way to buy. I rebuilt them around a large product photo, moved the key tags onto the image, and added colour options, the price per kg and a cart button on every card.",
          before: "/nikos-farm-process-2-before.webp", beforeLabel: "Early cards · dark, no price",
          after: "/nikos-farm-process-2-after.webp", afterLabel: "Final cards · price + add to cart"
        },
        {
          title: "Details without leaving the shop",
          text: "Clicking View Details opens a quick view over the product grid instead of a new page. Shoppers can check weight, origin and stock, pick a quantity with a live total, read reviews and add to cart, then close it and carry on browsing.",
          before: "/nikos-farm-process-3-before.webp", beforeLabel: "Shop grid",
          after: "/nikos-farm-process-3-after.webp", afterLabel: "Quick view · description + reviews"
        }
      ],
      reviews: [
        { name: "Diamond Nicholas", role: "Owner, Nikos Farm", avatar: "/nikos-farm-logo.png", text: "Chinonso redesigned our storefront from the ground up. The site looks stunning, our mobile checkout flows effortlessly, and our farm customers love the new experience." }
      ]
    },
    'aptinfy': {
      id: 'aptinfy',
      title: "Aptinfy",
      type: "Logo & Brand Identity",
      category: "Brand Design",
      role: "Brand & UI Designer",
      heroImg: "/aptinfy-thumbnail.webp",
      liveLink: null,
      sliceCount: 2,
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
      reviews: []
    },
    'cook-by-ugo': {
      id: 'cook-by-ugo',
      title: "Cook by Ugo",
      type: "Food & Hospitality",
      category: "Restaurant & Ordering Experience",
      role: "UI/UX & Brand Designer",
      heroImg: "/cook-by-ugo-thumbnail.webp",
      liveLink: null,
      sliceCount: 10,
      overview: "Cook by Ugo brings authentic Nigerian home cooking to Newcastle upon Tyne. I designed their direct ordering website and brand identity, giving customers a smooth way to browse dishes, customize spice levels, and order takeout in minutes.",
      problem: "Third-party delivery apps were taking up to 30% commission on every order and locking away customer data. The restaurant needed their own ordering website that made ordering takeout quick and effortless, while showing off the authentic warmth of West African hospitality.",
      deliverables: ["Brand Identity System", "Direct Ordering Website", "Protein & Side Picker", "3-Step Checkout Drawer", "Mobile First UI"],
      targets: true,
      metrics: [
        { value: "+45%", label: "Target growth in direct orders" },
        { value: "<90s", label: "Target time to complete an order" },
        { value: "0%", label: "Commission on direct orders vs up to 30% on delivery apps" }
      ],
      decisions: [
        {
          pillar: "01. Food photography first with clear choices",
          rationale: "Nigerian dishes are vibrant and rich. I led with large dish photos, then made each dish's options simple: a required protein choice and up to two optional sides, each with its price, so both longtime fans and first-time guests can order with zero confusion."
        },
        {
          pillar: "02. A short checkout, designed for under 90 seconds",
          rationale: "Nobody wants to fill out a long form when they are hungry. Checkout is three steps in one drawer: delivery details with an ASAP or scheduled time, payment by card or on delivery, then confirmation. A WhatsApp button stays on screen for people who would rather message."
        },
        {
          pillar: "03. A modern brand with Lagos colour",
          rationale: "I redesigned the first dark, template-like version into a warm cream base with jollof red, palm gold, ewedu green and adire indigo, plus aso-oke bands, adire dots and arch-shaped photos. Every text colour pair passes WCAG AA, and three fonts replace the original five."
        }
      ],
      process: [
        {
          title: "From a dark template to a warm brand",
          text: "The first version worked but looked like any restaurant template: near-black everywhere, five fonts and low-contrast grey text. I rebuilt it on a cream base with jollof red, palm gold, ewedu green and adire indigo, Nigerian textile patterns, and three fonts that all pass WCAG AA.",
          before: "/cook-by-ugo-process-1-before.webp", beforeLabel: "Version 1 · dark template",
          after: "/cook-by-ugo-process-1-after.webp", afterLabel: "Version 3 · modern Afro redesign"
        },
        {
          title: "Options that guide, not block",
          text: "Every dish asks for one required choice, the protein, plus up to two optional sides with their prices. The button stays inactive and says what is missing, then shows the live total once a protein is picked. I also added a spice level, from Mild to Naija hot.",
          before: "/cook-by-ugo-process-2-before.webp", beforeLabel: "No protein yet · button explains why",
          after: "/cook-by-ugo-process-2-after.webp", afterLabel: "Ready · add to order £14.49"
        },
        {
          title: "Two ways to pay",
          text: "Checkout slides in as a drawer over the menu, with a three-step bar. Some customers prefer to pay at the door, so payment offers card or pay on delivery. Choosing pay on delivery hides the card form and shows the exact amount to have ready.",
          before: "/cook-by-ugo-process-3-before.webp", beforeLabel: "Pay by card",
          after: "/cook-by-ugo-process-3-after.webp", afterLabel: "Pay on delivery"
        }
      ],
      reviews: []
    },
    'lazyzone': {
      id: 'lazyzone',
      title: "LazyZoneLabs",
      type: "Product & Interface Design",
      category: "AI Creator Suite & Web App",
      role: "Product Designer",
      heroImg: "/lazyzone-thumbnail.webp",
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
        { name: "Stangly Sunday", role: "Founder, Lazyzonelab", avatar: "/lazyzonelab-logo.png", text: "Finding a designer who genuinely understands product strategy and real user needs is rare. Chinonso combines great aesthetics with practical thinking. Highly recommended." }
      ]
    },
    'huntly': {
      id: 'huntly',
      title: "HuntlyAi",
      type: "Product Design",
      category: "AI Job Search & Application Tracker",
      role: "Product Designer",
      heroImg: "/huntly-thumbnail.webp",
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

  const projectOrder = ['appsatile', 'nikos-farm', 'aerovia', 'lazyzone', 'cook-by-ugo', 'huntly'];
  const currentIndex = projectOrder.indexOf(project.id) !== -1 ? projectOrder.indexOf(project.id) : 0;
  const nextProjectKey = projectOrder[(currentIndex + 1) % projectOrder.length];
  const nextProject = projectsData[nextProjectKey] || projectsData['lazyzone'];

  return (
    <div className="w-full relative bg-[#0a0a0a] min-h-screen">
      <SEO title={`${project.title} · Chinonso Ezeigbo`} description={project.overview.slice(0, 150) + "..."} image={project.heroImg} />
      
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
                 {project.concept && (
                   <div className="inline-flex items-center ml-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-200 font-medium text-[14px]">
                     Concept project
                   </div>
                 )}
              </div>

              <div className="hidden sm:block w-px h-10 bg-white/10"></div>

              <div>
                 <div className="text-white font-['DM_Sans'] font-bold text-[24px] md:text-[28px] tracking-tight">{project.title}</div>
                 <div className="text-[var(--muted)] text-[14px] leading-[1.5] mt-0.5">{project.concept ? "Self-initiated concept: end-to-end case study & interactive screens." : "Comprehensive product case study & interactive screens."}</div>
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
                  <ExternalLink size={15} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
             )}

             <Link 
               to="/projects" 
               className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white/90 hover:text-white hover:bg-white/10 font-medium text-[14px] transition-all"
             >
               <ArrowLeft size={16} strokeWidth={2} />
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
                    <Info size={16} strokeWidth={2} />
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
                    <AlertTriangle size={16} strokeWidth={2} />
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
          {project.metrics && (project.concept || project.targets) && (
            <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/40 -mb-6">{project.targets ? 'Design targets · site not live yet' : 'Design targets · not measured results'}</div>
          )}
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

          {/* Design process: before & after */}
          {project.process && (
            <FadeIn delay={0.2} className="flex flex-col gap-10">
              <div>
                <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">Process</div>
                <h3 className="font-['DM_Sans'] text-[24px] md:text-[30px] font-bold text-white">How the design evolved</h3>
              </div>
              {project.process.map((step, idx) => (
                <div key={idx} className="flex flex-col gap-5 pb-10 border-b border-white/10 last:border-none last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
                    <div className="font-['DM_Sans'] text-[18px] font-bold text-white md:w-[280px] shrink-0">
                      <span className="text-[var(--blue)] mr-2">0{idx + 1}</span>{step.title}
                    </div>
                    <p className="font-['Inter_Tight'] text-[15px] text-white/60 leading-[1.7] max-w-[640px]">{step.text}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[['before', step.before, step.beforeLabel, step.beforeVideo], ['after', step.after, step.afterLabel, step.afterVideo]].map(([k, src, label, vid]) => (
                      <figure key={k} className="m-0">
                        {vid ? (
                          <video src={vid} poster={src} autoPlay muted loop playsInline preload="metadata" aria-label={label} className="w-full aspect-[4/3] object-cover object-top rounded-xl border border-white/10 bg-black" />
                        ) : (
                          <img src={src} alt={label} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover object-top rounded-xl border border-white/10" />
                        )}
                        <figcaption className={`mt-2 text-[12px] font-semibold tracking-wide uppercase ${k === 'after' ? 'text-emerald-300/80' : 'text-white/40'}`}>{label}</figcaption>
                      </figure>
                    ))}
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
                <ExternalLink size={14} strokeWidth={2.2} />
              </a>
            )}
          </div>

        </div>

        <FadeIn direction="up" className="w-full mb-32">
          <div className={`w-full flex flex-col gap-0 rounded-2xl md:rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10 leading-none ${
            project.id === 'appsatile' ? 'bg-[#f8f9fa]' : project.id === 'cook-by-ugo' ? 'bg-[#1b4332]' : project.id === 'lazyzone' ? 'bg-[#080808]' : project.id === 'huntly' ? 'bg-[#102219]' : project.id === 'aerovia' ? 'bg-[#07241f]' : 'bg-[#0d0f0d]'
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
              
              if (project.video && num === project.video.slice) {
                return (
                  <div key={num} className="relative w-full m-0 p-0 leading-none">
                    <img
                      src={`/${prefix}-${num}.webp`}
                      alt={`${project.title} Section ${num}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto block m-0 p-0 align-bottom object-cover"
                      style={{ display: 'block', margin: 0, padding: 0 }}
                    />
                    <video
                      src={project.video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="absolute object-contain rounded-[1.2vw] bg-[#050C0B]"
                      style={project.video.box}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
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
                  src={`/${prefix}-${num}.webp`} 
                  alt={`${project.title} Section ${num}`} 
                  loading={num > 1 ? "lazy" : "eager"}
                  decoding="async"
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
      {project.reviews && project.reviews.length > 0 && (
      <section className="bg-[var(--bg2)] py-20 border-y border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6">
           <FadeIn direction="up">
             <h2 className="font-['DM_Sans'] text-[24px] font-bold text-white mb-10">Review</h2>
           </FadeIn>
            <div className={`grid grid-cols-1 gap-6 ${project.reviews.length === 1 ? 'max-w-[720px]' : 'md:grid-cols-3'}`}>
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
                            {[...Array(4)].map((_, sIdx) => (
                              <Star key={sIdx} size={12} className="fill-[var(--green)] text-[var(--green)]" />
                            ))}
                            <Star size={12} className="fill-[#333] text-[#333]" />
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
      )}

      {/* 8. NEXT PROJECT PREVIEW CARD */}
      <section className="px-6 py-16 max-w-[1200px] mx-auto border-t border-white/5">
        <FadeIn>
          <div className="p-8 md:p-12 rounded-3xl bg-[var(--card)] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-white/20 transition-all shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-black/40 border border-white/10 shrink-0">
                <img src={nextProject.heroImg} alt={nextProject.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              </div>
              <div>
                <div className="text-[12px] font-bold tracking-widest text-[var(--muted)] uppercase mb-1.5">Next Case Study</div>
                <h3 className="font-['DM_Sans'] text-[24px] md:text-[34px] font-bold text-white mb-1">{nextProject.title}</h3>
                <p className="text-white/50 text-[14px] md:text-[15px] font-light">{nextProject.category} · {nextProject.type}</p>
              </div>
            </div>
            <Link 
              to={`/projects/${nextProject.id}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-[15px] hover:scale-105 transition-all shadow-xl shrink-0 group-hover:shadow-white/20"
            >
              <span>View Case Study</span>
              <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 9. BACK TO WORK & CTA */}
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
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-[15px] font-semibold transition-all hover:bg-white hover:text-black">
               <ArrowLeft size={16} strokeWidth={2} />
               <span>Back to All Projects</span>
            </Link>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-[15px] font-bold transition-all hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                 <span>Visit Live Site</span>
                 <ExternalLink size={15} strokeWidth={2.2} />
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
