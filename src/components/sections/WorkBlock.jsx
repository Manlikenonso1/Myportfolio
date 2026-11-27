import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* One piece of selected work: the interface first, then a single quiet line of facts. */
export default function WorkBlock({ project: p, index, wide = false, eager = false }) {
  return (
    <Link to={`/projects/${p.id}`} className="group block text-inherit no-underline">
      <div className={`overflow-hidden rounded-[6px] bg-[var(--bg2)] ${wide ? 'aspect-[16/10] md:aspect-[16/8]' : 'aspect-[16/10]'}`}>
        <img
          src={p.shot || p.image}
          alt={`${p.title}: ${p.kind}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="block w-full h-full object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.015]"
        />
      </div>
      <div className={`mt-4 grid gap-x-8 gap-y-1.5 ${wide ? 'grid-cols-1 md:grid-cols-[1fr_1.4fr_auto]' : 'grid-cols-1'} items-baseline`}>
        <h3 className="m-0 text-[18px] md:text-[20px] font-medium tracking-[-0.015em] text-[var(--t-fg)]">
          <span className="tabular-nums text-[var(--t-faint)] font-normal mr-3">{String(index).padStart(2, '0')}</span>
          <span className="underline-offset-4 decoration-1 group-hover:underline">{p.title}</span>
        </h3>
        <p className="m-0 text-[15.5px] leading-[1.5] text-[var(--t-muted)] max-w-[560px]">{p.line || p.hook}</p>
        <p className="m-0 text-[14px] text-[var(--t-faint)] whitespace-nowrap">{[p.kind, p.year, p.status].filter(Boolean).join(' · ')}</p>
      </div>
    </Link>
  );
}

/* The rest of the work, as a plain index. On a pointer device the cover follows the cursor. */
export function WorkIndex({ projects }) {
  const [active, setActive] = useState(null);
  const preview = useRef(null);
  const move = (e) => {
    if (preview.current) preview.current.style.transform = `translate3d(${e.clientX + 28}px, ${e.clientY - 110}px, 0)`;
  };
  return (
    <div onMouseMove={move} onMouseLeave={() => setActive(null)}>
      <ul className="m-0 p-0 list-none border-t border-[var(--t-border)]">
        {projects.map((p) => (
          <li key={p.id} className="border-b border-[var(--t-border)]">
            <Link
              to={`/projects/${p.id}`}
              onMouseEnter={() => setActive(p)}
              onFocus={() => setActive(null)}
              className="group grid grid-cols-[1fr_auto] md:grid-cols-[1.1fr_2fr_0.9fr_auto] gap-x-8 gap-y-1 items-baseline py-4 md:py-[18px] text-inherit no-underline transition-[padding] duration-300 md:hover:pl-3"
            >
              <span className="text-[16px] md:text-[18px] font-medium tracking-[-0.01em] text-[var(--t-fg)]">{p.title}</span>
              <span className="hidden md:block text-[15px] text-[var(--t-muted)]">{p.hook}</span>
              <span className="hidden md:block text-[14px] text-[var(--t-faint)]">{p.kind}</span>
              <span className="text-[14px] text-[var(--t-faint)] md:w-[92px] md:text-right">{p.status}</span>
              <span className="md:hidden col-span-2 text-[14.5px] text-[var(--t-muted)]">{p.hook}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div
        ref={preview}
        aria-hidden="true"
        className={`hidden md:block fixed top-0 left-0 z-[150] w-[320px] aspect-[4/3] overflow-hidden rounded-[6px] pointer-events-none shadow-[0_24px_60px_rgba(5,10,60,0.45)] transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-0'}`}
      >
        {active && <img src={active.image} alt="" className="block w-full h-full object-cover" />}
      </div>
    </div>
  );
}
