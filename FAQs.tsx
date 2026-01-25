
import React from 'react';
import { Truck, ShieldCheck, CreditCard, MessageCircle } from 'lucide-react';

const FAQs = () => {
  const faqs = [
    {
      question: "¿Cómo funcionan los domicilios?",
      answer: "Entregamos en toda Bogotá con flota propia. El servicio incluye transporte y personal experto para ubicar el mueble en el espacio que desees.",
      icon: <Truck className="text-[#C4A484]" size={24} />
    },
    {
      question: "¿Tienen garantía los muebles?",
      answer: "Sí, todos nuestros sofás y comedores cuentan con 5 años de garantía en estructura y 1 año en textiles por defectos de fabricación.",
      icon: <ShieldCheck className="text-[#C4A484]" size={24} />
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos todas las tarjetas de crédito, transferencias bancarias y planes de financiamiento directo en nuestro showroom.",
      icon: <CreditCard className="text-[#C4A484]" size={24} />
    }
  ];

  return (
    <section id="faqs" className="py-32 bg-[#F5F5F0] px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C4A484] mb-4 block">Resolviendo tus dudas</span>
          <h2 className="title-brutalist text-5xl md:text-7xl mb-6 leading-none">Preguntas <span className="text-outline">Frecuentes</span></h2>
          <div className="w-24 h-1 bg-[#1A1A1A] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-transparent hover:border-[#C4A484]/30 transition-all group">
              <div className="mb-6 p-4 bg-[#F5F5F0] rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {faq.icon}
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter leading-tight">{faq.question}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-6">¿Tienes otra consulta?</p>
          <a 
            href="https://wa.me/573123743925" 
            target="_blank" 
            className="inline-flex items-center gap-4 px-12 py-5 bg-[#1A1A1A] text-white rounded-full font-black text-xs tracking-widest hover:bg-[#C4A484] transition-all shadow-2xl"
          >
            HABLAR CON UN ASESOR <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
