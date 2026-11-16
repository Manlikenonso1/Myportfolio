import { Link } from 'react-router-dom';

const EMAIL = 'cezeigbo4@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ezeigbochinonso';

export default function Footer() {
  return (
    <>
      <footer className="mt-16 md:mt-20 bg-[#141312] text-[#F7F5F0] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="font-['Fraunces'] text-[clamp(32px,5.2vw,68px)] font-normal leading-[1.08] tracking-[-0.025em] text-[#F7F5F0] max-w-[800px] m-0">
                Hiring a product designer? I'd like to hear from you.
              </h2>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 py-8 border-y border-white/10">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F7F5F0] text-[#141312] font-medium text-[14.5px] hover:bg-[#9BE0BD] hover:text-[#141312] transition-all"
            >
              <span>{EMAIL}</span>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border border-white/20 text-[#F7F5F0] text-[14px] font-medium hover:bg-white/10 transition-colors"
            >
              <span>LinkedIn</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border border-white/20 text-[#F7F5F0] text-[14px] font-medium hover:bg-white/10 transition-colors"
            >
              <span>CV</span>
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 text-[14px] text-[#F7F5F0]/70">
            <p className="m-0">
              © {new Date().getFullYear()} Chinonso Ezeigbo
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

    </>
  );
}
