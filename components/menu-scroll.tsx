import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from 'next/image'

export function MenuScroll() {
  return (
    <section className="bg-creamDark overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.22em] text-amber font-medium mb-3">
              Lo que preparamos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
              Cada taza, una decisión.
            </h2>
            <p className="mt-4 text-stone text-base max-w-[52ch] mx-auto leading-relaxed">
              Granos de finca, tostado de la semana pasada, agua filtrada a 93 °C.
              No hay atajos en el camino del origen a tu mesa.
            </p>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=80"
          alt="Menú de Mórula — preparaciones de specialty coffee"
          width={1400}
          height={720}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  )
}
