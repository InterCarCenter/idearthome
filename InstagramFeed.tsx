
import React from 'react';
import { Instagram, Verified } from 'lucide-react';

const InstagramFeed = () => {
  const posts = [
    { id: 1, url: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop", alt: "Comedores Bogotá Lujo" },
    { id: 2, url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop", alt: "Muebles 12 de Octubre Diseño" },
    { id: 3, url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop", alt: "Venta de muebles Bogotá" },
    { id: 4, url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop", alt: "Sofás Premium Bogotá" },
    { id: 5, url: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2080&auto=format&fit=crop", alt: "Interiorismo 12 de Octubre" },
    { id: 6, url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop", alt: "Decoración Élite" },
  ];

  return (
    <section className="py-32 bg-[#F0F0F0] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Social Feed Container - Recuadro que se nota */}
        <div className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-200/50">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 border-b border-gray-100 pb-12">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 p-1 bg-gradient-to-tr from-[#FFB700] via-[#FF0055] to-[#8000FF] rounded-[2rem] shadow-xl">
                <div className="w-full h-full bg-black rounded-[1.8rem] overflow-hidden border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=200&auto=format&fit=crop" 
                    className="w-full h-full object-cover" 
                    alt="IdeArtHome Logo" 
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <h3 className="text-3xl font-black tracking-tighter">IdeArtHome</h3>
                  <Verified size={20} className="text-[#3897f0] fill-[#3897f0] text-white" />
                </div>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-1">Diseño de Interiores • Bogotá</p>
                <div className="flex gap-4 mt-3 text-xs font-bold text-gray-600">
                  <span><strong>1.2k</strong> publicaciones</span>
                  <span><strong>15k</strong> seguidores</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-none">
                SÍGUENOS EN <span className="text-[#dfba25]">INSTAGRAM</span>
              </h2>
              <p className="text-gray-500 max-w-md font-medium text-sm">
                Más de 15 años transformando hogares bogotanos con estilo y pasión artesanal.
              </p>
            </div>
          </div>

          {/* Grid de Fotos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lg group cursor-pointer"
              >
                <img 
                  src={post.url} 
                  alt={post.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/ideart_home/?hl=es" 
              target="_blank" 
              className="bg-[#dfba25] hover:bg-black hover:text-white text-black font-black py-6 px-12 rounded-full flex items-center gap-4 transition-all duration-300 hover:scale-105 shadow-2xl text-xs uppercase tracking-widest"
            >
              <Instagram size={22} />
              <span>Ver portafolio en Instagram</span>
            </a>
          </div>
        </div>

      </div>

      <div className="mt-16 text-center opacity-30 text-[10px] font-bold tracking-widest uppercase text-gray-600">
        WWW.IDEARTHOME.COM / EXPERTOS EN MUEBLES 12 DE OCTUBRE
      </div>
    </section>
  );
};

export default InstagramFeed;
