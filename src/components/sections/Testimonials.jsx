import { FadeIn } from '../ui/FadeIn';

const testimonials = [
  {
    quote: "Chinonso made an immediate difference on our product team. In just six weeks, he simplified our key user journeys and made our entire app easier to use. A thoughtful, talented designer.",
    name: "Joseph Schnedir",
    role: "Founder, Appsatile",
    avatar: "/appsatile-logo.png"
  },
  {
    quote: "His attention to detail is remarkable. He didn't just hand off pretty mockups. He gave our engineering team clean components and clear specs that were a joy to build with.",
    name: "David Chen",
    role: "Engineering Manager, Nikos Farm",
    avatar: "/avatar2.jpg"
  },
  {
    quote: "Finding a designer who genuinely understands product strategy and real user needs is rare. Chinonso combines great aesthetics with practical thinking. Highly recommended.",
    name: "Emily Carter",
    role: "Founding Partner, Aptinfy",
    avatar: "/avatar3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 border-y border-[var(--border)] bg-[var(--bg2)]/30 backdrop-blur-3xl overflow-hidden relative">
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-[var(--tan)]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto z-10 relative">
        <FadeIn className="text-center mb-20">
          <h2 className="font-['DM_Sans'] text-[clamp(32px,5vw,56px)] font-bold tracking-tight text-white leading-none mb-6">
            Words from partners
          </h2>
          <p className="text-[18px] text-[var(--muted)] max-w-[600px] mx-auto font-light">
            Feedback from founders, product managers, and developers I've collaborated with.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-[10px] p-8 h-full flex flex-col justify-between group hover:border-[var(--tan)]/30 transition-colors">
                <div className="mb-8">
                  <svg className="w-8 h-8 fill-[var(--tan)]/20 mb-6 group-hover:fill-[var(--tan)]/40 transition-colors" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
                  <p className="font-['Inter_Tight'] text-[16px] text-white/80 leading-[1.7] font-light">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="font-['DM_Sans'] font-bold text-[16px] text-white">{t.name}</div>
                    <div className="text-[12px] text-[var(--muted)] mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
