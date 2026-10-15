import { FadeIn } from '../ui/FadeIn';

export default function ClientsPartners() {
  const logos = [
    "Appsatile",
    "Nikos Farm",
    "Aptinfy",
    "LazyZone"
  ];

  return (
    <section className="bg-[var(--bg2)] py-[120px] px-[var(--px)]">
      <div className="max-w-[var(--max)] mx-auto text-center">
        <FadeIn>
          <div className="font-['DM_Sans'] text-[18px] tracking-[.08em] uppercase text-[var(--muted)] mb-5">
            Client & Partners
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="font-['DM_Sans'] font-normal text-[32px] md:text-[36px] leading-[1.3] text-[var(--white)] max-w-[728px] mx-auto mb-[60px]">
            Building Success with My Clients and Partners
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center items-center flex-wrap gap-y-[36px] gap-x-[56px]">
            {logos.map((logo, idx) => (
              <span key={idx} className="font-['DM_Sans'] font-bold text-[16px] text-white/20 tracking-[-0.3px] cursor-default transition-colors hover:text-white/50">
                {logo}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
