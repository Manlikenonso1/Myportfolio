import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import PageHeader from '../components/sections/PageHeader';
import CallToAction from '../components/sections/CallToAction';
import SEO from '../components/ui/SEO';

const allProjects = [
  {
    id: 'appsatile-workspace',
    featured: true,
    title: 'Appsatile Workspace',
    categoryLabel: 'Business Workspace · Rebuild',
    description: 'Three years on one product, a rebrand, and the rebuild I made to finish it: one workspace for tasks, files, email and leave.',
    categories: ['all', 'saas', 'design-systems'],
    tags: ['Product Design', 'Design System', 'Prototype'],
    image: '/appsatile-workspace-thumbnail.webp'
  },
  {
    id: 'keel',
    featured: true,
    title: 'Keel',
    concept: true,
    categoryLabel: 'Security App',
    description: 'Work account safety: sign-ins in plain words, phishing reports that get an answer, and recovery without the help desk.',
    categories: ['all', 'design-systems'],
    tags: ['Security UX', 'Mobile App', 'Design System'],
    image: '/keel-thumbnail.webp'
  },
  {
    id: 'lazyzone',
    featured: true,
    title: 'LazyZoneLabs',
    categoryLabel: 'AI Creator Suite & Web App',
    description: 'Five AI tools in one project. Use one on its own or chain them, with every cost on the button.',
    categories: ['all', 'saas', 'ai'],
    tags: ['Product Redesign', 'AI Interface', 'Design System'],
    image: '/lazyzone-thumbnail.webp'
  },
  {
    id: 'huntly',
    featured: true,
    title: 'HuntlyAi',
    categoryLabel: 'AI Job Search & Workspace',
    description: 'End-to-end redesign: audit, research, a kanban board, Gmail review and a token system in light and dark.',
    categories: ['all', 'saas', 'ai'],
    tags: ['Product Redesign', 'Design System', 'Dev Handoff'],
    image: '/huntly-thumbnail.webp'
  },
  {
    id: 'appsatile',
    featured: true,
    title: 'Appsatile',
    categoryLabel: 'Design System',
    description: 'Unified multi-product SaaS design system cutting developer handoff by 50%.',
    categories: ['all', 'saas', 'design-systems'],
    tags: ['Figma Tokens', 'WCAG 2.1 AA', 'React Handoff'],
    image: '/appsatile-thumbnail.webp'
  },
  {
    id: 'hsbc',
    featured: true,
    title: 'HSBC UK',
    concept: true,
    categoryLabel: 'Mobile Banking',
    description: 'Banking app redesign: one tab bar, safety you can see, and Global Money built into everyday banking.',
    categories: ['all', 'design-systems'],
    tags: ['Mobile App', 'Fraud Prevention', 'Design System'],
    image: '/hsbc-thumbnail.webp'
  },
  {
    id: 'nikos-farm',
    title: 'Nikos Farm',
    categoryLabel: 'E-Commerce',
    description: 'Farm shop redesign with clear prices, quick-view product details and a slide-out cart.',
    categories: ['all', 'ecommerce'],
    tags: ['Mobile Commerce', 'Cart Drawer', 'Conversion UX'],
    image: '/nikos-farm-thumbnail.webp'
  },
  {
    id: 'cook-by-ugo',
    title: 'Cook by Ugo',
    categoryLabel: 'Food & Hospitality',
    description: 'Direct ordering website with a protein & side picker and a 3-step checkout drawer.',
    categories: ['all', 'ecommerce'],
    tags: ['Takeout Ordering', 'Customizer Flow', 'Brand Identity'],
    image: '/cook-by-ugo-thumbnail.webp'
  },
  {
    id: 'aerovia',
    title: 'Aerovia',
    concept: true,
    categoryLabel: 'Airline & Travel UX',
    description: 'Calm flight booking platform with 6-step waypoint architecture and upfront fare transparency.',
    categories: ['all', 'saas', 'design-systems'],
    tags: ['Travel UX', 'Booking Flow', 'Design System'],
    image: '/aerovia-thumbnail.webp'
  }
];

const categoryFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'saas', label: 'SaaS & Web Apps' },
  { id: 'ai', label: 'AI Products' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'design-systems', label: 'Design Systems' }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? allProjects
    : allProjects.filter(p => p.categories.includes(activeCategory));
  const featured = filtered.filter(p => p.featured);
  const more = filtered.filter(p => !p.featured);

  return (
    <div className="w-full relative pb-10 bg-[var(--bg)]">
      <SEO title="Projects · Chinonso Ezeigbo" description="Selected case studies in SaaS interfaces, design systems, AI creator suites, and e-commerce products by Chinonso Ezeigbo." />

      {/* 1. HERO */}
      <PageHeader title="Projects" breadcrumbText="Projects" />

      {/* 2. RECENT PROJECTS WITH CATEGORY FILTERS */}
      <section className="px-6 py-20 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[12px] font-bold tracking-widest text-[var(--muted)] uppercase mb-3">Portfolio Index</div>
              <h2 className="font-['DM_Sans'] text-[32px] md:text-[44px] font-medium text-white tracking-tight">Featured Case Studies</h2>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categoryFilters.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-white text-black font-semibold'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
        
        <motion.div layout className="flex flex-col gap-24">
          <AnimatePresence mode="popLayout">
            {featured.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 border-b border-white/10 pb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[var(--muted)] text-[13px] uppercase tracking-widest font-bold">{proj.categoryLabel}</span>
                      {proj.concept && <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-200 text-[11px] uppercase tracking-widest font-bold">Concept</span>}
                      <span className="w-1 h-1 rounded-full bg-white/20"></span>
                      <div className="flex gap-2">
                        {proj.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="font-['DM_Sans'] text-[32px] md:text-[48px] font-medium text-white">{proj.title}</h3>
                    <p className="text-white/50 text-[16px] max-w-[650px] mt-2 font-light">{proj.description}</p>
                  </div>
                  <Link to={`/projects/${proj.id}`} className="px-8 py-3 rounded-lg border border-[var(--border)] bg-black text-white font-medium text-[14px] hover:bg-white hover:text-black hover:border-white/60 transition-all w-fit shrink-0">
                    View Case Study
                  </Link>
                </div>
                <Link to={`/projects/${proj.id}`} className="block w-full rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden group hover:border-white/25 transition-colors">
                  <img src={proj.image} alt={proj.title} className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-85 group-hover:opacity-100" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {more.length > 0 && (
          <div className="mt-32">
            <FadeIn>
              <div className="border-b border-white/10 pb-6 mb-10">
                <div className="text-[12px] font-bold tracking-widest text-[var(--muted)] uppercase mb-3">Archive</div>
                <h2 className="font-['DM_Sans'] text-[28px] md:text-[36px] font-medium text-white tracking-tight">More projects</h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {more.map((proj, i) => (
                <FadeIn key={proj.id} delay={i * 0.08}>
                  <Link to={`/projects/${proj.id}`} className="group block">
                    <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] group-hover:border-white/25 transition-colors">
                      <img src={proj.image} alt={proj.title} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover" />
                    </div>
                    <div className="flex items-center gap-2 mt-4 mb-1">
                      <h3 className="font-['DM_Sans'] text-[20px] font-medium text-white">{proj.title}</h3>
                      {proj.concept && <span className="px-2 py-0.5 rounded-full border border-white/15 text-white/60 text-[10px] uppercase tracking-widest font-bold">Concept</span>}
                    </div>
                    <div className="text-[12px] uppercase tracking-widest text-white/40 font-bold mb-2">{proj.categoryLabel}</div>
                    <p className="text-[14px] text-white/55 leading-[1.6]">{proj.description}</p>
                    <span className="inline-block mt-3 text-[13px] text-white/80 group-hover:text-white underline underline-offset-4 decoration-white/30">View project</span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="px-6 py-32 max-w-[1200px] mx-auto border-t border-[var(--border)]">
        <FadeIn className="text-center mb-16">
          <div className="text-[14px] text-[var(--muted)] tracking-[0.2em] uppercase font-bold mb-4">Testimonials</div>
          <h2 className="font-['DM_Sans'] text-[40px] md:text-[56px] font-medium text-white leading-[1.1] tracking-tight">
            Hear What They're Saying About Me
          </h2>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[960px] mx-auto gap-6">
          {[
            { name: "Diamond Nicholas", role: "Owner, Nikos Farm", avatar: "/nikos-farm-logo.png", text: "Chinonso delivered ahead of schedule with exceptional quality. The new storefront interface has received overwhelmingly positive feedback from our customers." },
            { name: "Stangly Sunday", role: "Founder, Lazyzonelab", avatar: "/lazyzonelab-logo.png", text: "Chinonso brought clarity and structure to our brand and product UI. He communicates clearly, delivers on time, and makes the whole process easy." }
          ].map((quote, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] h-full flex flex-col justify-between hover:border-white/20 transition-colors">
                <div>
                  <div className="flex gap-4 items-center mb-6">
                    <img 
                      src={quote.avatar} 
                      alt={quote.name} 
                      className={`w-12 h-12 rounded-full border border-white/10 ${
                        quote.avatar.includes('logo') ? 'object-contain p-1 bg-white/5' : 'object-cover'
                      }`} 
                    />
                    <div>
                      <div className="font-['DM_Sans'] font-medium text-white text-[16px]">{quote.name}</div>
                      <div className="text-[12px] text-[var(--muted)] mt-1">{quote.role}</div>
                      <div className="flex gap-1 text-[var(--green)] mt-2">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} size={13} className="fill-[var(--green)] text-[var(--green)]" />
                        ))}
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
          <div className="font-['DM_Sans'] text-[16px] font-medium text-white mb-6 w-full text-center">
            Clients & Collaborations
          </div>
          <div className="flex justify-center items-center flex-wrap gap-10 lg:gap-20 mt-4">
             <Link to="/projects/appsatile"  className="font-['DM_Sans'] font-medium text-[24px] tracking-tight text-white/30 transition-all duration-300 hover:text-white">Appsatile</Link>
             <Link to="/projects/huntly"      className="font-['DM_Sans'] font-medium text-[24px] tracking-tight text-white/30 transition-all duration-300 hover:text-white">HuntlyAi</Link>
             <Link to="/projects/lazyzone"    className="font-['DM_Sans'] font-medium text-[24px] tracking-tight text-white/30 transition-all duration-300 hover:text-white">LazyZone</Link>
             <Link to="/projects/cook-by-ugo" className="font-['DM_Sans'] font-medium text-[24px] tracking-tight text-white/30 transition-all duration-300 hover:text-white">Cook by Ugo</Link>
             <Link to="/projects/nikos-farm"  className="font-['DM_Sans'] font-medium text-[24px] tracking-tight text-white/30 transition-all duration-300 hover:text-white">Nikos Farm</Link>
          </div>
        </FadeIn>
      </section>

      {/* 7. CALL TO ACTION */}
      <CallToAction />

    </div>
  );
}
