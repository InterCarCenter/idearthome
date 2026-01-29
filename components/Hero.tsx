import React from 'react';
import { 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Music, 
  Hammer, 
  Heart, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import Button from './Button';
import 'animate.css'; 

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col pt-24 px-6 md:px-12 overflow-hidden text-[#1A1A1A] bg-white"
    >
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* Iconos Sociales - Entrada desde la izquierda */}
          <div className="hidden lg:flex flex-col gap-10 items-center col-span-1 pr-6 animate__animated animate__slideInLeft">
            <div className="w-px h-24 bg-gray-200" />
            <a href="https://www.instagram.com/ideart_home/?hl=es" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-all duration-300 hover:scale-125"><Instagram size={22} /></a>
            <a href="https://web.facebook.com/fredy.torres.3956" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-all duration-300 hover:scale-125"><Facebook size={22} /></a>
            <a href="https://www.tiktok.com/@ideart_home" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-125"><Music size={22} /></a>
            <div className="w-px h-24 bg-gray-200" />
          </div>

          {/* CONTENIDO PRINCIPAL */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start animate__animated animate__slideInLeft animate__delay-0.5s">
            
            <div className="flex items-center gap-2 mb-4 animate__animated animate__fadeIn animate__delay-1s">
              <Sparkles size={16} className="text-[#FFD700]" />
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] block text-[#005293]">
                IdeArt <span className="text-[#FFD700]">Home</span> <span className="text-gray-400">· Muebles en Bogotá</span>
              </span>
            </div>

            {/* LOGO con entrada elegante */}
            <div className="mb-8 flex justify-center w-full mx-auto max-w-md lg:max-w-lg animate__animated animate__fadeInDown animate__delay-1s">
              <img 
                src="/inicio/logo.png" 
                alt="Logo IdeArt Home" 
                className="w-full max-w-[320px] md:max-w-[420px] h-auto hover:scale-105 transition-transform duration-500" 
              />
            </div>

            <p className="text-sm md:text-lg text-gray-500 max-w-md mb-12 font-medium leading-relaxed">
              Transformamos tu espacio con <strong className="text-[#1A1A1A]">sofás y comedores a medida</strong>. 
              Diseños premium, materiales de alta resistencia y la esencia del trabajo artesanal directo del 
              <span className="text-[#005293] font-bold"> Barrio 12 de Octubre</span>.
            </p>

            {/* Botón con pulso infinito para llamar la atención */}
            <a href="https://wa.me/573123743925" target="_blank" rel="noopener noreferrer" className="animate__animated animate__pulse animate__infinite">
              <Button variant="primary" className="rounded-full !px-12 !py-6 !bg-[#1A1A1A] !text-white hover:!bg-[#005293] shadow-2xl transition-all duration-300">
                VER CATÁLOGO 2026 <ArrowRight size={18} />
              </Button>
            </a>
          </div>

          {/* IMAGEN PRINCIPAL */}
          <div className="lg:col-span-5 relative px-4 md:px-0 -mt-12 lg:-mt-10 animate__animated animate__slideInRight">
            <div className="relative overflow-hidden rounded-[3rem] aspect-[4/5] border border-gray-100 shadow-2xl mx-auto max-w-sm lg:max-w-none transition-all duration-700 hover:shadow-[0_35px_60px_-15px_rgba(0,82,147,0.3)]">
              <img
                src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1909&auto=format&fit=crop"
                alt="Muebles IdeArt Home Bogotá"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>

      {/* SECCIÓN DE BENEFICIOS ACTUALIZADA */}
      <div className="w-full py-10 bg-gray-50 border-y border-gray-100 mt-12 animate__animated animate__slideInUp animate__delay-1s">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20 text-gray-600">
          
          {/* Mascotas */}
          <div className="flex items-center gap-4 group cursor-help">
            <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
              <Heart size={22} className="text-[#E1306C]" />
            </div>
            <div>
              <p className="font-black text-[#1A1A1A] text-xs uppercase tracking-wider">Pet Friendly</p>
              <p className="text-[11px] font-medium">Telas antirasguños</p>
            </div>
          </div>

          {/* Garantía */}
          <div className="flex items-center gap-4 group cursor-help">
            <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
              <ShieldCheck size={22} className="text-[#005293]" />
            </div>
            <div>
              <p className="font-black text-[#1A1A1A] text-xs uppercase tracking-wider">Calidad Premium</p>
              <p className="text-[11px] font-medium">Garantía estructural</p>
            </div>
          </div>

          {/* Instalación */}
          <div className="flex items-center gap-4 group cursor-help">
            <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
              <Hammer size={22} className="text-[#FFD700]" />
            </div>
            <div>
              <p className="font-black text-[#1A1A1A] text-xs uppercase tracking-wider">Instalación</p>
              <p className="text-[11px] font-medium">Servicio profesional</p>
            </div>
          </div>

          {/* Fábrica Directa */}
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-[#005293] rounded-2xl shadow-lg transition-all duration-300 group-hover:rotate-12">
              <span className="text-white font-black text-lg">12</span>
            </div>
            <div>
              <p className="font-black text-[#1A1A1A] text-xs uppercase tracking-wider">Fábrica Directa</p>
              <p className="text-[11px] font-medium">Barrio 12 de Octubre</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;