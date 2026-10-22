import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Send } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../components/ui/FadeIn';
import PageHeader from '../components/sections/PageHeader';
import SEO from '../components/ui/SEO';
import WorldMapWidget from '../components/ui/WorldMapWidget';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Target destination email
  const recipientEmail = "godswill.ec@gmail.com"; // Will be updated with user's preferred email

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Using FormSubmit.co AJAX endpoint - sends straight to email with zero backend needed
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "Full Name": formData.name,
          "Email Address": formData.email,
          "Project Details": formData.details,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: "table"
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        setStatus('success');
        setFormData({ name: '', email: '', details: '' });
        setTimeout(() => setStatus('idle'), 3500);
      } else {
        // FormSubmit first-time activation notice or fallback
        if (result.message && result.message.includes('Activation')) {
          setStatus('success');
          setFormData({ name: '', email: '', details: '' });
          setTimeout(() => setStatus('idle'), 3500);
        } else {
          setStatus('error');
          setErrorMessage(result.message || 'Failed to send message. Please try again or email directly.');
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection or reach out directly via email.');
    }
  };

  return (
    <div className="w-full relative pb-32">
      <SEO 
        title="Contact · Chinonso Ezeigbo" 
        description="Let's build something extraordinary. Get in touch for product design, design systems, and UX consultations." 
      />
      
      {/* 1. HERO - CONTACT */}
      <PageHeader title="Let's start a new project together." breadcrumbText="Contact" />
      {/* 2. CONTACT SYSTEM */}
      <section className="px-6 py-20 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-stretch">
          
          {/* Left Column: Heading + Interactive World Map Widget */}
          <div className="flex flex-col justify-start">
            <FadeIn>
              <h2 className="font-['DM_Sans'] text-[32px] md:text-[40px] font-medium mb-3 text-white">Get in touch</h2>
              <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.7] max-w-[440px] mb-8 font-light">
                Have an upcoming project, a product that needs a redesign, or want to collaborate? Send a message through the form and I'll get back to you directly.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.15}>
              <WorldMapWidget />
            </FadeIn>
          </div>

          {/* Contact Form */}
          <FadeIn className="bg-[var(--card)] rounded-2xl p-8 md:p-12 border border-white/10 relative">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-white/70 pl-2 font-medium">Full Name <span className="text-[var(--blue)]">*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan" 
                    className="w-full bg-[var(--bg2)] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--blue)]/60 focus:ring-1 focus:ring-[var(--blue)]/60 transition-all font-light" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-white/70 pl-2 font-medium">Email Address <span className="text-[var(--blue)]">*</span></label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com" 
                    className="w-full bg-[var(--bg2)] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--blue)]/60 focus:ring-1 focus:ring-[var(--blue)]/60 transition-all font-light" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-[14px] text-white/70 pl-2 font-medium">Project Details <span className="text-[var(--blue)]">*</span></label>
                <textarea 
                  name="details"
                  required 
                  rows="6" 
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your product, timeline, goals, or what challenges you're looking to solve..." 
                  className="w-full bg-[var(--bg2)] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--blue)]/60 focus:ring-1 focus:ring-[var(--blue)]/60 transition-all font-light resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-[14px]">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="mt-4 w-full py-5 rounded-2xl bg-white text-black font-semibold text-[16px] hover:bg-[var(--blue)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : status === 'success' ? (
                  <span className="text-emerald-600 font-bold">Sent ✓</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} strokeWidth={2.2} />
                  </>
                )}
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
              <h2 className="font-['DM_Sans'] text-[32px] md:text-[48px] font-medium text-white mb-6">Frequently Asked Questions</h2>
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
                    <span className="transition-transform duration-300 group-open:rotate-180 text-white/50 group-hover:text-white">
                      <ChevronDown size={20} strokeWidth={2} />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 leading-[1.7] font-light">
                    I handle end-to-end product design: user research, wireframes, interactive prototypes, full UI design for web and mobile apps, and scalable design systems.
                  </div>
                </details>
                <details className="group bg-white/5 border border-white/10 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-['DM_Sans'] font-medium text-[18px]">
                    How long does a typical project take?
                    <span className="transition-transform duration-300 group-open:rotate-180 text-white/50 group-hover:text-white">
                      <ChevronDown size={20} strokeWidth={2} />
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
                    <span className="transition-transform duration-300 group-open:rotate-180 text-white/50 group-hover:text-white">
                      <ChevronDown size={20} strokeWidth={2} />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 leading-[1.7] font-light">
                    As involved as you want to be. Typically, we'll kick off with a deep dive into your goals, followed by weekly check-ins and shared Figma links so you can leave comments and watch progress happen in real time with complete transparency.
                  </div>
                </details>
                <details className="group bg-white/5 border border-white/10 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-['DM_Sans'] font-medium text-[18px]">
                    Do you conduct user research?
                    <span className="transition-transform duration-300 group-open:rotate-180 text-white/50 group-hover:text-white">
                      <ChevronDown size={20} strokeWidth={2} />
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
