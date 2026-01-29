import React, { useState } from 'react';
/* CAMBIAMOS LOS ICONOS PARA EVITAR EL ERROR DE IMPORTACIÓN */
import { Sparkles, MessageCircle, ChevronRight, Maximize, Lamp, Wind } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Decor = () => {
  const decorItems = [
    { 
      id: "espejo",
      name: "Espejos Orgánicos", 
      desc: "Marcos en pan de oro y formas asimétricas que son tendencia este 2026.", 
      img: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
      icon: <Maximize size={20} /> // Representa el marco/espejo
    },
    { 
      id: "iluminacion",
      name: "Iluminación Premium", 
      desc: "Lámparas de pie y candelabros modernos con acabados en negro mate y bronce.", 
      img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
      icon: <Lamp size={20} /> // Icono de lámpara estándar
    },
    { 
      id: "adornos",
      name: "Adornos & Jarrones", 
      desc: "Piezas de cerámica hechas a mano para darle el toque final a tu sala.", 
      img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop",
      icon: <Wind size={20} /> // Representa la fluidez de los adornos
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const sendWhatsApp = (itemName) => {
    const phone = "573123743925"; 
    const message = `Hola IdeArtHome! 👋 Me interesa recibir información y precios sobre: ${itemName}. ¿Me podrían asesorar?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="decoracion" className="py-32 bg-white px-6 relative overflow-hidden">
      
      {/* BURBUJAS DE FONDO */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#005293] opacity-[0.06] blur-[120px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#F5CBA7] opacity-[0.12] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-[#1A1A1A] rounded-lg text-white"><Sparkles size={18} /></span>
              <span className="text-[#005293] font-black uppercase tracking-[0.4em] text-[10px]">Complementos IdeArt</span>
            </div>

            <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#1A1A1A]">
              DETALLES <br /> 
              <span className="text-[#F5CBA7] italic font-light">MÁGICOS</span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed max-w-md font-medium">
              Eleva el nivel de tu hogar con nuestra línea de accesorios. Selecciona una categoría y escríbenos para ver el catálogo completo.
            </p>

            <div className="pt-4 space-y-4">
              {decorItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center justify-between w-full max-w-sm p-6 rounded-3xl border-2 transition-all duration-300 ${activeIndex === idx ? 'border-[#005293] bg-[#005293]/5 translate-x-4' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${activeIndex === idx ? 'text-[#005293]' : 'text-gray-400'}`}>{item.icon}</div>
                    <span className="font-black uppercase text-xs tracking-widest">{item.name}</span>
                  </div>
                  <ChevronRight size={16} className={activeIndex === idx ? 'text-[#005293]' : 'text-gray-300'} />
                </button>
              ))}
            </div>
          </div>

          <div className="relative h-[550px] md:h-[650px] flex items-center justify-center order-1 lg:order-2">
            <AnimatePresence mode="popLayout">
              {decorItems.map((item, idx) => {
                const isActive = activeIndex === idx;
                const xOffset = (idx - activeIndex) * 45;
                const zIndex = 50 - Math.abs(idx - activeIndex);
                const scale = 1 - Math.abs(idx - activeIndex) * 0.1;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.6, 
                      x: xOffset, 
                      scale: scale,
                      zIndex: zIndex,
                      rotate: isActive ? 0 : (idx < activeIndex ? -8 : 8)
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    onClick={() => setActiveIndex(idx)}
                    className="absolute w-[320px] md:w-[440px] aspect-[3/4] cursor-pointer"
                  >
                    <div className="w-full h-full bg-white rounded-[3.5rem] p-4 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col">
                      <div className="flex-1 overflow-hidden rounded-[2.5rem] mb-6 relative group">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        
                        {isActive && (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute inset-x-4 bottom-4 z-20"
                          >
                            <button 
                              onClick={(e) => { e.stopPropagation(); sendWhatsApp(item.name); }}
                              className="w-full bg-white/90 backdrop-blur-md hover:bg-[#005293] hover:text-white text-black py-5 rounded-3xl font-black uppercase text-[10px] tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-2xl"
                            >
                              Consultar Espejo <MessageCircle size={18} />
                            </button>
                          </motion.div>
                        )}
                      </div>
                      <div className="px-4 pb-4">
                        <h3 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-2">{item.name}</h3>
                        <p className="text-gray-400 text-sm font-medium leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Decor;