import { Spotlight } from '@/components/ui/spotlight'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-[100dvh] grid grid-cols-1 md:grid-cols-[55%_45%] pt-16">

      {/* Left: copy */}
      <div className="flex flex-col justify-center px-8 md:pl-16 lg:pl-24 py-16 bg-cream">
        <p className="reveal delay-1 text-xs uppercase tracking-[0.25em] text-amber font-medium mb-6">
          Specialty Coffee · Origen único
        </p>
        <h1 className="reveal delay-2 font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-espresso max-w-[10ch]">
          Del suelo<br />
          <em>a tu taza,</em><br />
          sin rodeos.
        </h1>
        <p className="reveal delay-3 mt-6 text-base text-stone leading-relaxed max-w-[52ch]">
          Tostamos en pequeños lotes con granos de fincas certificadas en Etiopía,
          Colombia y Perú. Cada sorbo lleva el trabajo de quienes cultivan el café
          con cuidado generacional.
        </p>
        <div className="reveal delay-4 mt-10 flex items-center gap-4 flex-wrap">
          <Link
            href="#menu"
            className="btn-tactile inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                       bg-amber text-cream font-semibold text-sm
                       hover:bg-amberLight transition-colors duration-200
                       shadow-[0_4px_20px_-4px_rgba(176,120,64,0.45)]"
          >
            Ver Menú
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                       border border-espresso/20 text-espresso font-medium text-sm
                       hover:border-espresso/50 transition-colors duration-200"
          >
            Nuestra historia
          </Link>
        </div>

        {/* Stats */}
        <div className="reveal delay-4 mt-14 flex items-center gap-8 pt-8 border-t border-espresso/10">
          <div>
            <p className="text-3xl font-bold text-espresso">12</p>
            <p className="text-xs text-stone mt-0.5">Orígenes activos</p>
          </div>
          <div className="h-8 w-px bg-espresso/12" />
          <div>
            <p className="text-3xl font-bold text-espresso">47k</p>
            <p className="text-xs text-stone mt-0.5">Tazas este año</p>
          </div>
          <div className="h-8 w-px bg-espresso/12" />
          <div>
            <p className="text-3xl font-bold text-espresso">2017</p>
            <p className="text-xs text-stone mt-0.5">Desde</p>
          </div>
        </div>
      </div>

      {/* Right: static image — replaces heavy Spline 3D */}
      <div className="hidden md:block relative bg-roast overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(176,120,64,0.5)" />

        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=85"
          alt="Café specialty preparado en V60"
          fill
          className="object-cover opacity-75"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-roast/80 via-transparent to-transparent" />

        {/* Floating badge */}
        <div className="absolute bottom-10 left-8 bg-cream/10 backdrop-blur-md border border-white/10
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] rounded-2xl px-5 py-4 text-cream pointer-events-none z-10">
          <p className="text-xs uppercase tracking-widest text-stoneLight mb-1">Tostado de esta semana</p>
          <p className="font-serif text-lg">Etiopía · Yirgacheffe</p>
          <p className="text-xs text-stoneLight mt-0.5">Jazmín · Bergamota · Melocotón</p>
        </div>
      </div>

    </section>
  )
}
