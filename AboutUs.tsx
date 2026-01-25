
import React from 'react';
import { Instagram, Music, MessageCircle, CreditCard } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-24 bg-white px-6 relative overflow-hidden">
      {/* Fondo decorativo con texto gigante */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[12vw] font-black text-gray-50 opacity-[0.05] pointer-events-none select-none uppercase tracking-tighter">
        IdeArtHome
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Lado de la Imagen y Billetera Digital */}
        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-lg group/wallet h-[400px] flex items-center justify-center">
            
            {/* Imagen de fondo sutil (Opcional, para dar textura al contenedor) */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem] grayscale opacity-5">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop" 
                alt="Showroom" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* TARJETA SUPERIOR: AMERICAN EXPRESS (AZUL) */}
            <div className="absolute w-[85%] md:w-[95%] h-[180px] md:h-[220px] bg-[#006fcf] rounded-[2rem] shadow-xl z-10 border border-white/10 p-6 flex flex-col justify-start transform transition-all duration-700 ease-out 
              translate-y-[-20%] group-hover/wallet:-translate-y-[65%] 
              scale-95 opacity-90 group-hover/wallet:opacity-100 group-hover/wallet:scale-100 
              rotate-[-3deg] group-hover/wallet:rotate-[-8deg]">
                <div className="flex justify-between items-start">
                  <div className="text-white font-black italic text-sm md:text-lg tracking-tighter">AMERICAN EXPRESS</div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg backdrop-blur-md"></div>
                </div>
                <div className="mt-auto">
                   <p className="text-white/40 text-[8px] font-mono tracking-widest uppercase">Platinum Member</p>
                </div>
            </div>

            {/* TARJETA INFERIOR: BANCOLOMBIA (AMARILLO) */}
            <div className="absolute w-[85%] md:w-[95%] h-[180px] md:h-[220px] bg-[#FDDA24] rounded-[2rem] shadow-xl z-10 border border-black/5 p-6 flex flex-col justify-end transform transition-all duration-700 ease-out 
              translate-y-[20%] group-hover/wallet:translate-y-[65%] 
              scale-95 opacity-90 group-hover/wallet:opacity-100 group-hover/wallet:scale-100 
              rotate-[3deg] group-hover/wallet:rotate-[8deg]">
                <div className="flex justify-between items-end">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-8 bg-[#004481]"></div>
                    <div className="w-1.5 h-8 bg-black"></div>
                    <div className="w-1.5 h-8 bg-[#E03E25]"></div>
                  </div>
                  <div className="text-black font-black text-right">
                    <p className="text-[10px] uppercase tracking-widest leading-none">Bancolombia</p>
                    <p className="text-[7px] opacity-60 mt-1">Socio Preferencial</p>
                  </div>
                </div>
            </div>

            {/* TARJETA PRINCIPAL (IDENTIDAD IDEARTHOME) - Siempre al frente */}
            <div className="absolute w-[95%] md:w-[105%] bg-[#1A1A1A] text-white p-6 md:p-12 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] z-30 border border-white/10 transform transition-all duration-500 group-hover/wallet:scale-[1.03]">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 text-center md:text-left">
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">IDEARTHOME</h3>
                  <p className="text-[#C4A484] text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em]">Muebles & Decoración</p>
                </div>
                
                {/* Logo Central */}
                <div className="relative flex h-14 w-14 md:h-20 md:w-20 shrink-0 mx-auto md:mx-0">
                  <div className="flex-1 bg-[#E67E22] flex flex-col items-center pt-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white rounded-t-lg rounded-b-sm relative mb-1 flex items-center justify-center">
                       <div className="w-1/2 h-0.5 bg-white"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#F1C40F] flex flex-col items-center pt-3">
                    <div className="w-4 h-3 md:w-5 md:h-4 bg-white clip-trapezoid mb-1"></div>
                    <div className="w-0.5 h-3 md:w-0.5 md:h-4 bg-white"></div>
                  </div>
                  <div className="flex-1 bg-[#7FB3D5]"></div>
                  <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-6 md:h-8 border-2 border-white rounded-md bg-[#1A1A1A]/20 flex">
                     <div className="flex-1 border-r border-white"></div>
                     <div className="flex-1"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-10 text-center md:text-left">
                <div className="space-y-2">
                  <p className="text-base md:text-lg font-black uppercase tracking-tight">Gloria Mahecha</p>
                  <a href="https://wa.me/573123573343" target="_blank" className="flex items-center justify-center md:justify-start gap-2 text-[#25D366] hover:text-white transition-all">
                    <MessageCircle size={16} className="fill-[#25D366]/20" />
                    <span className="font-black text-base md:text-lg tracking-tighter">312 357 3343</span>
                  </a>
                </div>
                <div className="space-y-2 md:text-right">
                  <p className="text-base md:text-lg font-black uppercase tracking-tight">Fredy Torres</p>
                  <a href="https://wa.me/573123743925" target="_blank" className="flex items-center justify-center md:justify-end gap-2 text-[#25D366] hover:text-white transition-all">
                    <MessageCircle size={16} className="fill-[#25D366]/20" />
                    <span className="font-black text-base md:text-lg tracking-tighter">312 374 3925</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lado del Texto - Centrado en móvil */}
        <div className="order-1 lg:order-2 space-y-10 text-center lg:text-left">
          <div className="relative">
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-[#C4A484] mb-4 block">Tradición & Confianza</span>
            <h2 className="title-brutalist text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.8] tracking-tighter">
              QUIÉNES <br />
              <span className="text-[#C4A484]">SOMOS</span>
            </h2>
          </div>
          
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
            <p className="text-xl md:text-2xl text-[#1A1A1A] font-black leading-tight uppercase tracking-tighter italic border-l-0 lg:border-l-4 border-[#C4A484] lg:pl-6">
              "Calidad certificada y facilidades de pago para tu hogar."
            </p>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-medium">
              En el barrio <strong>12 de Octubre</strong> de Bogotá, IdeArtHome es sinónimo de excelencia. Trabajamos con los mejores convenios para que renovar tu sala o comedor sea una experiencia de lujo, cómoda y segura.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 pt-4 justify-center lg:justify-start">
             <div className="flex flex-col gap-3">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Nuestra Presencia Digital</span>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/ideart_home/?hl=es" target="_blank" className="p-4 bg-gray-50 text-black rounded-2xl hover:bg-[#C4A484] hover:text-white transition-all shadow-md">
                    <Instagram size={28} />
                  </a>
                  <a href="https://www.tiktok.com/@ideart_home" target="_blank" className="p-4 bg-gray-50 text-black rounded-2xl hover:bg-black hover:text-white transition-all shadow-md">
                    <Music size={28} />
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
      <style>{`
        .clip-trapezoid {
          clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
