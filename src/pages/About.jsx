import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import SEO from '../components/ui/SEO';

const experience = [
  { role: 'UI/UX Designer', place: 'Appsatile Ltd', dates: 'Mar 2023 to Feb 2026', text: 'Full-scope UI/UX across a B2B workspace: owned Cabinet (file management), shaped Pilot (AI assistant), co-led Studio research, and co-built the design system and icon library.', link: ['/projects/appsatile', 'See the design system'] },
  { role: 'Freelance UI/UX Designer (contract)', place: 'Talstrike', dates: 'Jul 2024 to Dec 2024', text: 'Mapped and redesigned athlete and scout journeys for a sports recruitment platform.' },
  { role: 'Part-time UI/UX Designer', place: 'Modtech Ltd', dates: 'Mar 2022 to Mar 2023', text: 'Web interfaces, responsive pages and prototypes for client projects.' },
  { role: 'User Experience Designer', place: 'Cloudnet IQ Labs', dates: 'Nov 2020 to Mar 2022', text: 'Personas, sitemaps, prototypes and usability audits for web products.' },
];
const education = [
  { role: 'MSc in Cyber Security', place: 'Aston University, Birmingham', text: 'Digital system security, threat modelling, authentication flows, and building secure systems people can actually use.', link: ['/projects/keel', 'See it applied in Keel'] },
  { role: 'BSc in Computer Science', place: 'Adeleke University, Nigeria', text: 'Software engineering, computational logic, web development and human-computer interaction.' },
];
const strengths = [
  ['Design systems', 'Tokens, components and icon libraries that designers and developers both trust.'],
  ['Security UX', 'Sign-in, recovery and reporting flows written in plain words.'],
  ['Research and audits', 'I log what is broken before I draw anything new.'],
  ['Developer handoff', 'Names and specs that match the code, so handoff is not a meeting.'],
  ['Prototyping', 'Clickable prototypes that run a whole journey, not a single screen.'],
  ['Accessibility', 'WCAG AA contrast, focus and target sizes decided in the system.'],
];

const h2 = "font-['DM_Sans'] text-[24px] md:text-[28px] font-medium tracking-[-0.02em] text-[var(--t-fg)] m-0 mb-2";
const inlineLink = "text-[var(--t-fg)] underline underline-offset-4 decoration-[var(--t-border)] hover:decoration-[var(--t-accent)]";

function Row({ item }) {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-2 md:gap-10 py-6 border-t border-[var(--t-border)]">
        <div>
          <div className="text-[15px] font-medium text-[var(--t-fg)]">{item.place}</div>
          {item.dates && <div className="text-[14px] text-[var(--t-faint)] mt-1">{item.dates}</div>}
        </div>
        <div>
          <h3 className="font-['DM_Sans'] text-[19px] md:text-[20px] font-medium leading-[1.25] text-[var(--t-fg)] m-0 mb-2">{item.role}</h3>
          <p className="text-[16px] leading-[1.65] text-[var(--t-muted)] m-0">{item.text}</p>
          {item.link && (
            <Link to={item.link[0]} className={`inline-flex items-center gap-1.5 mt-3 text-[15px] font-semibold ${inlineLink}`}>
              {item.link[1]} <ArrowUpRight size={15} />
            </Link>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default function About() {
  return (
    <div className="w-full bg-[var(--t-bg)] text-[var(--t-fg)] transition-colors duration-300">
      <SEO
        title="About · Chinonso Ezeigbo"
        description="Chinonso Ezeigbo is a product designer with an MSc in Cyber Security from Aston University, building design systems and security-minded products."
      />

      <div className="max-w-[920px] mx-auto px-6">

        {/* INTRO */}
        <section className="pt-36 md:pt-44 pb-16 md:pb-20">
          <FadeIn className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-10 md:gap-14 items-start">
            <div>
              <h1 className="font-['DM_Sans'] text-[30px] md:text-[40px] font-medium tracking-[-0.03em] leading-[1.1] text-[var(--t-fg)] m-0 mb-6">
                A product designer with a security degree.
              </h1>
              <div className="max-w-[600px] flex flex-col gap-4 text-[17px] md:text-[18px] leading-[1.65] text-[var(--t-muted)]">
                <p className="m-0">I'm Chinonso Ezeigbo. I love clean, polished interfaces, and I care just as much about data clarity, user privacy and software people can actually trust.</p>
                <p className="m-0">Over 4+ years I've designed B2B SaaS products, AI assistants, <Link to="/projects/appsatile" className={inlineLink}>design systems</Link> and mobile apps, working closely with founders and developers to turn complex product ideas into simple, reliable screens.</p>
                <p className="m-0">I'm based in Newcastle upon Tyne and open to full-time roles across the UK: remote, hybrid or on-site.</p>
              </div>
            </div>
            <img src="/profile.jpg" alt="Chinonso Ezeigbo" className="order-first md:order-last w-[140px] h-[140px] md:w-full md:h-auto md:aspect-[4/5] object-cover object-[center_20%] border border-[var(--t-border)] bg-[var(--t-surface)] transition-[border-radius] duration-300" style={{ borderRadius: 'var(--t-radius-lg)' }} />
          </FadeIn>

          <FadeIn className="grid grid-cols-3 gap-5 mt-12 pt-8 border-t border-[var(--t-border)]">
            {[['4+', 'years designing products'], ['3', 'years in-house on one B2B product'], ['MSc', 'Cyber Security, Aston University']].map(([v, l]) => (
              <div key={l}>
                <div className="font-['DM_Sans'] text-[32px] md:text-[44px] font-medium tracking-[-0.03em] leading-none text-[var(--t-fg)] mb-2">{v}</div>
                <div className="text-[14px] md:text-[15px] leading-[1.45] text-[var(--t-muted)]">{l}</div>
              </div>
            ))}
          </FadeIn>
        </section>

        {/* EXPERIENCE */}
        <section>
          <FadeIn><h2 className={h2}>Experience</h2></FadeIn>
          <div className="mt-4">{experience.map((item) => <Row key={item.place} item={item} />)}</div>
        </section>

        {/* EDUCATION */}
        <section className="mt-20 md:mt-24">
          <FadeIn><h2 className={h2}>Education</h2></FadeIn>
          <div className="mt-4">{education.map((item) => <Row key={item.role} item={item} />)}</div>
        </section>

        {/* STRENGTHS */}
        <section className="mt-20 md:mt-24">
          <FadeIn><h2 className={h2}>What I bring to a team</h2></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 mt-4">
            {strengths.map(([title, text], i) => (
              <FadeIn key={title} delay={Math.min(i, 5) * 0.04}>
                <div className="py-5 border-t border-[var(--t-border)] h-full">
                  <h3 className="font-['DM_Sans'] text-[18px] font-medium text-[var(--t-fg)] m-0 mb-1.5">{title}</h3>
                  <p className="text-[15.5px] leading-[1.6] text-[var(--t-muted)] m-0">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <div className="h-24 md:h-32" />
      </div>
    </div>
  );
}
