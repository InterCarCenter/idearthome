
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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
          <span className={isScrolled ? 'text-black' : 'text-white'}>IDEART</span><span className="text-[#C4A484]">HOME</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: 'Colecciones', id: '#colecciones' },
            { label: 'Ofertas', id: '#ofertas' },
            { label: 'Materiales', id: '#materiales' },
            { label: 'Nosotros', id: '#nosotros' },
            { label: 'Contacto', id: '#contacto' }
          ].map(item => (
            <a 
              key={item.label} 
              href={item.id} 
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${isScrolled ? 'text-charcoal hover:text-[#C4A484]' : 'text-white/70 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="https://wa.me/573123743925" target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" className="!bg-[#25D366] !px-6 !py-3 hover:scale-110 transition-transform shadow-lg">
            <MessageCircle size={18} /> <span className="hidden sm:inline">WHATSAPP</span>
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
