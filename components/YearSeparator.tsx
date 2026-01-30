import React from 'react';

const YearSeparator = () => {
  return (
    <section className="relative py-12 lg:py-16 bg-[#050505] overflow-hidden border-y border-white/10 flex flex-col items-center justify-center">
      
      {/* Resplandor de fondo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[300px] h-[300px] bg-[#FFD700]/5 blur-[120px] rounded-full" />
        <div className="absolute right-1/4 bottom-0 w-[300px] h-[300px] bg-[#005293]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 max-w-6xl mx-auto px-6">
        
        {/* LOGO AL LADO DEL TÍTULO */}
        <div className="flex items-center gap-5">
          <img 
            src="/inicio/logo2.png" 
            alt="IdeArtHome"
            className="w-14 h-14 lg:w-20 lg:h-20 object-contain rounded-2xl bg-white/5 p-2 border border-white/10 drop-shadow-2xl"
          />
          <div className="flex flex-col">
            <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.4em] text-white/40 mb-1">Nueva Colección</span>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter text-white leading-none">
              IDEART<span className="text-[#FFD700] italic ml-1">HOME</span>
            </h2>
          </div>
        </div>

        {/* Separador vertical elegante */}
        <div className="hidden lg:block h-12 w-[1px] bg-white/20" />

        {/* CONTENEDOR DE AÑO - Animación de deslizamiento corto */}
        <div className="relative h-12 lg:h-16 overflow-hidden w-32 lg:w-44">
          <div className="animate-simple-slide flex flex-col items-center">
            {/* 2025 sube y desaparece */}
            <span className="h-12 lg:h-16 flex items-center text-4xl lg:text-6xl font-black text-white/10 tracking-tighter italic">
              2025
            </span>
            {/* 2026 llega y se queda un momento */}
            <span className="h-12 lg:h-16 flex items-center text-4xl lg:text-6xl font-black text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] tracking-tighter">
              2026
            </span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes simple-slide {
          0%, 15% { transform: translateY(0); }
          25%, 100% { transform: translateY(-50%); }
        }
        .animate-simple-slide {
          animation: simple-slide 4s cubic-bezier(0.8, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default YearSeparator;