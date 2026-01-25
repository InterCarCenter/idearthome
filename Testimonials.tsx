
import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Star, Quote, MessageSquarePlus, RefreshCcw } from 'lucide-react';

const Testimonials = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRecentReviews = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Genera 4 testimonios realistas y cortos para una tienda de muebles de lujo en Bogotá llamada 'IdeArtHome'. Incluye nombre del cliente (Colombiano), un comentario sobre la calidad de sus sofás o comedores, y una calificación de 5 estrellas. Los comentarios deben sonar naturales y diversos.",
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
              },
              required: ["name", "comment", "rating", "location"]
            }
          }
        }
      });
      
      const data = JSON.parse(response.text || "[]");
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      // Fallback reviews if API fails
      setReviews([
        { name: "Carolina Restrepo", comment: "Mi comedor es la joya de la casa. La madera es impecable.", rating: 5, location: "Chicó, Bogotá" },
        { name: "Juan Pablo Silva", comment: "El sofá modular es comodísimo y llegó justo a tiempo.", rating: 5, location: "Cedritos, Bogotá" },
        { name: "Mariana Gómez", comment: "Excelente atención de Fredy. Me ayudó a elegir la mejor tela.", rating: 5, location: "Colina, Bogotá" },
        { name: "Ricardo Díaz", comment: "Calidad superior. Se nota que son expertos en el 12 de Octubre.", rating: 5, location: "Modelia, Bogotá" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleWriteReview = () => {
    const text = encodeURIComponent("¡Hola IdeArtHome! Quiero compartir mi experiencia con mi nuevo mueble...");
    window.open(`https://wa.me/573123743925?text=${text}`, '_blank');
  };

  useEffect(() => {
    fetchRecentReviews();
  }, []);

  return (
    <section className="py-24 bg-[#F9F9F7] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Título y Acciones - Espaciado reducido */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C4A484] mb-2 block">Opiniones de Clientes</span>
            <h2 className="title-brutalist text-5xl md:text-7xl leading-none text-[#1A1A1A] tracking-tighter">
              Historias Reales, <br />
              <span className="text-[#C4A484]">Hogares Felices</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={fetchRecentReviews}
              className="p-4 bg-white border border-gray-200 rounded-2xl hover:bg-[#C4A484] hover:text-white transition-all shadow-sm group"
              title="Actualizar comentarios"
            >
              <RefreshCcw size={18} className={loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-700'} />
            </button>
            <button 
              onClick={handleWriteReview}
              className="flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#C4A484] transition-all shadow-xl"
            >
              ESCRIBIR RESEÑA <MessageSquarePlus size={18} />
            </button>
          </div>
        </div>

        {/* Grid de Testimonios - Más pegado al título */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 ${loading ? 'opacity-30 blur-sm' : 'opacity-100 blur-0'}`}>
          {(reviews.length > 0 ? reviews : [...Array(4)]).map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:translate-y-[-8px] transition-transform duration-500 group">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1 text-[#F1C40F]">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} size={12} fill={star < (r?.rating || 5) ? "currentColor" : "none"} />
                  ))}
                </div>
                <Quote className="text-gray-100 group-hover:text-[#C4A484]/20 transition-colors" size={32} />
              </div>
              
              <p className="text-gray-600 italic mb-8 leading-relaxed font-medium flex-grow text-sm">
                "{r?.comment || '...'}"
              </p>
              
              <div className="pt-6 border-t border-gray-50 mt-auto flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1A1A1A] to-[#333] rounded-full flex items-center justify-center text-white font-black text-[10px]">
                  {r?.name?.charAt(0) || '?'}
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-tighter">{r?.name || 'Cargando...'}</h4>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{r?.location || 'Bogotá, CO'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer de la sección */}
        <div className="mt-12 text-center">
           <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-100 shadow-sm">
             <div className="flex -space-x-3">
                {[...Array(3)].map((_,i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
             <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-2">
               +500 Familias atendidas en Bogotá
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
