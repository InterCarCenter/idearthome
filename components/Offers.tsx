import React from 'react';
import { MessageCircle, Palette } from 'lucide-react';

const WA_NUMBER = '573123743925';

const materials = [
  {
    name: 'Lino y fibras naturales',
    hint: 'Aspecto fresco, muy usado en decoración contemporánea.',
    img: '/Materiales/lino-1.jpg',
    accent: 'from-[#8B9A7A]/90 to-[#3d4a38]/80',
  },
  {
    name: 'Terciopelo',
    hint: 'Brillo suave y tacto cálido; clásico del tapizado de lujo.',
    img: '/Materiales/pexels-ai25studioai-6843276.jpg',
    accent: 'from-[#4a2c4a]/85 to-[#1a0f1a]/85',
  },
  {
    name: 'Chenille y bouclé',
    hint: 'Textura gruesa y acogedora, tendencia en salas modernas.',
    img: './Materiales/pexels-marina-zasorina-7717498.jpg',
    accent: 'from-[#6b6358]/90 to-[#2a2620]/85',
  },
  {
    name: 'Microfibra técnica',
    hint: 'Resistente al uso diario y fácil de mantener en familia.',
    img: '/Materiales/pexels-enginakyurt-1475033.jpg',
    accent: 'from-[#5a6570]/90 to-[#1e2429]/85',
  },
  {
    name: 'Cuero y similares',
    hint: 'Durabilidad y presencia; natural o sintético según proyecto.',
    img: '/Materiales/pexels-edgar-martinez-2154660358-33425499.jpg',
    accent: 'from-[#5c4033]/90 to-[#2a1a12]/85',
  },
] as const;

type Material = (typeof materials)[number];

function MaterialTile({ m, eager }: { m: Material; eager?: boolean }) {
  return (
    <article
      tabIndex={0}
      className="group relative aspect-square w-full cursor-default overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100 shadow-md ring-0 transition-[box-shadow,transform] duration-500 ease-out hover:shadow-xl hover:shadow-[#005293]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005293] focus-visible:ring-offset-2 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      <img
        src={m.img}
        alt={m.name}
        width={400}
        height={400}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-[transform,filter] duration-700 ease-out will-change-transform group-hover:scale-[1.05] group-focus-visible:scale-[1.05] motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ease-out group-hover:opacity-95 ${m.accent}`}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#005293]/0 transition-colors duration-500 group-hover:bg-[#005293]/5 group-focus-visible:bg-[#005293]/5" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 translate-y-0 p-3 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 sm:p-4">
        <h3 className="text-xs font-black uppercase leading-snug tracking-wide text-white drop-shadow-sm sm:text-sm">
          {m.name}
        </h3>
        <p className="mt-1 text-[11px] font-medium leading-snug text-white/90 drop-shadow-sm sm:text-xs">
          {m.hint}
        </p>
      </div>
    </article>
  );
}

const Offers = () => {
  const [a, b, c, d, e] = materials;

  return (
    <section
      id="telas"
      className="relative overflow-hidden bg-white px-6 py-24 sm:py-28 lg:py-32"
      aria-labelledby="telas-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#005293] opacity-[0.08] blur-[100px]" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#F5CBA7] opacity-[0.18] blur-[90px]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-96 -translate-x-1/2 rounded-full bg-[#005293] opacity-[0.05] blur-[120px]" />
        <div className="absolute right-0 top-1/2 z-0 max-w-[min(55vw,420px)] -translate-y-1/2 translate-x-1/4 select-none text-[clamp(4rem,18vw,11rem)] font-black uppercase leading-none tracking-tighter text-gray-100/90">
          Telas
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="max-w-xl lg:max-w-none lg:pr-6">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-lg bg-[#1A1A1A] p-2 text-white">
              <Palette size={18} aria-hidden />
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#005293] sm:text-[11px] sm:tracking-[0.45em]">
              Tapizados IdeArtHome
            </span>
          </div>

          <h2
            id="telas-heading"
            className="text-5xl font-black uppercase leading-[0.85] tracking-tighter text-[#1A1A1A] min-[380px]:text-6xl md:text-7xl lg:text-8xl"
          >
            NUESTRAS <br />
            <span className="text-[#F5CBA7] italic font-light">TELAS</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005293] to-[#0a6ead]">
              A TU MEDIDA
            </span>
          </h2>

          <div className="mt-8 h-1.5 w-24 rounded-full bg-[#F5CBA7]" />

          <p className="mt-8 text-base font-medium italic leading-relaxed text-gray-500 md:text-lg">
            Manejamos la mayoría de las telas que verás en catálogos internacionales: fibras naturales,
            terciopelo, chenille, microfibra técnica, cuero y más. Te asesoramos para que el tapizado
            combine con tu espacio y aguante el uso real en casa.
          </p>
          <p className="mt-4 text-sm font-medium leading-relaxed text-gray-500 md:text-base">
            Estas son algunas de las familias más pedidas en el mundo del mueble; en tienda tenemos
            muestras y opciones adicionales.
          </p>
          <p className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/80 px-4 py-4 text-sm font-medium leading-relaxed text-gray-600 shadow-sm sm:px-5 sm:text-base">
            En casa somos de sofá compartido con peludos: por eso te contamos que{' '}
            <strong className="font-bold text-[#005293]">
              muchas de nuestras opciones son pet friendly
            </strong>
            —telas pensadas para que convivan bien con perros y gatos, sin renunciar a un acabado
            lindo en tu sala.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              'Hola IdeArtHome, quiero asesoría con telas (y si tienen opciones pet friendly, mejor).',
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#1A1A1A] px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#005293] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005293] focus-visible:ring-offset-2 active:translate-y-0 sm:text-xs sm:tracking-[0.22em]"
          >
            <MessageCircle
              size={20}
              className="shrink-0 text-[#F5CBA7] transition-transform duration-300 group-hover:scale-110 group-hover:text-white"
              aria-hidden
            />
            WhatsApp · Telas
          </a>
        </div>

        <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            <li key={a.name}>
              <MaterialTile m={a} eager />
            </li>
            <li key={b.name}>
              <MaterialTile m={b} eager />
            </li>
            <li key={c.name}>
              <MaterialTile m={c} />
            </li>
            <li key={d.name}>
              <MaterialTile m={d} />
            </li>
          </ul>
          <div className="flex justify-center">
            <div className="w-full max-w-[min(100%,calc(50%-0.375rem))] sm:max-w-[min(100%,calc(50%-0.5rem))]">
              <MaterialTile m={e} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
