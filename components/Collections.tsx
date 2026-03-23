import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState(0); 
  const [selectedItem, setSelectedItem] = useState(null); 
  const [currentModalImg, setCurrentModalImg] = useState(0); 
  
  // 👇 ESTADOS NUEVOS PARA EL CARRITO Y LA CANTIDAD 👇
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const scrollRef = useRef(0);

  // Manejo de scroll y reseteo al abrir el modal de detalles
  useEffect(() => {
    if (selectedItem !== null) {
      scrollRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      setCurrentModalImg(0); 
      setQuantity(1); // Resetea la cantidad a 1 cada vez que abres un mueble nuevo
      setAddedToCart(false);
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollRef.current);
    }
  }, [selectedItem]);

  // Funciones para sumar y restar cantidad
  const handleRestar = () => setQuantity(prev => Math.max(1, prev - 1));
  const handleSumar = () => setQuantity(prev => prev + 1);

  // Simulación de añadir al carrito
  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Vuelve a la normalidad en 2 segundos
  };

  const generarModelos = (categoria, carpeta, prefijo, extension, cantidad, soloUna = false) => {
    return Array.from({ length: cantidad }).map((_, i) => ({
      name: `${categoria} ${i + 1}`,
      desc: `Diseño exclusivo de nuestra línea ${categoria.toLowerCase()}. Fabricación artesanal en Bogotá con materiales premium seleccionados.`,
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

  const collections = [
    { name: 'Sofás', collage: generarModelos('Sofá Modular', 'salas', 'sofas', 'png', 15, false) }, 
    { name: 'Comedores', collage: generarModelos('Comedor', 'comedores', 'comedores', 'png', 9, true) }, 
    { name: 'Dormitorios', collage: generarModelos('Cama', 'Dormitorios', 'camas', 'png', 6, true) },
    { name: 'Sillas Individuales', collage: generarModelos('Poltrona', 'individuales', 'individuales', 'png', 6, true) },
    { name: 'Accesorios', collage: generarModelos('Accesorio', 'accesorios', 'accesorios', 'png', 6, true) },
    { name: 'Espejos', collage: generarModelos('Espejo', 'espejos', 'espejos', 'png', 6, true) },
    { name: 'Iluminación', collage: generarModelos('Lámpara', 'iluminacion', 'iluminacion', 'png', 3, true) }
  ];

  return (
    // 👇 ID CAMBIADO A "modelos" PARA EL MENÚ 👇
    <section id="modelos" className="py-24 bg-[#F9F9F9] relative">
      <div className="max-w-[1500px] mx-auto px-6">
        
        {/* ENCABEZADO DE LA SECCIÓN (Estilo Boutique) */}
        <div className="mb-16 border-b border-gray-200 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-[#1A1A1A] leading-none mb-2">
              Nuestros <span className="font-sans not-italic font-black text-[#005293]">Modelos</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
              Explora las colecciones exclusivas
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* SIDEBAR IZQUIERDO MEJORADO */}
          <div className="w-full md:w-[20%] md:sticky md:top-28 h-max">
            <h3 className="text-[10px] font-bold uppercase mb-8 text-gray-400 tracking-[0.3em]">
              Colecciones
            </h3>
            <ul className="space-y-6">
              {collections.map((cat, idx) => (
                <li key={idx} className="relative">
                  {/* Indicador de categoría activa */}
                  {activeCategory === idx && (
                    <motion.div layoutId="activeCat" className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#005293] rounded-full hidden md:block" />
                  )}
                  <button 
                    onClick={() => setActiveCategory(idx)}
                    className={`text-left w-full transition-all duration-300 ${
                      activeCategory === idx 
                        ? 'text-2xl font-serif italic text-[#1A1A1A]' 
                        : 'text-sm font-medium text-gray-400 hover:text-[#1A1A1A] hover:translate-x-2'
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTENIDO PRINCIPAL: GRID */}
          <div className="w-full md:w-[80%]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
              >
                {collections[activeCategory].collage.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="cursor-pointer flex flex-col group"
                    onClick={() => setSelectedItem(item)}
                  >
                    {/* IMAGEN DEL PRODUCTO CON FONDO ELEGANTE */}
                    <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-6 bg-white border border-gray-100 shadow-sm overflow-hidden group-hover:shadow-xl transition-all duration-500 rounded-sm">
                      <img 
                          src={item.images[0]} 
                          alt={item.name} 
                          className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                      />
                      
                      {item.badge && (
                        <div className="absolute top-4 right-4 bg-black text-white text-[9px] font-bold uppercase px-3 py-1.5 tracking-widest">
                          {item.badge}
                        </div>
                      )}
                    </div>

                    {/* INFO MINIMALISTA */}
                    <div className="flex flex-col text-center md:text-left px-2">
                      <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-widest mb-1 group-hover:text-[#005293] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">Ver detalles</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* MODAL DETALLES */}
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
              className="absolute top-6 right-6 z-[160] text-gray-400 hover:text-black transition-colors bg-gray-100 p-2 rounded-full md:bg-transparent md:p-0"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            <div className="bg-white w-full max-w-7xl h-full md:h-auto min-h-[80vh] flex flex-col md:flex-row gap-8 pt-20 md:pt-0">
              
              <div className="w-full md:w-3/5 flex gap-4 md:gap-8 flex-col-reverse md:flex-row px-4 md:px-0">
                {selectedItem.images.length > 1 && (
                  <div className="w-full md:w-[15%] flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
                      {selectedItem.images.map((img, i) => (
                          <div 
                              key={i}
                              onClick={() => setCurrentModalImg(i)}
                              className={`flex-shrink-0 w-20 md:w-full aspect-square border ${currentModalImg === i ? 'border-[#005293]' : 'border-gray-200'} hover:border-[#005293] cursor-pointer p-2 transition-all`}
                          >
                              <img src={img} alt="thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
                          </div>
                      ))}
                  </div>
                )}

                <div className={`w-full relative flex items-center justify-center bg-[#F9F9F9] rounded-sm ${selectedItem.images.length > 1 ? 'md:w-[85%]' : 'md:w-full'}`}>
                    <motion.img 
                        key={currentModalImg}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        src={selectedItem.images[currentModalImg]} 
                        alt={selectedItem.name} 
                        className="w-[90%] h-[50vh] md:h-[70vh] object-contain mix-blend-multiply" 
                    />
                    
                    {selectedItem.images.length > 1 && (
                      <>
                        <button onClick={() => setCurrentModalImg(prev => prev === 0 ? 3 : prev - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full text-gray-800 hover:bg-black hover:text-white shadow-md transition-all"><ChevronLeft size={24} strokeWidth={1.5} /></button>
                        <button onClick={() => setCurrentModalImg(prev => prev === 3 ? 0 : prev + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full text-gray-800 hover:bg-black hover:text-white shadow-md transition-all"><ChevronRight size={24} strokeWidth={1.5} /></button>
                      </>
                    )}
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-center px-6 md:px-12 pb-12 md:pb-0">
                <div className="mb-2 inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[9px] font-black uppercase tracking-widest w-max">
                  Colección 2026
                </div>
                <h2 className="text-3xl md:text-5xl font-serif italic text-[#1A1A1A] mb-6">
                    {selectedItem.name}
                </h2>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-10">
                  {selectedItem.desc}
                </p>

                <div className="flex flex-col gap-4 mt-auto border-t border-gray-100 pt-8">
                  
                  {/* 👇 SELECTOR DE CANTIDAD Y CARRITO FUNCIONALES 👇 */}
                  <div className="flex h-14 gap-4">
                    <div className="flex w-1/3 border border-gray-300 items-center justify-between px-4 text-gray-500 rounded-sm">
                        <button onClick={handleRestar} className="hover:text-black transition-colors p-2"><Minus size={16} /></button>
                        <span className="text-base font-bold text-black">{quantity}</span>
                        <button onClick={handleSumar} className="hover:text-black transition-colors p-2"><Plus size={16} /></button>
                    </div>
                    
                    <button 
                      onClick={handleAddToCart}
                      className={`w-2/3 flex items-center justify-center gap-2 font-bold uppercase text-[10px] tracking-widest transition-all rounded-sm
                        ${addedToCart ? 'bg-green-600 text-white' : 'bg-[#1A1A1A] text-white hover:bg-[#005293]'}
                      `}
                    >
                        {addedToCart ? "¡AÑADIDO!" : <><ShoppingBag size={16} /> AÑADIR AL CARRITO</>}
                    </button>
                  </div>

                  {/* 👇 ENLACE DE WHATSAPP INTELIGENTE CON CANTIDAD 👇 */}
                  <a
                    href={`https://wa.me/573123743925?text=Hola,%20me%20interesan%20${quantity}%20unidades%20del%20modelo%20*${selectedItem.name}*%20del%20catálogo.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full h-14 flex justify-center items-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors rounded-sm"
                  >
                    <MessageCircle size={18} /> Cotizar por WhatsApp
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