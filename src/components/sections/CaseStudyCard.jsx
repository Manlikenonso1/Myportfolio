import { Link } from 'react-router-dom';

/* A project: the cover, its name and a sentence about what it is. */
export default function CaseStudyCard({ project: p, eager = false }) {
  return (
    <Link to={`/projects/${p.id}`} className="group block">
      <img src={p.image} alt={`${p.title} cover`} loading={eager ? 'eager' : 'lazy'} decoding="async"
        className="block w-full aspect-[16/10] object-cover object-top rounded-[12px] border border-[var(--t-border)] bg-[var(--t-surface)]" />
      <h3 className="font-['Geist'] text-[21px] font-medium tracking-[-0.01em] leading-[1.2] text-[var(--t-fg)] m-0 mt-4 group-hover:underline underline-offset-4">
        {p.title}{p.concept && <span className="font-normal text-[var(--t-faint)]"> (concept)</span>}
      </h3>
      <p className="text-[16px] leading-[1.55] text-[var(--t-muted)] m-0 mt-1.5">{p.hook}</p>
    </Link>
  );
}
