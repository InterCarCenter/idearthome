import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Palette, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const WA_NUMBER = '573123743925';

const fabrics = [
  { name: 'Lino Puro', desc: 'Fibra natural, fresca y orgánica.', img: '/Materiales/lino-1.jpg' },
  { name: 'Terciopelo Royal', desc: 'Lujo visual con suavidad extrema.', img: '/Materiales/lino-1.jpg' },
  { name: 'Chenille Cálido', desc: 'Tejido robusto y acogedor.', img: '/Materiales/lino-1.jpg' },
  { name: 'Microfibra Plus', desc: 'Repele líquidos, fácil limpieza.', img: '/Materiales/lino-1.jpg' },
  { name: 'Cuero Sintético', desc: 'Apariencia de cuero, impermeable.', img: '/Materiales/lino-1.jpg' },
  { name: 'Bouclé Nube', desc: 'Textura rizada y muy suave.', img: '/Materiales/lino-1.jpg' },
  { name: 'Jacquard Élite', desc: 'Alta gama con diseño en trama.', img: '/Materiales/lino-1.jpg' },
  { name: 'Canvas Rústico', desc: 'Algodón de alta densidad.', img: '/Materiales/lino-1.jpg' },
  { name: 'Suede Premium', desc: 'Imita la piel de durazno.', img: '/Materiales/lino-1.jpg' },
  { name: 'Pana Clásica', desc: 'Canales verticales resistentes.', img: '/Materiales/lino-1.jpg' },
  { name: 'Lino Sintético', desc: 'Aspecto natural, mayor duración.', img: '/Materiales/lino-1.jpg' },
  { name: 'Terciopelo Mate', desc: 'Acabado sin brillo, muy elegante.', img: '/Materiales/lino-1.jpg' },
  { name: 'Chenille Jaspeado', desc: 'Mezcla de hilos texturizados.', img: '/Materiales/lino-1.jpg' },
  { name: 'Microfibra Pet', desc: 'Anti-rasguños para mascotas.', img: '/Materiales/lino-1.jpg' },
  { name: 'Cuero Vintage', desc: 'Efecto envejecido sofisticado.', img: '/Materiales/lino-1.jpg' },
  { name: 'Bouclé Grueso', desc: 'Rizo marcado para más volumen.', img: '/Materiales/lino-1.jpg' },
  { name: 'Jacquard Floral', desc: 'Patrones clásicos tejidos.', img: '/Materiales/lino-1.jpg' },
  { name: 'Canvas Industrial', desc: 'Ultra resistente al desgaste.', img: '/Materiales/lino-1.jpg' },
  { name: 'Suede Texturizado', desc: 'Tacto cálido con textura.', img: '/Materiales/lino-1.jpg' },
  { name: 'Pana Gruesa', desc: 'Canales anchos, estilo retro.', img: '/Materiales/lino-1.jpg' },
  { name: 'Lino Lavado', desc: 'Caída suave y aspecto relajado.', img: '/Materiales/lino-1.jpg' },
  { name: 'Terciopelo Brillante', desc: 'Refleja la luz con elegancia.', img: '/Materiales/lino-1.jpg' },
  { name: 'Chenille Liso', desc: 'Tacto suave sin textura visual.', img: '/Materiales/lino-1.jpg' },
  { name: 'Microfibra Estampada', desc: 'Diseños modernos y prácticos.', img: '/Materiales/lino-1.jpg' },
  { name: 'Cuero Napa', desc: 'Textura extra suave y fina.', img: '/Materiales/lino-1.jpg' },
  { name: 'Bouclé Bicolor', desc: 'Mezcla de dos tonos en el rizo.', img: '/Materiales/lino-1.jpg' },
  { name: 'Jacquard Geométrico', desc: 'Patrones modernos para acentos.', img: '/Materiales/lino-1.jpg' },
  { name: 'Canvas Suave', desc: 'Resistencia con mejor tacto.', img: '/Materiales/lino-1.jpg' },
  { name: 'Suede Acanalado', desc: 'Combinación de texturas.', img: '/Materiales/lino-1.jpg' },
  { name: 'Tela Anti-Fluidos', desc: 'Máxima protección garantizada.', img: '/Materiales/lino-1.jpg' },
] as const;

const groupedFabrics = [fabrics.slice(0, 15), fabrics.slice(15, 30)];

function useIsMd() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsMd(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isMd;
}

