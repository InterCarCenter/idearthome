import React from 'react';
import { Instagram, Facebook, Music, ArrowUp, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden"
      role="contentinfo"
    >
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C4A484]/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          
          {/* INFO EMPRESA */}
          <div className="flex flex-col gap-8 max-w-md">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              IDEART<span className="text-[#C4A484]">HOME</span>
            </h2>

            <p className="text-gray-500 font-medium leading-relaxed">
              <strong>IDEARTHOME</strong> es una empresa especializada en la fabricación
              de <span className="text-white">muebles a medida en Bogotá</span>, incluyendo
              sofás personalizados, comedores en madera y mobiliario de alta calidad.
              Nuestro taller está ubicado en el barrio 12 de Octubre.
            </p>

            {/* REDES */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ideart_home/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram IdeartHome"
                className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#C4A484] hover:text-white transition-all"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://web.facebook.com/fredy.torres.3956"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook IdeartHome"
                className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#1877F2] hover:text-white transition-all"
              >
                <Facebook size={24} />
              </a>

              <a
                href="https://www.tiktok.com/@TU_USUARIO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok IdeartHome"
                className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all text-white"
              >
                <Music size={24} />
              </a>
            </div>
          </div>

          {/* LINKS SEO */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full lg:w-auto">
            
            <div className="space-y-6">
              <p className="text-[10px] font-black tracking-[0.3em] text-white uppercase">
                Productos
              </p>
              <nav className="flex flex-col gap-4 text-sm text-gray-500">
                <a href="#colecciones" className="hover:text-[#C4A484] transition-colors">
                  Comedores a Medida en Bogotá
                </a>
                <a href="#colecciones" className="hover:text-[#C4A484] transition-colors">
                  Sofás Personalizados
                </a>
                <a href="#colecciones" className="hover:text-[#C4A484] transition-colors">
                  Mesas de Centro Modernas
                </a>
              </nav>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-black tracking-[0.3em] text-white uppercase">
                Servicios
              </p>
              <nav className="flex flex-col gap-4 text-sm text-gray-500">
                <a href="#materiales" className="hover:text-[#C4A484] transition-colors">
                  Fabricación de Muebles a Medida
                </a>
                <a href="#faqs" className="hover:text-[#C4A484] transition-colors">
                  Domicilio en Bogotá
                </a>
                <a href="#materiales" className="hover:text-[#C4A484] transition-colors">
                  Garantía en Muebles
                </a>
              </nav>
            </div>

            <div className="space-y-6 col-span-2 sm:col-span-1">
              <p className="text-[10px] font-black tracking-[0.3em] text-white uppercase">
                Contacto
              </p>
              <div className="text-sm text-gray-500 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#C4A484] shrink-0" />
                  <address className="not-italic">
                    Carrera 52 #72-10<br />
                    Barrio 12 de Octubre<br />
                    Bogotá, Colombia
                  </address>
                </div>

                <a
                  href="https://wa.me/573123743925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#25D366] font-bold"
                >
                  <MessageCircle size={18} />
                  +57 312 374 3925
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TEXTO SEO NATURAL (NO SPAM) */}
        <div className="py-8 border-y border-white/5 mb-12 text-xs text-gray-600 leading-relaxed max-w-4xl">
          IDEARTHOME fabrica muebles a medida en Bogotá, incluyendo sofás personalizados,
          comedores modernos y mobiliario para hogares y empresas. Atendemos pedidos
          en toda la ciudad con asesoría personalizada y entrega directa desde nuestro taller.
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between gap-8 text-[10px] font-bold tracking-[0.2em] text-gray-700">
          <p>© 2026 IDEARTHOME · Muebles a Medida en Bogotá</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:text-white transition-colors"
            aria-label="Volver al inicio"
          >
            VOLVER ARRIBA <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
