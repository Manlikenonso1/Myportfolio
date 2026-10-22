import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouse = { x: 0, y: 0 };
    let ringPos = { x: 0, y: 0 };
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dot.style.transform = `translate(${mouse.x - 4}px, ${mouse.y - 4}px)`;
      if (!visible) setVisible(true);
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringPos.x = lerp(ringPos.x, mouse.x, 0.12);
      ringPos.y = lerp(ringPos.y, mouse.y, 0.12);
      ring.style.transform = `translate(${ringPos.x - 18}px, ${ringPos.y - 18}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onEnter = (e) => {
      const el = e.target.closest('a, button, [role="button"], input, textarea, select, details summary, [data-cursor-hover]');
      if (el) setHovered(true);
    };
    const onLeave = (e) => {
      const el = e.target.closest('a, button, [role="button"], input, textarea, select, details summary, [data-cursor-hover]');
      if (el) setHovered(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <>
      {/* Precise dot */}
      <div
        ref={dotRef}
        style={{ opacity: visible ? 1 : 0 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] transition-opacity duration-300 mix-blend-difference"
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        style={{ opacity: visible ? 1 : 0 }}
        className={`fixed top-0 left-0 w-9 h-9 rounded-full border pointer-events-none z-[9998] transition-all duration-150 mix-blend-difference ${
          hovered
            ? 'border-white scale-150 bg-white/10'
            : 'border-white/40 scale-100'
        }`}
      />
    </>
  );
}
