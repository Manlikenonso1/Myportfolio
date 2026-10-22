import { Link } from 'react-router-dom';
import { FadeIn } from '../ui/FadeIn';

const logos = [
  { name: "Appsatile",   route: "/projects/appsatile" },
  { name: "HuntlyAi",    route: "/projects/huntly" },
  { name: "LazyZone",    route: "/projects/lazyzone" },
  { name: "Cook by Ugo", route: "/projects/cook-by-ugo" },
  { name: "Nikos Farm",  route: "/projects/nikos-farm" },
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
          <div className="flex justify-center items-center flex-wrap gap-y-[36px] gap-x-[56px]">
            {logos.map((logo, idx) =>
              logo.route ? (
                <Link
                  key={idx}
                  to={logo.route}
                  className="font-['DM_Sans'] font-medium text-[16px] text-white/30 tracking-[-0.3px] transition-all duration-300 hover:text-white"
                >
                  {logo.name}
                </Link>
              ) : (
                <span
                  key={idx}
                  className="font-['DM_Sans'] font-medium text-[16px] text-white/30 tracking-[-0.3px] cursor-default"
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
