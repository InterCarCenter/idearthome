import React, { useState, useEffect } from 'react';
import { X, LayoutGrid, MessageCircle } from 'lucide-react';

const Collections = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : 'unset';
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
    <section id="colecciones" className="py-20 bg-[#121214] px-6">
      <div className="max-w-7xl mx-auto">

        {/* H2 SEO */}
        <div className="text-center mb-14">
          <h2 className="text-white text-5xl md:text-8xl font-black uppercase italic mb-6">
            Muebles a Medida en Bogotá
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base leading-relaxed">
            Fabricamos <strong>sofás, comedores, camas y muebles individuales a medida en Bogotá</strong>,
            con procesos artesanales, materiales premium y entrega directa desde nuestro taller
            en el barrio 12 de Octubre.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
              className="relative h-[520px] cursor-pointer overflow-hidden rounded-3xl border border-white/10 group"
            >
              <img
                src={item.img}
                alt={`Línea de ${item.name} fabricados a medida en Bogotá`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-black uppercase italic text-white">
                  {item.name} en Bogotá
                </h3>
                <span className="text-[#C4A484] text-xs font-bold flex items-center gap-2 mt-2">
                  Ver modelos <LayoutGrid size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
          <button
            onClick={() => setSelected(null)}
            className="fixed top-6 right-6 bg-[#C4A484] p-4 rounded-full text-white"
          >
            <X size={20} />
          </button>

          <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10 mt-20">
            <h3 className="text-5xl font-black uppercase italic text-center mb-14">
              {collections[selected].name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {collections[selected].collage.map((photo, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={photo.url}
                    alt={`${photo.name} fabricado a medida en Bogotá`}
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-6">
                    <h4 className="font-black uppercase mb-2">{photo.name}</h4>
                    <p className="text-gray-500 text-sm mb-4">{photo.desc}</p>
                    <a
                      href={`https://wa.me/573123743925?text=Hola,%20me%20interesa%20el%20modelo%20${photo.name}`}
                      target="_blank"
                      className="flex justify-center items-center gap-2 bg-black text-white py-3 rounded-xl text-xs font-black uppercase"
                    >
                      Consultar precio <MessageCircle size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Collections;
