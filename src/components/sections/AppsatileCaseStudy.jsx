import { FadeIn, FadeInStagger, FadeInStaggerItem } from '../ui/FadeIn';

export default function AppsatileCaseStudy() {
  return (
    <div className="w-full bg-[#050505] text-white font-['DM_Sans'] rounded-[40px] border border-white/10 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] mb-32 relative">
      
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--blue)]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* 1. HERO SECTION */}
      <section className="px-8 py-24 md:py-32 md:px-20 border-b border-white/10 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-[var(--blue)]/20 text-[var(--blue)] border border-[var(--blue)]/30 text-[12px] font-bold tracking-widest uppercase">Internal UI Kit</span>
                <span className="text-white/40 text-[14px] font-medium tracking-widest">v 1.2</span>
              </div>
              <h2 className="text-[clamp(48px,8vw,100px)] font-bold leading-[0.95] tracking-tight mb-8">
                Design<br />System<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Foundations</span>
              </h2>
            </div>
            <div className="max-w-[400px]">
              <p className="text-[18px] md:text-[20px] text-white/50 leading-[1.6] font-light">
                Raw, algorithmic purity. Built to scale across massive datasets while maintaining absolute visual consistency. A true single source of truth.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 2. COLOUR PRIMITIVES */}
      <section className="px-8 py-24 md:px-20 border-b border-white/10 relative z-10 bg-white/[0.02]">
        <FadeIn>
          <div className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase mb-16 border-b border-white/10 pb-4">01 / Colour Primitives</div>
          
          <div className="flex flex-col gap-20">
            {/* Base Colors */}
            <div>
              <h3 className="text-[20px] font-bold mb-8">Base Colours</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col gap-3">
                  <div className="h-32 rounded-2xl bg-black border border-white/20 shadow-lg"></div>
                  <div>
                    <div className="font-bold">Black</div>
                    <div className="text-[12px] text-white/50 uppercase">#000000</div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="h-32 rounded-2xl bg-white border border-white/10 shadow-lg"></div>
                  <div>
                    <div className="font-bold">White</div>
                    <div className="text-[12px] text-white/50 uppercase">#FFFFFF</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary & Extended Palette */}
            <div>
              <h3 className="text-[20px] font-bold mb-8">Extended Palette</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {/* Palette Map */}
                {[
                  { name: 'Blue', hex: '#397BFB', bg: 'bg-[#397BFB]' },
                  { name: 'Indigo', hex: '#6366F1', bg: 'bg-[#6366F1]' },
                  { name: 'Purple', hex: '#A855F7', bg: 'bg-[#A855F7]' },
                  { name: 'Pink', hex: '#EC4899', bg: 'bg-[#EC4899]' },
                  { name: 'Red', hex: '#EF4444', bg: 'bg-[#EF4444]' },
                  { name: 'Orange', hex: '#F97316', bg: 'bg-[#F97316]' },
                  { name: 'Yellow', hex: '#EAB308', bg: 'bg-[#EAB308]' },
                  { name: 'Green', hex: '#22C55E', bg: 'bg-[#22C55E]' },
                  { name: 'Teal', hex: '#14B8A6', bg: 'bg-[#14B8A6]' },
                  { name: 'Cyan', hex: '#06B6D4', bg: 'bg-[#06B6D4]' },
                  { name: 'Slate', hex: '#64748B', bg: 'bg-[#64748B]' },
                  { name: 'Zinc', hex: '#71717A', bg: 'bg-[#71717A]' }
                ].map((color, i) => (
                  <div key={i} className="flex flex-col gap-3 group">
                    <div className={`h-24 rounded-xl ${color.bg} border border-white/10 shadow-lg group-hover:scale-105 transition-transform duration-300`}></div>
                    <div>
                      <div className="font-bold text-[14px]">{color.name}</div>
                      <div className="text-[12px] text-white/50 uppercase">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. TYPOGRAPHY */}
      <section className="px-8 py-24 md:px-20 border-b border-white/10 relative z-10">
        <FadeIn>
          <div className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase mb-16 border-b border-white/10 pb-4">02 / Typography</div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-20">
            <div>
              <div className="text-white/50 text-[14px] tracking-widest uppercase mb-4">Font Family</div>
              <h3 className="text-[60px] md:text-[80px] font-bold leading-none mb-6">Inter</h3>
              <p className="text-white/50 leading-[1.6] mb-12">
                A geometric neo-grotesque variable font designed for high legibility across dense data interfaces. 
                Perfectly balanced x-height for readability at micro sizes.
              </p>
              
              <div className="flex flex-col gap-6 border-l-2 border-white/10 pl-6">
                <div>
                  <div className="text-[24px] font-light">Light</div>
                  <div className="text-white/30 text-[14px]">Weight: 300</div>
                </div>
                <div>
                  <div className="text-[24px] font-normal">Regular</div>
                  <div className="text-white/30 text-[14px]">Weight: 400</div>
                </div>
                <div>
                  <div className="text-[24px] font-medium">Medium</div>
                  <div className="text-white/30 text-[14px]">Weight: 500</div>
                </div>
                <div>
                  <div className="text-[24px] font-bold">Bold</div>
                  <div className="text-white/30 text-[14px]">Weight: 700</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-3xl p-10 flex items-center justify-center overflow-hidden relative border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="text-[clamp(120px,20vw,300px)] font-bold text-white/10 leading-none tracking-tighter select-none z-10">
                Aa
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. SPACING */}
      <section className="px-8 py-24 md:px-20 border-b border-white/10 relative z-10 bg-white/[0.02]">
        <FadeIn>
          <div className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase mb-16 border-b border-white/10 pb-4">03 / Spacing & Layout</div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-20">
            <div>
              <h3 className="text-[32px] font-bold mb-6">Scale Base & Spatial Logic</h3>
              <p className="text-white/50 leading-[1.6] mb-12">
                Built on a strict 4px grid system. Ensuring visual rhythm, vertical cadence, and mathematical predictability across all layout structures.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: '4px', class: 'w-1 h-8 bg-[var(--blue)]' },
                  { name: '8px', class: 'w-2 h-8 bg-[var(--blue)]' },
                  { name: '12px', class: 'w-3 h-8 bg-[var(--blue)]' },
                  { name: '16px', class: 'w-4 h-8 bg-[var(--blue)]' },
                  { name: '24px', class: 'w-6 h-8 bg-[var(--blue)]' },
                  { name: '32px', class: 'w-8 h-8 bg-[var(--blue)]' },
                  { name: '48px', class: 'w-12 h-8 bg-[var(--blue)]' },
                  { name: '64px', class: 'w-16 h-8 bg-[var(--blue)]' },
                ].map((space, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-16 h-8 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                      <div className={space.class}></div>
                    </div>
                    <div className="font-mono text-[14px] text-white/60">{space.name}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#050505] rounded-3xl p-10 flex items-center justify-center border border-white/10">
              {/* Visual representation of grid/layout */}
              <div className="w-full max-w-[400px] border border-[var(--blue)]/30 rounded-2xl p-6 relative">
                 <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-[var(--blue)] text-white text-[10px] px-2 py-1 rounded">24px Padding</div>
                 <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20"></div>
                    <div className="flex-1 flex flex-col gap-2 justify-center">
                       <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                       <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                    </div>
                 </div>
                 <div className="w-full h-32 bg-white/5 rounded-xl border border-white/10 mt-6 relative flex items-center justify-center">
                    <div className="text-[12px] text-[var(--blue)] font-mono border border-[var(--blue)] border-dashed px-4 py-2">Content Block</div>
                 </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 5. ELEVATIONS */}
      <section className="px-8 py-24 md:px-20 border-b border-white/10 relative z-10">
        <FadeIn>
          <div className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase mb-16 border-b border-white/10 pb-4">04 / Elevations</div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
            {/* Level 1 */}
            <div className="flex flex-col items-center">
               <div className="w-full aspect-square rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-6 transition-transform duration-500 hover:-translate-y-2">
                 <div className="w-24 h-24 rounded-xl bg-white/5 border border-white/10"></div>
               </div>
               <div className="text-center">
                 <div className="font-bold text-[18px]">Base / Flat</div>
                 <div className="text-white/50 text-[14px]">Z-Index: 0</div>
               </div>
            </div>
            {/* Level 2 */}
            <div className="flex flex-col items-center">
               <div className="w-full aspect-square rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-6 transition-transform duration-500 hover:-translate-y-4">
                 <div className="w-24 h-24 rounded-xl bg-white/10 border border-white/10 shadow-lg shadow-black/50"></div>
               </div>
               <div className="text-center">
                 <div className="font-bold text-[18px]">Dropdowns</div>
                 <div className="text-white/50 text-[14px]">Z-Index: 10</div>
               </div>
            </div>
            {/* Level 3 */}
            <div className="flex flex-col items-center">
               <div className="w-full aspect-square rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-6 transition-transform duration-500 hover:-translate-y-6">
                 <div className="w-24 h-24 rounded-xl bg-white/10 border border-white/20 shadow-xl shadow-black/80"></div>
               </div>
               <div className="text-center">
                 <div className="font-bold text-[18px]">Modals</div>
                 <div className="text-white/50 text-[14px]">Z-Index: 40</div>
               </div>
            </div>
            {/* Level 4 */}
            <div className="flex flex-col items-center">
               <div className="w-full aspect-square rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-6 transition-transform duration-500 hover:-translate-y-8">
                 <div className="w-24 h-24 rounded-xl bg-white/20 border border-white/30 shadow-2xl shadow-[var(--blue)]/20"></div>
               </div>
               <div className="text-center">
                 <div className="font-bold text-[18px]">Tooltips / Popovers</div>
                 <div className="text-white/50 text-[14px]">Z-Index: 50</div>
               </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 6. COMPONENTS UI KIT */}
      <section className="px-8 py-24 md:px-20 relative z-10 bg-gradient-to-b from-transparent to-[var(--blue)]/5">
        <FadeIn>
          <div className="text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase mb-16 border-b border-white/10 pb-4">05 / Core Components</div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Buttons */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <h3 className="text-[24px] font-bold mb-10">Buttons</h3>
              
              <div className="flex flex-col gap-10">
                {/* Primary */}
                <div className="flex flex-wrap items-center gap-6">
                   <div className="w-24 text-[14px] text-white/50">Primary</div>
                   <button className="px-6 py-3 rounded-xl bg-[var(--blue)] text-white font-medium hover:bg-[var(--blue-dk)] transition-colors shadow-lg shadow-[var(--blue)]/20">Default</button>
                   <button className="px-6 py-3 rounded-xl bg-[var(--blue-dk)] text-white font-medium shadow-inner border border-white/10">Hover</button>
                   <button className="px-6 py-3 rounded-xl bg-white/10 text-white/30 font-medium cursor-not-allowed">Disabled</button>
                </div>
                {/* Secondary */}
                <div className="flex flex-wrap items-center gap-6">
                   <div className="w-24 text-[14px] text-white/50">Secondary</div>
                   <button className="px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/5">Default</button>
                   <button className="px-6 py-3 rounded-xl bg-white/20 text-white font-medium border border-white/10">Hover</button>
                </div>
                {/* Outline */}
                <div className="flex flex-wrap items-center gap-6">
                   <div className="w-24 text-[14px] text-white/50">Outline</div>
                   <button className="px-6 py-3 rounded-xl bg-transparent text-white font-medium border border-white/20 hover:border-white transition-colors">Default</button>
                   <button className="px-6 py-3 rounded-xl bg-transparent text-white font-medium border border-[var(--blue)] text-[var(--blue)]">Active</button>
                </div>
              </div>
            </div>

            {/* Inputs */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <h3 className="text-[24px] font-bold mb-10">Input Fields</h3>
              
              <div className="flex flex-col gap-8 w-full max-w-[400px]">
                {/* Default */}
                <div className="flex flex-col gap-2">
                   <label className="text-[14px] font-medium text-white/80">Email Address</label>
                   <input type="text" placeholder="Enter your email" className="w-full bg-[#0a0a0a] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none hover:border-white/40 transition-colors" />
                </div>
                {/* Active / Focus */}
                <div className="flex flex-col gap-2">
                   <label className="text-[14px] font-medium text-[var(--blue)]">Full Name</label>
                   <div className="relative">
                      <input type="text" defaultValue="Chinonso Ezeigbo" className="w-full bg-[#0a0a0a] border-2 border-[var(--blue)] rounded-xl px-4 py-3 text-white outline-none shadow-[0_0_15px_rgba(57,123,251,0.2)]" />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--blue)] animate-pulse"></div>
                   </div>
                </div>
                {/* Error */}
                <div className="flex flex-col gap-2">
                   <label className="text-[14px] font-medium text-red-400">Password</label>
                   <input type="password" defaultValue="123" className="w-full bg-red-500/5 border-2 border-red-500/50 rounded-xl px-4 py-3 text-white outline-none" />
                   <div className="text-[12px] text-red-400">Password must be at least 8 characters.</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
