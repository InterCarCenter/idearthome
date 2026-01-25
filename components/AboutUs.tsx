import React from 'react';
import { Instagram, Music, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/* Animaciones reutilizables */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const AboutUs = () => {
  return (
    <section
      id="nosotros"
      aria-label="Sobre IdeArtHome - Muebles y Decoración en Bogotá"
      className="py-24 bg-white px-6 relative overflow-hidden"
    >
      {/* TEXTO DECORATIVO */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[12vw] font-black text-gray-50 opacity-[0.05] pointer-events-none select-none uppercase tracking-tighter">
        IdeArtHome
      </div>

      {/* CONTENEDOR */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* ================== BLOQUE VISUAL ================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-lg group/wallet h-[400px] flex items-center justify-center">

            {/* Fondo */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem] grayscale opacity-5">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
                alt="Showroom de muebles IdeArtHome en Bogotá"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TARJETA AMEX */}
            <div className="absolute w-[90%] h-[200px] bg-[#006fcf] rounded-[2rem] shadow-xl z-10 p-6
              transition-all duration-700 ease-out
              -translate-y-[25%] group-hover/wallet:-translate-y-[65%]
              rotate-[-3deg] group-hover/wallet:rotate-[-8deg]">
              <p className="text-white font-black italic text-lg">AMERICAN EXPRESS</p>
            </div>

            {/* TARJETA BANCOLOMBIA */}
            <div className="absolute w-[90%] h-[200px] bg-[#FDDA24] rounded-[2rem] shadow-xl z-10 p-6
              translate-y-[25%] group-hover/wallet:translate-y-[65%]
              rotate-[3deg] group-hover/wallet:rotate-[8deg] transition-all duration-700">
              <p className="text-black font-black text-sm">Bancolombia</p>
            </div>

            {/* TARJETA PRINCIPAL */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="absolute w-[95%] bg-[#1A1A1A] text-white p-10 rounded-[2.5rem]
              shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] z-30"
            >
              <h3 className="text-4xl font-black tracking-tighter uppercase">IDEARTHOME</h3>
              <p className="text-[#C4A484] text-xs font-black uppercase tracking-[0.4em] mt-1">
                Muebles & Decoración
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="font-black uppercase">Gloria Mahecha</p>
                  <a
                    href="https://wa.me/573123573343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#25D366] hover:text-white transition"
                  >
                    <MessageCircle size={16} />
                    312 357 3343
                  </a>
                </div>

                <div className="text-right">
                  <p className="font-black uppercase">Fredy Torres</p>
                  <a
                    href="https://wa.me/573123743925"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-end gap-2 text-[#25D366] hover:text-white transition"
                  >
                    <MessageCircle size={16} />
                    312 374 3925
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================== TEXTO ================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="order-1 lg:order-2 space-y-10 text-center lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="text-[11px] font-black uppercase tracking-[0.5em] text-[#C4A484] block"
          >
            Tradición & Confianza
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-tighter"
          >
            QUIÉNES <br />
            <span className="text-[#C4A484]">SOMOS</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl font-black italic uppercase border-l-4 border-[#C4A484] pl-6"
          >
            “Calidad certificada y facilidades de pago para tu hogar”
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 text-lg leading-relaxed max-w-xl"
          >
            IdeArtHome es una tienda de <strong>muebles y decoración en Bogotá</strong>,
            ubicada en el barrio 12 de Octubre. Ofrecemos sofás, comedores y soluciones
            para el hogar con convenios financieros seguros y atención personalizada.
          </motion.p>

          {/* REDES */}
          <motion.div variants={fadeUp} className="flex gap-6 justify-center lg:justify-start pt-4">
            <a
              href="https://www.instagram.com/ideart_home/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram IdeArtHome"
              className="p-4 bg-gray-50 rounded-2xl hover:bg-[#C4A484] hover:text-white transition shadow-md"
            >
              <Instagram size={26} />
            </a>
            <a
              href="https://www.tiktok.com/@ideart_home"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok IdeArtHome"
              className="p-4 bg-gray-50 rounded-2xl hover:bg-black hover:text-white transition shadow-md"
            >
              <Music size={26} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
