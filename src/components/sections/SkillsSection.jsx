import { FadeIn } from '../ui/FadeIn';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const col1 = [
    { name: "User Interface (UI) Architecture", pct: 98 },
    { name: "Product Strategy & UX Logic", pct: 86 },
    { name: "High-Fidelity Prototyping", pct: 90 },
  ];
  const col2 = [
    { name: "Heuristic Funnel Auditing", pct: 86 },
    { name: "Responsive Interface Systems", pct: 98 },
    { name: "Micro-interactions & Motion", pct: 90 },
  ];

  return (
    <section className="bg-[var(--bg2)] px-[var(--px)] py-[120px]">
      <FadeIn>
        <div className="text-center mb-[80px]">
          <div className="font-['DM_Sans'] text-[18px] font-normal tracking-[.08em] uppercase text-[var(--muted)] mb-5">
            My Skills
          </div>
          <h2 className="font-['DM_Sans'] font-normal text-[36px] md:text-[56px] leading-[1.3] text-[var(--white)] max-w-[686px] mx-auto mb-5">
            Key Expertise in UI/UX Excellence
          </h2>
          <p className="font-['Inter_Tight'] text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.6] max-w-[796px] mx-auto">
            I combine deep user empathy with polished visual craft — from early-stage research and wireframing all the way through to refined, interactive prototypes ready for handoff.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-[var(--max)] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px] lg:gap-x-[70px]">
        
        {/* Column 1 */}
        <FadeIn className="flex flex-col gap-[24px]">
          {col1.map((skill, idx) => (
            <div key={idx} className="flex flex-col gap-[14px]">
              <div className="flex justify-between items-center">
                <span className="font-['DM_Sans'] text-[20px] font-normal text-[var(--white)]">{skill.name}</span>
                <span className="font-['DM_Sans'] text-[20px] font-normal text-[var(--green)]">{skill.pct}%</span>
              </div>
              <div className="h-[32px] bg-[var(--bg)] rounded-none overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.pct}%` }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full bg-[var(--tan)]"
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
                <span className="font-['DM_Sans'] text-[20px] font-normal text-[var(--white)]">{skill.name}</span>
                <span className="font-['DM_Sans'] text-[20px] font-normal text-[var(--green)]">{skill.pct}%</span>
              </div>
              <div className="h-[32px] bg-[var(--bg)] rounded-none overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.pct}%` }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full bg-[var(--tan)]"
                ></motion.div>
              </div>
            </div>
          ))}
        </FadeIn>

      </div>
    </section>
  );
}
