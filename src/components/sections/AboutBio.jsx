import { FadeIn, FadeInStagger } from '../ui/FadeIn';

export default function AboutBio() {
  return (
    <section className="bg-[var(--bg)] py-[120px] px-[var(--px)]">
      <div className="max-w-[var(--max)] mx-auto grid grid-cols-1 lg:grid-cols-[510px_1fr] gap-[80px] items-center">
        
        <FadeIn>
          <div className="w-full max-w-[400px] lg:max-w-none lg:w-[510px] h-[513px] rounded-[15px] bg-[var(--tan)] overflow-hidden relative shrink-0 mx-auto lg:mx-0 shadow-2xl border border-white/10">
            <img 
              src="/profile.jpg" 
              alt="Chinonso Ezeigbo" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col">
            <h2 className="font-['DM_Sans'] font-normal text-[36px] md:text-[56px] leading-[1.3] text-[var(--white)] mb-5">
              Designing Experiences with Purpose
            </h2>
            <p className="font-['Inter_Tight'] text-[16px] md:text-[18px] text-[var(--muted)] leading-[1.6] mb-[30px] w-full lg:w-[530px]">
              I'm Chinonso Ezeigbo — a Senior UI/UX Designer specialized in creating structured design systems, intuitive product architectures, and high-performance digital interfaces. I blend behavioral research with high-fidelity visual craft to build products that deliver tangible commercial outcomes.
            </p>
            
            <div className="flex flex-wrap gap-5 mb-[30px] flex-col sm:flex-row">
              {['Systems-Level Thinking', 'WCAG Accessibility First', 'High-Fidelity Prototyping', 'Developer-Ready Handover'].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-[12px] bg-[var(--card)] border border-[var(--border)] rounded-[8px] py-4 px-[22px] w-full sm:w-[270px] font-['Inter_Tight'] text-[16px] md:text-[18px] text-[var(--white)]">
                  <span className="w-[18px] h-[18px] shrink-0 rounded-full bg-[var(--blue)] flex items-center justify-center">
                    <svg viewBox="0 0 12 12" className="w-[10px] h-[10px] stroke-white fill-none stroke-[2.5]" style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                      <polyline points="2 6 5 9 10 3"/>
                    </svg>
                  </span>
                  {badge}
                </div>
              ))}
            </div>
            
            <p className="font-['Inter_Tight'] text-[16px] md:text-[18px] text-[var(--white)] leading-[1.6]">
              Let's work together to transform your vision into an outstanding user experience!{' '}
              <a href="mailto:hello@chinonsoezeigbo.com" className="text-[var(--blue)] no-underline hover:underline">Get In Touch</a>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
