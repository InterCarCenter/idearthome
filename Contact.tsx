
import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const text = `Hola IdeArtHome, mi nombre es ${name}, mi correo es ${email} y estoy interesado en: ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/573123743925?text=${encodedText}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-32 bg-[#0A0A0A] px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <div className="bg-[#111111] p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C4A484]/10 blur-3xl rounded-full"></div>
            <h3 className="text-3xl font-bold mb-10 text-white italic tracking-tight uppercase">Hablemos de tu Proyecto</h3>
            <form className="space-y-8" onSubmit={handleWhatsAppSubmit}>
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#C4A484] transition-all text-white text-lg placeholder:text-gray-700" 
                  placeholder="Nombre completo" 
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#C4A484] transition-all text-white text-lg placeholder:text-gray-700" 
                  placeholder="Correo electrónico" 
                />
              </div>
              <div className="relative">
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#C4A484] transition-all text-white text-lg placeholder:text-gray-700 resize-none" 
                  placeholder="¿Buscas comedores o sofás en Bogotá? Cuéntanos tu idea..."
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                variant="secondary" 
                className="!w-full !rounded-full !py-6 !text-lg !bg-[#C4A484] hover:!bg-[#dfba25] hover:!text-black transition-all shadow-[0_20px_40px_rgba(196,164,132,0.2)]"
              >
                ENVIAR A WHATSAPP <MessageCircle size={22} />
              </Button>
            </form>
          </div>

          {/* Map Side with New Provided Google Maps Embed */}
          <div className="flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-[3.5rem] h-[500px] border border-white/5 shadow-2xl bg-zinc-900">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.579040950099!2d-74.07580519056833!3d4.668887495286423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9be2af1cb3f9%3A0xca93b5daf45cea9a!2sIdeArt%20Home%20Muebles%20y%20Decoraci%C3%B3n!5e0!3m2!1ses-419!2sco!4v1769096215505!5m2!1ses-419!2sco" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert brightness-75 hover:grayscale-0 hover:invert-0 transition-all duration-1000"
              ></iframe>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://maps.app.goo.gl/3XzQfHqGz8WvYFv88" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="!w-full !rounded-full border-white/20 !text-white !px-8 hover:!bg-white hover:!text-black">
                  <MapPin size={18} className="mr-2" /> CÓMO LLEGAR
                </Button>
              </a>
              <a href="tel:+573123743925" className="flex-1">
                <Button variant="outline" className="!w-full !rounded-full border-white/20 !text-white !px-8 hover:!bg-white hover:!text-black">
                  <Phone size={18} className="mr-2" /> LLAMAR AHORA
                </Button>
              </a>
            </div>

            <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5">
                <h5 className="text-[#C4A484] font-bold mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                    <MapPin size={14} /> UBICACIÓN IDEARTHOME
                </h5>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Visítanos en el **Barrio 12 de Octubre**. Somos **IdeArtHome**, expertos en la fabricación de comedores y sofás de lujo con más de 15 años de tradición artesanal en Bogotá.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
