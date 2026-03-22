import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState(0); 
  const [selectedItem, setSelectedItem] = useState(null); 
  const [currentModalImg, setCurrentModalImg] = useState(0); 
  const scrollRef = useRef(0);

  // Manejo de scroll al abrir el modal de detalles
  useEffect(() => {
    if (selectedItem !== null) {
      scrollRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      setCurrentModalImg(0); 
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollRef.current);
    }
  }, [selectedItem]);

  // Función maestra para generar los modelos según tus cantidades exactas
  const generarModelos = (categoria, carpeta, prefijo, extension, cantidad, soloUna = false) => {
    return Array.from({ length: cantidad }).map((_, i) => ({
      name: `${categoria} ${i + 1}`,
      desc: `Diseño exclusivo de nuestra línea ${categoria.toLowerCase()}. Fabricación artesanal con materiales premium.`,
      badge: i === 0 ? "NUEVO" : "",
      images: soloUna 
        ? [`/${carpeta}/${prefijo}-${i+1}-v1.${extension}`] 
        : [
            `/${carpeta}/${prefijo}-${i+1}-v1.${extension}`,
            `/${carpeta}/${prefijo}-${i+1}-v2.${extension}`,
            `/${carpeta}/${prefijo}-${i+1}-v3.${extension}`,
            `/${carpeta}/${prefijo}-${i+1}-v4.${extension}`
          ]
    }));
  };

  // Configuración de categorías con tus cantidades solicitadas
  const collections = [
    { name: 'Sofás', collage: generarModelos('Sofá Modular', 'salas', 'sofas', 'png', 15, false) }, 
    { name: 'Comedores', collage: generarModelos('Comedor', 'comedores', 'comedores', 'png', 9, true) }, 
    
    // 👇 MODIFICACIÓN PARA DORMITORIOS 👇
    // Carpeta: 'Dormitorios' | Archivo: 'camas' | Cantidad: 6 | soloUna: true
    { name: 'Dormitorios', collage: generarModelos('Cama', 'Dormitorios', 'camas', 'png', 6, true) },
    
    { name: 'Sillas Individuales', collage: generarModelos('Poltrona', 'individuales', 'individuales', 'png', 6, true) },
    { name: 'Accesorios', collage: generarModelos('Accesorio', 'accesorios', 'accesorios', 'png', 6, true) },
    { name: 'Espejos', collage: generarModelos('Espejo', 'espejos', 'espejos', 'png', 6, true) },
    { name: 'Iluminación', collage: generarModelos('Lámpara', 'iluminacion', 'iluminacion', 'png', 3, true) }
  ];

  return (
    <section id="tienda" className="py-20 bg-white relative">
      <div className="max-w-[1500px] mx-auto px-6 flex flex-col md:flex-row gap-10">
        
        {/* SIDEBAR IZQUIERDO */}
        <div className="w-full md:w-[18%] md:sticky md:top-24 h-max">
          <h3 className="text-xs font-medium uppercase mb-6 text-gray-400 border-b border-gray-100 pb-3 tracking-widest">
            CATEGORÍAS DEL PRODUCTO
          </h3>
          <ul className="space-y-4">
            {collections.map((cat, idx) => (
              <li key={idx}>
                <button 
                  onClick={() => setActiveCategory(idx)}
                  className={`text-sm w-full text-left transition-colors duration-200 ${
                    activeCategory === idx ? 'font-bold text-[#1A1A1A]' : 'font-normal text-gray-500 hover:text-[#1A1A1A]'
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTENIDO PRINCIPAL: GRID ESTÁTICO (Sin carrusel automático) */}
        <div className="w-full md:w-[82%]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16"
            >
              {collections[activeCategory].collage.map((item, idx) => (
                <div 
                  key={idx} 
                  className="cursor-pointer flex flex-col group"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* IMAGEN PRINCIPAL FIJA */}
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-4 bg-transparent overflow-hidden">
                    <img 
                        src={item.images[0]} 
                        alt={item.name} 
                        className="w-full h-full object-contain mix-blend-multiply" 
                    />
                    
                    {item.badge && (
                      <div className="absolute top-0 right-0 bg-black text-white text-[9px] font-bold uppercase px-3 py-1.5 tracking-widest">
                        {item.badge}
                      </div>
                    )}
                  </div>

                  {/* INFO MINIMALISTA */}
                  <div className="flex flex-col text-center md:text-left px-2">
                    <h3 className="text-[13px] font-normal text-gray-800 leading-snug group-hover:underline decoration-1 underline-offset-4">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* MODAL DETALLES (RÉPLICA DE IMAGEN DE REFERENCIA) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[150] flex items-center justify-center p-0 md:p-6 overflow-y-auto"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-[160] text-gray-400 hover:text-black transition-colors"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <div className="bg-white w-full max-w-7xl h-full md:h-auto min-h-[80vh] flex flex-col md:flex-row gap-8 pt-16 md:pt-0">
              
              {/* GALERÍA MODAL */}
              <div className="w-full md:w-3/5 flex gap-4 md:gap-8 flex-col-reverse md:flex-row px-4 md:px-0">
                {selectedItem.images.length > 1 && (
                  <div className="w-full md:w-[15%] flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
                      {selectedItem.images.map((img, i) => (
                          <div 
                              key={i}
                              onClick={() => setCurrentModalImg(i)}
                              className={`flex-shrink-0 w-20 md:w-full aspect-square border ${currentModalImg === i ? 'border-black' : 'border-transparent'} hover:border-gray-300 cursor-pointer p-1 transition-all`}
                          >
                              <img src={img} alt="thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
                          </div>
                      ))}
                  </div>
                )}

                <div className={`w-full relative flex items-center justify-center ${selectedItem.images.length > 1 ? 'md:w-[85%]' : 'md:w-full'}`}>
                    <motion.img 
                        key={currentModalImg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={selectedItem.images[currentModalImg]} 
                        alt={selectedItem.name} 
                        className="w-full h-[50vh] md:h-[70vh] object-contain mix-blend-multiply" 
                    />
                    
                    {selectedItem.images.length > 1 && (
                      <>
                        <button onClick={() => setCurrentModalImg(prev => prev === 0 ? 3 : prev - 1)} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black"><ChevronLeft size={32} strokeWidth={1.5} /></button>
                        <button onClick={() => setCurrentModalImg(prev => prev === 3 ? 0 : prev + 1)} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black"><ChevronRight size={32} strokeWidth={1.5} /></button>
                      </>
                    )}
                </div>
              </div>

              {/* INFORMACIÓN Y COMPRA */}
              <div className="w-full md:w-2/5 flex flex-col justify-center px-6 md:px-12 pb-12 md:pb-0">
                <h2 className="text-3xl md:text-4xl font-normal text-[#1A1A1A] uppercase tracking-widest mb-6 font-serif">
                    {selectedItem.name}
                </h2>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                  {selectedItem.desc}
                </p>

                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex h-14">
                    <div className="flex w-1/4 border border-gray-300 items-center justify-between px-4 text-gray-500">
                        <button className="hover:text-black"><Minus size={16} /></button>
                        <span className="text-sm font-medium text-black">1</span>
                        <button className="hover:text-black"><Plus size={16} /></button>
                    </div>
                    <button className="w-3/4 bg-gray-500 text-white font-medium uppercase text-xs tracking-widest hover:bg-gray-600 transition-colors">
                        AÑADIR AL CARRITO
                    </button>
                  </div>

                  <a
                    href={`https://wa.me/573123743925?text=Hola,%20me%20interesa%20el%20modelo%20*${selectedItem.name}*%20del%20catálogo.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full h-14 flex justify-center items-center gap-2 bg-[#8C9C69] hover:bg-[#7A8A57] text-white text-xs font-medium uppercase tracking-widest transition-colors"
                  >
                    <MessageCircle size={18} /> Recibe asesoría por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Collections;