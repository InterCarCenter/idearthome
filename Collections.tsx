import React, { useState, useEffect } from 'react';
import { X, LayoutGrid, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import 'animate.css';

const Collections = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selected]);

  const collections = [
    // ... tus datos de collections se mantienen igual
  ];

  return (
    <section id="colecciones" className="py-24 bg-white px-6 relative overflow-hidden">
      {/* FONDO PARA LLENAR LA SECCIÓN PRINCIPAL */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', size: '40px 40px', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
            <div className="flex justify-center items-center gap-3 mb-4">
               <div className="h-px w-12 bg-[#005293]"></div>
               <p className="text-[#005293] text-[12px] font-black uppercase tracking-[0.6em]">Catálogo Exclusivo</p>
               <div className="h-px w-12 bg-[#005293]"></div>
            </div>
            <h2 className="text-[#1A1A1A] text-5xl md:text-8xl font-black leading-none mb-6 tracking-tighter">
              NUESTRAS <span className="text-[#005293]">LÍNEAS</span>
            </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative h-[520px] cursor-pointer overflow-hidden rounded-[3rem] shadow-xl transition-all duration-500 hover:shadow-2xl animate__animated animate__slideInUp"
              style={{ animationDelay: `${idx * 0.15}s` }}
              onClick={() => setSelected(idx)}
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent flex flex-col justify-end p-10 text-white">
                <h3 className="text-3xl font-black tracking-tighter mb-2 uppercase">{item.name}</h3>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#FFD700] overflow-hidden">
                  <span className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
                    EXPLORAR LÍNEA <LayoutGrid size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL MEJORADO */}
      {selected !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[#1A1A1A]/90 backdrop-blur-md overflow-y-auto animate__animated animate__fadeIn">
          
          <button 
            onClick={() => setSelected(null)}
            className="fixed top-6 right-6 z-[120] p-4 bg-white text-[#1A1A1A] rounded-full hover:bg-[#FFD700] transition-all shadow-2xl animate__animated animate__bounceInDown"
          >
            <X size={30} />
          </button>
          
          <div className="bg-white rounded-[4rem] max-w-7xl w-full min-h-[80vh] relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] animate__animated animate__zoomIn animate__faster">
            
            {/* ELEMENTOS DE FONDO PARA "LLENAR" EL MODAL */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }}></div>
            </div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#005293] rounded-full blur-[120px] opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px] opacity-10 animate-pulse"></div>

            <div className="relative z-10 p-8 md:p-20">
                <div className="mb-16 text-center animate__animated animate__slideInDown">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-6">
                    <Sparkles size={16} className="text-[#FFD700]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Colección 2026</span>
                  </div>
                  <h3 className="text-5xl md:text-8xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4 leading-none">
                    {collections[selected].name}
                  </h3>
                  <div className="w-24 h-1.5 bg-[#005293] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {collections[selected].collage.map((photo, i) => (
                    <div 
                      key={i} 
                      className="group/item flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 animate__animated animate__fadeInUp"
                      style={{ animationDelay: `${0.3 + (i * 0.1)}s` }}
                    >
                      <div className="h-80 overflow-hidden relative">
                        <img src={photo.url} className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-110" alt={photo.name} />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm">
                          IdeArt Premium
                        </div>
                      </div>
                      <div className="p-8">
                        <h4 className="text-2xl font-black text-[#1A1A1A] mb-2 uppercase tracking-tighter">{photo.name}</h4>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed font-medium">{photo.desc}</p>
                        <a 
                          href={`https://wa.me/573123743925?text=Me interesa el ${photo.name}`} 
                          target="_blank" 
                          className="flex items-center justify-between group-hover/item:text-[#005293] transition-colors"
                        >
                          <span className="text-[12px] font-black uppercase tracking-widest">Consultar Precio</span>
                          <div className="p-2 bg-gray-100 rounded-full group-hover/item:bg-[#005293] group-hover/item:text-white transition-all">
                            <MessageCircle size={18} />
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 text-center animate__animated animate__fadeInUp animate__delay-1s">
                    <button 
                      onClick={() => setSelected(null)}
                      className="group bg-[#1A1A1A] text-white font-black uppercase tracking-widest text-[12px] px-12 py-6 rounded-full hover:bg-[#005293] transition-all shadow-2xl flex items-center gap-4 mx-auto"
                    >
                      VOLVER A COLECCIONES <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Collections;