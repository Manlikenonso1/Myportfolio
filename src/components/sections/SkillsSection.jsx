import { FadeIn } from '../ui/FadeIn';

export default function SkillsSection() {
  const col1 = [
    { name: "UI Design & Design Systems", pct: 98 },
    { name: "Product Strategy & User Flows", pct: 88 },
    { name: "Interactive Prototyping", pct: 92 },
  ];
  const col2 = [
    { name: "User Research & Usability Audits", pct: 86 },
    { name: "Responsive Web & Mobile Design", pct: 98 },
    { name: "Micro-interactions & Animation", pct: 90 },
  ];

  return (
    <section className="bg-[var(--bg2)] px-[var(--px)] py-[120px]">
      <FadeIn>
        <div className="text-center mb-[80px]">
          <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/50 mb-4">
            Core Skills
          </div>
          <h2 className="font-['DM_Sans'] font-normal text-[36px] md:text-[56px] leading-[1.2] text-[var(--white)] max-w-[686px] mx-auto mb-5 tracking-tight">
            What I bring to your team
          </h2>
          <p className="font-['Inter_Tight'] text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.6] max-w-[760px] mx-auto">
            I take products from early concepts to launch-ready interfaces, covering user research, wireframes, design systems, and interactive prototypes.
          </p>
        </div>
      </FadeIn>

      <FadeIn className="max-w-[var(--max)] mx-auto flex flex-wrap justify-center gap-3">
        {[...col1, ...col2].map((skill) => (
          <span key={skill.name} className="font-['DM_Sans'] text-[16px] sm:text-[18px] text-[var(--white)] px-5 py-3 rounded-full border border-white/15 bg-white/5">
            {skill.name}
          </span>
        ))}
      </FadeIn>
    </section>
  );
}
