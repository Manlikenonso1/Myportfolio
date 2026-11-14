import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Sun, Moon, X } from 'lucide-react';

/* ----------------------------------------------------------------
   The portfolio's design tokens. One source of truth for every page:
   the dock changes them, and the whole site follows.
------------------------------------------------------------------- */
export const ACCENTS = [
  { id: 'blue',   label: 'Blue',   primitive: 'blue.600',   hex: '#2F5BEA' },
  { id: 'violet', label: 'Violet', primitive: 'violet.600', hex: '#6D4AFF' },
  { id: 'green',  label: 'Green',  primitive: 'green.700',  hex: '#0E7C4A' },
  { id: 'orange', label: 'Orange', primitive: 'orange.700', hex: '#C2410C' },
  { id: 'pink',   label: 'Pink',   primitive: 'pink.700',   hex: '#BE185D' },
];
export const RADII = [
  { id: 'sharp', label: 'Sharp', px: 2 },
  { id: 'soft',  label: 'Soft',  px: 10 },
  { id: 'round', label: 'Round', px: 22 },
];
export const DENSITIES = [
  { id: 'compact',     label: 'Compact',     px: 12 },
  { id: 'comfortable', label: 'Comfortable', px: 16 },
  { id: 'spacious',    label: 'Spacious',    px: 22 },
];
export const THEMES = {
  dark: {
    bg: '#0A0A0A', surface: '#151416', fg: '#FFFFFF', muted: 'rgba(255,255,255,0.64)', faint: 'rgba(255,255,255,0.42)', border: 'rgba(255,255,255,0.14)',
    // Values for pages built before the token system
    legacy: { '--bg': '#000000', '--bg2': '#131114', '--bg3': '#252525', '--card': '#131114', '--white': '#ffffff', '--muted': '#b3b3b3', '--faint': '#6d6d6d', '--border': '#333333', '--tan': '#d0c9b9', '--green': '#81ffbd', '--color-white': '#ffffff', '--color-black': '#000000' },
  },
  light: {
    bg: '#F6F4EF', surface: '#FFFFFF', fg: '#15140F', muted: 'rgba(21,20,15,0.70)', faint: 'rgba(21,20,15,0.55)', border: 'rgba(21,20,15,0.16)',
    // In light theme "white" and "black" swap roles, so older pages invert cleanly
    legacy: { '--bg': '#F6F4EF', '--bg2': '#EFECE4', '--bg3': '#E4E0D6', '--card': '#FFFFFF', '--white': '#15140F', '--muted': '#55534B', '--faint': '#7A786F', '--border': '#D6D2C7', '--tan': '#6B6455', '--green': '#0E9F6E', '--color-white': '#15140F', '--color-black': '#FFFFFF' },
  },
};
export const DEFAULTS = { accent: 'blue', radius: 'soft', density: 'comfortable', theme: 'dark' };

const TokenContext = createContext(null);
export const useTokens = () => useContext(TokenContext);

export function TokenProvider({ children }) {
  const [tk, setTk] = useState(DEFAULTS);
  const [changes, setChanges] = useState(0);

  const value = useMemo(() => {
    const accent = ACCENTS.find(a => a.id === tk.accent);
    const radius = RADII.find(r => r.id === tk.radius);
    const density = DENSITIES.find(d => d.id === tk.density);
    const theme = THEMES[tk.theme];
    return {
      tk, accent, radius, density, theme, changes,
      changed: JSON.stringify(tk) !== JSON.stringify(DEFAULTS),
      set: (key, v) => { if (tk[key] !== v) { setChanges(c => c + 1); setTk(t => ({ ...t, [key]: v })); } },
      reset: () => setTk(DEFAULTS),
    };
  }, [tk, changes]);

  // Tokens live on <html>, so every page, the nav and the footer read the same values
  useEffect(() => {
    const { accent, radius, density, theme } = value;
    const vars = {
      '--t-accent': accent.hex,
      '--t-accent-text': tk.theme === 'dark' ? `color-mix(in srgb, ${accent.hex} 55%, white)` : accent.hex,
      '--t-bg': theme.bg, '--t-surface': theme.surface, '--t-fg': theme.fg,
      '--t-muted': theme.muted, '--t-faint': theme.faint, '--t-border': theme.border,
      '--t-radius': `${radius.px}px`, '--t-radius-lg': `${Math.round(radius.px * 1.8)}px`,
      '--t-space': `${density.px}px`,
      '--blue': accent.hex, '--blue-dk': `color-mix(in srgb, ${accent.hex} 82%, black)`,
      ...theme.legacy,
    };
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    root.dataset.theme = tk.theme;
    root.style.colorScheme = tk.theme;
  }, [value, tk.theme]);

  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>;
}

