import Link from 'next/link'
import Image from 'next/image'

export function ShaderCTA() {
  return (
    <section className="relative h-[480px] md:h-[560px] overflow-hidden">
      {/* Background image — replaces heavy Three.js WebGL */}
      <Image
        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80"
        alt="Interior cafetería Mórula"
        fill
        className="object-cover"
        loading="lazy"
      />

      {/* Dark overlay with warm tint */}
      <div className="absolute inset-0 bg-espresso/75" />

      {/* Animated grain texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-amber font-medium mb-5">
          Donde empieza todo
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-cream leading-tight tracking-tight max-w-[12ch] mb-6">
          El café que merece tu atención.
        </h2>
        <p className="text-stoneLight text-base max-w-[48ch] leading-relaxed mb-10">
          Ven a nuestra cafetería en Madrid o haz tu pedido online.
          Enviamos en 24 h con empaque diseñado para preservar los aromas.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="#menu"
            className="btn-tactile inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full
                       bg-amber text-cream font-semibold text-sm
                       hover:bg-amberLight transition-colors duration-200
                       shadow-[0_4px_24px_-4px_rgba(176,120,64,0.6)]"
          >
            Ver el menú completo
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                       border border-cream/25 text-cream font-medium text-sm
                       hover:border-cream/50 transition-colors duration-200"
          >
            Nuestra historia
          </Link>
        </div>
      </div>
    </section>
  )
}
