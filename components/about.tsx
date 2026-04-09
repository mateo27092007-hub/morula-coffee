import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-center">

          {/* Left: image offset */}
          <div className="relative reveal-left">
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&q=80"
              alt="Barista revisando granos verdes de café"
              width={700}
              height={875}
              className="w-full rounded-3xl object-cover aspect-[4/5]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-espresso text-cream rounded-2xl px-6 py-5
                            shadow-[0_20px_40px_-12px_rgba(28,20,16,0.35)]">
              <p className="text-3xl font-bold">86+</p>
              <p className="text-xs text-stoneLight mt-0.5">Puntos SCA promedio</p>
            </div>
          </div>

          {/* Right: copy */}
          <div className="reveal-right">
            <p className="text-xs uppercase tracking-[0.22em] text-amber font-medium mb-5">Nuestra filosofía</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-espresso mb-6">
              El café es un<br />argumento de origen.
            </h2>
            <p className="text-stone leading-relaxed mb-5 max-w-[58ch]">
              Mórula nació de una obsesión simple: entender de dónde viene el sabor.
              Viajamos dos veces al año a las fincas, conocemos a quienes cuidan la tierra,
              y pagamos un precio que hace sostenible su trabajo.
            </p>
            <p className="text-stone leading-relaxed mb-10 max-w-[58ch]">
              En nuestra tostadora de Madrid controlamos cada variable — temperatura de tambor,
              curva de desarrollo, tiempo total — para que en tu taza llegue exactamente lo que
              el agricultor cultivó con años de conocimiento.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-8 border-t border-espresso/10">
              <div>
                <p className="text-xl font-bold text-espresso mb-0.5">Etiopía · Colombia</p>
                <p className="text-sm text-stone">Orígenes principales de temporada</p>
              </div>
              <div>
                <p className="text-xl font-bold text-espresso mb-0.5">Lunes–Viernes</p>
                <p className="text-sm text-stone">Tostado fresco cada semana</p>
              </div>
              <div>
                <p className="text-xl font-bold text-espresso mb-0.5">+18 baristas</p>
                <p className="text-sm text-stone">Certificados por la SCA</p>
              </div>
              <div>
                <p className="text-xl font-bold text-espresso mb-0.5">0 aditivos</p>
                <p className="text-sm text-stone">Solo café, agua y tiempo</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
