import React from 'react';
import { Clock, MapPin, Phone, CreditCard } from 'lucide-react';

const Quality = () => {
  const info = [
    { 
      title: "Horarios de Atención", 
      desc: "Atendemos de lunes a sábado de 9:00 AM a 7:00 PM y domingos de 10:00 AM a 4:00 PM.", 
      icon: <Clock size={32} />,
      highlight: "Abierto Hoy" 
    },
    { 
      title: "Ubicación Física", 
      desc: "Nos encontramos en el barrio 12 de Octubre en Bogotá, reconocida zona comercial de muebles.", 
      icon: <MapPin size={32} />,
      highlight: "Fácil Parqueo"
    },
    { 
      title: "Atención Personalizada", 
      desc: "Asesoría directa por WhatsApp, cotizaciones inmediatas y acompañamiento experto.", 
      icon: <Phone size={32} />,
      highlight: "WhatsApp Activo"
    },
    { 
      title: "Formas de Pago", 
      desc: "Aceptamos tarjetas débito y crédito, efectivo y pagos electrónicos con Bold.", 
      icon: <CreditCard size={32} />,
      highlight: "Sin Recargos"
    },
  ];

  return (
    <section
      id="visitanos"
      className="py-20 bg-white px-6 relative overflow-hidden"
      aria-labelledby="visitanos-muebles-bogota"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* TÍTULO SEO LOCAL */}
        <div className="text-center mb-14">
          <h2
            id="visitanos-muebles-bogota"
            className="text-5xl md:text-8xl font-black mb-4 text-[#1A1A1A] uppercase italic"
          >
            Visítanos en Bogotá
          </h2>

          <p className="max-w-3xl mx-auto text-gray-500 text-sm leading-relaxed mb-6">
            Visita nuestra tienda de <strong>muebles en el barrio 12 de Octubre en Bogotá</strong>,
            donde diseñamos y fabricamos sofás, camas y comedores a medida.
            Atención directa, precios justos y entrega garantizada.
          </p>

          <p className="text-[#C4A484] text-[11px] font-black uppercase tracking-[0.5em]">
            La mejor atención en el corazón del 12 de Octubre
          </p>
        </div>

        {/* GRID DE INFORMACIÓN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {info.map((f, i) => (
            <article
              key={i}
              className="group p-8 bg-[#F9F9F9] border border-gray-100 hover:bg-white hover:border-[#C4A484] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[2.5rem]"
            >
              <div className="mb-6 inline-block p-4 text-[#C4A484] bg-white rounded-2xl shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">
                {f.icon}
              </div>

              <span className="block text-[10px] font-black text-[#C4A484] uppercase tracking-widest mb-2">
                {f.highlight}
              </span>

              <h3 className="text-xl font-black mb-3 tracking-tighter uppercase italic text-[#1A1A1A]">
                {f.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
