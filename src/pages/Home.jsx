import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ShieldCheck, ShieldX, RotateCcw, Copy, Mail } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import SEO from '../components/ui/SEO';
import { useTokens } from '../tokens/TokenProvider';
import { allProjects } from '../data/projects';
import CaseStudyCard from '../components/sections/CaseStudyCard';

const EMAIL = 'cezeigbo4@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ezeigbochinonso';

/* Small building blocks, all token driven */
const btnBase = "inline-flex items-center justify-center gap-2 font-semibold text-[15px] transition-[background,color,border-color,border-radius,padding,transform] duration-300 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--t-accent)]";
const btnStyle = { borderRadius: 'var(--t-radius)', padding: 'calc(var(--t-space) * 0.75) calc(var(--t-space) * 1.5)' };

function Eyebrow({ children }) {
  return <div className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[var(--t-accent-text)] mb-4 transition-colors duration-300">{children}</div>;
}

function Panel({ children, className = '' }) {
  return (
    <div
      className={`bg-[var(--t-surface)] border border-[var(--t-border)] transition-[background,border-color,border-radius,padding] duration-300 ${className}`}
      style={{ borderRadius: 'var(--t-radius-lg)', padding: 'calc(var(--t-space) * 1.5)' }}
    >
      {children}
    </div>
  );
}

/* Token readout row: name on the left, live value on the right */
function TokenRow({ name, value, swatch }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2 border-b border-[var(--t-border)] last:border-none font-mono text-[12.5px]">
      <span className="text-[var(--t-muted)]">{name}</span>
      <span className="flex items-center gap-2 text-[var(--t-fg)]">
        {swatch && <span className="w-3 h-3 rounded-full border border-[var(--t-border)]" style={{ background: swatch }} />}
        {value}
      </span>
    </div>
  );
}

/* The sign-in prompt used in the hero specimen and the safety chapter */
function SignInPrompt({ interactive = false }) {
  const [state, setState] = useState('ask');
  const result = {
    yes: { icon: ShieldCheck, title: "You're in.", text: 'Signed in on Chrome on Mac. Nothing else to do.' },
    no:  { icon: ShieldX,     title: 'Blocked.',   text: 'That device is signed out and your password is still safe. Nothing else to do.' },
  }[state];

  return (
    <Panel>
      <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--t-faint)] mb-4">
        <span className="w-2 h-2 rounded-full bg-[var(--t-accent)] transition-colors duration-300" />
        Sign-in request · just now
      </div>
      <div aria-live="polite">
        {state === 'ask' ? (
          <>
            <div className="font-['DM_Sans'] text-[26px] md:text-[30px] font-medium tracking-tight text-[var(--t-fg)] mb-4">Is this you?</div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6 text-[14px]">
              {[['Where', 'Newcastle upon Tyne, UK'], ['Device', 'Chrome on Mac'], ['When', '8:32 this morning'], ['Account', 'Work email']].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[var(--t-faint)] text-[12px] mb-0.5">{k}</dt>
                  <dd className="m-0 text-[var(--t-fg)] font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" data-cursor={interactive ? 'Try it' : undefined} onClick={() => interactive && setState('yes')} className={`${btnBase} bg-[var(--t-accent)] text-[#fff] flex-1`} style={btnStyle}>Yes, it's me</button>
              <button type="button" data-cursor={interactive ? 'Try it' : undefined} onClick={() => interactive && setState('no')} className={`${btnBase} bg-transparent text-[var(--t-fg)] border border-[var(--t-border)] flex-1`} style={btnStyle}>No, block it</button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-start gap-3 py-2">
            <result.icon size={36} strokeWidth={1.6} className="text-[var(--t-accent-text)]" />
            <div className="font-['DM_Sans'] text-[26px] md:text-[30px] font-medium tracking-tight text-[var(--t-fg)]">{result.title}</div>
            <p className="m-0 text-[15px] leading-[1.6] text-[var(--t-muted)]">{result.text}</p>
            <button type="button" onClick={() => setState('ask')} className="mt-2 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--t-fg)] underline underline-offset-4">
              <RotateCcw size={14} /> Try the other answer
            </button>
          </div>
        )}
      </div>
    </Panel>
  );
}

/* Three screens, three buttons, then one system.
   Plays by itself the first time it scrolls into view. */
function MessDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setFixed(true), 1400);
    return () => clearTimeout(t);
  }, [inView]);

  const messy = [
    { team: 'Settings', label: 'Save', style: { background: '#19a974', color: '#fff', borderRadius: 999, padding: '9px 26px', fontSize: 14, fontWeight: 700, letterSpacing: '0em', borderColor: 'transparent' } },
    { team: 'Billing', label: 'SAVE', style: { background: '#1f4fd8', color: '#fff', borderRadius: 0, padding: '14px 18px', fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', borderColor: 'transparent' } },
    { team: 'Profile', label: 'Done', style: { background: '#d9d9d9', color: '#222', borderRadius: 6, padding: '6px 14px', fontSize: 16, fontWeight: 400, letterSpacing: '0em', borderColor: '#9a9a9a' } },
  ];
  const system = { background: 'var(--t-accent)', color: '#fff', borderRadius: 'var(--t-radius)', padding: 'calc(var(--t-space) * 0.6) calc(var(--t-space) * 1.1)', fontSize: 14, fontWeight: 600, letterSpacing: '0em', borderColor: 'transparent' };

  return (
    <div ref={ref}>
      <Panel>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
          {messy.map((b, i) => (
            <div key={b.team} className="flex flex-col items-center gap-4 py-6 border border-dashed border-[var(--t-border)]" style={{ borderRadius: 'var(--t-radius)' }}>
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--t-faint)]">{b.team}</span>
              <div className="h-[52px] flex items-center">
                <span
                  className="inline-block whitespace-nowrap border motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out"
                  style={{ ...(fixed ? system : b.style), transitionDelay: `${i * 140}ms` }}
                >
                  {fixed ? 'Save' : b.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="m-0 text-[14px] text-[var(--t-muted)]" aria-live="polite">
            {fixed ? 'One button. One name. Every screen using it.' : 'Same action, three shapes, three colours, three labels.'}
          </p>
          <button type="button" onClick={() => setFixed(f => !f)} className={`${btnBase} shrink-0 ${fixed ? 'bg-transparent text-[var(--t-fg)] border border-[var(--t-border)]' : 'bg-[var(--t-fg)] text-[var(--t-bg)]'}`} style={btnStyle}>
            {fixed ? <><RotateCcw size={15} /> Show the mess</> : <><Check size={16} strokeWidth={2.6} /> Apply the system</>}
          </button>
        </div>
      </Panel>
    </div>
  );
}

export default function Home() {
  const { tk, accent, radius, density } = useTokens();
  const [copied, setCopied] = useState(false);
  const featured = allProjects.filter(p => p.featured);
  const more = allProjects.filter(p => !p.featured);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const chip = "inline-flex items-center gap-2 px-4 py-2 text-[14px] font-semibold text-[var(--t-fg)] bg-[var(--t-surface)] border border-[var(--t-border)] hover:border-[var(--t-fg)] transition-[border-color,border-radius,transform] duration-200 active:scale-[0.97]";

  return (
    <div className="w-full bg-[var(--t-bg)] text-[var(--t-fg)] transition-colors duration-300">
      <SEO title="Chinonso Ezeigbo · Product Designer" description="Product designer building design systems and security-minded products. Based in Newcastle upon Tyne and open to full-time roles." />

      <div className="max-w-[920px] mx-auto px-6">

        {/* INTRO */}
        <section className="pt-36 md:pt-44 pb-16 md:pb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <img src="/profile.jpg" alt="" className="w-14 h-14 rounded-full object-cover object-[center_20%] border border-[var(--t-border)]" />
              <div>
                <h1 className="font-['DM_Sans'] text-[26px] md:text-[30px] font-medium tracking-[-0.02em] leading-[1.15] text-[var(--t-fg)] m-0">Chinonso Ezeigbo</h1>
                <div className="font-['DM_Sans'] text-[22px] md:text-[26px] tracking-[-0.02em] leading-[1.2] text-[var(--t-muted)]">Product Designer</div>
              </div>
            </div>
            <div className="max-w-[640px] flex flex-col gap-4 text-[17px] md:text-[18px] leading-[1.65] text-[var(--t-muted)]">
              <p className="m-0">Four years designing B2B SaaS products, AI tools and <Link to="/projects/appsatile" className="text-[var(--t-fg)] underline underline-offset-4 decoration-[var(--t-border)] hover:decoration-[var(--t-accent)]">design systems</Link>, three of them in-house on one B2B workspace product.</p>
              <p className="m-0">I also have an MSc in Cyber Security, so I care about the moments most products rush: <Link to="/projects/keel" className="text-[var(--t-fg)] underline underline-offset-4 decoration-[var(--t-border)] hover:decoration-[var(--t-accent)]">sign-in prompts</Link>, account recovery and what happens to people's data.</p>
              <p className="m-0 flex items-start gap-2.5">
                <span className="relative flex h-2 w-2 shrink-0 mt-[0.65em]">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Based in Newcastle upon Tyne. Open to full-time roles across the UK: remote, hybrid or on-site.</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-8">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={chip} style={{ borderRadius: 'var(--t-radius)' }}>LinkedIn <ArrowUpRight size={15} /></a>
              <a href={`mailto:${EMAIL}`} className={chip} style={{ borderRadius: 'var(--t-radius)' }}><Mail size={15} /> {EMAIL}</a>
              <button type="button" onClick={copyEmail} className={chip} style={{ borderRadius: 'var(--t-radius)' }}>
                {copied ? <><Check size={15} strokeWidth={2.6} /> Copied</> : <><Copy size={14} /> Copy email</>}
              </button>
              <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
            </div>
          </FadeIn>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="scroll-mt-28">
          <FadeIn><h2 className="font-['DM_Sans'] text-[24px] md:text-[28px] font-medium tracking-[-0.02em] text-[var(--t-fg)] m-0 mb-6">Case studies</h2></FadeIn>
          <div className="flex flex-col gap-8">
            {featured.map((p, i) => (
              <FadeIn key={p.id} delay={Math.min(i, 2) * 0.05}>
                <CaseStudyCard project={p} eager={i === 0} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* THE SITE IS THE DEMO */}
        <section className="mt-24 md:mt-32">
          <FadeIn>
            <h2 className="font-['DM_Sans'] text-[24px] md:text-[28px] font-medium tracking-[-0.02em] text-[var(--t-fg)] m-0 mb-3">This site is a design system</h2>
            <p className="text-[17px] leading-[1.65] text-[var(--t-muted)] max-w-[640px] m-0 mb-8">
              Every colour, corner and gap here comes from a token. Open <span className="font-semibold text-[var(--t-fg)]">Tokens</span> at the bottom of the screen and change them, then try the two demos.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            <FadeIn className="flex flex-col gap-3">
              <MessDemo />
              <p className="text-[14.5px] leading-[1.55] text-[var(--t-muted)] m-0 px-1">Three screens, three different buttons. Then one system: this is where most of my projects start.</p>
            </FadeIn>
            <FadeIn delay={0.08} className="flex flex-col gap-3">
              <SignInPrompt interactive />
              <p className="text-[14.5px] leading-[1.55] text-[var(--t-muted)] m-0 px-1">A sign-in prompt in plain words. Whatever you answer, it tells you what happened.</p>
            </FadeIn>
          </div>
          <FadeIn className="mt-5">
            <Panel className="!py-3">
              <TokenRow name="color.action.primary" value={accent.primitive} swatch={accent.hex} />
              <TokenRow name="radius.control" value={`${radius.px}px`} />
              <TokenRow name="space.inset.md" value={`${density.px}px`} />
              <TokenRow name="color.bg.page" value={tk.theme} />
            </Panel>
          </FadeIn>
        </section>

        {/* MORE WORK */}
        <section className="mt-24 md:mt-32">
          <FadeIn className="flex items-end justify-between gap-6 mb-6">
            <h2 className="font-['DM_Sans'] text-[24px] md:text-[28px] font-medium tracking-[-0.02em] text-[var(--t-fg)] m-0">More work</h2>
            <Link to="/projects" className="text-[15px] font-semibold text-[var(--t-muted)] hover:text-[var(--t-fg)] underline underline-offset-4 decoration-[var(--t-border)]">All projects</Link>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-9">
            {more.map((p, i) => (
              <FadeIn key={p.id} delay={Math.min(i, 4) * 0.05}>
                <Link to={`/projects/${p.id}`} data-cursor="View project" className="group block">
                  <div className="overflow-hidden border border-[var(--t-border)] transition-[border-radius] duration-300" style={{ borderRadius: 'var(--t-radius-lg)' }}>
                    <img src={p.image} alt={`${p.title} cover`} loading="lazy" decoding="async" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex items-center justify-between gap-3 mt-3 px-0.5">
                    <h3 className="font-['DM_Sans'] text-[17px] font-medium text-[var(--t-fg)] m-0">{p.title}</h3>
                    {p.concept && <span className="text-[12px] text-[var(--t-faint)]">Concept</span>}
                  </div>
                  <p className="text-[14.5px] leading-[1.5] text-[var(--t-muted)] m-0 mt-1 px-0.5">{p.hook}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        <div className="h-24 md:h-32" />
      </div>
    </div>
  );
}
