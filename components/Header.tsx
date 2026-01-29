import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ORDEN ACTUALIZADO SEGÚN TU SOLICITUD
  const menuItems = [
    { label: 'Colecciones', id: '#colecciones' },
    { label: 'Materiales', id: '#telas' }, // Este conecta con tu componente Fabrics
    { label: 'Nosotros', id: '#nosotros' },
    { label: 'Detalles', id: '#decoracion' }, // Este conecta con la sección de espejos/adornos
    { label: 'Contacto', id: '#visitanos' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 py-4 shadow-sm' 
        : 'bg-white/95 backdrop-blur-xl border-b border-gray-100 py-6 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
          <span className="text-[#1A1A1A]">IDEART</span>
          <span className="text-[#C4A484]">HOME</span>
        </a>

        {/* NAVEGACIÓN PC */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map(item => (
            <a 
              key={item.label} 
              href={item.id} 
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A] hover:text-[#C4A484] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4A484] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* BOTÓN WHATSAPP */}
        <a href="https://wa.me/573123743925" target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" className="!bg-[#25D366] !px-6 !py-3 hover:scale-110 transition-transform shadow-lg flex items-center gap-2">
            <MessageCircle size={18} /> <span className="hidden sm:inline">WHATSAPP</span>
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;