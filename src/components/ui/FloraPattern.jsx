/**
 * FloraPattern
 * Decorative background layer using real botanical / Art Nouveau SVG vectors
 * downloaded from Wikimedia Commons (public domain / CC0).
 *
 * Sources:
 *   • art-nouveau-floral.svg — "Art Nouveau floral ornament by E. M. Lilien" (Wikimedia Commons)
 *   • floral-headpiece.svg  — "Art Nouveau French floral headpiece" (Wikimedia Commons)
 */
export default function FloraPattern({ className = "" }) {
  return (
    <div
      className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* ── TOP-RIGHT: large vertical ornament cluster ── */}
      <img
        src="/art-nouveau-floral.svg"
        alt=""
        className="absolute -top-8 -right-16 w-[420px] md:w-[560px] rotate-[12deg] opacity-[0.07] mix-blend-screen"
        draggable="false"
      />

      {/* ── BOTTOM-LEFT: mirrored ornament ── */}
      <img
        src="/art-nouveau-floral.svg"
        alt=""
        className="absolute bottom-[5%] -left-20 w-[380px] md:w-[500px] -rotate-[15deg] scale-x-[-1] opacity-[0.06] mix-blend-screen"
        draggable="false"
      />

      {/* ── TOP: horizontal headpiece banner ── */}
      <img
        src="/floral-headpiece.svg"
        alt=""
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] lg:w-[1100px] opacity-[0.065] mix-blend-screen"
        draggable="false"
      />

      {/* ── MID-PAGE: second headpiece inverted ── */}
      <img
        src="/floral-headpiece.svg"
        alt=""
        className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] rotate-180 opacity-[0.04] mix-blend-screen"
        draggable="false"
      />

      {/* ── Subtle ambient glows to give warmth behind the flora ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(208,201,185,0.035)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(147,163,130,0.025)_0%,transparent_65%)] pointer-events-none" />
    </div>
  );
}
