import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import { allProjects } from '../data/projects';
import WorkBlock, { WorkIndex } from '../components/sections/WorkBlock';

const EMAIL = 'cezeigbo4@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ezeigbochinonso';

const facts = [
  ['Now', 'Freelance product designer, open to full-time roles'],
  ['Before', 'Appsatile, Talstrike, Modtech'],
  ['Based', 'Newcastle upon Tyne. Remote, hybrid or on-site'],
];

const link = 'text-[var(--t-fg)] underline underline-offset-4 decoration-1 decoration-[var(--t-faint)] hover:decoration-[var(--t-fg)] transition-colors';

export default function Home() {
  // Shipped work leads: Talstrike, Appsatile, LazyZoneLabs, then the concept
  const order = ['talstrike', 'appsatile', 'lazyzone', 'keel'];
  const featured = order.map((id) => allProjects.find((p) => p.id === id)).filter(Boolean);
  const rest = allProjects.filter((p) => !order.includes(p.id));

  return (
    <div className="w-full bg-[var(--t-bg)] text-[var(--t-fg)]">
      <SEO
        title="Chinonso Ezeigbo · Product Designer"
        description="Portfolio of Chinonso Ezeigbo: Product designer in Newcastle upon Tyne specialising in B2B SaaS, AI products, design systems and accessible digital products."
      />

      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        {/* INTRO: who I am in two sentences, the facts beside it */}
        <section className="pt-32 md:pt-44 pb-14 md:pb-20 grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-10 lg:gap-24 items-end">
          <h1 className="m-0 font-normal text-[clamp(28px,3.5vw,46px)] leading-[1.16] tracking-[-0.03em] text-[var(--t-fg)] max-w-[820px]">
            Chinonso Ezeigbo is a product designer.{' '}
            <span className="text-[var(--t-faint)]">
              For five years I have designed B2B software, AI tools and the design systems that hold them together.
            </span>
          </h1>

          <div>
            <dl className="m-0 border-t border-[var(--t-border)]">
              {facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[72px_1fr] gap-4 py-3 border-b border-[var(--t-border)] text-[15px] leading-[1.45]">
                  <dt className="text-[var(--t-faint)]">{k}</dt>
                  <dd className="m-0 text-[var(--t-fg)]">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="m-0 mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
              <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={link}>CV</a>
            </p>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="scroll-mt-24">
          <div className="flex items-baseline justify-between pb-4 text-[14px] text-[var(--t-faint)]">
            <h2 className="m-0 text-[14px] font-normal text-[var(--t-faint)]">Selected work</h2>
            <span className="tabular-nums">{String(featured.length).padStart(2, '0')}</span>
          </div>

          <div className="flex flex-col gap-14 md:gap-20">
            {featured[0] && <WorkBlock project={featured[0]} index={1} wide eager />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
              {featured.slice(1, 3).map((p, i) => <WorkBlock key={p.id} project={p} index={i + 2} />)}
            </div>
            {featured[3] && <WorkBlock project={featured[3]} index={4} wide />}
          </div>
        </section>

        {/* EVERYTHING ELSE */}
        <section className="pt-24 md:pt-32 pb-8">
          <div className="flex items-baseline justify-between pb-4 text-[14px] text-[var(--t-faint)]">
            <h2 className="m-0 text-[14px] font-normal text-[var(--t-faint)]">More work</h2>
            <Link to="/projects" className={`${link} text-[14px]`}>All {allProjects.length} projects</Link>
          </div>
          <WorkIndex projects={rest} />
        </section>
      </div>
    </div>
  );
}
