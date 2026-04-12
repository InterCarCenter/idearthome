import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState(0); 
  const [selectedItem, setSelectedItem] = useState(null); 
  const [currentModalImg, setCurrentModalImg] = useState(0); 
  
  // 👇 ESTADOS DEL CARRITO 👇
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Guarda la lista de productos
  const [isCartOpen, setIsCartOpen] = useState(false); // Controla si el panel del carrito está abierto
  
  const scrollRef = useRef(0);

  // Manejo de scroll modal
  useEffect(() => {
    if (selectedItem !== null) {
      scrollRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      setCurrentModalImg(0); 
      setQuantity(1);
      setAddedToCart(false);
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollRef.current);
    }
  }, [selectedItem]);

  const handleRestar = () => setQuantity(prev => Math.max(1, prev - 1));
  const handleSumar = () => setQuantity(prev => prev + 1);

  // 👇 LÓGICA REAL DEL CARRITO 👇
  const handleAddToCart = () => {
    setCartItems(prev => {
      // Revisa si el mueble ya está en el carrito
      const existing = prev.find(item => item.name === selectedItem.name);
      if (existing) {
        // Si existe, le suma la nueva cantidad
        return prev.map(item => 
          item.name === selectedItem.name ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      // Si no existe, lo agrega nuevo
      return [...prev, { ...selectedItem, quantity }];
    });

    setAddedToCart(true);
    
    // Después de 1 segundo, cierra el modal del producto y abre el carrito
    setTimeout(() => {
      setAddedToCart(false);
      setSelectedItem(null);
      setIsCartOpen(true);
    }, 1000);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (name) => {
    setCartItems(prev => prev.filter(item => item.name !== name));
  };

  // Función para enviar todo el carrito por WhatsApp
  const handleCheckout = () => {
    const textLines = cartItems.map(item => `- ${item.quantity}x ${item.name}`);
    const message = `Hola IdeArt Home, quiero cotizar el siguiente pedido:%0A%0A${textLines.join('%0A')}`;
    window.open(`https://wa.me/573123743925?text=${message}`, '_blank');
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
    <>
      {/* 👇 FONDO CAMBIADO A bg-white 👇 */}
      <section id="modelos" className="py-24 bg-slate-50 relative">
        <div className="max-w-[1500px] mx-auto px-6">
          
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
            
            <div className="w-full md:w-[20%] md:sticky md:top-28 h-max">
              <h3 className="text-[10px] font-bold uppercase mb-8 text-gray-400 tracking-[0.3em]">
                Colecciones
              </h3>
              <ul className="space-y-6">
                {collections.map((cat, idx) => (
                  <li key={idx} className="relative">
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
                      {/* El fondo de la imagen ahora es gris muy claro (bg-gray-50) para que contraste con el fondo blanco de la sección */}
                      <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-6 bg-[#EFF2F6] overflow-hidden group-hover:shadow-lg transition-all duration-500 rounded-2xl">
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
      </section>

      {/* BOTÓN FLOTANTE DEL CARRITO (Solo aparece si hay items) */}
      <AnimatePresence>
        {cartItems.length > 0 && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-8 right-8 z-[140] bg-[#1A1A1A] hover:bg-[#005293] text-white p-4 rounded-full shadow-2xl transition-colors"
          >
            <ShoppingBag size={24} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* PANEL LATERAL DEL CARRITO (DRAWER) */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[210] shadow-2xl flex flex-col"
            >
              {/* Header del Carrito */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-serif italic text-[#1A1A1A]">Tu Selección</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-black">
                  <X size={24} />
                </button>
              </div>

              {/* Lista de Productos */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-400 text-sm mt-10">Tu carrito está vacío.</p>
                ) : (
                  cartItems.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center border border-gray-100 p-3 rounded-sm bg-gray-50">
                      <div className="w-20 h-20 bg-white flex items-center justify-center rounded-sm">
                        <img src={item.images[0]} alt={item.name} className="w-[80%] h-[80%] object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-[#1A1A1A]">{item.name}</h4>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Cantidad: {item.quantity}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.name)} className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer del Carrito (Botón WhatsApp) */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <button
                    onClick={handleCheckout}
                    className="w-full h-14 flex justify-center items-center gap-2 bg-[#8C9C69] hover:bg-[#7A8A57] text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm shadow-lg"
                  >
                    <MessageCircle size={18} /> Cotizar pedido por WhatsApp
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODAL DETALLES DEL PRODUCTO */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[150] flex items-center justify-center p-0 md:p-6 overflow-y-auto backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-[160] text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full md:bg-transparent md:p-0"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <div className="bg-white w-full max-w-7xl h-full md:h-auto md:max-h-[90vh] min-h-[80vh] flex flex-col md:flex-row gap-8 pt-20 md:pt-0 overflow-y-auto rounded-sm shadow-2xl">
              
              <div className="w-full md:w-3/5 flex gap-4 md:gap-8 flex-col-reverse md:flex-row px-4 md:px-6 md:py-6">
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
                        className="w-[90%] h-[40vh] md:h-[60vh] object-contain mix-blend-multiply" 
                    />
                    
                    {selectedItem.images.length > 1 && (
                      <>
                        <button onClick={() => setCurrentModalImg(prev => prev === 0 ? 3 : prev - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full text-gray-800 hover:bg-black hover:text-white shadow-md transition-all"><ChevronLeft size={24} strokeWidth={1.5} /></button>
                        <button onClick={() => setCurrentModalImg(prev => prev === 3 ? 0 : prev + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full text-gray-800 hover:bg-black hover:text-white shadow-md transition-all"><ChevronRight size={24} strokeWidth={1.5} /></button>
                      </>
                    )}
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-center px-6 md:px-12 pb-12 md:py-12">
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
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Collections;