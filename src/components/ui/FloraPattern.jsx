/**
 * FloraPattern
 * Decorative background layer using real botanical / Art Nouveau SVG vectors
 * downloaded from Wikimedia Commons (public domain / CC0).
 *
 * Sources:
 *   • art-nouveau-floral.svg — "Art Nouveau floral ornament by E. M. Lilien" (Wikimedia Commons)
 *   • floral-headpiece.svg  — "Art Nouveau French floral headpiece" (Wikimedia Commons)
 *
 * Fix: The SVGs have black fills. On a dark background we must invert them to white
 * via CSS filter so they're actually visible. mix-blend-mode:screen makes black → invisible.
 */
export default function FloraPattern({ className = "" }) {
  // CSS filter that turns black SVG lines → white/cream so they show on dark bg
  const floralFilter = "invert(1) brightness(0.7) sepia(0.3)";

  return (
    <div
      className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* ── TOP-RIGHT: large ornament cluster ── */}
      <img
        src="/art-nouveau-floral.svg"
        alt=""
        draggable="false"
        style={{
          position: "absolute",
          top: "-40px",
          right: "-60px",
          width: "520px",
          maxWidth: "45vw",
          opacity: 0.13,
          transform: "rotate(10deg)",
          filter: floralFilter,
        }}
      />

      {/* ── BOTTOM-LEFT: mirrored ornament ── */}
      <img
        src="/art-nouveau-floral.svg"
        alt=""
        draggable="false"
        style={{
          position: "absolute",
          bottom: "4%",
          left: "-60px",
          width: "460px",
          maxWidth: "40vw",
          opacity: 0.10,
          transform: "rotate(-14deg) scaleX(-1)",
          filter: floralFilter,
        }}
      />

      {/* ── TOP-CENTRE: horizontal headpiece banner ── */}
      <img
        src="/floral-headpiece.svg"
        alt=""
        draggable="false"
        style={{
          position: "absolute",
          top: "108px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1100px, 95vw)",
          opacity: 0.14,
          filter: floralFilter,
        }}
      />

      {/* ── MID-PAGE: second headpiece, flipped ── */}
      <img
        src="/floral-headpiece.svg"
        alt=""
        draggable="false"
        style={{
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translateX(-50%) rotate(180deg)",
          width: "min(900px, 90vw)",
          opacity: 0.09,
          filter: floralFilter,
        }}
      />

      {/* ── Warm ambient glows ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "600px",
          height: "600px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(208,201,185,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: 0,
          width: "500px",
          height: "500px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(147,163,130,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
