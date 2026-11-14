import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import SEO from '../components/ui/SEO';

const EMAIL = 'cezeigbo4@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ezeigbochinonso';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Give up if the form service takes longer than 8 seconds
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          'Full Name': formData.name,
          'Email Address': formData.email,
          'Message': formData.details,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: 'table',
        }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', details: '' });
      } else {
        const result = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(result.message || `Your message was not sent. Please try again, or email ${EMAIL}.`);
      }
    } catch (err) {
      clearTimeout(timeoutId);
      setStatus('error');
      setErrorMessage(err.name === 'AbortError'
        ? `The form took too long to respond, so I can't confirm your message was sent. Please try again, or email ${EMAIL}.`
        : `Your message was not sent. Check your connection and try again, or email ${EMAIL}.`);
    }
  };

  const chip = "inline-flex items-center gap-2 px-4 py-2 text-[14px] font-semibold text-[var(--t-fg)] bg-[var(--t-surface)] border border-[var(--t-border)] hover:border-[var(--t-fg)] transition-[border-color,border-radius,transform] duration-200 active:scale-[0.97]";
  const field = "w-full bg-[var(--t-surface)] border border-[var(--t-border)] px-4 py-3 text-[16px] text-[var(--t-fg)] placeholder:text-[var(--t-faint)] focus:outline-none focus:border-[var(--t-accent)] focus:ring-2 focus:ring-[var(--t-accent)]/30 transition-[border-color,box-shadow,border-radius]";
  const label = "text-[14px] font-medium text-[var(--t-fg)]";

  return (
    <div className="w-full bg-[var(--t-bg)] text-[var(--t-fg)] transition-colors duration-300">
      <SEO
        title="Contact · Chinonso Ezeigbo"
        description="Get in touch with Chinonso Ezeigbo, a product designer open to full-time roles, remote or in the North East."
      />

      <div className="max-w-[920px] mx-auto px-6">
        <section className="pt-36 md:pt-44 pb-12">
          <FadeIn>
            <h1 className="font-['DM_Sans'] text-[30px] md:text-[40px] font-medium tracking-[-0.03em] leading-[1.1] text-[var(--t-fg)] m-0 mb-4">Let's talk</h1>
            <div className="max-w-[600px] flex flex-col gap-4 text-[17px] md:text-[18px] leading-[1.65] text-[var(--t-muted)]">
              <p className="m-0">Hiring a product designer, or want to talk through any of my work? Email is quickest, or use the form below.</p>
              <p className="m-0 flex items-start gap-2.5">
                <span className="relative flex h-2 w-2 shrink-0 mt-[0.65em]">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Based in Newcastle upon Tyne. Open to full-time roles across the UK: remote, hybrid or on-site.</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-8">
              <a href={`mailto:${EMAIL}`} className={chip} style={{ borderRadius: 'var(--t-radius)' }}><Mail size={15} /> {EMAIL}</a>
              <button type="button" onClick={copyEmail} className={chip} style={{ borderRadius: 'var(--t-radius)' }}>
                {copied ? <><Check size={15} strokeWidth={2.6} /> Copied</> : <><Copy size={14} /> Copy email</>}
              </button>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={chip} style={{ borderRadius: 'var(--t-radius)' }}>LinkedIn <ArrowUpRight size={15} /></a>
              <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
            </div>
          </FadeIn>
        </section>

        <section className="max-w-[640px]">
          <FadeIn>
            <h2 className="font-['DM_Sans'] text-[24px] md:text-[28px] font-medium tracking-[-0.02em] text-[var(--t-fg)] m-0 mb-6">Send a message</h2>

            {status === 'success' ? (
              <div role="status" className="bg-[var(--t-surface)] border border-[var(--t-border)]" style={{ borderRadius: 'var(--t-radius-lg)', padding: 'calc(var(--t-space) * 2)' }}>
                <div className="w-11 h-11 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mb-4"><Check size={22} strokeWidth={2.6} /></div>
                <h3 className="font-['DM_Sans'] text-[22px] font-medium text-[var(--t-fg)] m-0 mb-2">Message sent</h3>
                <p className="text-[16px] leading-[1.6] text-[var(--t-muted)] m-0 mb-5">Thanks for getting in touch. I'll reply to the email address you gave.</p>
                <button type="button" onClick={() => setStatus('idle')} className={chip} style={{ borderRadius: 'var(--t-radius)' }}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className={label}>Full name</label>
                    <input id="contact-name" type="text" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className={field} style={{ borderRadius: 'var(--t-radius)' }} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className={label}>Email address</label>
                    <input id="contact-email" type="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={field} style={{ borderRadius: 'var(--t-radius)' }} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-details" className={label}>Message</label>
                  <textarea id="contact-details" name="details" required rows="6" value={formData.details} onChange={handleChange} aria-describedby="contact-hint" className={`${field} resize-y`} style={{ borderRadius: 'var(--t-radius)' }}></textarea>
                  <p id="contact-hint" className="text-[14px] text-[var(--t-faint)] m-0">A line about the role or what you'd like to discuss is plenty.</p>
                </div>

                {status === 'error' && (
                  <div role="alert" className="px-4 py-3 border border-red-500/40 bg-red-500/10 text-[15px] leading-[1.5] text-[var(--t-fg)]" style={{ borderRadius: 'var(--t-radius)' }}>
                    {errorMessage}
                  </div>
                )}

                <button type="submit" disabled={status === 'submitting'}
                  className="self-start inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--t-accent)] text-[#fff] font-semibold text-[15px] transition-all hover:brightness-110 active:scale-[0.97] disabled:opacity-60"
                  style={{ borderRadius: 'var(--t-radius)' }}>
                  {status === 'submitting' ? 'Sending…' : <>Send message <Send size={15} /></>}
                </button>
              </form>
            )}
          </FadeIn>
        </section>

        <div className="h-24 md:h-32" />
      </div>
    </div>
  );
}
