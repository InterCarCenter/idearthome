import React, { useCallback, useRef, useState } from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const WA_NUMBER = '573123743925';
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;
const MIN_SECONDS_BETWEEN_SENDS = 8;

/* Animaciones */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

/** Evita caracteres de control y recorta (no sustituye un backend, pero limita abuso del enlace wa.me). */
function sanitizeField(value: string, max: number): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, max);
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  /** Campo trampa: bots suelen rellenarlo; los humanos no lo ven. */
  const [honeypot, setHoneypot] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const lastSendAt = useRef<number>(0);

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (honeypot.trim() !== '') {
      return;
    }

    const now = Date.now();
    if (now - lastSendAt.current < MIN_SECONDS_BETWEEN_SENDS * 1000) {
      setSubmitError('Espera unos segundos antes de enviar de nuevo.');
      return;
    }

    const name = sanitizeField(formData.name, MAX_NAME);
    const email = sanitizeField(formData.email, MAX_EMAIL);
    const message = sanitizeField(formData.message, MAX_MESSAGE);

    if (!name || !email || !message) {
      setSubmitError('Completa nombre, correo y mensaje.');
      return;
    }

    const text = `Hola IdeArtHome, mi nombre es ${name}. Mi correo es ${email}. Estoy interesado en: ${message}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

    lastSendAt.current = now;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const max =
        name === 'name' ? MAX_NAME : name === 'email' ? MAX_EMAIL : name === 'message' ? MAX_MESSAGE : value.length;
      setFormData((prev) => ({ ...prev, [name]: value.slice(0, max) }));
    },
    []
  );

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

            <form className="space-y-8" onSubmit={handleWhatsAppSubmit} noValidate>
              {/* Honeypot: no quitar; debe quedar fuera de pantalla y sin foco habitual */}
              <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
                <label htmlFor="contact-company">Empresa</label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <label className="sr-only" htmlFor="contact-name">
                Nombre
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                maxLength={MAX_NAME}
                onChange={handleChange}
                value={formData.name}
                placeholder="Nombre completo"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg outline-none focus:border-[#C4A484]"
              />

              <label className="sr-only" htmlFor="contact-email">
                Correo
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                inputMode="email"
                maxLength={MAX_EMAIL}
                onChange={handleChange}
                value={formData.email}
                placeholder="Correo electrónico"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg outline-none focus:border-[#C4A484]"
              />

              <label className="sr-only" htmlFor="contact-message">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                maxLength={MAX_MESSAGE}
                onChange={handleChange}
                value={formData.message}
                placeholder="¿Buscas sofás o comedores en Bogotá? Cuéntanos tu idea…"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg outline-none resize-none focus:border-[#C4A484]"
              />

              {submitError ? (
                <p className="text-sm text-amber-400" role="alert">
                  {submitError}
                </p>
              ) : null}

              <Button
                type="submit"
                variant="secondary"
                className="!w-full !rounded-full !py-6 !text-lg !bg-[#C4A484] hover:!bg-[#dfba25] hover:!text-black transition-all shadow-xl"
              >
                ENVIAR POR WHATSAPP <MessageCircle size={22} />
              </Button>
            </form>

            <p className="mt-6 text-[10px] uppercase tracking-widest text-gray-500">
              El mensaje se abre en WhatsApp; no guardamos datos en este sitio.
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
              <a
                href="https://maps.app.goo.gl/3XzQfHqGz8WvYFv88"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
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
