import React from 'react';
import { Truck, ShieldCheck, CreditCard, MessageCircle } from 'lucide-react';

const FAQs = () => {
  const faqs = [
    {
      question: "¿Cómo funcionan los domicilios en Bogotá?",
      answer:
        "Realizamos domicilios en toda Bogotá con flota propia. Incluye transporte seguro y personal especializado que instala el mueble en el espacio que elijas.",
      icon: <Truck size={26} />
    },
    {
      question: "¿Los muebles IdeArtHome tienen garantía?",
      answer:
        "Sí. Nuestros sofás, comedores y muebles a medida cuentan con 5 años de garantía en estructura y 1 año en telas por defectos de fabricación.",
      icon: <ShieldCheck size={26} />
    },
    {
      question: "¿Qué medios de pago aceptan?",
      answer:
        "Aceptamos tarjetas débito y crédito, transferencias bancarias, efectivo y pagos con Bold. También ofrecemos asesoría personalizada en el punto físico.",
      icon: <CreditCard size={26} />
    }
  ];

  return (
    <section
      id="faqs"
      aria-label="Preguntas frecuentes sobre muebles en Bogotá"
      className="relative py-32 bg-[#F5F5F0] px-6 overflow-hidden"
    >
      {/* SEO invisible */}
      <h2 className="sr-only">
        Preguntas frecuentes sobre sofás, comedores y muebles en Bogotá
      </h2>
      <p className="sr-only">
        Información sobre domicilios, garantía y métodos de pago en IdeArtHome,
        tienda de muebles ubicada en el barrio 12 de Octubre en Bogotá.
      </p>

      {/* Glow decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] bg-[#C4A484]/20 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="block text-[10px] font-black uppercase tracking-[0.5em] text-[#C4A484] mb-4">
            Resolviendo tus dudas
          </span>
          <h3 className="title-brutalist text-5xl md:text-7xl mb-6 leading-none">
            Preguntas <span className="text-outline">Frecuentes</span>
          </h3>
          <div className="w-28 h-1 bg-[#1A1A1A] mx-auto"></div>
        </div>

        {/* FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {faqs.map((faq, i) => (
            <article
              key={i}
              className="group bg-white p-10 rounded-[2.5rem] shadow-xl border border-transparent
                         hover:border-[#C4A484]/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]
                         transition-all duration-500"
            >
              <div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl
                              bg-[#F5F5F0] text-[#C4A484]
                              group-hover:bg-[#1A1A1A] group-hover:text-white
                              transition-all duration-500">
                {faq.icon}
              </div>

              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter leading-tight">
                {faq.question}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-6">
            ¿Tienes otra consulta?
          </p>
          <a
            href="https://wa.me/573123743925"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-14 py-6
                       bg-[#1A1A1A] text-white rounded-full
                       font-black text-xs tracking-widest
                       hover:bg-[#C4A484] hover:scale-105
                       transition-all shadow-2xl"
          >
            HABLAR CON UN ASESOR <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
