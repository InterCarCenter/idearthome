
import React from 'react';
import { ArrowRight, Instagram, Facebook, Music, Truck, Hammer } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  const bubbles = Array.from({ length: 15 });

  return (
    <section className="relative min-h-screen flex flex-col pt-24 px-6 md:px-12 hero-floating-bg overflow-hidden text-white">
      {/* Abstract Geometrical Shapes */}
      <div className="hero-shape w-[600px] h-[600px] -top-40 -left-20 rotate-12"></div>
      <div className="hero-shape w-[400px] h-[800px] top-1/2 -right-40 -translate-y-1/2 -rotate-45"></div>

      {/* Dynamic Background Bubbles */}
      {bubbles.map((_, i) => (
        <div 
          key={i} 
          className="bubble" 
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 80 + 40}px`,
            height: `${Math.random() * 80 + 40}px`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Social Icons Vertical Column */}
          <div className="hidden lg:flex flex-col gap-10 items-center col-span-1 pr-6">
            <div className="w-px h-24 bg-white/20" />
            <a href="https://www.instagram.com/ideart_home/?hl=es" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E1306C] hover:scale-125 transition-all"><Instagram size={22} /></a>
            <a href="https://web.facebook.com/fredy.torres.3956" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1877F2] hover:scale-125 transition-all"><Facebook size={22} /></a>
            <a href="https://www.tiktok.com/@ideart_home" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-125 transition-all"><Music size={22} /></a>
            <div className="w-px h-24 bg-white/20" />
          </div>

          {/* Lado Izquierdo - Centrado en móvil */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-[#C4A484] mb-6 block">IdeArt Home Muebles</span>
            <h2 className="title-brutalist text-[14vw] sm:text-[12vw] lg:text-[8.5vw] mb-8 leading-none">
              <span className="title-glow">ESTILO</span> <br />
              <span className="text-outline-light">CONFORT</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-sm mb-12 font-medium leading-relaxed mx-auto lg:mx-0">
              La mejor <span className="text-white font-bold underline decoration-[#C4A484]">venta de muebles en Bogotá</span>. Diseños exclusivos que impresionan desde el primer vistazo.
            </p>
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <a href="https://wa.me/573123743925" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="rounded-full !px-10 md:!px-12 !py-5 md:!py-6 group shadow-[0_0_30px_rgba(196,164,132,0.3)] !text-[10px] md:!text-xs">
                  CATÁLOGO 2026 <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          {/* Lado Derecho - Imagen centrada */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 px-4 md:px-0">
            <div className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] aspect-[4/5] border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1909&auto=format&fit=crop" 
                alt="Venta de sofás y comedores Bogotá" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            
            {/* Badge Decorativo - Oculto en móviles muy pequeños */}
            <div className="absolute -top-6 md:-top-10 -right-6 md:-right-10 w-28 h-28 md:w-40 md:h-40 bg-[#C4A484] rounded-full flex items-center justify-center text-white text-[8px] md:text-[10px] font-black text-center leading-tight tracking-[0.1em] md:tracking-[0.2em] p-4 md:p-6 shadow-2xl rotate-12 transition-transform hover:rotate-0 duration-500 z-20">
              EXCELENCIA <br/> ARTESANAL
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Bar - Más compacto en móvil */}
      <div className="w-full py-8 md:py-10 bg-white/5 backdrop-blur-xl border-y border-white/10 z-20 mt-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap justify-center lg:justify-around items-center gap-8 md:gap-10">
          <div className="flex items-center gap-4 md:gap-5 group">
            <div className="p-3 md:p-4 bg-[#C4A484] text-white rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
              <Truck size={20} />
            </div>
            <div className="text-left">
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[#C4A484]">Logística Élite</p>
              <p className="font-bold text-sm md:text-lg">DOMICILIO INCLUIDO</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-5 group">
            <div className="p-3 md:p-4 bg-white text-black rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
              <Hammer size={20} />
            </div>
            <div className="text-left">
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-400">Servicio Experto</p>
              <p className="font-bold text-sm md:text-lg">INSTALACIÓN GRATIS</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-5 group">
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 border-[#C4A484] text-[#C4A484] rounded-xl md:rounded-2xl group-hover:bg-[#C4A484] group-hover:text-white transition-all">
              <span className="font-black text-base md:text-xl">12</span>
            </div>
            <div className="text-left">
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-400">Punto de Venta</p>
              <p className="font-bold text-sm md:text-lg uppercase">12 DE OCTUBRE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
