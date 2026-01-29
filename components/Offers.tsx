import React, { useState } from 'react';
import { Palette, X, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Fabrics = () => {
  const [selectedFabric, setSelectedFabric] = useState(null);

  const fabrics = [
    { name: "Lino", desc: "Fibra natural, fresca y de apariencia orgánica. Es la elección predilecta para estilos nórdicos y minimalistas por su elegancia atemporal.", img: "/telas/lino.jpg" },
    { name: "Terciopelo", desc: "Aporta un lujo visual inigualable. Nuestra selección cuenta con tratamiento antimanchas y una suavidad extrema al tacto.", img: "/telas/terciopelo.jpg" },
    { name: "Chenille", desc: "Un tejido robusto y acogedor. Gracias a su trama, es altamente resistente al roce, ideal para hogares con mucho movimiento.", img: "/telas/chenille.jpg" },
    { name: "Microfibra", desc: "Tecnología textil de alto desempeño. Repele líquidos y es sumamente fácil de limpiar, manteniendo su color por años.", img: "/telas/microfibra.jpg" },
    { name: "Cuero Sintético", desc: "La apariencia del cuero genuino con mayor practicidad. Resistente, impermeable y con una textura de grano fino muy elegante.", img: "/telas/cuero-sintetico.jpg" },
    { name: "Bouclé", desc: "La tendencia global del 2026. Su textura rizada y suave crea ambientes curvos y acogedores. Tacto tipo 'nube'.", img: "/telas/boucle.jpg" },
    { name: "Jacquard", desc: "Tejido de alta gama donde el diseño se crea en la trama misma. Aporta cuerpo, estructura y una resistencia superior.", img: "/telas/jacquard.jpg" },
    { name: "Canvas", desc: "Algodón de alta densidad. Rústico pero sofisticado, es casi indestructible, ideal para un estilo industrial o campestre.", img: "/telas/canvas.jpg" },
    { name: "Suede", desc: "Imita la piel de durazno. Es visualmente cálido y tiene un efecto de 'escritura' al pasar la mano que encanta a todos.", img: "/telas/suede.jpg" },
    { name: "Pana", desc: "Clásico reinventado. Sus canales verticales añaden una dimensión visual única y una resistencia al desgaste excepcional.", img: "/telas/pana.jpg" }
  ];

  return (
    /* EL ID "telas" ES LA ETIQUETA QUE BUSCAS PARA EL SCROLL */
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
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#F5CBA7] opacity-[0.15] blur-[130px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TÍTULO */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#1A1A1A] rounded-lg text-white">
              <Sparkles size={16} />
            </div>
            <span className="text-[#1A1A1A] font-black uppercase tracking-[0.4em] text-[10px]">Textil 2026</span>
          </div>
          
          <h2 className="text-[10vw] md:text-[7vw] font-black leading-[0.9] tracking-tighter text-[#1A1A1A] uppercase">
            DESCUBRE <br />
            <span className="italic font-medium text-gray-400">nuestras</span> <span className="text-[#F5CBA7] italic">texturas</span> <span className="text-[#005293]">TELAS</span>
          </h2>
          <div className="w-32 h-3 bg-[#F5CBA7] mt-8 rounded-full"></div>
        </div>

        {/* GRID DE TELAS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {fabrics.map((fabric, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFabric(fabric)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square mb-6 overflow-hidden rounded-[3rem] shadow-sm group-hover:shadow-2xl transition-all duration-500 bg-gray-50 border border-gray-100">
                <img 
                  src={fabric.img} 
                  alt={fabric.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              
              <div className="px-2">
                <h3 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-none mb-2">{fabric.name}</h3>
                <div className="flex items-center gap-2 text-[10px] font-black text-[#F5CBA7] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Detalles <ChevronRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedFabric && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-black/20"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-white max-w-4xl w-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedFabric(null)}
                className="absolute top-8 right-8 z-20 bg-gray-100 p-3 rounded-full hover:bg-[#F5CBA7] hover:text-white transition-all"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
                <img src={selectedFabric.img} alt={selectedFabric.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-12 md:p-16 w-full md:w-1/2 flex flex-col justify-center">
                <div className="mb-8">
                   <h3 className="text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4 leading-none">
                    {selectedFabric.name}
                  </h3>
                  <div className="w-12 h-1 bg-[#F5CBA7]"></div>
                </div>
                
                <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10">
                  {selectedFabric.desc}
                </p>
                
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                    <Palette size={16} className="text-[#F5CBA7]" /> Disponible en múltiples tonos
                  </div>
                  <button className="w-full bg-[#1A1A1A] py-5 rounded-3xl text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-[#005293] transition-colors">
                    SOLICITAR MUESTRARIO
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Fabrics;