import React from 'react';
import { Clock, MapPin, Phone, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

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
      desc: "Aceptamos tarjetas débito y crédito, efectivo y pagos electrónicos con datáfono.", 
      icon: <CreditCard size={32} />,
      highlight: "Sin Recargos"
    },
  ];

  return (
    <section
      id="visitanos"
      className="py-32 bg-white px-6 relative overflow-hidden"
    >
      {/* --- BURBUJAS FLOTANTES DE COLORES --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Burbuja Azul */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#005293] opacity-10 blur-[120px] rounded-full"
        />
        {/* Burbuja Amarilla */}
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, 150, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-[#FFD700] opacity-10 blur-[100px] rounded-full"
        />
        {/* Burbuja Color Piel/Arena */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 left-1/4 w-[600px] h-[600px] bg-[#F5CBA7] opacity-20 blur-[130px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TÍTULO MEJORADO (FUERTE Y CON ESTILO) */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#005293] font-black uppercase tracking-[0.6em] text-[10px] md:text-xs mb-4 block"
          >
            Experiencia Directa
          </motion.span>
          
          <h2 className="text-6xl md:text-9xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-[0.85] mb-8">
            VISÍTANOS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005293] to-[#F5CBA7] italic">EN BOGOTÁ</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 font-medium italic">
              Visita nuestra tienda de <strong>muebles en el barrio 12 de Octubre en Bogotá</strong>,
              donde diseñamos y fabricamos sofás, camas y comedores a medida.
              Atención directa, precios justos y entrega garantizada.
            </p>
            <div className="w-24 h-1.5 bg-[#F5CBA7] mx-auto rounded-full"></div>
          </div>
        </div>

        {/* GRID DE INFORMACIÓN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {info.map((f, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white/40 backdrop-blur-sm border border-gray-100 hover:border-[#005293] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-[3.5rem]"
            >
              <div className="mb-8 inline-block p-5 text-[#005293] bg-[#005293]/5 rounded-3xl group-hover:bg-[#005293] group-hover:text-white transition-all duration-500">
                {f.icon}
              </div>

              <span className="block text-[11px] font-black text-[#F5CBA7] uppercase tracking-widest mb-3">
                {f.highlight}
              </span>

              <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase text-[#1A1A1A]">
                {f.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {f.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;