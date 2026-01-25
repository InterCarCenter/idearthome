
import React, { useState, useEffect } from 'react';
import { X, LayoutGrid, ArrowRight, MessageCircle } from 'lucide-react';

const Collections = () => {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selected]);

  const collections = [
    { 
      name: 'Sofás Modulares', 
      img: 'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=2070&auto=format&fit=crop',
      collage: [
        { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop", name: "Modular Gris Grafito", desc: "Configuración flexible para hogares bogotanos." },
        { url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop", name: "Modular Arena", desc: "Tonalidades que capturan la luz natural." },
        { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop", name: "Mini Modular", desc: "Diseño inteligente para apartamentos." },
        { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop", name: "Modular Velvet", desc: "La suavidad del terciopelo premium." },
        { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop", name: "Nordic Modular", desc: "Minimalismo escandinavo puro." },
        { url: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1000&auto=format&fit=crop", name: "L-Shape Elite", desc: "Confort total en cada esquina." }
      ]
    },
    { 
      name: 'Seccionales', 
      img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop',
      collage: [
        { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop", name: "Seccional Cuero Pro", desc: "Resistencia máxima industrial." },
        { url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop", name: "Seccional Velvet", desc: "Microfibra con 5 años de garantía." },
        { url: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=1000&auto=format&fit=crop", name: "Seccional Brown", desc: "Clásico y atemporal." },
        { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop", name: "Modern Seccional", desc: "Líneas rectas y minimalistas." },
        { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop", name: "Seccional Ivory", desc: "Elegancia en tonos perla." },
        { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop", name: "Dark Seccional", desc: "Presencia y robustez única." }
      ]
    },
    { 
      name: 'Sofás Cama', 
      img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop',
      collage: [
        { url: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000&auto=format&fit=crop", name: "Sofá Cama King", desc: "Cama doble real integrada." },
        { url: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1000&auto=format&fit=crop", name: "Urban Sofa Bed", desc: "Colchón de alta densidad oculto." },
        { url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop", name: "Cama Plegable Pro", desc: "Mecanismo de acero reforzado." },
        { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop", name: "Sofá Cama Grey", desc: "Estilo funcional diario." },
        { url: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=1000&auto=format&fit=crop", name: "Premium Bed Sofa", desc: "Calidad de hotel en tu hogar." },
        { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop", name: "Compact Bed", desc: "Ideal para estudios." }
      ]
    },
    { 
      name: 'Individuales', 
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop',
      collage: [
        { url: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=1000&auto=format&fit=crop", name: "Poltrona Élite", desc: "Estructura de roble macizo." },
        { url: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1000&auto=format&fit=crop", name: "Silla Accent", desc: "Toque final para tu salón." },
        { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop", name: "Butaca Velvet", desc: "Lujo personal en terciopelo." },
        { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop", name: "Silla Minimal", desc: "Simplicidad pura." },
        { url: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1000&auto=format&fit=crop", name: "Reading Chair", desc: "Máximo confort." },
        { url: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=1000&auto=format&fit=crop", name: "Individual Loft", desc: "Estilo industrial." }
      ]
    },
  ];

  return (
    <section id="colecciones" className="py-20 bg-[#121214] px-6 relative overflow-hidden mandala-bg">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0A0A0A] to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
            <h2 className="title-brutalist text-white text-6xl md:text-9xl leading-none mb-4">
              NUESTRAS <span className="text-outline-light">LÍNEAS</span>
            </h2>
            <p className="text-[#C4A484] text-[12px] font-black uppercase tracking-[0.6em]">Haz clic para explorar el catálogo de lujo</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative h-[480px] cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl transition-all hover:border-[#C4A484]/40"
              onClick={() => setSelected(idx)}
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
                <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase">{item.name}</h3>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#C4A484] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  VER MODELOS <LayoutGrid size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 bg-white/95 backdrop-blur-3xl overflow-y-auto pt-20">
          
          <button 
            onClick={() => setSelected(null)}
            className="fixed top-8 right-8 z-[110] p-5 bg-[#1A1A1A] hover:bg-[#C4A484] text-white rounded-full transition-all shadow-2xl flex items-center gap-2 font-black text-xs uppercase tracking-widest"
          >
            CERRAR <X size={24} />
          </button>
          
          <div className="bg-[#FDFBFA] rounded-[3rem] max-w-6xl w-full p-8 md:p-20 border border-gray-200 relative mandala-outline-bg shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
            
            <div className="mb-16 text-center">
              <h3 className="text-6xl md:text-8xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4 leading-none">{collections[selected].name}</h3>
              <div className="w-32 h-2 bg-[#C4A484] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {collections[selected].collage.map((photo, i) => (
                <div key={i} className="group/item flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-[#C4A484]/40 transition-all shadow-xl">
                  <div className="h-72 overflow-hidden">
                    <img src={photo.url} className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105" alt={photo.name} />
                  </div>
                  <div className="p-8 flex flex-col h-full">
                    <h4 className="text-2xl font-black text-[#1A1A1A] mb-3 uppercase tracking-tighter">{photo.name}</h4>
                    <p className="text-gray-500 text-sm mb-10 leading-relaxed font-medium">{photo.desc}</p>
                    <div className="mt-auto pt-4 border-t border-gray-50">
                      <a href={`https://wa.me/573123743925?text=Hola,%20me%20interesa%20el%20modelo%20${photo.name}%20de%20la%20línea%20${collections[selected].name}`} target="_blank" className="inline-flex items-center gap-3 text-[12px] font-black text-[#C4A484] uppercase tracking-[0.2em] hover:translate-x-3 transition-transform">
                        CONSULTAR <MessageCircle size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
                <a href="https://wa.me/573123743925" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#1A1A1A] text-white font-black uppercase tracking-widest text-[12px] px-16 py-6 rounded-full hover:bg-[#C4A484] transition-all shadow-2xl flex items-center gap-4 mx-auto">
                    VER MÁS MODELOS <ArrowRight size={20} />
                  </button>
                </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Collections;
