import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import { allProjects } from '../data/projects';
import CaseStudyCard from '../components/sections/CaseStudyCard';

const EMAIL = 'cezeigbo4@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ezeigbochinonso';

export default function Home() {
  const featured = allProjects.filter((p) => p.featured);

  return (
    <div className="w-full bg-[var(--t-bg)] text-[var(--t-fg)] transition-colors duration-300">
      <SEO
        title="Chinonso Ezeigbo · Product Designer"
        description="Portfolio of Chinonso Ezeigbo: Product designer in Newcastle upon Tyne specialising in design systems, B2B SaaS, and accessible digital products."
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* HERO SECTION */}
        <section className="pt-32 sm:pt-40 md:pt-44 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-20 items-center">
            {/* Left: Warm, human intro */}
            <div>
              <p className="text-[15px] text-[var(--t-muted)] m-0 mb-6">Based in Newcastle upon Tyne. Open to full-time roles in the UK.</p>

              <h1 className="font-['Fraunces'] font-normal text-[clamp(44px,7vw,92px)] leading-[1.02] tracking-[-0.03em] text-[var(--t-fg)] m-0">
                Hi, I'm Chinonso.
              </h1>

              <p className="text-[18px] md:text-[20px] leading-[1.65] text-[var(--t-muted)] max-w-[620px] m-0 mt-8 font-normal">
                I'm a product designer with four years of experience in B2B SaaS and design systems. I like taking complicated products and making them easy for people to use. I also have an MSc in Cyber Security.
              </p>

              {/* Action Deck */}
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--t-fg)] text-[var(--t-bg)] text-[15px] font-medium tracking-tight transition-all duration-300 hover:bg-[var(--t-accent)] hover:-translate-y-0.5 shadow-sm"
                >
                  Let's talk
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-[15px] font-medium text-[var(--t-muted)] hover:text-[var(--t-fg)] underline underline-offset-4 decoration-[var(--t-border)] hover:decoration-[var(--t-accent)] transition-colors"
                >
                  Resume (PDF)
                </a>
              </div>
            </div>

            {/* Right: Profile portrait alone (Balanced baseline) */}
            <div className="order-first lg:order-none w-[132px] lg:w-auto">
              <img
                src="/profile.jpg"
                alt="Chinonso Ezeigbo"
                className="w-full aspect-square lg:aspect-[4/5] object-cover object-[center_18%] block rounded-[20px] lg:rounded-[26px] border border-[var(--t-border)]"
              />
            </div>
          </div>
        </section>

        {/* WHAT THE WORK DELIVERED */}
        <section className="py-16 md:py-20 border-t border-[var(--t-border)]">
          <h2 className="font-['Fraunces'] font-normal text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.025em] text-[var(--t-fg)] m-0 mb-10">
            Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <article className="flex flex-col justify-between gap-8 p-7 md:p-9 rounded-[22px] bg-[var(--t-surface)] border border-[var(--t-border)]">
              <div>
                <p className="text-[14px] font-medium text-[var(--t-faint)] m-0 mb-4">Developer handoff</p>
                <p className="font-['Fraunces'] text-[26px] md:text-[30px] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--t-fg)] m-0">
                  Cut handoff time to engineers by <span className="text-[var(--t-accent)]">about 50%</span> by naming Figma variants and tokens to match their React props.
                </p>
              </div>
              <Link to="/projects/appsatile" className="text-[15px] font-medium text-[var(--t-fg)] underline underline-offset-4 decoration-[var(--t-border)] hover:text-[var(--t-accent)] self-start">
                Read the case study
              </Link>
            </article>

            <article className="flex flex-col justify-between gap-8 p-7 md:p-9 rounded-[22px] bg-[var(--t-surface)] border border-[var(--t-border)]">
              <div>
                <p className="text-[14px] font-medium text-[var(--t-faint)] m-0 mb-4">The design system</p>
                <p className="font-['Fraunces'] text-[26px] md:text-[30px] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--t-fg)] m-0">
                  Co-built a system of <span className="text-[var(--t-accent)]">70+ components</span>, with colour pairs checked against WCAG AA.
                </p>
              </div>
              <p className="text-[15px] text-[var(--t-muted)] m-0">1,100+ design tokens and an 868-icon library.</p>
            </article>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="pt-16 md:pt-20 pb-4 border-t border-[var(--t-border)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-['Fraunces'] font-normal text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.025em] text-[var(--t-fg)] m-0">
              Case studies
            </h2>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--t-fg)] underline underline-offset-4 decoration-[var(--t-border)] hover:text-[var(--t-accent)] transition-colors"
            >
              View all {allProjects.length} projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {featured.map((p, i) => (
              <CaseStudyCard key={p.id} project={p} eager={i < 2} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
