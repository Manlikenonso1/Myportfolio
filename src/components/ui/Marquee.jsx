/* A slow ticker of what I do, in outlined type. Pauses on hover and for
   people who prefer reduced motion. */
export default function Marquee({ items }) {
  const row = (hidden) => (
    <div aria-hidden={hidden || undefined} className="marquee-row flex shrink-0 items-center gap-10 pr-10">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className={`font-['DM_Sans'] text-[clamp(40px,6vw,88px)] font-medium tracking-[-0.04em] leading-none whitespace-nowrap ${i % 2 ? 'text-transparent' : 'text-[var(--t-fg)]'}`}
            style={i % 2 ? { WebkitTextStroke: '1.5px var(--t-accent)' } : undefined}>{item}</span>
          <span className="w-3 h-3 rounded-full bg-[var(--t-accent)] transition-colors duration-300" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee flex overflow-hidden py-10 md:py-14 border-y border-[var(--t-border)] select-none">
      {row(false)}{row(true)}
    </div>
  );
}
