import React from 'react';

const YearSeparator = () => {
  return (
    <section
      aria-label="IdeArtHome experiencia y trayectoria"
      className="relative py-24 bg-[#0A0A0A] overflow-hidden border-y border-white/5"
    >
      {/* SEO oculto pero válido */}
      <h2 className="sr-only">
        IdeArtHome muebles en Bogotá – experiencia, calidad y diseño 2026
      </h2>
      <p className="sr-only">
        Fabricación de muebles, sofás a medida, comedores y diseño interior en Bogotá.
        IdeArtHome evoluciona con calidad artesanal año tras año.
      </p>

      {/* Glow decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] bg-[#C4A484]/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Marquee */}
      <div className="relative flex items-center gap-24 whitespace-nowrap animate-marquee">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-14">
            
            {/* Marca */}
            <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white/10 select-none">
              IDEARTHOME
            </span>

            {/* Flip Año */}
            <div className="flip-container h-24 md:h-28 w-40 md:w-48">
              <div className="flip-inner h-full w-full">
                <div className="flip-face flip-front">
                  2025
                </div>
                <div className="flip-face flip-back">
                  2026
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Estilos */}
      <style>{`
        /* MARQUEE */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }

        /* FLIP 3D */
        .flip-container {
          perspective: 1000px;
        }

        .flip-inner {
          position: relative;
          transform-style: preserve-3d;
          animation: flipYear 6s ease-in-out infinite;
        }

        .flip-face {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.05em;
          backface-visibility: hidden;
          border-radius: 1rem;
        }

        .flip-front {
          color: rgba(255,255,255,0.2);
        }

        .flip-back {
          transform: rotateX(180deg);
          color: #C4A484;
          text-shadow: 0 0 30px rgba(196,164,132,0.4);
        }

        @keyframes flipYear {
          0%, 40% {
            transform: rotateX(0deg);
          }
          60%, 100% {
            transform: rotateX(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default YearSeparator;
