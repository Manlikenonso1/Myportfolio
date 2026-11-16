import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import SEO from '../components/ui/SEO';
import { allProjects } from '../data/projects';
import CaseStudyCard from '../components/sections/CaseStudyCard';

const EMAIL = 'cezeigbo4@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ezeigbochinonso';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);

  const featured = allProjects.filter((p) => p.featured);

  const handleCopyEmail = (e) => {
    e?.preventDefault();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(EMAIL).catch(() => {});
    }
    setCopied(true);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full bg-[var(--t-bg)] text-[var(--t-fg)] transition-colors duration-300">
      <SEO
        title="Chinonso Ezeigbo · Product Designer"
        description="Portfolio of Chinonso Ezeigbo: Product designer in Newcastle upon Tyne specialising in design systems, B2B SaaS, and accessible digital products."
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* HERO SECTION */}
        <section className="pt-36 sm:pt-42 md:pt-46 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
            {/* Left: Warm, human intro */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--t-border)] bg-[var(--t-surface)] text-[13.5px] text-[var(--t-muted)] mb-8 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Based in Newcastle upon Tyne · Open to full-time UK roles</span>
              </div>

              <h1 className="font-['Fraunces'] font-normal text-[clamp(44px,7vw,92px)] leading-[1.02] tracking-[-0.03em] text-[var(--t-fg)] m-0">
                Hi, I'm Chinonso.{' '}
                <span className="block mt-2 text-[clamp(32px,5vw,68px)] text-[var(--t-muted)] font-normal">
                  I make complex software feel <em className="italic text-[var(--t-accent)] font-normal">simple and human</em>.
                </span>
              </h1>

              <p className="text-[18px] md:text-[20px] leading-[1.65] text-[var(--t-muted)] max-w-[620px] m-0 mt-8 font-normal">
                I'm a product designer with four years of experience in B2B SaaS and design systems. I hold an MSc in Cyber Security from Aston University, which taught me to care deeply about clarity, data privacy, and building tools people can genuinely trust.
              </p>

              {/* Action Deck */}
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--t-fg)] text-[var(--t-bg)] text-[15px] font-medium tracking-tight transition-all duration-300 hover:bg-[var(--t-accent)] hover:-translate-y-0.5 shadow-sm"
                >
                  Let's talk
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--t-border)] bg-[var(--t-surface)] text-[15px] font-medium text-[var(--t-fg)] hover:border-[var(--t-fg)] transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[var(--t-accent)]" />
                      Email copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 opacity-70" />
                      Copy email
                    </>
                  )}
                </button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-[15px] font-medium text-[var(--t-muted)] hover:text-[var(--t-fg)] underline underline-offset-4 decoration-[var(--t-border)] hover:decoration-[var(--t-accent)] transition-colors"
                >
                  Resume (PDF) ↗
                </a>
              </div>
            </div>

            {/* Right: Profile portrait alone (Balanced baseline) */}
            <div className="lg:pl-4">
              <div className="relative group">
                <div className="overflow-hidden rounded-[26px] border border-[var(--t-border)] bg-[var(--t-surface)] shadow-md">
                  <img
                    src="/profile.jpg"
                    alt="Chinonso Ezeigbo"
                    className="w-full aspect-[4/5] max-h-[500px] object-cover object-[center_18%] block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-center justify-between mt-3.5 px-1 text-[13.5px] text-[var(--t-muted)]">
                  <span className="font-medium text-[var(--t-fg)]">Chinonso Ezeigbo</span>
                  <span className="text-[var(--t-faint)]">Product Designer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT THE WORK DELIVERED */}
        <section className="py-20 md:py-26 border-t border-[var(--t-border)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-wider text-[var(--t-faint)] m-0 mb-3">
                Measurable results
              </p>
              <h2 className="font-['Fraunces'] font-normal text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.025em] text-[var(--t-fg)] m-0">
                Outcomes from real <span className="italic text-[var(--t-accent)] font-normal">production work</span>
              </h2>
            </div>
            <p className="text-[15px] text-[var(--t-muted)] max-w-[400px] m-0">
              A few key milestones from products I've helped design, scale, and rebuild.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {/* Lead Story: Inverted Dark Card (Span 4) */}
            <article className="md:col-span-4 flex flex-col justify-between gap-8 p-8 md:p-10 rounded-[24px] bg-[#141312] text-[#F7F5F0] transition-all duration-400 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[12.5px] font-medium text-[#F7F5F0]/70">
                    Handoff speed & developer alignment
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] bg-white/10 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Shipped in production
                  </span>
                </div>
                <p className="font-['Fraunces'] text-[clamp(24px,2.9vw,38px)] font-normal leading-[1.25] tracking-[-0.02em] m-0">
                  Cut handoff time to engineers by{' '}
                  <span className="italic text-[#E58348]">
                    about 50%
                  </span>{' '}
                  by naming Figma variants and tokens to match their exact React props.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10 text-[14px] text-[#F7F5F0]/70">
                <span>Appsatile · Multi-product design system</span>
                <Link to="/projects/appsatile" className="text-[#E58348] hover:underline font-medium">
                  Read the case study →
                </Link>
              </div>
            </article>

            {/* System Scale (Span 2) */}
            <article className="md:col-span-2 flex flex-col justify-between gap-6 p-7 md:p-8 rounded-[24px] bg-[var(--t-surface)] border border-[var(--t-border)] transition-all duration-400 hover:shadow-md">
              <div>
                <p className="text-[12.5px] font-medium uppercase tracking-wider text-[var(--t-faint)] m-0 mb-3">
                  Design tokens & components
                </p>
                <p className="font-['Fraunces'] text-[38px] leading-[1] text-[var(--t-accent)] tracking-[-0.02em] m-0 mb-2 font-normal">
                  70+ <span className="font-sans text-[16px] text-[var(--t-muted)] font-normal">components</span>
                </p>
                <p className="text-[14.5px] text-[var(--t-muted)] leading-[1.55] m-0">
                  Four density modes and accessible color pairs checked against WCAG AA standards.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[var(--t-border)] text-[13px]">
                <div className="flex justify-between items-center text-[var(--t-muted)]">
                  <span>Design tokens</span>
                  <span className="text-[var(--t-fg)] font-semibold">1,100+ tokens</span>
                </div>
                <div className="flex justify-between items-center text-[var(--t-muted)]">
                  <span>Icon library</span>
                  <span className="text-[var(--t-fg)] font-semibold">868 icons</span>
                </div>
              </div>
            </article>

            {/* Architecture: 18 Files -> 1 (Span 3) */}
            <article className="md:col-span-3 flex flex-col justify-between gap-6 p-7 md:p-8 rounded-[24px] bg-[var(--t-surface)] border border-[var(--t-border)] transition-all duration-400 hover:shadow-md">
              <div>
                <p className="text-[12.5px] font-medium uppercase tracking-wider text-[var(--t-faint)] m-0 mb-3">
                  Product simplification
                </p>
                <h3 className="font-['Fraunces'] text-[24px] md:text-[28px] leading-[1.25] tracking-[-0.02em] text-[var(--t-fg)] m-0 font-normal">
                  Bringing <span className="text-[var(--t-accent)]">18 Figma files</span> into one coherent workspace
                </h3>
              </div>
              <p className="text-[15px] leading-[1.6] text-[var(--t-muted)] m-0">
                Three years of fragmented files brought into a clean interface for tasks, files, calendar leaves, and team communication.
              </p>
              <div className="pt-2 text-[13px] text-[var(--t-faint)] font-medium">
                Appsatile Workspace · Full rebuild
              </div>
            </article>

            {/* AI Creator Suite (Span 3) */}
            <article className="md:col-span-3 flex flex-col justify-between gap-6 p-7 md:p-8 rounded-[24px] bg-[var(--t-surface)] border border-[var(--t-border)] transition-all duration-400 hover:shadow-md">
              <div>
                <p className="text-[12.5px] font-medium uppercase tracking-wider text-[var(--t-faint)] m-0 mb-3">
                  AI interface design
                </p>
                <h3 className="font-['Fraunces'] text-[24px] md:text-[28px] leading-[1.25] tracking-[-0.02em] text-[var(--t-fg)] m-0 font-normal">
                  Connecting <span className="text-[var(--t-accent)]">5 AI tools</span> with transparent pricing on the button
                </h3>
              </div>
              <p className="text-[15px] leading-[1.6] text-[var(--t-muted)] m-0">
                Designed a workflow where video creators can chain generation steps seamlessly, with every credit cost shown plainly upfront.
              </p>
              <div className="pt-2 text-[13px] text-[var(--t-faint)] font-medium">
                LazyZoneLabs · Live at lazyzonelabs.com
              </div>
            </article>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="py-20 md:py-26 border-t border-[var(--t-border)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-wider text-[var(--t-faint)] m-0 mb-3">
                Selected work
              </p>
              <h2 className="font-['Fraunces'] font-normal text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.025em] text-[var(--t-fg)] m-0">
                Detailed case studies
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--t-fg)] hover:text-[var(--t-accent)] transition-colors"
            >
              View all ({allProjects.length} projects) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {featured.map((p, i) => (
              <CaseStudyCard key={p.id} project={p} eager={i < 2} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[var(--t-border)] bg-[var(--t-surface)] text-[15px] font-medium text-[var(--t-fg)] hover:border-[var(--t-fg)] shadow-xs transition-all hover:-translate-y-0.5"
            >
              See all projects & concept work →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
