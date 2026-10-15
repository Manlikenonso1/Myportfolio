import { Link } from 'react-router-dom';

export default function PageHeader({ title, breadcrumbText }) {
  return (
    <section className="bg-[var(--bg)] relative overflow-hidden flex flex-col items-center gap-5 pt-[160px] pb-[120px] px-[var(--px)]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[var(--bg3)] opacity-45 pointer-events-none"></div>
      
      <h1 className="font-['DM_Sans'] font-light text-[64px] leading-[1.3] text-[var(--white)] relative z-10 text-center">
        {title}
      </h1>
      
      <div className="flex items-center gap-5 font-['Inter_Tight'] text-[18px] text-[var(--muted)] relative z-10">
        <Link to="/" className="text-[var(--muted)] no-underline hover:text-[var(--white)] transition-colors">Home</Link>
        <div className="w-[1px] h-[14px] bg-[var(--muted)]"></div>
        <span>{breadcrumbText}</span>
      </div>
    </section>
  );
}
