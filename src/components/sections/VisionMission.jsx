import { FadeIn } from '../ui/FadeIn';

export default function VisionMission() {
  return (
    <section className="bg-[var(--bg)] py-[120px] px-[var(--px)]">
      <div className="max-w-[var(--max)] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_510px] gap-[80px] items-start">

        <FadeIn className="flex flex-col">
          <div className="font-['DM_Sans'] text-[18px] tracking-[.08em] uppercase text-[var(--muted)] mb-5">
            Vision
          </div>
          <p className="font-['DM_Sans'] font-normal text-[24px] md:text-[32px] leading-[1.3] text-[var(--white)] w-full lg:w-[530px] mb-[44px]">
            Bridging the gap between technical constraint and user experience through modular design architecture.
          </p>

          <div className="font-['DM_Sans'] text-[18px] tracking-[.08em] uppercase text-[var(--muted)] mb-4">
            Mission
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[10px] py-[21px] px-[24px] font-['Inter_Tight'] text-[16px] leading-[1.6] w-full lg:w-[560px] bg-[var(--tan)] text-black">
              Architect human-centered paths that solve customer friction points while hitting critical commercial KPIs.
            </div>
            <div className="rounded-[10px] py-[21px] px-[24px] font-['Inter_Tight'] text-[16px] leading-[1.6] w-full lg:w-[560px] bg-[var(--card)] text-[var(--muted)]">
              Build scalable, token-driven component libraries that establish design consistency and accelerate development.
            </div>
            <div className="rounded-[10px] py-[21px] px-[24px] font-['Inter_Tight'] text-[16px] leading-[1.6] w-full lg:w-[560px] bg-[var(--card)] text-[var(--muted)]">
              Validate product concepts using high-fidelity testable prototypes before committing engineering resources.
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="w-full max-w-[400px] lg:max-w-none lg:w-[510px] h-[400px] lg:h-[606px] rounded-[15px] bg-[var(--tan)] overflow-hidden relative mx-auto lg:mx-0 shrink-0 shadow-2xl border border-white/10">
            <img 
              src="/IMG_1741.jpeg" 
              alt="Chinonso Ezeigbo" 
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
