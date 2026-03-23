import React from 'react';
import { Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Fabrics = () => {
  // Array masivo con las 30 telas listas para que reemplaces los nombres y las rutas de las fotos
  const fabrics = [
    // --- FILA 1 (15 Telas) ---
    { name: "Lino Puro", desc: "Fibra natural, fresca y orgánica.", img: "/Materiales/lino-1.jpg" },
    { name: "Terciopelo Royal", desc: "Lujo visual con suavidad extrema.", img: "/Materiales/lino-1.jpg" },
    { name: "Chenille Cálido", desc: "Tejido robusto y acogedor.", img: "/Materiales/lino-1.jpg" },
    { name: "Microfibra Plus", desc: "Repele líquidos, fácil limpieza.", img: "/Materiales/lino-1.jpg" },
    { name: "Cuero Sintético", desc: "Apariencia de cuero, impermeable.", img: "/Materiales/lino-1.jpg" },
    { name: "Bouclé Nube", desc: "Textura rizada y muy suave.", img: "/Materiales/lino-1.jpg" },
    { name: "Jacquard Élite", desc: "Alta gama con diseño en trama.", img: "/Materiales/lino-1.jpg" },
    { name: "Canvas Rústico", desc: "Algodón de alta densidad.", img: "/Materiales/lino-1.jpg" },
    { name: "Suede Premium", desc: "Imita la piel de durazno.", img: "/Materiales/lino-1.jpg" },
    { name: "Pana Clásica", desc: "Canales verticales resistentes.", img: "/Materiales/lino-1.jpg" },
    { name: "Lino Sintético", desc: "Aspecto natural, mayor duración.", img: "/Materiales/lino-1.jpg" },
    { name: "Terciopelo Mate", desc: "Acabado sin brillo, muy elegante.", img: "/Materiales/lino-1.jpg" },
    { name: "Chenille Jaspeado", desc: "Mezcla de hilos texturizados.", img: "/Materiales/lino-1.jpg" },
    { name: "Microfibra Pet", desc: "Anti-rasguños para mascotas.", img: "/Materiales/lino-1.jpg" },
    { name: "Cuero Vintage", desc: "Efecto envejecido sofisticado.", img: "/Materiales/lino-1.jpg" },

    // --- FILA 2 (15 Telas) ---
    { name: "Bouclé Grueso", desc: "Rizo marcado para más volumen.", img: "/Materiales/lino-1.jpg" },
    { name: "Jacquard Floral", desc: "Patrones clásicos tejidos.", img: "/Materiales/lino-1.jpg" },
    { name: "Canvas Industrial", desc: "Ultra resistente al desgaste.", img: "/Materiales/lino-1.jpg" },
    { name: "Suede Texturizado", desc: "Tacto cálido con textura.", img: "/Materiales/lino-1.jpg" },
    { name: "Pana Gruesa", desc: "Canales anchos, estilo retro.", img: "/Materiales/lino-1.jpg" },
    { name: "Lino Lavado", desc: "Caída suave y aspecto relajado.", img: "/Materiales/lino-1.jpg" },
    { name: "Terciopelo Brillante", desc: "Refleja la luz con elegancia.", img: "/Materiales/lino-1.jpg" },
    { name: "Chenille Liso", desc: "Tacto suave sin textura visual.", img: "/Materiales/lino-1.jpg" },
    { name: "Microfibra Estampada", desc: "Diseños modernos y prácticos.", img: "/Materiales/lino-1.jpg" },
    { name: "Cuero Napa", desc: "Textura extra suave y fina.", img: "/Materiales/lino-1.jpg" },
    { name: "Bouclé Bicolor", desc: "Mezcla de dos tonos en el rizo.", img: "/Materiales/lino-1.jpg" },
    { name: "Jacquard Geométrico", desc: "Patrones modernos para acentos.", img: "/Materiales/lino-1.jpg" },
    { name: "Canvas Suave", desc: "Resistencia con mejor tacto.", img: "/Materiales/lino-1.jpg" },
    { name: "Suede Acanalado", desc: "Combinación de texturas.", img: "/Materiales/lino-1.jpg" },
    { name: "Tela Anti-Fluidos", desc: "Máxima protección garantizada.", img: "/Materiales/lino-1.jpg" },
  ];

  // Agrupamos exactamente 15 arriba y 15 abajo
  const groupedFabrics = [fabrics.slice(0, 15), fabrics.slice(15, 30)];

  return (
    <section id="telas" className="py-32 bg-white px-6 relative overflow-hidden">
      
      {/* BURBUJAS DE FONDO */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 left-10 w-96 h-96 bg-[#005293] opacity-[0.08] blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#FFD700] opacity-[0.08] blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* TÍTULO */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#1A1A1A] rounded-lg text-white">
              <Sparkles size={16} />
            </div>
            <span className="text-[#1A1A1A] font-black uppercase tracking-[0.4em] text-[10px]">Catálogo Premium 2026</span>
          </div>
          
          <h2 className="text-[10vw] md:text-[6vw] font-black leading-[0.9] tracking-tighter text-[#1A1A1A] uppercase">
            DESCUBRE <br />
            <span className="italic font-medium text-gray-400">nuestras</span> <span className="text-[#F5CBA7] italic">texturas</span> <span className="text-[#005293]">TELAS</span>
          </h2>
          <div className="w-32 h-3 bg-[#F5CBA7] mt-8 rounded-full"></div>
        </div>

        {/* CONTENEDOR DE LAS 2 FILAS GIGANTES */}
        <div className="flex flex-col gap-8">
          {groupedFabrics.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              /* En móvil permite scroll horizontal (overflow-x-auto), en PC es fijo */
              className="flex w-full h-[450px] md:h-[500px] gap-1 rounded-[2rem] overflow-x-auto md:overflow-hidden shadow-2xl bg-white border border-gray-100 scrollbar-hide"
            >
              {row.map((fabric, idx) => (
                <div
                  key={idx}
                  /* En móvil miden 70px fijos, en PC se comprimen con flex-1 y se expanden a flex-[6] */
                  className="relative group flex-shrink-0 md:flex-shrink md:flex-1 w-[70px] md:w-auto md:hover:flex-[6] hover:w-[280px] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer overflow-hidden"
                >
                  {/* Imagen de la tela */}
                  <img
                    src={fabric.img}
                    alt={fabric.name}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.75] group-hover:brightness-100 transition-all duration-700"
                  />
                  
                  {/* Etiqueta vertical cuando está cerrado */}
                  <div className="absolute inset-0 flex items-center justify-center md:items-end md:justify-center md:pb-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-sm md:-rotate-90 md:-translate-y-12 shadow-lg whitespace-nowrap">
                      <h3 className="text-[#1A1A1A] font-black uppercase tracking-[0.2em] text-[8px] md:text-[9px]">
                        {fabric.name}
                      </h3>
                    </div>
                  </div>

                  {/* Contenido expandido (Información y Botón) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-75 flex flex-col justify-end p-6 md:p-8">
                    <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                      <h3 className="text-white text-2xl md:text-3xl font-black uppercase mb-2 leading-none drop-shadow-lg">
                        {fabric.name}
                      </h3>
                      <p className="text-gray-300 text-[10px] md:text-xs font-medium leading-relaxed mb-6 max-w-[200px] md:max-w-sm drop-shadow-md">
                        {fabric.desc}
                      </p>
                      
                      <a
                        href={`https://wa.me/573123743925?text=Hola,%20me%20encantó%20la%20tela%20${fabric.name}.%20¿Me%20pueden%20dar%20más%20información?`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#F5CBA7] hover:bg-[#005293] hover:text-white text-[#1A1A1A] px-5 py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-colors w-max shadow-xl"
                      >
                        <Palette size={14} /> Cotizar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* CSS extra para ocultar la barra de scroll en móviles y que se vea más limpio */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default Fabrics;