import { Link } from 'react-router-dom';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../components/ui/FadeIn';
import PageHeader from '../components/sections/PageHeader';

export default function Contact() {
  return (
    <div className="w-full relative pb-32">
      
      {/* 1. HERO - CONTACT */}
      <PageHeader title="Let's start a new project together." breadcrumbText="Contact" />
      {/* 2. CONTACT SYSTEM */}
      <section className="px-6 py-20 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-stretch">
          
          {/* Contact Details */}
          <div className="flex flex-col justify-between">
            <FadeIn>
              <h2 className="font-['DM_Sans'] text-[32px] md:text-[40px] font-bold mb-10 text-white">Contact Details</h2>
            </FadeIn>
            
            <FadeInStagger className="flex flex-col gap-10">
              <FadeInStaggerItem className="flex flex-col gap-2">
                <div className="text-[12px] font-bold tracking-widest text-white/30 uppercase">E-Mail</div>
                <a href="mailto:hello@chinonsoezeigbo.com" className="text-[20px] font-['DM_Sans'] font-medium hover:text-[var(--blue)] transition-colors">hello@chinonsoezeigbo.com</a>
              </FadeInStaggerItem>
              
              <FadeInStaggerItem className="flex flex-col gap-2">
                <div className="text-[12px] font-bold tracking-widest text-white/30 uppercase">Phone</div>
                <a href="tel:+10000000000" className="text-[20px] font-['DM_Sans'] font-medium hover:text-[var(--blue)] transition-colors">+1 (000) 000-0000</a>
              </FadeInStaggerItem>
              
              <FadeInStaggerItem className="flex flex-col gap-2">
                <div className="text-[12px] font-bold tracking-widest text-white/30 uppercase">Office</div>
                <div className="text-[18px] text-white/60 leading-[1.6] max-w-[300px]">
                  Available for remote work worldwide. Send an email and I'll usually get back to you within 24 hours.
                </div>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>

          {/* Contact Form */}
          <FadeIn className="bg-[var(--card)] rounded-[32px] p-8 md:p-12 border border-white/10">
            <form action="#" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-white/50 pl-2">Full Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full bg-[var(--bg2)] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--blue)]/50 focus:ring-1 focus:ring-[var(--blue)]/50 transition-all font-light" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-white/50 pl-2">Email Address</label>
                  <input type="email" required placeholder="john@company.com" className="w-full bg-[var(--bg2)] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--blue)]/50 focus:ring-1 focus:ring-[var(--blue)]/50 transition-all font-light" />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label className="text-[14px] text-white/50 pl-2">Project Details</label>
                <textarea required rows="6" placeholder="Tell me a bit about your project, goals, and timeline..." className="w-full bg-[var(--bg2)] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--blue)]/50 focus:ring-1 focus:ring-[var(--blue)]/50 transition-all font-light resize-none"></textarea>
              </div>

              <button type="submit" className="mt-6 w-full py-5 rounded-2xl bg-white text-black font-semibold text-[16px] hover:bg-[var(--blue)] hover:text-white transition-all duration-300">
                Send Message
              </button>
            </form>
          </FadeIn>

        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="px-6 py-32">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="font-['DM_Sans'] text-[32px] md:text-[48px] font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-white/50 text-[18px]">A few common questions about timelines, working together, and deliverables.</p>
            </div>
          </FadeIn>

          <FadeInStagger className="flex flex-col gap-16">
            
            {/* General */}
            <FadeInStaggerItem>
              <h3 className="text-[14px] font-bold tracking-widest text-[var(--blue)] uppercase mb-8 border-b border-white/10 pb-4">General FAQ</h3>
              <div className="flex flex-col gap-4">
                <details className="group bg-white/5 border border-white/10 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-['DM_Sans'] font-medium text-[18px]">
                    What services do you offer?
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 leading-[1.7] font-light">
                    I handle end-to-end product design: user research, wireframes, interactive prototypes, full UI design for web and mobile apps, and scalable design systems.
                  </div>
                </details>
                <details className="group bg-white/5 border border-white/10 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-['DM_Sans'] font-medium text-[18px]">
                    How long does a typical project take?
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 leading-[1.7] font-light">
                    It depends on the scope. A focused landing page or small feature revamp usually takes 1–2 weeks, while a full product design or complete design system typically runs between 4 to 8 weeks. I'll provide an honest, clear timeline after we talk through what you need.
                  </div>
                </details>
              </div>
            </FadeInStaggerItem>

            {/* Process */}
            <FadeInStaggerItem>
              <h3 className="text-[14px] font-bold tracking-widest text-[var(--blue)] uppercase mb-8 border-b border-white/10 pb-4">Process & Collaboration</h3>
              <div className="flex flex-col gap-4">
                <details className="group bg-white/5 border border-white/10 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-['DM_Sans'] font-medium text-[18px]">
                    How involved will I be in the design process?
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 leading-[1.7] font-light">
                    As involved as you want to be. Typically, we'll kick off with a deep dive into your goals, followed by weekly check-ins and shared Figma links so you can leave comments and watch progress happen in real time with complete transparency.
                  </div>
                </details>
                <details className="group bg-white/5 border border-white/10 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-['DM_Sans'] font-medium text-[18px]">
                    Do you conduct user research?
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 leading-[1.7] font-light">
                    Definitely. Good design shouldn't be based on guesswork. Depending on your project stage, I talk with real users, analyze competitors, and look at actual user paths to make sure we're building what people actually need.
                  </div>
                </details>
              </div>
            </FadeInStaggerItem>

          </FadeInStagger>
        </div>
      </section>

    </div>
  );
}
