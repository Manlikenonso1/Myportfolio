import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudyCard({ project: p, eager = false }) {
  const category = p.categoryLabel || 'Product Design';
  const highlight = p.outcomes?.[0] || (p.concept ? 'Self-initiated Concept' : null);

  return (
    <Link
      to={`/projects/${p.id}`}
      className="group flex flex-col overflow-hidden rounded-[22px] bg-[var(--t-surface)] border border-[var(--t-border)] text-inherit no-underline transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative overflow-hidden bg-[#EDEAE4] dark:bg-[#1E1D1B] aspect-[16/10] border-b border-[var(--t-border)]">
        <img
          src={p.image}
          alt={`${p.title} preview`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full object-cover object-top block transition-transform duration-600 ease-out group-hover:scale-[1.03]"
        />

        {/* Floating pill badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full text-[12px] font-medium bg-[var(--t-bg)]/90 backdrop-blur-md text-[var(--t-fg)] border border-[var(--t-border)] shadow-xs">
            {category}
          </span>
        </div>

        {/* Hover Arrow Icon */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[var(--t-bg)]/90 backdrop-blur-md text-[var(--t-fg)] border border-[var(--t-border)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-xs">
          <ArrowUpRight className="w-4 h-4 text-[var(--t-accent)]" />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-7 md:p-8 flex-1 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-['Fraunces'] font-normal text-[26px] md:text-[28px] leading-[1.15] tracking-[-0.02em] text-[var(--t-fg)] m-0 group-hover:text-[var(--t-accent)] transition-colors">
              {p.title}
            </h3>
          </div>

          <p className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--t-muted)] m-0">
            {p.hook || p.description}
          </p>
        </div>

        {highlight && (
          <div className="pt-4 border-t border-[var(--t-border)]/70 flex items-center justify-between text-[13px] text-[var(--t-faint)]">
            <span className="text-[var(--t-muted)]">Key outcome</span>
            <span className="text-[var(--t-fg)] font-medium">{highlight}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
