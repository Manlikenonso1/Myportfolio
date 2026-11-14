import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../components/ui/FadeIn';
import CaseStudyCard from '../components/sections/CaseStudyCard';
import SEO from '../components/ui/SEO';
import { allProjects } from '../data/projects';

const categoryFilters = [
  { id: 'all', label: 'All' },
  { id: 'design-systems', label: 'Design systems' },
  { id: 'saas', label: 'SaaS and web apps' },
  { id: 'ai', label: 'AI products' },
  { id: 'ecommerce', label: 'E-commerce' },
];

const h2 = "font-['DM_Sans'] text-[24px] md:text-[28px] font-medium tracking-[-0.02em] text-[var(--t-fg)] m-0";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all' ? allProjects : allProjects.filter(p => p.categories.includes(activeCategory));
  const featured = filtered.filter(p => p.featured);
  const more = filtered.filter(p => !p.featured);

  return (
    <div className="w-full bg-[var(--t-bg)] text-[var(--t-fg)] transition-colors duration-300">
      <SEO title="Projects · Chinonso Ezeigbo" description="Case studies in design systems, B2B SaaS, AI products and security UX by Chinonso Ezeigbo, Product Designer." />

      <div className="max-w-[920px] mx-auto px-6">

        {/* INTRO */}
        <section className="pt-36 md:pt-44 pb-10 md:pb-12">
          <FadeIn>
            <h1 className="font-['DM_Sans'] text-[30px] md:text-[40px] font-medium tracking-[-0.03em] leading-[1.1] text-[var(--t-fg)] m-0 mb-4">Projects</h1>
            <p className="text-[17px] md:text-[18px] leading-[1.65] text-[var(--t-muted)] max-w-[600px] m-0 mb-8">
              {allProjects.length} case studies. Each one runs from the problem to the final screens, and says plainly whether it shipped or is a concept.
            </p>
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects">
              {categoryFilters.map(cat => (
                <button key={cat.id} type="button" aria-pressed={activeCategory === cat.id} onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-[14px] font-semibold border transition-colors ${activeCategory === cat.id ? 'bg-[var(--t-fg)] text-[var(--t-bg)] border-transparent' : 'bg-[var(--t-surface)] text-[var(--t-muted)] border-[var(--t-border)] hover:text-[var(--t-fg)]'}`}
                  style={{ borderRadius: 'var(--t-radius)' }}>
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* CASE STUDIES */}
        {featured.length > 0 && (
          <section>
            <h2 className={`${h2} mb-6`}>Case studies</h2>
            <div className="flex flex-col gap-8">
              <AnimatePresence mode="popLayout">
                {featured.map((p, i) => (
                  <motion.div key={p.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4 }}>
                    <CaseStudyCard project={p} eager={i === 0} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* MORE WORK */}
        {more.length > 0 && (
          <section className={featured.length > 0 ? 'mt-24 md:mt-32' : ''}>
            <h2 className={`${h2} mb-6`}>More work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-9">
              {more.map((p, i) => (
                <FadeIn key={p.id} delay={Math.min(i, 4) * 0.05}>
                  <Link to={`/projects/${p.id}`} data-cursor="View project" className="group block">
                    <div className="overflow-hidden border border-[var(--t-border)] transition-[border-radius] duration-300" style={{ borderRadius: 'var(--t-radius-lg)' }}>
                      <img src={p.image} alt={`${p.title} cover`} loading="lazy" decoding="async" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    </div>
                    <div className="flex items-center justify-between gap-3 mt-3 px-0.5">
                      <h3 className="font-['DM_Sans'] text-[17px] font-medium text-[var(--t-fg)] m-0">{p.title}</h3>
                      {p.concept && <span className="text-[12px] text-[var(--t-faint)]">Concept</span>}
                    </div>
                    <p className="text-[14.5px] leading-[1.5] text-[var(--t-muted)] m-0 mt-1 px-0.5">{p.hook}</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        <div className="h-24 md:h-32" />
      </div>
    </div>
  );
}
