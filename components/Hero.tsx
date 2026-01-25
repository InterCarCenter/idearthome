import React from 'react';
import { ArrowRight, Instagram, Facebook, Music, Truck, Hammer } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  const bubbles = Array.from({ length: 15 });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col pt-24 px-6 md:px-12 hero-floating-bg overflow-hidden text-white"
    >
      {/* Abstract Shapes */}
      <div className="hero-shape w-[600px] h-[600px] -top-40 -left-20 rotate-12"></div>
      <div className="hero-shape w-[400px] h-[800px] top-1/2 -right-40 -translate-y-1/2 -rotate-45"></div>

      {/* Background Bubbles */}
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

          {/* Social */}
          <div className="hidden lg:flex flex-col gap-10 items-center col-span-1 pr-6">
            <div className="w-px h-24 bg-white/20" />
            <a href="https://www.instagram.com/ideart_home/?hl=es" target="_blank" rel="noopener noreferrer"><Instagram size={22} /></a>
            <a href="https://web.facebook.com/fredy.torres.3956" target="_blank" rel="noopener noreferrer"><Facebook size={22} /></a>
            <a href="https://www.tiktok.com/@ideart_home" target="_blank" rel="noopener noreferrer"><Music size={22} /></a>
            <div className="w-px h-24 bg-white/20" />
          </div>

          {/* CONTENIDO PRINCIPAL */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">

            {/* BRAND */}
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-[#C4A484] mb-4 block">
              IdeArt Home · Muebles en Bogotá
            </span>

            {/* H1 SEO (EL MÁS IMPORTANTE DE TODA LA WEB) */}
            <h1 className="sr-only">
              Muebles y Sofás a Medida en Bogotá | IdeArt Home
            </h1>

            {/* TÍTULO VISUAL */}
            <h2 className="title-brutalist text-[14vw] sm:text-[12vw] lg:text-[8.5vw] mb-8 leading-none">
              <span className="title-glow">ESTILO Y</span> <br />
              <span className="text-outline-light">CONFORT</span>
            </h2>

            {/* TEXTO DESCRIPTIVO SEO */}
            <p className="text-sm md:text-lg text-gray-400 max-w-md mb-12 font-medium leading-relaxed">
              Fabricamos <strong className="text-white">muebles, sofás y comedores a medida en Bogotá</strong>,
              con diseños exclusivos, materiales premium y entrega directa desde nuestro taller en el
              barrio 12 de Octubre.
            </p>

            <a href="https://wa.me/573123743925" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="rounded-full !px-12 !py-6">
                VER CATÁLOGO 2026 <ArrowRight size={18} />
              </Button>
            </a>
          </div>

          {/* IMAGEN */}
          <div className="lg:col-span-5 relative px-4 md:px-0">
            <div className="relative overflow-hidden rounded-[3rem] aspect-[4/5] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1909&auto=format&fit=crop"
                alt="Sofás y muebles a medida fabricados en Bogotá por IdeArt Home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BENEFICIOS (SEO SEMÁNTICO) */}
      <div className="w-full py-10 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12">
          <div className="flex items-center gap-4">
            <Truck size={20} />
            <p>Domicilio de muebles en Bogotá</p>
          </div>
          <div className="flex items-center gap-4">
            <Hammer size={20} />
            <p>Instalación gratuita</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-black">12</span>
            <p>Barrio 12 de Octubre</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
