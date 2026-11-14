import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/* The large case study card: a cover inside a frame tinted and lit
   in the project's own colour, with the title, hook and two outcomes. */
export default function CaseStudyCard({ project: p, eager = false }) {
  const i = eager ? 0 : 1;
  return (
                <Link to={`/projects/${p.id}`} data-cursor="Read case study"
      className="group relative block overflow-hidden md:!pb-0 transition-[border-radius,box-shadow,transform] duration-500 hover:-translate-y-1"
      style={{
        borderRadius: 'var(--t-radius-lg)',
        padding: 'clamp(12px, 2.4vw, 24px)',
        background: `linear-gradient(180deg, color-mix(in srgb, ${p.accent} 34%, var(--t-surface)), color-mix(in srgb, ${p.accent} 12%, var(--t-surface)))`,
        boxShadow: `0 0 0 1px color-mix(in srgb, ${p.accent} 35%, transparent), 0 24px 80px -24px color-mix(in srgb, ${p.accent} 55%, transparent)`,
      }}>
      <img src={p.image} alt={`${p.title} cover`} loading={i === 0 ? 'eager' : 'lazy'} decoding="async"
        className="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] rounded-[calc(var(--t-radius-lg)*0.6)] md:rounded-b-none" />
      <div className="pt-4 px-1 pb-1 md:absolute md:inset-x-0 md:bottom-0 md:p-7 md:pt-28 md:bg-[linear-gradient(180deg,transparent,rgba(8,8,10,0.86)_62%)]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <h3 className="font-['DM_Sans'] text-[24px] md:text-[30px] font-medium tracking-[-0.02em] leading-[1.1] text-[var(--t-fg)] md:text-[#fff] m-0">{p.title}</h3>
              {p.concept && <span className="px-2.5 py-0.5 rounded-full border border-[var(--t-border)] text-[var(--t-muted)] md:border-[#ffffff59] md:text-[#ffffffd9] text-[11px] uppercase tracking-[0.14em] font-semibold">Concept</span>}
            </div>
            <p className="text-[16px] md:text-[17px] text-[var(--t-muted)] md:text-[#ffffffd9] m-0 mb-3 max-w-[560px]">{p.hook}</p>
            {p.outcomes && (
              <p className="text-[14.5px] md:text-[15px] font-medium text-[var(--t-fg)] md:text-[#fff] m-0">
                {p.outcomes[0]} <span className="text-[var(--t-faint)] md:text-[#ffffff73] mx-1.5">/</span> {p.outcomes[1]}
              </p>
            )}
          </div>
          <span className="w-10 h-10 shrink-0 rounded-full border border-[var(--t-border)] text-[var(--t-fg)] md:border-[#ffffff59] md:text-[#fff] flex items-center justify-center group-hover:bg-[#fff] group-hover:text-[#000] transition-colors"><ArrowUpRight size={17} /></span>
        </div>
      </div>
    </Link>
  );
}
