import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import { allProjects } from '../data/projects';
import WorkBlock, { WorkIndex } from '../components/sections/WorkBlock';

const EMAIL = 'cezeigbo4@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ezeigbochinonso';

/* The time where I am, so people know when I will reply */
function useNewcastleTime() {
  const fmt = () => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London' }).format(new Date());
  const [t, setT] = useState(fmt);
  useEffect(() => { const id = setInterval(() => setT(fmt()), 20000); return () => clearInterval(id); }, []);
  return t;
}

const link = 'text-[var(--t-fg)] underline underline-offset-4 decoration-1 decoration-[var(--t-faint)] hover:decoration-[var(--t-fg)] transition-colors';

export default function Home() {
  // Shipped work leads: Talstrike, Appsatile, LazyZoneLabs, then the concept
  const order = ['talstrike', 'appsatile', 'lazyzone', 'keel'];
  const featured = order.map((id) => allProjects.find((p) => p.id === id)).filter(Boolean);
  const rest = allProjects.filter((p) => !order.includes(p.id));
  const time = useNewcastleTime();

  return (
    <div className="w-full bg-[var(--t-bg)] text-[var(--t-fg)]">
      <SEO
        title="Chinonso Ezeigbo · Product Designer"
        description="Portfolio of Chinonso Ezeigbo: Product designer in Newcastle upon Tyne specialising in B2B SaaS, AI products, design systems and accessible digital products."
      />

      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        {/* INTRO: one statement, then the facts as a single row */}
        <section className="pt-36 md:pt-52 pb-12 md:pb-16">
          <h1 className="m-0 font-['Bricolage_Grotesque'] font-medium text-[clamp(38px,6.4vw,96px)] leading-[1] tracking-[-0.032em] text-[var(--t-fg)] max-w-[1180px]">
            Product designer for software that has a lot going on.
          </h1>

          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-10 gap-y-6 border-t border-[var(--t-border)] pt-5 text-[15px] leading-[1.5]">
            <p className="m-0 text-[17px] md:text-[18px] leading-[1.5] text-[var(--t-fg)] max-w-[440px]">
              I'm Chinonso Ezeigbo. For five years I have designed B2B products, AI tools and the design systems that hold them together.
            </p>
            <div>
              <p className="m-0 text-[var(--t-faint)]">Now</p>
              <p className="m-0 flex items-center gap-2"><span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[var(--t-accent)]" />Freelance, open to full-time roles</p>
            </div>
            <div>
              <p className="m-0 text-[var(--t-faint)]">Based</p>
              <p className="m-0">Newcastle upon Tyne <span className="tabular-nums text-[var(--t-faint)]">{time}</span></p>
            </div>
            <div>
              <p className="m-0 text-[var(--t-faint)]">Reach me</p>
              <p className="m-0 flex flex-wrap gap-x-4">
                <a href={`mailto:${EMAIL}`} className={link}>Email</a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={link}>CV</a>
              </p>
            </div>
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
