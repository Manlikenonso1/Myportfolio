import { useParams, Link } from 'react-router-dom';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../components/ui/FadeIn';

const serviceData = {
  'ux-strategy': {
    title: "Product Strategy & UI/UX Design",
    headline: "Designing clear pathways, rooted in human behavior.",
    eyebrow: "Product Strategy & UX Logic",
    image: "/service_ui_ux.png",
    overview: "A beautiful application is worthless if users can't achieve their goals. My process aligns layout architecture, information hierarchy, and user expectations to drive business conversion.",
    description: "My UX strategy is grounded in behavioral science. I trace user actions from their initial entry point through to successful conversions, systematically diagnosing friction points and optimizing steps.",
    phases: [
      {
        num: "01",
        title: "Discovery & Funnel Auditing",
        desc: "I review existing conversion drop-off points, analyze key competitors, map out user demographics, and draft analytical heuristic evaluations."
      },
      {
        num: "02",
        title: "Information Architecture",
        desc: "Structuring application layouts, cataloging core views, and designing high-level blueprints that outline how data flows seamlessly across screens."
      },
      {
        num: "03",
        title: "High-Fidelity Wireframes",
        desc: "Drafting structural wireframes to establish logical balance, check sizing ratios, and lock down screen priority before committing styling variables."
      },
      {
        num: "04",
        title: "User Journey Validation",
        desc: "Translating layouts into clickable flows to observe user behavior, validate layout assumptions, and ensure zero friction in critical pipelines."
      }
    ]
  },
  'design-systems': {
    title: "Design Systems & Brand Standards",
    headline: "Visual systems built to scale without friction.",
    eyebrow: "Design Systems & Figma Architecture",
    image: "/service_design_system.png",
    overview: "Developing comprehensive, highly structured design components in Figma and code. I bridge the gap between creative visual designs and high-fidelity production engineering.",
    description: "I build pixel-perfect Figma components complete with design tokens, variables, and automated auto-layouts. This guarantees that your engineering and design branches speak the exact same language.",
    phases: [
      {
        num: "01",
        title: "Visual Foundation Blueprint",
        desc: "Establishing responsive grids, accessible typography scales, WCAG-compliant color matrices, and premium visual glassmorphism parameters."
      },
      {
        num: "02",
        title: "Atomic Component Design",
        desc: "Building atomic component elements (buttons, inputs, alerts, controls) in Figma with variables supporting dark/light mode toggles."
      },
      {
        num: "03",
        title: "Design Token Mapping",
        desc: "Translating color palettes, layout sizes, and fonts into structured JSON design tokens that sync seamlessly to CSS and React variables."
      },
      {
        num: "04",
        title: "Developer Library Integration",
        desc: "Documenting handoff specs, reviewing front-end styling structures, and setting up centralized token systems for instant UI updates."
      }
    ]
  },
  'interactive-motion': {
    title: "Interactive Prototyping & Motion",
    headline: "A tactile software experience before writing code.",
    eyebrow: "Micro-interactions & Interactive Flows",
    image: "/service_interactive_motion.png",
    overview: "Making screens feel tactile, alive, and interactive. I choreograph transitions, micro-interactions, and high-fidelity user-testable mockups to prevent development waste.",
    description: "Interaction design is the soul of premium software. I craft micro-gestures, state changes, page entries, and morphing cards that yield absolute delightful moments while using your app.",
    phases: [
      {
        num: "01",
        title: "Micro-gesture Mapping",
        desc: "Detailing states for every element: active hovers, dynamic button clicks, loaded items, and contextual animations that respond instantly."
      },
      {
        num: "02",
        title: "Layout Entry Transitions",
        desc: "Creating elegant structural page entries, cascading list renders, glass accordion expansions, and interactive drawer slide overlays."
      },
      {
        num: "03",
        title: "High-Fidelity Figma Prototype",
        desc: "Assembling linkable user flows that act, look, and feel identical to built applications to test concepts directly with stakeholders."
      },
      {
        num: "04",
        title: "React Motion Handoff",
        desc: "Converting refined prototypes into hardware-accelerated CSS and Framer Motion code tokens, guaranteeing a perfect 60fps experience."
      }
    ]
  }
};

export default function ServiceDetails() {
  const { id } = useParams();
  const activeService = serviceData[id] || serviceData['ux-strategy'];

  return (
    <div className="w-full relative pb-32">
      
      {/* 1. HEADER */}
      <section className="relative pt-48 pb-20 px-6 border-b border-white/5 bg-[var(--bg)]">
        <div className="max-w-[1000px] mx-auto relative z-10 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 text-[14px] font-medium text-[var(--muted)] mb-8">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <span className="text-white">{activeService.title}</span>
            </div>
            <h1 className="font-['DM_Sans'] text-[clamp(40px,5vw,64px)] font-bold leading-[1.2] tracking-tight text-white mb-8">
              {activeService.headline}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="px-6 py-20 lg:py-32">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 lg:gap-24 mb-32">
            <h2 className="font-['DM_Sans'] text-[24px] lg:text-[32px] font-bold text-white">The Method</h2>
            <div className="flex flex-col gap-8 text-[18px] lg:text-[20px] text-white/60 leading-[1.7] font-light">
              <p>{activeService.overview}</p>
              <p>{activeService.description}</p>
            </div>
          </FadeIn>

          <FadeIn className="w-full aspect-video rounded-3xl overflow-hidden bg-[var(--card)] p-2 border border-white/10 relative mb-32 shadow-2xl">
             <img src={activeService.image} className="w-full h-full object-cover rounded-2xl opacity-60" alt="Process Blueprint" />
          </FadeIn>

          <div className="font-['DM_Sans'] text-[18px] tracking-[.08em] uppercase text-[var(--muted)] mb-12 text-center">
            Detailed Workflow Phases
          </div>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-32">
            {activeService.phases.map((phase, idx) => (
              <FadeInStaggerItem key={idx} className="bg-[var(--card)] p-8 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-[var(--blue)]/30 hover:bg-white/5 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[var(--blue)]/15 border border-[var(--blue)]/30 flex items-center justify-center mb-6">
                     <span className="font-['DM_Sans'] text-[16px] font-semibold text-[var(--blue)]">{phase.num}</span>
                  </div>
                  <h3 className="font-['DM_Sans'] text-[24px] font-bold mb-4 text-white group-hover:text-[var(--blue)] transition-colors">{phase.title}</h3>
                  <p className="text-white/50 leading-[1.6] font-light">{phase.desc}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          {/* Dynamic Footer CTA */}
          <FadeIn className="p-8 md:p-16 rounded-[32px] bg-gradient-to-br from-[var(--card)] to-[var(--bg2)] border border-white/10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--blue)]/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 max-w-[600px] mx-auto flex flex-col items-center">
              <h3 className="font-['DM_Sans'] text-[32px] md:text-[44px] font-bold text-white mb-6 leading-tight">
                Ready to deploy this process?
              </h3>
              <p className="text-[16px] md:text-[18px] text-white/50 leading-[1.6] mb-10 font-light">
                Let's partner up to build something completely outstanding for your users and business metrics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-black font-semibold text-[15px] hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  Book a consultation
                </Link>
                <Link to="/services" className="px-8 py-4 rounded-full bg-transparent text-white font-semibold text-[15px] border border-white/20 hover:bg-white/5 transition-colors duration-300">
                  Back to Services
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
