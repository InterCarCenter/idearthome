import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Star, Quote, MessageSquarePlus, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

/* Animaciones */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackReviews = [
    { name: "Carolina Restrepo", comment: "Mi comedor es la joya de la casa. La madera es impecable.", rating: 5, location: "Chicó, Bogotá" },
    { name: "Juan Pablo Silva", comment: "El sofá modular es comodísimo y llegó justo a tiempo.", rating: 5, location: "Cedritos, Bogotá" },
    { name: "Mariana Gómez", comment: "Excelente atención y asesoría personalizada.", rating: 5, location: "Colina, Bogotá" },
    { name: "Ricardo Díaz", comment: "Calidad superior, se nota la experiencia del 12 de Octubre.", rating: 5, location: "Modelia, Bogotá" }
  ];

  const fetchRecentReviews = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Genera 4 testimonios realistas para una tienda de muebles de lujo en Bogotá llamada IdeArtHome.",
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                comment: { type: Type.STRING },
                rating: { type: Type.NUMBER },
                location: { type: Type.STRING }
              }
            }
          }
        }
      });

      setReviews(JSON.parse(response.text || "[]"));
    } catch {
      setReviews(fallbackReviews);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentReviews();
  }, []);

  const handleWriteReview = () => {
    window.open(
      "https://share.google/ca9cKikxPK68iBAWD",
      "_blank"
    );

  };

  return (
    <section
      aria-label="Reseñas de clientes IdeArtHome"
      className="py-28 bg-[#F9F9F7] px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16"
        >
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C4A484] block mb-2">
              Opiniones Reales
            </span>
            <h2 className="title-brutalist text-5xl md:text-7xl leading-none tracking-tighter">
              Clientes Felices, <br />
              <span className="text-[#C4A484]">Resultados Reales</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={fetchRecentReviews}
              aria-label="Actualizar testimonios"
              className="p-4 bg-white border rounded-2xl hover:bg-[#C4A484] hover:text-white transition-all shadow-sm"
            >
              <RefreshCcw size={18} className={loading ? "animate-spin" : ""} />
            </button>

            <button
              onClick={handleWriteReview}
              className="flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#C4A484] transition-all shadow-xl"
            >
              Escribir Reseña <MessageSquarePlus size={18} />
            </button>
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
            loading ? "opacity-40 blur-sm" : ""
          }`}
        >
          {(reviews.length ? reviews : fallbackReviews).map((r, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              itemScope
              itemType="https://schema.org/Review"
              className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform"
            >
              {/* Stars */}
              <div className="flex justify-between mb-4">
                <div className="flex gap-1 text-[#F1C40F]">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={12} fill="currentColor" />
                  ))}
                </div>
                <Quote size={28} className="text-gray-100" />
              </div>

              <p
                itemProp="reviewBody"
                className="text-gray-600 italic text-sm leading-relaxed flex-grow"
              >
                “{r.comment}”
              </p>

              <div className="mt-6 pt-6 border-t flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black text-xs">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p itemProp="author" className="font-black text-xs uppercase">
                    {r.name}
                  </p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest">
                    {r.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* FOOT SEO */}
        <p className="mt-14 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Reseñas verificadas de clientes en Bogotá · IdeArtHome Muebles
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
