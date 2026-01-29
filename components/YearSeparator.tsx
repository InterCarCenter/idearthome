import React from 'react';

const YearSeparator = () => {
  return (
    <section className="relative py-4 bg-[#0A0A0A] overflow-hidden border-y border-white/5 flex flex-col items-center justify-center">
      
      {/* Luces de fondo sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-[#F5CBA7]/10 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-row items-center gap-6 md:gap-10">
        
        {/* Marca Quieta */}
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
          IDEART<span style={{ color: '#F5CBA7' }}>HOME</span>
        </h2>

        {/* Contenedor del Cambio de Año - Altura reducida */}
        <div className="year-box h-12 md:h-16 w-32 md:w-40 flex items-center justify-center">
          <div className="year-inner">
            <span className="year-old">2025</span>
            <span className="year-new">2026</span>
          </div>
        </div>

      </div>

      <style>{`
        .year-box {
          perspective: 1000px;
        }

        .year-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: dropBack 4s cubic-bezier(0.7, 0, 0.3, 1) infinite;
        }

        .year-old, .year-new {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          backface-visibility: hidden;
          line-height: 1;
        }

        .year-old {
          color: rgba(255, 255, 255, 0.2);
          transform: rotateX(0deg) translateZ(30px);
          font-size: 2.5rem;
        }

        .year-new {
          color: #F5CBA7;
          text-shadow: 0 0 20px rgba(245, 203, 167, 0.3);
          transform: rotateX(90deg) translateZ(30px);
          font-size: 2.5rem;
        }

        @keyframes dropBack {
          0%, 20% { transform: rotateX(0deg); }
          40%, 100% { transform: rotateX(-90deg); }
        }

        @media (min-width: 768px) {
          .year-old, .year-new { font-size: 3.5rem; }
        }
      `}</style>
    </section>
  );
};

export default YearSeparator;