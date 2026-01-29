import React, { useState, useEffect, useRef } from 'react';
import { X, LayoutGrid, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import 'animate.css';

const Collections = () => {
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(0); // ← ESTO GUARDA LA POSICIÓN

  useEffect(() => {
    if (selected !== null) {
      // Guarda posición del scroll y bloquea body
      scrollRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura scroll EXACTO donde estaba
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollRef.current);
    }

    // Cleanup en desmontaje
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [selected]);

  const collections = [
    { 
      name: 'Sofás Modulares', 
      img: '/salas/sofa-modular-principal.jpeg',
      collage: [
        { url: "/salas/sofa-modular-gris-grafito.jpg", name: "Modular Gris Grafito", desc: "Configuración flexible para hogares bogotanos." },
        { url: "/salas/sofa-modular-arena.jpeg", name: "Modular Arena", desc: "Tonalidades que capturan la luz natural." },
        { url: "/salas/sofa-modular-mini.jpeg", name: "Mini Modular", desc: "Diseño inteligente para apartamentos." },
        { url: "/salas/sofa-modular-velvet.jpeg", name: "Modular Velvet", desc: "La suavidad del terciopelo premium." },
        { url: "/salas/sofa-modular-nordico.jpeg", name: "Nordic Modular", desc: "Minimalismo escandinavo puro." },
        { url: "/salas/sofa-modular-l-shape.jpeg", name: "L-Shape Elite", desc: "Confort total en cada esquina." }
      ]
    },
    { 
      name: 'Comedores', 
      img: '/comedores/comedor-madera-principal.jpeg',
      collage: [
        { url: "/comedores/comedor-4-puestos-madera.jpeg", name: "Comedor 4 Puestos", desc: "Madera de cedro y acabados premium." },
        { url: "/comedores/comedor-moderno-marmol.jpeg", name: "Comedor Moderno", desc: "Tapa de mármol y sillas ergonómicas." },
        { url: "/comedores/comedor-circular-madera.jpeg", name: "Comedor Circular", desc: "Ideal para espacios acogedores." },
        { url: "/comedores/mesa-industrial-madera-metal.jpeg", name: "Mesa Industrial", desc: "Base metálica y madera maciza." },
        { url: "/comedores/comedor-nordico-roble.jpeg", name: "Estilo Nórdico", desc: "Simplicidad y elegancia en roble." },
        { url: "/comedores/comedor-lujo-salon-grande.jpeg", name: "Luxury Dining", desc: "Diseño exclusivo para grandes salones." }
      ]
    },
    { 
      name: 'Camas', 
      img: '/camas/cama-base-baul-principal.jpeg',
      collage: [
        { url: "/camas/cama-base-baul-hidraulica.jpeg", name: "Cama Base Baúl", desc: "Apertura hidráulica y gran almacenamiento." },
        { url: "/camas/cama-king-size-tapizada.jpeg", name: "Cama King Size", desc: "Tapizado en lino de alta resistencia." },
        { url: "/camas/cama-hidraulica-reforzada.jpeg", name: "Hidráulica Pro", desc: "Mecanismo reforzado garantizado." },
        { url: "/camas/sofa-cama-gris.jpeg", name: "Sofá Cama Grey", desc: "Versatilidad total para visitas." },
        { url: "/camas/sofa-cama-premium.jpeg", name: "Premium Bed Sofa", desc: "Confort de cama real en un sofá." },
        { url: "/camas/sofa-cama-compacto.jpeg", name: "Compact Bed", desc: "Perfecto para estudios y oficinas." }
      ]
    },
    { 
      name: 'Individuales', 
      img: '/individuales/poltrona-madera-principal.jpeg',
      collage: [
        { url: "/individuales/poltrona-roble-tela-antifluidos.jpeg", name: "Poltrona Élite", desc: "Estructura de roble y tela anti-fluidos." },
        { url: "/individuales/silla-accent-moderna.jpeg", name: "Silla Accent", desc: "Diseño ergonómico y moderno." },
        { url: "/individuales/butaca-velvet-terciopelo.jpeg", name: "Butaca Velvet", desc: "Terciopelo suave al tacto." },
        { url: "/individuales/silla-minimal-madera.jpeg", name: "Silla Minimal", desc: "Líneas puras y funcionales." },
        { url: "/individuales/silla-lectura-reading-chair.jpeg", name: "Reading Chair", desc: "Especial para largos momentos de lectura." },
        { url: "/individuales/silla-lujo-acabados-mano.jpeg", name: "Silla de Lujo", desc: "Acabados hechos a mano." }
      ]
    }
  ];

  return (
    <section id="colecciones" className="py-24 bg-white relative overflow-hidden">
      {/* Fondo de puntos para llenar el espacio blanco (Sutil) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1A1A 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate__animated animate__fadeInDown">
          <h2 className="text-[#1A1A1A] text-5xl md:text-8xl font-black uppercase italic mb-6 tracking-tighter">
            Muebles a Medida <span className="text-[#005293]">en Bogotá</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-500 text-base leading-relaxed font-medium">
            Directo desde nuestro taller en el <strong className="text-[#005293]">barrio 12 de Octubre</strong>. 
            Diseños que se acomodan a tu espacio y estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
              className="relative h-[550px] cursor-pointer overflow-hidden rounded-[2.5rem] shadow-2xl group animate__animated animate__slideInUp"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-3xl font-black uppercase italic text-white mb-2">
                  {item.name}
                </h3>
                <span className="text-[#FFD700] text-xs font-black uppercase tracking-widest flex items-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Ver modelos <LayoutGrid size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL CORREGIDO - AHORA SÍ PUEDES BAJAR Y NO TE VOTA ARRIBA */}
      {selected !== null && (
        <div className="fixed inset-0 bg-[#1A1A1A]/95 z-[100] flex items-center justify-center p-4 animate__animated animate__fadeIn">
          
          <button
            onClick={() => setSelected(null)}
            className="fixed top-8 right-8 z-[110] bg-white p-5 rounded-full text-[#1A1A1A] hover:bg-[#FFD700] transition-all shadow-2xl animate__animated animate__bounceIn"
          >
            <X size={24} />
          </button>

          {/* CONTENEDOR SCROLLABLE DEL MODAL */}
          <div className="w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-white rounded-[4rem] p-8 md:p-20 animate__animated animate__zoomIn animate__faster scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            
            {/* Decoración de fondo del modal */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#005293]/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10">
              <div className="text-center mb-16 animate__animated animate__fadeInDown animate__delay-0.5s">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#005293] mb-4 block">IdeArt Home · Catálogo</span>
                <h3 className="text-5xl md:text-7xl font-black uppercase italic text-[#1A1A1A] tracking-tighter">
                  {collections[selected].name}
                </h3>
                <div className="w-20 h-1.5 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {collections[selected].collage.map((photo, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 group/item animate__animated animate__fadeInUp"
                    style={{ animationDelay: `${0.6 + (i * 0.1)}s` }}
                  >
                    <div className="h-72 overflow-hidden relative">
                      <img src={photo.url} alt={photo.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[9px] font-black uppercase">Garantía IdeArt</div>
                    </div>
                    <div className="p-8">
                      <h4 className="font-black text-xl uppercase italic mb-2 text-[#1A1A1A]">{photo.name}</h4>
                      <p className="text-gray-500 text-sm mb-8 font-medium leading-relaxed">{photo.desc}</p>
                      <a
                        href={`https://wa.me/573123743925?text=Hola,%20me%20interesa%20el%20modelo%20${photo.name}`}
                        target="_blank"
                        className="flex justify-center items-center gap-3 bg-[#1A1A1A] hover:bg-[#005293] text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95"
                      >
                        Consultar precio <MessageCircle size={18} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 text-center">
                <button 
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#005293] transition-colors"
                >
                  <ArrowRight className="rotate-180" size={18} /> Volver a líneas
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
