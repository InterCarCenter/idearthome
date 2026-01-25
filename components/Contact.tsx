import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

/* Animaciones */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hola IdeArtHome, mi nombre es ${formData.name}. Mi correo es ${formData.email}. Estoy interesado en: ${formData.message}`;
    window.open(
      `https://wa.me/573123743925?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      id="contacto"
      aria-label="Contacto IdeArtHome Bogotá"
      className="py-32 bg-[#0A0A0A] px-6 relative overflow-hidden"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* SEO LOCAL */}
      <meta itemProp="name" content="IdeArtHome Muebles y Decoración" />
      <meta itemProp="address" content="Barrio 12 de Octubre, Bogotá, Colombia" />
      <meta itemProp="telephone" content="+573123743925" />
      <meta itemProp="areaServed" content="Bogotá" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* FORMULARIO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#111111] p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C4A484]/10 blur-3xl rounded-full" />

            <h2 className="text-3xl md:text-4xl font-black mb-10 text-white italic uppercase tracking-tight">
              Cotiza tu mueble ideal
            </h2>

            <form className="space-y-8" onSubmit={handleWhatsAppSubmit}>
              <label className="sr-only">Nombre</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                placeholder="Nombre completo"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg outline-none focus:border-[#C4A484]"
              />

              <label className="sr-only">Correo</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg outline-none focus:border-[#C4A484]"
              />

              <label className="sr-only">Mensaje</label>
              <textarea
                name="message"
                rows={4}
                required
                onChange={handleChange}
                placeholder="¿Buscas sofás o comedores en Bogotá? Cuéntanos tu idea…"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg outline-none resize-none focus:border-[#C4A484]"
              />

              <Button
                type="submit"
                variant="secondary"
                className="!w-full !rounded-full !py-6 !text-lg !bg-[#C4A484] hover:!bg-[#dfba25] hover:!text-black transition-all shadow-xl"
              >
                ENVIAR POR WHATSAPP <MessageCircle size={22} />
              </Button>
            </form>

            <p className="mt-6 text-[10px] uppercase tracking-widest text-gray-500">
              Respuesta rápida · Atención personalizada en Bogotá
            </p>
          </motion.div>

          {/* MAPA + INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.579040950099!2d-74.07580519056833!3d4.668887495286423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9be2af1cb3f9%3A0xca93b5daf45cea9a!2sIdeArt%20Home%20Muebles%20y%20Decoraci%C3%B3n!5e0!3m2!1ses-419!2sco!4v1"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="grayscale invert brightness-75 hover:grayscale-0 hover:invert-0 transition-all duration-1000"
/>

            </div>

            <div className="flex gap-4 flex-wrap">
              <a href="https://maps.app.goo.gl/3XzQfHqGz8WvYFv88" target="_blank" className="flex-1">
                <Button variant="outline" className="!w-full !rounded-full !text-white border-white/20 hover:!bg-white hover:!text-black">
                  <MapPin size={18} /> Cómo llegar
                </Button>
              </a>
              <a href="tel:+573123743925" className="flex-1">
                <Button variant="outline" className="!w-full !rounded-full !text-white border-white/20 hover:!bg-white hover:!text-black">
                  <Phone size={18} /> Llamar ahora
                </Button>
              </a>
            </div>

            <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5">
              <h3 className="text-[#C4A484] font-black text-xs uppercase tracking-widest mb-4">
                IdeArtHome · Bogotá
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Somos especialistas en <strong>muebles de lujo en Bogotá</strong>.
                Visítanos en el <strong>Barrio 12 de Octubre</strong> y descubre
                sofás, comedores y diseño artesanal con más de 15 años de experiencia.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