const Fabrics = () => {
  const reduceMotion = useReducedMotion();
  const isMd = useIsMd();
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isMd) setExpandedKey(null);
  }, [isMd]);

  const fabricKey = (rowIndex: number, idx: number) => `${rowIndex}-${idx}`;

  const handleFabricActivate = useCallback(
    (rowIndex: number, idx: number) => {
      if (isMd) return;
      const key = fabricKey(rowIndex, idx);
      setExpandedKey((prev) => (prev === key ? null : key));
      requestAnimationFrame(() => {
        const rowEl = rowRefs.current[rowIndex];
        const card = rowEl?.querySelector<HTMLElement>(`[data-fabric="${key}"]`);
        card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    },
    [isMd],
  );

  const bubbleMotion = reduceMotion
    ? undefined
    : {
        y: [0, -50, 0],
        x: [0, 30, 0],
      };

  const bubbleMotion2 = reduceMotion
    ? undefined
    : {
        y: [0, 60, 0],
        x: [0, -40, 0],
      };

  return (
    <section id="telas" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={bubbleMotion}
          transition={reduceMotion ? { duration: 0 } : { duration: 10, repeat: Infinity }}
          className="absolute left-4 top-10 h-64 w-64 rounded-full bg-[#005293] opacity-[0.08] blur-[80px] md:left-10 md:h-96 md:w-96 md:blur-[100px]"
        />
        <motion.div
          animate={bubbleMotion2}
          transition={reduceMotion ? { duration: 0 } : { duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 right-0 h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-[#FFD700] opacity-[0.08] blur-[100px] md:h-[500px] md:w-[500px] md:blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="mb-12 md:mb-24">
          <div className="mb-4 flex items-center gap-3 md:mb-6">
            <div className="rounded-lg bg-[#1A1A1A] p-2 text-white">
              <Sparkles size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#1A1A1A] md:tracking-[0.4em]">
              Catálogo Premium 2026
            </span>
          </div>

          <h2 className="text-[clamp(2rem,9vw,5rem)] font-black uppercase leading-[0.95] tracking-tighter text-[#1A1A1A] md:text-[6vw] md:leading-[0.9]">
            DESCUBRE <br />
            <span className="font-medium italic text-gray-400">nuestras</span>{' '}
            <span className="italic text-[#F5CBA7]">texturas</span> <span className="text-[#005293]">TELAS</span>
          </h2>
          <div className="mt-6 h-2.5 w-24 rounded-full bg-[#F5CBA7] md:mt-8 md:h-3 md:w-32" />
          {!isMd && (
            <p id="telas-hint-movil" className="mt-4 max-w-md text-xs font-medium text-gray-500">
              Desliza horizontalmente y toca una tela para ver detalles y cotizar.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {groupedFabrics.map((row, rowIndex) => (
            <div
              key={rowIndex}
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
              }}
              className="scrollbar-hide flex h-[min(42svh,380px)] w-full snap-x snap-mandatory gap-1 overflow-x-auto overflow-y-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl [-webkit-overflow-scrolling:touch] [touch-action:pan-x] md:h-[500px] md:snap-none md:overflow-hidden md:rounded-[2rem]"
              role="list"
              aria-label={`Fila ${rowIndex + 1} de telas`}
              aria-describedby={!isMd ? 'telas-hint-movil' : undefined}
            >
              {row.map((fabric, idx) => {
                const key = fabricKey(rowIndex, idx);
                const expanded = !isMd && expandedKey === key;
                const lazy = rowIndex > 0 || idx > 4;

                return (
                  <div
                    key={key}
                    data-fabric={key}
                    role="listitem"
                    tabIndex={0}
                    aria-expanded={!isMd ? expanded : undefined}
                    aria-label={fabric.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFabricActivate(rowIndex, idx);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleFabricActivate(rowIndex, idx);
                      }
                    }}
                    className={[
                      'relative cursor-pointer overflow-hidden transition-[flex,width,min-width] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]',
                      'snap-start flex-shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#005293] focus-visible:ring-offset-2',
                      'w-[76px] min-w-[76px] md:w-auto md:min-w-0 md:flex-1 md:snap-align-none md:transition-all md:duration-700',
                      expanded ? 'z-10 w-[min(82vw,300px)] min-w-[min(82vw,300px)] md:w-auto md:min-w-0' : '',
                      'group md:hover:flex-[6]',
                    ].join(' ')}
                  >
                    <img
                      src={fabric.img}
                      alt={fabric.name}
                      width={400}
                      height={600}
                      loading={lazy ? 'lazy' : 'eager'}
                      decoding="async"
                      className={[
                        'absolute inset-0 h-full w-full object-cover transition-all duration-500 md:duration-700',
                        expanded ? 'brightness-100' : 'brightness-[0.78]',
                        'md:brightness-[0.75] md:group-hover:brightness-100',
                      ].join(' ')}
                    />

                    <div
                      className={[
                        'absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 md:items-end md:justify-center md:pb-10',
                        expanded ? 'pointer-events-none opacity-0 md:opacity-100' : '',
                        'md:group-hover:opacity-0',
                      ].join(' ')}
                    >
                      <div className="rounded-sm bg-white/90 px-2.5 py-1 shadow-lg backdrop-blur-md md:-translate-y-12 md:-rotate-90 md:px-3 md:py-1.5">
                        <h3 className="text-[8px] font-black uppercase tracking-[0.15em] text-[#1A1A1A] md:tracking-[0.2em]">
                          {fabric.name}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={[
                        'absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/50 to-transparent p-4 transition-opacity duration-500 md:p-8 md:duration-700 md:delay-75',
                        expanded ? 'opacity-100 delay-0' : 'opacity-0',
                        'md:opacity-0 md:group-hover:opacity-100',
                      ].join(' ')}
                    >
                      <div
                        className={[
                          'transition-all duration-500 md:translate-y-8 md:opacity-0 md:delay-150',
                          expanded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                          'md:group-hover:translate-y-0 md:group-hover:opacity-100',
                        ].join(' ')}
                      >
                        <h3 className="mb-1.5 text-xl font-black uppercase leading-none text-white drop-shadow-lg md:mb-2 md:text-2xl lg:text-3xl">
                          {fabric.name}
                        </h3>
                        <p className="mb-4 max-w-[220px] text-[10px] font-medium leading-relaxed text-gray-300 drop-shadow-md md:mb-6 md:max-w-sm md:text-xs">
                          {fabric.desc}
                        </p>

                        <a
                          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                            `Hola, me encantó la tela ${fabric.name}. ¿Me pueden dar más información?`,
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex w-max items-center gap-2 rounded-full bg-[#F5CBA7] px-4 py-2.5 text-[9px] font-black uppercase tracking-widest text-[#1A1A1A] shadow-xl transition-colors hover:bg-[#005293] hover:text-white md:px-5 md:py-3 md:text-[10px]"
                        >
                          <Palette size={14} aria-hidden /> Cotizar
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fabrics;