/* The dock: fixed to the bottom of every page */
export function TokenDock() {
  const { tk, accent, set, reset, changed, changes } = useTokens();
  const [open, setOpen] = useState(false);
  const [rewardClosed, setRewardClosed] = useState(false);
  const showReward = changes >= 3 && !rewardClosed;

  const seg = (on) => `px-3 py-1.5 text-[12.5px] font-semibold rounded-md transition-colors ${on ? 'bg-[#fff] text-[#000]' : 'text-[#ffffffb3] hover:text-[#fff]'}`;
  const label = "text-[11px] font-semibold tracking-[0.14em] uppercase text-[#ffffff80] mr-1";

  const controls = (
    <>
      <div className="flex items-center gap-2" role="group" aria-label="Brand colour">
        <span className={label}>Colour</span>
        {ACCENTS.map(a => (
          <button key={a.id} type="button" aria-label={a.label} aria-pressed={tk.accent === a.id} onClick={() => set('accent', a.id)}
            className={`w-6 h-6 rounded-full border-2 transition-transform ${tk.accent === a.id ? 'border-[#fff] scale-110' : 'border-transparent hover:scale-110'}`} style={{ background: a.hex }} />
        ))}
      </div>
      <div className="flex items-center gap-1" role="group" aria-label="Corner radius">
        <span className={label}>Radius</span>
        {RADII.map(r => <button key={r.id} type="button" aria-pressed={tk.radius === r.id} onClick={() => set('radius', r.id)} className={seg(tk.radius === r.id)}>{r.label}</button>)}
      </div>
      <div className="flex items-center gap-1" role="group" aria-label="Density">
        <span className={label}>Density</span>
        {DENSITIES.map(d => <button key={d.id} type="button" aria-pressed={tk.density === d.id} onClick={() => set('density', d.id)} className={seg(tk.density === d.id)}>{d.label}</button>)}
      </div>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => set('theme', tk.theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${tk.theme === 'dark' ? 'light' : 'dark'} theme`}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-[12.5px] font-semibold rounded-md text-[#ffffffcc] hover:text-[#fff] border border-[#ffffff26]">
          {tk.theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />} {tk.theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        {changed && (
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 px-2 py-1.5 text-[12.5px] font-semibold text-[#ffffff99] hover:text-[#fff]">
            <RotateCcw size={13} /> Reset
          </button>
        )}
      </div>
    </>
  );

  return (
    <div className="fixed bottom-4 inset-x-0 z-[160] flex flex-col items-center gap-2 px-4 pointer-events-none">
      <div aria-live="polite" className="pointer-events-none">
        {showReward && (
          <motion.div initial={{ opacity: 0, y: 12, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            className="pointer-events-auto flex items-center gap-3 pl-4 pr-2 py-2 rounded-xl bg-[#fff] text-[#000] shadow-[0_12px_40px_rgba(0,0,0,0.35)] text-[14px] font-semibold">
            <span>You just themed this site. That's my job.</span>
            <button type="button" onClick={() => setRewardClosed(true)} aria-label="Dismiss" className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-[#0000001a]"><X size={15} /></button>
          </motion.div>
        )}
      </div>
      {/* The dock keeps its own dark surface in both themes, so it reads as a tool */}
      <div className="pointer-events-auto bg-[#0b0b0cf0] backdrop-blur border border-[#ffffff26] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] max-w-full">
        {open && (
          <div id="token-dock" className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 px-5 pt-4 pb-2 lg:py-3" role="toolbar" aria-label="Design tokens">
            {controls}
            <button type="button" onClick={() => setOpen(false)} aria-label="Close tokens" className="hidden lg:flex w-8 h-8 items-center justify-center rounded-lg text-[#ffffff99] hover:text-[#fff] hover:bg-[#ffffff1a]"><X size={16} /></button>
          </div>
        )}
        <button type="button" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="token-dock"
          className={`items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-[#fff] w-full justify-center ${open ? 'flex lg:hidden' : 'flex'}`}>
          <span className="w-3 h-3 rounded-full" style={{ background: accent.hex }} />
          {open ? 'Close tokens' : 'Tokens'}
        </button>
      </div>
    </div>
  );
}
