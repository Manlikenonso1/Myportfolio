import { FadeIn } from '../ui/FadeIn';
import { motion } from 'framer-motion';

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
          <div className="font-['DM_Sans'] text-[18px] font-normal tracking-[.08em] uppercase text-[var(--muted)] mb-5">
            Core Skills
          </div>
          <h2 className="font-['DM_Sans'] font-normal text-[36px] md:text-[56px] leading-[1.3] text-[var(--white)] max-w-[686px] mx-auto mb-5">
            What I bring to your team
          </h2>
          <p className="font-['Inter_Tight'] text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.6] max-w-[760px] mx-auto">
            I take products from early concepts to launch-ready interfaces—covering user research, wireframes, design systems, and interactive prototypes.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-[var(--max)] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px] lg:gap-x-[70px]">
        
        {/* Column 1 */}
        <FadeIn className="flex flex-col gap-[24px]">
          {col1.map((skill, idx) => (
            <div key={idx} className="flex flex-col gap-[14px]">
              <div className="flex justify-between items-center">
                <span className="font-['DM_Sans'] text-[18px] sm:text-[20px] font-normal text-[var(--white)]">{skill.name}</span>
                <span className="font-['DM_Sans'] text-[18px] sm:text-[20px] font-normal text-[var(--green)]">{skill.pct}%</span>
              </div>
              <div className="h-[14px] sm:h-[16px] w-full bg-white/10 rounded-full overflow-hidden relative border border-white/15 p-[2px] shadow-inner">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.pct}%` }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 1.2, delay: 0.1 + idx * 0.05, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--tan)] via-[var(--tan)] to-white shadow-[0_0_12px_rgba(208,201,185,0.5)]"
                ></motion.div>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Column 2 */}
        <FadeIn delay={0.1} className="flex flex-col gap-[24px]">
          {col2.map((skill, idx) => (
            <div key={idx} className="flex flex-col gap-[14px]">
              <div className="flex justify-between items-center">
                <span className="font-['DM_Sans'] text-[18px] sm:text-[20px] font-normal text-[var(--white)]">{skill.name}</span>
                <span className="font-['DM_Sans'] text-[18px] sm:text-[20px] font-normal text-[var(--green)]">{skill.pct}%</span>
              </div>
              <div className="h-[14px] sm:h-[16px] w-full bg-white/10 rounded-full overflow-hidden relative border border-white/15 p-[2px] shadow-inner">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.pct}%` }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 1.2, delay: 0.1 + idx * 0.05, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--tan)] via-[var(--tan)] to-white shadow-[0_0_12px_rgba(208,201,185,0.5)]"
                ></motion.div>
              </div>
            </div>
          ))}
        </FadeIn>

      </div>
    </section>
  );
}
