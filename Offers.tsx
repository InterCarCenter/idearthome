
import React from 'react';
import { MessageCircle, Zap } from 'lucide-react';
import Button from './Button';

const Offers = () => {
  const offers = [
    { name: "Nordic Comfort", original: "2.400.000", discounted: "1.800.000", discount: "-25% OFF", img: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1909&auto=format&fit=crop" },
    { name: "Velvet Emerald", original: "3.200.000", discounted: "2.720.000", discount: "-15% OFF", img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2080&auto=format&fit=crop" },
    { name: "Leather Loft", original: "4.500.000", discounted: "3.600.000", discount: "-20% OFF", img: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=2012&auto=format&fit=crop" }
  ];

  return (
    <section id="ofertas" className="py-20 mandala-outline-bg px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Título Pegado al Grid */}
        <div className="mb-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            <Zap className="text-[#C4A484] animate-pulse" size={32} />
            <h2 className="title-brutalist text-6xl md:text-9xl text-[#1A1A1A]">
              OFERTAS <span className="text-[#C4A484]">ESPECIALES</span>
            </h2>
          </div>
          <div className="w-64 h-1.5 bg-[#C4A484] mx-auto mb-4"></div>
          <p className="text-gray-500 text-[12px] font-black uppercase tracking-[0.7em]">Descuentos exclusivos IdeArtHome</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
          {offers.map((product, idx) => (
            <div key={idx} className="bg-white p-10 group border-2 border-transparent hover:border-[#C4A484]/20 transition-all duration-500 rounded-[3.5rem] shadow-2xl hover:shadow-[0_60px_100px_-30px_rgba(0,0,0,0.15)]">
              <div className="relative h-96 mb-10 overflow-hidden rounded-[2.5rem]">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <span className="absolute top-8 left-8 bg-[#1A1A1A] text-white px-8 py-3 text-[12px] font-black tracking-widest rounded-full shadow-2xl border border-white/10">{product.discount}</span>
              </div>
              
              <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase leading-none">{product.name}</h3>
              <div className="flex items-baseline gap-5 mb-12">
                <span className="text-gray-400 line-through text-sm font-bold">$ {product.original}</span>
                <span className="text-4xl text-[#C4A484] font-black tracking-tighter">$ {product.discounted}</span>
              </div>

              <a 
                href={`https://wa.me/573123743925?text=Hola,%20me%20interesa%20la%20oferta%20especial%20de%20${product.name}%20por%20$%20${product.discounted}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="!w-full !rounded-full !py-6 !text-[12px] !bg-[#1A1A1A] hover:!bg-[#C4A484] flex items-center justify-center gap-5 transition-all shadow-xl group-hover:scale-105">
                  PEDIR POR WHATSAPP <MessageCircle size={24} />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
