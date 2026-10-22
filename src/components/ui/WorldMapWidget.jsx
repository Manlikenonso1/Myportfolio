import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, MapPin, Radio } from 'lucide-react';

export default function WorldMapWidget() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Hubs: [x, y, label, sub]
  // Map coordinate space: viewBox 0 0 800 420
  // UK / Newcastle coordinates approximately: x: 382, y: 118
  const basePoint = { x: 382, y: 118 };

  const targetHubs = [
    { name: 'San Francisco', x: 125, y: 148, tz: 'PST' },
    { name: 'New York',      x: 232, y: 146, tz: 'EST' },
    { name: 'Berlin',        x: 415, y: 126, tz: 'CET' },
    { name: 'Lagos',         x: 396, y: 242, tz: 'WAT' },
    { name: 'Singapore',     x: 642, y: 246, tz: 'SGT' },
  ];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-6 md:p-7 relative overflow-hidden backdrop-blur-xl group hover:border-white/20 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] bg-[var(--blue)]/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Header bar: Live status & Clock */}
      <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-white/5 relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-white/70">
            Available Worldwide
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[12px] font-mono text-white/80">
          <Clock size={12} className="text-white/50" />
          <span>{time || '12:00:00 PM'} GMT</span>
        </div>
      </div>

      {/* Map Graphic Area */}
      <div className="relative w-full aspect-[16/9] my-2">
        <svg
          viewBox="0 0 800 420"
          className="w-full h-full select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="world-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="rgba(255,255,255,0.07)" />
            </pattern>

            {/* Arc Gradient */}
            <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>

            {/* Pulse Glow filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dotted Background Grid */}
          <rect width="800" height="420" fill="url(#world-grid)" />

          {/* Continents Vector Outlines (Stylized Minimalist SVG Geometries) */}
          <g fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" strokeLinejoin="round">
            {/* North America */}
            <path d="M 120 70 Q 180 50 240 70 Q 270 95 255 125 L 245 155 Q 230 185 200 195 L 180 205 Q 165 220 150 250 L 135 235 Q 115 190 100 170 Q 80 140 100 100 Z" />
            {/* Greenland */}
            <path d="M 280 40 Q 320 30 335 50 Q 330 75 300 85 Q 275 80 270 60 Z" />
            {/* South America */}
            <path d="M 205 240 Q 235 240 255 265 Q 285 300 270 340 L 250 375 L 225 390 L 215 360 Q 200 310 190 280 Z" />
            {/* Europe */}
            <path d="M 365 95 Q 405 80 445 95 Q 460 120 440 145 L 415 150 Q 380 160 365 140 Q 355 120 365 95 Z" />
            {/* Africa */}
            <path d="M 365 170 Q 425 165 445 195 Q 465 240 445 285 L 420 330 Q 395 345 375 320 L 360 275 Q 340 230 345 195 Z" />
            {/* Asia */}
            <path d="M 455 85 Q 530 65 620 80 Q 695 105 705 155 Q 690 195 645 220 L 595 225 Q 540 220 515 195 L 475 165 Q 445 125 455 85 Z" />
            {/* Australia */}
            <path d="M 645 280 Q 700 275 725 305 Q 720 345 680 355 L 640 345 Q 625 315 645 280 Z" />
          </g>

          {/* Flight / Network Arcs connecting Base Point to Target Hubs */}
          {targetHubs.map((hub, idx) => {
            // Bezier curve with upward arch
            const midX = (basePoint.x + hub.x) / 2;
            const midY = Math.min(basePoint.y, hub.y) - 40;
            const pathD = `M ${basePoint.x} ${basePoint.y} Q ${midX} ${midY} ${hub.x} ${hub.y}`;

            return (
              <g key={idx}>
                {/* Arc line */}
                <path
                  d={pathD}
                  stroke="url(#arc-grad)"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  strokeOpacity="0.45"
                  fill="none"
                />

                {/* Target Hub Dot */}
                <circle cx={hub.x} cy={hub.y} r="2.5" fill="rgba(255,255,255,0.5)" />
                <circle cx={hub.x} cy={hub.y} r="6" fill="rgba(59,130,246,0.15)" />
              </g>
            );
          })}

          {/* Base Location Pulsing Radar (Newcastle upon Tyne, UK) */}
          <g transform={`translate(${basePoint.x}, ${basePoint.y})`}>
            {/* Radar Wave 1 */}
            <circle cx="0" cy="0" r="18" fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.25">
              <animate attributeName="r" values="4;24" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Radar Wave 2 */}
            <circle cx="0" cy="0" r="10" fill="none" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.4">
              <animate attributeName="r" values="4;16" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
            </circle>

            {/* Solid Center Glow */}
            <circle cx="0" cy="0" r="5" fill="#10b981" filter="url(#glow)" />
            <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
          </g>
        </svg>

        {/* Floating Location Tooltip Badge */}
        <div className="absolute top-[8%] left-[45%] -translate-x-1/2 pointer-events-none">
          <div className="px-3 py-1.5 rounded-lg bg-black/80 border border-white/15 backdrop-blur-md shadow-xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-semibold text-white leading-tight">Newcastle upon Tyne, UK</span>
              <span className="text-[9px] font-mono text-white/50 leading-tight">54.97° N, 1.61° W · Primary Base</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timezone & Collaboration Coverage Tags */}
      <div className="pt-4 border-t border-white/5 flex flex-col gap-3 relative z-10">
        <div className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
          Seamless Async &amp; Real-Time Overlap
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { region: 'UK & Europe', tz: 'GMT / CET', status: 'Primary' },
            { region: 'US East',      tz: 'EST / EDT', status: 'Active' },
            { region: 'US West',      tz: 'PST / PDT', status: 'Flexible' },
            { region: 'Remote Worldwide', tz: 'Any Timezone', status: 'Async' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[12px] text-white/75"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70"></span>
              <span className="font-medium text-white/90">{item.region}</span>
              <span className="text-white/40 font-mono text-[11px]">({item.tz})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
