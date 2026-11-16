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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all' ? allProjects : allProjects.filter(p => p.categories.includes(activeCategory));
  const featured = filtered.filter(p => p.featured);
  const more = filtered.filter(p => !p.featured);

  return (
    <div className="w-full bg-[var(--t-bg)] text-[var(--t-fg)] transition-colors duration-300 min-h-screen">
      <SEO
        title="Projects · Chinonso Ezeigbo"
        description="Case studies in design systems, B2B SaaS, AI products and security UX by Chinonso Ezeigbo, Product Designer."
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* INTRO */}
        <section className="pt-36 md:pt-44 pb-12 md:pb-16 border-b border-[var(--t-border)]">
          <FadeIn>
            <div className="max-w-[760px]">
              <h1 className="font-['Fraunces'] font-normal text-[clamp(40px,5.5vw,76px)] leading-[1.05] tracking-[-0.03em] text-[var(--t-fg)] m-0 mb-5">
                Projects
              </h1>
              <p className="text-[17px] md:text-[19px] leading-[1.65] text-[var(--t-muted)] m-0 mb-8">
                Four detailed case studies, then some smaller projects and concepts.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2.5" role="group" aria-label="Filter projects">
              {categoryFilters.map(cat => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2.5 text-[14px] font-medium rounded-full transition-all duration-200 border ${
                      active
                        ? 'bg-[var(--t-fg)] text-[var(--t-bg)] border-transparent shadow-sm'
                        : 'bg-[var(--t-surface)] text-[var(--t-muted)] border-[var(--t-border)] hover:text-[var(--t-fg)] hover:border-[var(--t-fg)]/40'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </section>

        {/* FEATURED CASE STUDIES */}
        {featured.length > 0 && (
          <section className="py-14 md:py-18">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-['Fraunces'] font-normal text-[clamp(28px,3.5vw,38px)] tracking-[-0.025em] text-[var(--t-fg)] m-0">
                Case studies
              </h2>
              <span className="text-[14px] text-[var(--t-faint)]">
                {featured.length} {featured.length === 1 ? 'project' : 'projects'}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-9">
              <AnimatePresence mode="popLayout">
                {featured.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CaseStudyCard project={p} eager={i < 2} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* MORE WORK */}
        {more.length > 0 && (
          <section className="pt-10 pb-16 border-t border-[var(--t-border)]">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-['Fraunces'] font-normal text-[clamp(28px,3.5vw,38px)] tracking-[-0.025em] text-[var(--t-fg)] m-0">
                More work
              </h2>
              <span className="text-[14px] text-[var(--t-faint)]">
                {more.length} {more.length === 1 ? 'project' : 'projects'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {more.map((p, i) => (
                <FadeIn key={p.id} delay={Math.min(i, 4) * 0.05}>
                  <Link
                    to={`/projects/${p.id}`}
                    className="group flex flex-col h-full overflow-hidden rounded-[22px] bg-[var(--t-surface)] border border-[var(--t-border)] text-inherit no-underline transition-colors duration-200 hover:border-[var(--t-fg)]"
                  >
                    <div className="overflow-hidden bg-[var(--bg2)] aspect-[4/3] border-b border-[var(--t-border)]">
                      <img src={p.image} alt={`${p.title} cover`} loading="lazy" decoding="async" className="w-full h-full object-cover block" />
                    </div>
                    <div className="p-6 flex flex-col gap-1.5">
                      <p className="text-[14px] font-medium text-[var(--t-faint)] m-0">{p.categoryLabel || 'Case study'}{p.concept ? ', concept' : ''}</p>
                      <h3 className="font-['Fraunces'] text-[22px] font-normal tracking-[-0.02em] text-[var(--t-fg)] m-0 group-hover:text-[var(--t-accent)] transition-colors">{p.title}</h3>
                      <p className="text-[15px] leading-[1.55] text-[var(--t-muted)] m-0">{p.hook}</p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
