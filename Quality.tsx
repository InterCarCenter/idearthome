
import React from 'react';
import { Leaf, Hammer, ShieldCheck, Truck } from 'lucide-react';

const Quality = () => {
  const features = [
    { title: "Sostenibilidad", desc: "Maderas certificadas y procesos ecológicos.", icon: <Leaf size={32} /> },
    { title: "Instalación", desc: "Armado profesional en tu hogar sin costo adicional.", icon: <Hammer size={32} /> },
    { title: "Garantía Real", desc: "5 años de respaldo en estructuras de lujo.", icon: <ShieldCheck size={32} /> },
    { title: "Envío Élite", desc: "Domicilio incluido en toda Bogotá.", icon: <Truck size={32} /> },
  ];

  return (
    <section id="materiales" className="py-24 subtle-clean-bg px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="title-brutalist text-5xl md:text-8xl mb-2 text-[#1A1A1A]">Calidad Superior</h2>
          <p className="text-[#C4A484] text-[12px] font-black uppercase tracking-[0.6em]">Nuestra excelencia marca la diferencia</p>
          <div className="h-1.5 w-32 bg-[#1A1A1A] mt-6 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
          {features.map((f, i) => (
            <div key={i} className="text-center group p-12 bg-white border-2 border-[#1A1A1A]/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#C4A484] hover:shadow-2xl transition-all duration-500 rounded-[2.5rem]">
              <div className="mb-10 inline-block p-6 text-[#C4A484] bg-white rounded-3xl shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-transform border border-[#C4A484]/10">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase leading-tight">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-semibold">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
