
import React from 'react';
import { RotateCw, MoveRight } from 'lucide-react';
import Button from './Button';

const Customizer = () => {
  return (
    <section id="diseño" className="py-32 bg-[#F5F5F0] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl aspect-video bg-white">
            <img 
              src="https://images.unsplash.com/photo-1616486341351-702534f9b6c2?q=80&w=2072&auto=format&fit=crop" 
              alt="Customization Experience" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center animate-pulse">
                <RotateCw className="text-[#C4A484]" size={32} />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C4A484] mb-4 block">Experiencia 3D</span>
          <h2 className="title-brutalist text-5xl md:text-7xl mb-8 leading-none">Tu Visión, <br />Nuestra <span className="text-outline">Creación</span></h2>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-md">
            Personaliza materiales, texturas y dimensiones en tiempo real. Un sofá único para un espacio irrepetible.
          </p>
          <Button variant="primary" className="rounded-full">
            DISEÑAR AHORA <MoveRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Customizer;
