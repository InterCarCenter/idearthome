
import React from 'react';

const YearSeparator = () => {
  return (
    <div className="py-24 bg-[#0A0A0A] overflow-hidden border-y border-white/5">
      <div className="flex items-center gap-20 whitespace-nowrap animate-marquee">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-6xl md:text-8xl font-black text-white/10 uppercase tracking-tighter">IDEARTHOME</span>
            
            <div className="flip-container h-24 w-48">
              <div className="flip-inner h-full w-full font-black text-6xl md:text-8xl tracking-tighter">
                <div className="flip-front text-white/20">2025</div>
                <div className="flip-back">2026</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default YearSeparator;
