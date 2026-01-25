import React from 'react';
import { Instagram, Verified } from 'lucide-react';
import { motion } from 'framer-motion';

/* Animaciones */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const InstagramFeed = () => {
  const posts = [
    { id: 1, url: "/salas/sofa-modular-arena.jpeg", alt: "Sofá modular gris en Bogotá - IdeArtHome" },
    { id: 2, url: "/comedores/comedor-madera-principal.jpeg", alt: "Comedores modernos en el barrio 12 de Octubre" },
    { id: 3, url: "/camas/cama-base-baul-principal.jpeg", alt: "Camas con sistema hidráulico en Bogotá" },
    { id: 4, url: "/salas/sofa-modular-arena.jpeg", alt: "Sofás premium fabricados en Colombia" },
    { id: 5, url: "/individuales/butaca-velvet-terciopelo.jpeg", alt: "Poltronas de lujo personalizadas IdeArtHome" },
    { id: 6, url: "/salas/sofa-modular-nordico.jpeg", alt: "Decoración de interiores de alta gama en Bogotá" }
  ];

  return (
    <section
      aria-label="Galería de Instagram IdeArtHome"
      className="py-32 bg-[#F0F0F0] px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* CONTENEDOR */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-200/50"
        >

          {/* HEADER */}
          <motion.div
            variants={stagger}
            className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 border-b border-gray-100 pb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <div className="w-24 h-24 p-1 bg-gradient-to-tr from-[#FFB700] via-[#FF0055] to-[#8000FF] rounded-[2rem] shadow-xl">
                <div className="w-full h-full bg-black rounded-[1.8rem] overflow-hidden border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c"
                    alt="IdeArtHome muebles y decoración en Bogotá"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <h3 className="text-3xl font-black tracking-tighter">IdeArtHome</h3>
                  <Verified size={20} className="text-[#3897f0] fill-[#3897f0]" />
                </div>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-1">
                  Muebles & Diseño Interior • Bogotá
                </p>
                <div className="flex gap-4 mt-3 text-xs font-bold text-gray-600">
                  <span><strong>1.2k</strong> publicaciones</span>
                  <span><strong>15k</strong> seguidores</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center md:text-right">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-none">
                SÍGUENOS EN <span className="text-[#dfba25]">INSTAGRAM</span>
              </h2>
              <p className="text-gray-500 max-w-md font-medium text-sm">
                Inspiración real en muebles, salas, comedores y decoración para hogares en Bogotá.
              </p>
            </motion.div>
          </motion.div>

          {/* GRID */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
          >
            {posts.map(post => (
              <motion.div
                key={post.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lg group cursor-pointer"
              >
                <img
                  src={post.url}
                  alt={post.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram size={32} className="text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <a
              href="https://www.instagram.com/ideart_home/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram IdeArtHome"
              className="bg-[#dfba25] hover:bg-black hover:text-white text-black font-black py-6 px-12 rounded-full flex items-center gap-4 transition-all duration-300 hover:scale-105 shadow-2xl text-xs uppercase tracking-widest"
            >
              <Instagram size={22} />
              Ver portafolio en Instagram
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* FOOT SEO */}
      <div className="mt-16 text-center opacity-30 text-[10px] font-bold tracking-widest uppercase text-gray-600">
        IDEARTHOME · MUEBLES EN BOGOTÁ · BARRIO 12 DE OCTUBRE
      </div>
    </section>
  );
};

export default InstagramFeed;
