import { useState } from 'react';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const EMAIL = 'cezeigbo4@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ezeigbochinonso';

/* The same ending on every page: who I am and how to reach me. */
export default function ContactBlock() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  const btn = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[var(--t-radius)] font-semibold text-[15px] transition-all active:scale-[0.97]";

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center bg-[var(--t-surface)] border border-[var(--t-border)] transition-[border-radius,background-color] duration-300" style={{ borderRadius: 'var(--t-radius-lg)', padding: 'calc(var(--t-space) * 2.5)' }}>
        <img src="/profile.jpg" alt="Chinonso Ezeigbo" loading="lazy" decoding="async" className="w-[120px] h-[120px] md:w-[168px] md:h-[168px] rounded-full object-cover object-[center_20%] border border-white/10" />
        <div>
          <h2 className="font-['DM_Sans'] text-[clamp(28px,3.4vw,44px)] font-medium leading-[1.08] tracking-[-0.03em] text-white mb-4">Hiring a product designer? Let's talk.</h2>
          <p className="text-[17px] leading-[1.6] text-white/65 max-w-[560px] mb-7">
            I'm Chinonso, based in Newcastle upon Tyne. I'm open to full-time roles across the UK, remote, hybrid or on-site, and happy to walk you through any of this work.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className={`${btn} bg-[var(--t-accent)] text-[#fff] hover:opacity-90`}>{EMAIL}</a>
            <button type="button" onClick={copyEmail} className={`${btn} text-white border border-white/20 hover:bg-white/10`}>
              {copied ? <><Check size={16} strokeWidth={2.6} /> Copied</> : <><Copy size={15} /> Copy email</>}
            </button>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={`${btn} text-white border border-white/20 hover:bg-white/10`}>LinkedIn <ArrowRight size={16} /></a>
          </div>
          <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
        </div>
      </div>
    </FadeIn>
  );
}
