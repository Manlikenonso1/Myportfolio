import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/* Counts a figure like "50%", "4+" or "1,100+" up from zero the first time it
   scrolls into view. Values with no number ("AA", "MSc") are shown as they are. */
export default function CountUp({ value, duration = 1100 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const match = String(value).match(/^([^\d]*)([\d,]+)(.*)$/);
  const target = match ? parseInt(match[2].replace(/,/g, ''), 10) : null;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (target === null || !inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(target); return; }
    let raf; const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  if (target === null) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref} aria-label={String(value)}>
      <span aria-hidden="true">{match[1]}{n.toLocaleString('en-GB')}{match[3]}</span>
    </span>
  );
}
