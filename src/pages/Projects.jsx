import { useState } from 'react';
import WorkBlock, { WorkIndex } from '../components/sections/WorkBlock';
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

      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        <section className="pt-32 md:pt-44 pb-10 md:pb-14">
          <h1 className="m-0 font-normal text-[clamp(28px,3.5vw,46px)] leading-[1.16] tracking-[-0.03em] text-[var(--t-fg)] max-w-[820px]">
            Projects.{' '}
            <span className="text-[var(--t-faint)]">Four detailed case studies, then smaller projects and concepts.</span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-[15px]" role="group" aria-label="Filter projects">
            {categoryFilters.map(cat => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-0 bg-transparent border-0 cursor-pointer underline-offset-[6px] decoration-1 transition-colors ${active ? 'text-[var(--t-fg)] underline' : 'text-[var(--t-faint)] hover:text-[var(--t-fg)]'}`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {featured.length > 0 && (
          <section>
            <div className="flex items-baseline justify-between pb-4 text-[14px] text-[var(--t-faint)]">
              <h2 className="m-0 text-[14px] font-normal text-[var(--t-faint)]">Case studies</h2>
              <span className="tabular-nums">{String(featured.length).padStart(2, '0')}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
              {featured.map((p, i) => <WorkBlock key={p.id} project={p} index={i + 1} eager={i < 2} />)}
            </div>
          </section>
        )}

        {more.length > 0 && (
          <section className="pt-20 md:pt-28 pb-8">
            <div className="flex items-baseline justify-between pb-4 text-[14px] text-[var(--t-faint)]">
              <h2 className="m-0 text-[14px] font-normal text-[var(--t-faint)]">More work</h2>
              <span className="tabular-nums">{String(more.length).padStart(2, '0')}</span>
            </div>
            <WorkIndex projects={more} />
          </section>
        )}
      </div>
    </div>
  );
}
