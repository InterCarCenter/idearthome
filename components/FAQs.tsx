import React from 'react';
import { Instagram, Music, MessageCircle, CreditCard } from 'lucide-react';
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
      {/* TEXTO DECORATIVO DE FONDO */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[12vw] font-black text-gray-100 opacity-20 pointer-events-none select-none uppercase tracking-tighter">
        IdeArtHome
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* ================== BLOQUE VISUAL (TARJETAS) ================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-lg group/wallet h-[450px] flex items-center justify-center">

            {/* Fondo decorativo sutil */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem] grayscale opacity-5">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
                alt="Showroom de muebles IdeArtHome"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TARJETA AMERICAN EXPRESS (AZUL) */}
            <div className="absolute w-[85%] h-[220px] bg-[#006fcf] rounded-[2rem] shadow-2xl z-10 p-8
              transition-all duration-700 ease-out flex flex-col justify-between
              -translate-y-[30%] group-hover/wallet:-translate-y-[75%]
              rotate-[-4deg] group-hover/wallet:rotate-[-12deg]">
              <div className="flex justify-between items-start">
                <p className="text-white font-black italic text-xl tracking-tighter">AMERICAN EXPRESS</p>
                <div className="w-12 h-10 bg-white/20 rounded-lg backdrop-blur-md italic flex items-center justify-center text-[8px] text-white">CHIP</div>
              </div>
              <div className="h-4 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* TARJETA BANCOLOMBIA (AMARILLA) */}
            <div className="absolute w-[85%] h-[220px] bg-[#FDDA24] rounded-[2rem] shadow-2xl z-10 p-8
              translate-y-[30%] group-hover/wallet:translate-y-[75%]
              rotate-[4deg] group-hover/wallet:rotate-[12deg] transition-all duration-700 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <p className="text-black font-black text-xl uppercase tracking-tighter">Bancolombia</p>
                <CreditCard size={24} className="text-black/50" />
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-8 bg-black/5 rounded-md"></div>
                 <p className="text-black/40 font-mono text-xs">**** **** **** 2026</p>
              </div>
            </div>

            {/* TARJETA PRINCIPAL IDEARTHOME (NEGRA) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="absolute w-[92%] bg-[#1A1A1A] text-white p-10 rounded-[2.5rem]
              shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] z-30 border border-white/5"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-4xl font-black tracking-tighter uppercase">IDEARTHOME</h3>
                <div className="w-10 h-10 bg-[#C4A484] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
                </div>
              </div>
              <p className="text-[#C4A484] text-[10px] font-black uppercase tracking-[0.5em] mb-12">
                Muebles & Decoración
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="font-black uppercase text-[11px] text-gray-400 mb-1">Gerencia</p>
                  <p className="font-black text-sm mb-2">Gloria Mahecha</p>
                  <a
                    href="https://wa.me/573123573343"
                    target="_blank"
                    className="flex items-center gap-2 text-[#25D366] text-xs font-bold hover:text-white transition"
                  >
                    <MessageCircle size={14} />
                    Contactar
                  </a>
                </div>

                <div className="text-right flex flex-col items-end">
                  <p className="font-black uppercase text-[11px] text-gray-400 mb-1">Ventas</p>
                  <p className="font-black text-sm mb-2">Fredy Torres</p>
                  <a
                    href="https://wa.me/573123743925"
                    target="_blank"
                    className="flex items-center gap-2 text-[#25D366] text-xs font-bold hover:text-white transition"
                  >
                    <MessageCircle size={14} />
                    Asesoría
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================== TEXTO (DERECHA) ================== */}
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
            Maestros Artesanos
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-[#1A1A1A]"
          >
            QUIÉNES <br />
            <span className="text-[#C4A484]">SOMOS</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg font-black italic uppercase border-l-8 border-[#F5CBA7] pl-6 text-[#1A1A1A]"
          >
            “Calidad certificada y todas las facilidades de pago para tu hogar”
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 text-lg leading-relaxed max-w-xl font-medium"
          >
            En <strong>IdeArtHome</strong> transformamos espacios en el corazón de Bogotá. Ubicados en el icónico barrio <strong>12 de Octubre</strong>, combinamos la tradición del mueble artesanal con la seguridad de convenios financieros modernos para que estrenar sea más fácil que nunca.
          </motion.p>

          {/* REDES SOCIALES */}
          <motion.div variants={fadeUp} className="flex gap-6 justify-center lg:justify-start pt-6">
            <a
              href="https://www.instagram.com/ideart_home/?hl=es"
              target="_blank"
              className="p-5 bg-gray-50 rounded-[1.5rem] hover:bg-[#005293] hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@ideart_home"
              target="_blank"
              className="p-5 bg-gray-50 rounded-[1.5rem] hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <Music size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;