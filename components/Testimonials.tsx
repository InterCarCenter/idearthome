import React from 'react';
import { Star, Quote, MessageSquarePlus } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const reviews = [
  {
    name: 'Carolina Restrepo',
    comment: 'Mi comedor es la joya de la casa. La madera es impecable.',
    location: 'Chicó, Bogotá',
  },
  {
    name: 'Juan Pablo Silva',
    comment: 'El sofá modular es comodísimo y llegó justo a tiempo.',
    location: 'Cedritos, Bogotá',
  },
  {
    name: 'Mariana Gómez',
    comment: 'Excelente atención y asesoría personalizada.',
    location: 'Colina, Bogotá',
  },
  {
    name: 'Ricardo Díaz',
    comment: 'Calidad superior, se nota la experiencia del 12 de Octubre.',
    location: 'Modelia, Bogotá',
  },
];

const Testimonials = () => {
  const handleWriteReview = () => {
    window.open('https://share.google/ca9cKikxPK68iBAWD', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      aria-label="Reseñas de clientes IdeArtHome"
      className="overflow-hidden bg-[#F9F9F7] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row"
        >
          <div>
            <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.5em] text-[#C4A484]">
              Opiniones Reales
            </span>
            <h2 className="title-brutalist text-5xl leading-none tracking-tighter md:text-7xl">
              Clientes Felices, <br />
              <span className="text-[#C4A484]">Resultados Reales</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={handleWriteReview}
            className="flex items-center gap-3 rounded-2xl bg-[#1A1A1A] px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl transition-colors hover:bg-[#C4A484]"
          >
            Escribir Reseña <MessageSquarePlus size={18} />
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {reviews.map((r) => (
            <motion.article
              key={r.name}
              variants={fadeUp}
              itemScope
              itemType="https://schema.org/Review"
              className="flex flex-col rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-between">
                <div className="flex gap-1 text-[#F1C40F]">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={12} fill="currentColor" />
                  ))}
                </div>
                <Quote size={28} className="text-gray-100" />
              </div>

              <p itemProp="reviewBody" className="flex-grow text-sm italic leading-relaxed text-gray-600">
                “{r.comment}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xs font-black text-white">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p itemProp="author" className="text-xs font-black uppercase">
                    {r.name}
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400">{r.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-14 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Reseñas verificadas de clientes en Bogotá · IdeArtHome Muebles
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
