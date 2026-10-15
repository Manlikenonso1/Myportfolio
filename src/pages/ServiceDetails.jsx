import { useParams, Link } from 'react-router-dom';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../components/ui/FadeIn';

const serviceData = {
  'ux-strategy': {
    title: "Product Strategy & UI/UX Design",
    headline: "Designing clean, intuitive digital products people actually enjoy using.",
    eyebrow: "Product Strategy & UX Design",
    image: "/service_ui_ux.png",
    overview: "Good design is about more than making things look pretty. If people get confused or struggle to complete simple tasks, the product fails. I design clear, straightforward interfaces that guide users smoothly toward what they came to do.",
    description: "I look at the whole picture—from the first screen someone lands on to the moment they finish what they set out to do. Along the way, I identify where people hesitate or drop off and simplify each step until the experience feels effortless.",
    phases: [
      {
        num: "01",
        title: "Discovery & Research",
        desc: "I start by understanding your audience and your goals. We look at where users get stuck today, what competitors are doing well, and what a winning experience needs to look like."
      },
      {
        num: "02",
        title: "Structure & Flow",
        desc: "Organizing the app's structure so navigation feels natural. We map out pages, menus, and user journeys before getting caught up in visual details."
      },
      {
        num: "03",
        title: "Wireframes & Layouts",
        desc: "Creating screen-by-screen layouts to test content priority, button placement, and overall balance so we are confident in the layout before finalizing colors and typography."
      },
      {
        num: "04",
        title: "Interactive Prototyping",
        desc: "Connecting screens into clickable prototypes to test the flow with real people, catch rough edges early, and validate decisions before writing code."
      }
    ]
  },
  'design-systems': {
    title: "Design Systems & Brand Standards",
    headline: "Consistent visual systems that help teams design and build faster.",
    eyebrow: "Design Systems & Component Libraries",
    image: "/service_design_system.png",
    overview: "As products grow, keeping screens consistent and code clean gets harder. I build structured, reusable design systems in Figma and code so your team can roll out new features without reinventing the wheel each time.",
    description: "Every button, form field, and color token is organized with clear rules and auto-layout. Designers and developers stay on the same page, handoffs become painless, and your product stays visually cohesive.",
    phases: [
      {
        num: "01",
        title: "Core Foundations",
        desc: "Setting up the essentials: responsive grids, accessible color palettes, readable type scales, and spacing rules that hold everything together."
      },
      {
        num: "02",
        title: "Component Library",
        desc: "Crafting flexible UI components—buttons, inputs, dropdowns, modal cards, and banners—with support for light and dark modes."
      },
      {
        num: "03",
        title: "Design Tokens & Variables",
        desc: "Translating styles into structured tokens (colors, spacing, typography) that match your front-end code (CSS, Tailwind, or React variables)."
      },
      {
        num: "04",
        title: "Documentation & Handoff",
        desc: "Writing clear usage guidelines and component states so engineers know exactly how pieces fit together and when to use them."
      }
    ]
  },
  'interactive-motion': {
    title: "Interactive Prototyping & Motion",
    headline: "Polished animations and prototypes that make products feel responsive and alive.",
    eyebrow: "Prototyping & Motion Design",
    image: "/service_interactive_motion.png",
    overview: "The difference between a good product and a great one often comes down to how it feels to touch and click. I design smooth micro-interactions, transitions, and realistic prototypes that give software character.",
    description: "From hover states and button taps to page transitions, subtle motion provides immediate feedback and guides user attention naturally, making the whole interface feel effortless.",
    phases: [
      {
        num: "01",
        title: "Micro-Interactions",
        desc: "Designing clear states for interactive elements—hovers, active presses, loading spinners, and success confirmations."
      },
      {
        num: "02",
        title: "Screen & Modal Transitions",
        desc: "Adding smooth transitions when opening drawers, expanding accordions, switching tabs, or navigating between pages."
      },
      {
        num: "03",
        title: "Interactive Prototypes",
        desc: "Building clickable prototypes that behave like real software so stakeholders and users can experience flows before development begins."
      },
      {
        num: "04",
        title: "Developer Handoff & Motion Specs",
        desc: "Supplying exact easing curves, durations, and CSS/Framer Motion specs so developers can implement animations without guessing."
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
                Ready to work together?
              </h3>
              <p className="text-[16px] md:text-[18px] text-white/50 leading-[1.6] mb-10 font-light">
                Tell me about your product, your goals, or what challenges you're facing. I'd love to help you build something great.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-black font-semibold text-[15px] hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  Get in touch
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
