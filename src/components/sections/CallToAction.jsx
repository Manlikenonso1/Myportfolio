import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export default function CallToAction() {
  const stats = [
    { num: "40% +", label: "Drop in user drop-off across redesigned key flows." },
    { num: "10x", label: "Faster development cycles with clear design systems." },
    { num: "100%", label: "Accessible, responsive components tested for real use." }
  ];

  return (
    <section className="bg-[var(--bg)] py-[120px] px-[var(--px)] relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[var(--bg3)] opacity-35 pointer-events-none"></div>

      <div className="max-w-[779px] mx-auto text-center relative z-10">
        <FadeIn>
          <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/50 mb-4">
            Get In Touch
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="font-['DM_Sans'] font-normal text-[36px] md:text-[48px] leading-[1.3] text-[var(--white)] mb-5 tracking-tight">
            Let's Build Something Great Together
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="font-['Inter_Tight'] text-[16px] text-[var(--muted)] leading-[1.6] mb-[60px]">
            Have an upcoming project, a product that needs a redesign, or want to build a design system? I'm currently open for new projects and consulting.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[40px] mb-[60px]">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-start gap-[14px]">
                <div className="w-[26px] h-[26px] rounded-full bg-[var(--green)] shrink-0 mt-1 flex items-center justify-center">
                  <Check size={14} strokeWidth={3} className="text-black" />
                </div>
                <div className="text-left">
                  <div className="font-['DM_Sans'] text-[24px] font-normal text-[var(--white)] leading-[1.3] mb-1">{stat.num}</div>
                  <div className="font-['Inter_Tight'] text-[16px] text-[var(--muted)] leading-[1.6] w-[146px]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex justify-center gap-[18px] flex-wrap mb-[24px]">
            <Link to="/contact" className="font-['DM_Sans'] font-medium text-[16px] md:text-[18px] py-4 px-[30px] bg-[var(--blue)] text-[var(--white)] border-none rounded-[6px] cursor-pointer inline-block transition-all hover:bg-[var(--blue-dk)] no-underline">
              Contact Me
            </Link>
          </div>
          <div className="flex items-center justify-center gap-[10px] font-['Inter_Tight'] text-[14px] text-[var(--muted)]">
            <span className="text-[16px] text-[var(--green)]">⚡</span>
            <span>Let's make something great together!</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
