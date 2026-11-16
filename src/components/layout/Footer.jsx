import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

const EMAIL = 'cezeigbo4@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ezeigbochinonso';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  const handleCopyEmail = (e) => {
    e?.preventDefault();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(EMAIL).catch(() => {});
    }
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2400);
  };

  return (
    <>
      <footer className="mt-32 md:mt-40 bg-[#141312] text-[#F7F5F0] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] bg-white/10 text-[#F7F5F0]/80 mb-6 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available for full-time roles in the UK & remote
              </div>
              <h2 className="font-['Fraunces'] text-[clamp(32px,5.2vw,68px)] font-normal leading-[1.08] tracking-[-0.025em] text-[#F7F5F0] max-w-[800px] m-0">
                Have a product that needs clarity?{' '}
                <span className="italic text-[#E58348]">Let's build something enduring.</span>
              </h2>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 py-8 border-y border-white/10">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F7F5F0] text-[#141312] font-medium text-[14.5px] hover:bg-[#E58348] hover:text-[#141312] transition-all"
            >
              <span>Email: {EMAIL}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/20 text-[#F7F5F0] text-[14px] font-medium hover:bg-white/10 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Email copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 opacity-70" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border border-white/20 text-[#F7F5F0] text-[14px] font-medium hover:bg-white/10 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border border-white/20 text-[#F7F5F0] text-[14px] font-medium hover:bg-white/10 transition-colors"
            >
              <span>Curriculum Vitae</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 text-[14px] text-[#F7F5F0]/70">
            <p className="m-0">
              © {new Date().getFullYear()} Chinonso Ezeigbo · Crafted with systems thinking, measured in clarity.
            </p>

            <div className="flex items-center gap-6">
              <Link to="/projects" className="hover:text-[#F7F5F0] transition-colors">Projects</Link>
              <Link to="/about" className="hover:text-[#F7F5F0] transition-colors">About</Link>
              <Link to="/contact" className="hover:text-[#F7F5F0] transition-colors">Contact</Link>
              <span>Newcastle upon Tyne, UK</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Copy Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-[250] flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#141312] text-[#F7F5F0] border border-white/20 shadow-2xl text-[14px] font-medium"
          >
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Check className="w-3 h-3 stroke-[3]" />
            </span>
            Email address copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
