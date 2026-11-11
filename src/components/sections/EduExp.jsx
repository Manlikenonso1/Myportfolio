import { FadeIn } from '../ui/FadeIn';

export default function EduExp() {
  const experience = [
    { title: "UI/UX Designer", subtitle: "Appsatile Ltd · Mar 2023 to Feb 2026", desc: "Full-scope UI/UX across a B2B workspace: owned Cabinet (file management), shaped Pilot (AI assistant), co-led Studio research, and co-built the design system and icon library." },
    { title: "Freelance UI/UX Designer (contract)", subtitle: "Talstrike · Jul 2024 to Dec 2024", desc: "Mapped and redesigned athlete and scout journeys for a sports recruitment platform." },
    { title: "Part-time UI/UX Designer", subtitle: "Modtech Ltd · Mar 2022 to Mar 2023", desc: "Web interfaces, responsive pages and prototypes for client projects." },
    { title: "User Experience Designer", subtitle: "Cloudnet IQ Labs · Nov 2020 to Mar 2022", desc: "Personas, sitemaps, prototypes and usability audits for web products." }
  ];

  const education = [
    {
      title: "MSc in Cyber Security",
      subtitle: "Aston University, Birmingham",
      desc: "Specialized in digital system security, threat modeling, authentication flows, and building secure, user-friendly digital architectures."
    },
    {
      title: "BSc in Computer Science",
      subtitle: "Adeleke University, Nigeria",
      desc: "Grounded in software engineering, computational logic, web development, and human-computer interaction fundamentals."
    }
  ];

  return (
    <section className="bg-[var(--bg)] px-[var(--px)] pb-[120px]">
      <div className="max-w-[var(--max)] mx-auto">

        {/* Experience Row */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr] gap-6 lg:gap-x-[206px] py-[50px] border-t border-[var(--border)]">
            <div className="font-['DM_Sans'] text-[24px] font-normal text-[var(--white)] pt-1">
              My Experience:
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-[44px]">
              {experience.map((item, idx) => (
                <div key={idx} className="flex gap-[6px] items-start w-full sm:w-[328px]">
                  <div className="w-[22px] h-[22px] rounded-full shrink-0 mt-[2px] border-2 border-[var(--blue)] bg-transparent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--blue)]"></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-['DM_Sans'] text-[20px] font-normal text-[var(--white)] mb-[6px] leading-[1.3]">{item.title}</div>
                    <div className="font-['Inter_Tight'] text-[14px] italic text-[var(--white)] mb-[10px] leading-[1.6]">{item.subtitle}</div>
                    <p className="font-['Inter_Tight'] text-[14px] text-[var(--muted)] leading-[1.6] m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Education Row */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr] gap-6 lg:gap-x-[206px] py-[50px] border-t border-b border-[var(--border)]">
            <div className="font-['DM_Sans'] text-[24px] font-normal text-[var(--white)] pt-1">
              My Education:
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-[44px]">
              {education.map((item, idx) => (
                <div key={idx} className="flex gap-[6px] items-start w-full sm:w-[328px]">
                  <div className="w-[22px] h-[22px] rounded-full shrink-0 mt-[2px] border-2 border-[var(--blue)] bg-transparent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--blue)]"></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-['DM_Sans'] text-[20px] font-normal text-[var(--white)] mb-[6px] leading-[1.3]">{item.title}</div>
                    <div className="font-['Inter_Tight'] text-[14px] italic text-[var(--white)] mb-[10px] leading-[1.6]">{item.subtitle}</div>
                    <p className="font-['Inter_Tight'] text-[14px] text-[var(--muted)] leading-[1.6] m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
