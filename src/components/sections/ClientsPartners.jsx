import { Link } from 'react-router-dom';
import { FadeIn } from '../ui/FadeIn';

const logos = [
  { name: "Appsatile",   route: "/projects/appsatile" },
  { name: "HuntlyAi",    route: "/projects/huntly" },
  { name: "LazyZone",    route: "/projects/lazyzone" },
  { name: "Cook by Ugo", route: "/projects/cook-by-ugo" },
  { name: "Talstrike",   route: null },
  { name: "cloudnet IQ", route: null },
  { name: "Nikos Farm",  route: "/projects/nikos-farm" },
  { name: "Aptinfy",     route: "/projects/aptinfy" },
];

export default function ClientsPartners() {
  return (
    <section className="bg-[var(--bg2)] py-[120px] px-[var(--px)]">
      <div className="max-w-[var(--max)] mx-auto text-center">
        <FadeIn>
          <div className="font-['DM_Sans'] text-[18px] tracking-[.08em] uppercase text-[var(--muted)] mb-5">
            Clients &amp; Collaborators
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-['DM_Sans'] font-normal text-[32px] md:text-[36px] leading-[1.3] text-[var(--white)] max-w-[728px] mx-auto mb-[60px]">
            Brands and teams I've had the pleasure of working with
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center items-center flex-wrap gap-y-[20px] gap-x-[12px]">
            {logos.map((logo, idx) =>
              logo.route ? (
                <Link
                  key={idx}
                  to={logo.route}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 font-['DM_Sans'] font-semibold text-[15px] text-white/70 tracking-tight transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                >
                  {logo.name}
                  {/* Arrow icon — slides in on hover */}
                  <svg
                    className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              ) : (
                <span
                  key={idx}
                  className="inline-flex items-center px-5 py-2.5 rounded-full font-['DM_Sans'] font-semibold text-[15px] text-white/20 tracking-tight cursor-default"
                >
                  {logo.name}
                </span>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
