export default function FloraPattern({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* 1. TOP RIGHT FLORA CLUSTER */}
      <div className="absolute -top-16 -right-16 w-[420px] md:w-[600px] h-[420px] md:h-[600px] opacity-25">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="floraG1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d0c9b9" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#4ade80" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="floraG2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#d0c9b9" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Main Curved Stem */}
          <path d="M480 30 C380 90, 290 190, 240 320 C200 420, 160 480, 50 500" stroke="url(#floraG1)" strokeWidth="1.8" strokeLinecap="round" />
          
          {/* Branch 1 */}
          <path d="M340 145 C280 130, 230 160, 195 210" stroke="url(#floraG1)" strokeWidth="1.2" strokeLinecap="round" />
          {/* Leaf 1 */}
          <path d="M195 210 C180 170, 210 130, 255 135 C250 165, 225 195, 195 210 Z" fill="url(#floraG2)" fillOpacity="0.12" stroke="url(#floraG1)" strokeWidth="1.2" />
          <path d="M195 210 C220 180, 240 155, 255 135" stroke="url(#floraG1)" strokeWidth="0.8" strokeOpacity="0.6" />

          {/* Leaf 2 (Upper) */}
          <path d="M380 90 C370 40, 420 20, 460 35 C440 70, 410 85, 380 90 Z" fill="url(#floraG2)" fillOpacity="0.15" stroke="url(#floraG1)" strokeWidth="1.2" />
          <path d="M380 90 C410 70, 435 50, 460 35" stroke="url(#floraG1)" strokeWidth="0.8" strokeOpacity="0.6" />

          {/* Branch 2 & Leaf 3 */}
          <path d="M285 220 C240 250, 190 260, 140 250" stroke="url(#floraG1)" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M140 250 C120 215, 150 180, 190 190 C180 220, 160 240, 140 250 Z" fill="url(#floraG2)" fillOpacity="0.1" stroke="url(#floraG1)" strokeWidth="1.2" />

          {/* Blooming Petals / Flower */}
          <g transform="translate(240, 320)">
            {/* Petal 1 */}
            <path d="M0 0 C-30 -40, -10 -80, 20 -70 C35 -40, 20 -15, 0 0 Z" fill="url(#floraG1)" fillOpacity="0.15" stroke="url(#floraG1)" strokeWidth="1.2" />
            {/* Petal 2 */}
            <path d="M0 0 C10 -50, 50 -70, 70 -40 C60 -10, 30 -5, 0 0 Z" fill="url(#floraG1)" fillOpacity="0.18" stroke="url(#floraG1)" strokeWidth="1.2" />
            {/* Petal 3 */}
            <path d="M0 0 C-40 -10, -60 20, -35 45 C-10 40, -5 20, 0 0 Z" fill="url(#floraG2)" fillOpacity="0.1" stroke="url(#floraG1)" strokeWidth="1.2" />
            {/* Petal 4 */}
            <path d="M0 0 C-10 35, 20 60, 45 40 C40 15, 20 5, 0 0 Z" fill="url(#floraG2)" fillOpacity="0.12" stroke="url(#floraG1)" strokeWidth="1.2" />
            {/* Center pistil */}
            <circle cx="0" cy="0" r="4" fill="#d0c9b9" />
          </g>

          {/* Delicate Fern Fronds */}
          <path d="M250 305 Q220 300 200 315" stroke="url(#floraG1)" strokeWidth="1" strokeLinecap="round" />
          <path d="M235 340 Q205 355 180 350" stroke="url(#floraG1)" strokeWidth="1" strokeLinecap="round" />
          <path d="M210 380 Q180 405 150 400" stroke="url(#floraG1)" strokeWidth="1" strokeLinecap="round" />
          <path d="M175 430 Q140 450 110 440" stroke="url(#floraG1)" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. MID-PAGE LEFT BOTANICAL VINE */}
      <div className="absolute top-[700px] -left-20 w-[360px] md:w-[500px] h-[700px] opacity-20">
        <svg viewBox="0 0 400 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M20 10 C60 120, 150 200, 130 350 C110 490, 40 580, 80 690" stroke="url(#floraG1)" strokeWidth="1.8" strokeLinecap="round" />
          
          {/* Leaves along the left vine */}
          <path d="M80 140 C120 120, 160 140, 170 180 C130 190, 100 170, 80 140 Z" fill="url(#floraG2)" fillOpacity="0.12" stroke="url(#floraG1)" strokeWidth="1.2" />
          <path d="M135 240 C175 220, 210 240, 220 280 C180 290, 155 270, 135 240 Z" fill="url(#floraG2)" fillOpacity="0.12" stroke="url(#floraG1)" strokeWidth="1.2" />
          <path d="M125 380 C165 370, 195 400, 190 440 C150 440, 130 410, 125 380 Z" fill="url(#floraG2)" fillOpacity="0.12" stroke="url(#floraG1)" strokeWidth="1.2" />
          <path d="M75 510 C115 500, 145 520, 150 560 C110 570, 85 540, 75 510 Z" fill="url(#floraG2)" fillOpacity="0.12" stroke="url(#floraG1)" strokeWidth="1.2" />

          {/* Stylized small flower buds */}
          <circle cx="170" cy="180" r="3" fill="#d0c9b9" fillOpacity="0.7" />
          <circle cx="220" cy="280" r="3" fill="#4ade80" fillOpacity="0.7" />
          <circle cx="190" cy="440" r="3" fill="#d0c9b9" fillOpacity="0.7" />
        </svg>
      </div>

      {/* 3. LOWER RIGHT BOTANICAL FLOURISH */}
      <div className="absolute top-[1800px] -right-24 w-[380px] md:w-[550px] h-[600px] opacity-20">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M450 480 C360 400, 280 280, 290 140 C295 70, 330 20, 360 0" stroke="url(#floraG1)" strokeWidth="1.6" strokeLinecap="round" />
          
          <path d="M330 380 C270 370, 230 400, 210 440 C240 460, 290 440, 330 380 Z" fill="url(#floraG2)" fillOpacity="0.1" stroke="url(#floraG1)" strokeWidth="1.2" />
          <path d="M290 280 C230 260, 190 280, 170 320 C200 340, 250 330, 290 280 Z" fill="url(#floraG2)" fillOpacity="0.1" stroke="url(#floraG1)" strokeWidth="1.2" />
          <path d="M285 160 C235 130, 190 140, 175 180 C205 200, 250 200, 285 160 Z" fill="url(#floraG2)" fillOpacity="0.1" stroke="url(#floraG1)" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Subtle organic radial glows behind the flora */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(208,201,185,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[800px] left-0 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[1900px] right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(208,201,185,0.03)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
}
