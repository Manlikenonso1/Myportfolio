import { useEffect, useRef, useState } from 'react';

/* The normal system pointer is used everywhere. This only adds a small
   label beside it ("View project", "Try it") over elements that set
   data-cursor, in the accent colour. */
export default function CustomCursor() {
  const pillRef = useRef(null);
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const pill = pillRef.current;
    if (!pill) return;

    const onMove = (e) => {
      pill.style.transform = `translate3d(${e.clientX + 16}px, ${e.clientY + 18}px, 0)`;
    };
    const onOver = (e) => {
      const el = e.target instanceof Element ? e.target.closest('[data-cursor]') : null;
      setLabel(el ? el.getAttribute('data-cursor') : '');
    };
    const onLeave = () => setLabel('');

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('scroll', onLeave, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('scroll', onLeave);
    };
  }, []);

  return (
    <div ref={pillRef} aria-hidden="true" className="hidden [@media(pointer:fine)]:block fixed top-0 left-0 z-[9999] pointer-events-none">
      <div
        className="px-3 py-1.5 rounded-full bg-[var(--t-accent)] text-[#fff] text-[12.5px] font-semibold whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-[opacity,transform] duration-150 ease-out origin-top-left"
        style={{ opacity: label ? 1 : 0, transform: label ? 'scale(1)' : 'scale(0.85)' }}
      >
        {label || ' '}
      </div>
    </div>
  );
}
