import { Nav }          from '@/components/nav'
import { Hero }         from '@/components/hero'
import { MarqueeStrip } from '@/components/marquee-strip'
import { MenuScroll }   from '@/components/menu-scroll'
import { About }        from '@/components/about'
import { Process }      from '@/components/process'
import { Menu }         from '@/components/menu'
import { ShaderCTA }    from '@/components/shader-cta'
import { Testimonials } from '@/components/testimonials'
import { Footer }       from '@/components/footer'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* 1. Hero — SplineScene 3D interactivo */}
      <Hero />

      {/* 2. Marquee strip */}
      <MarqueeStrip />

      {/* 3. ContainerScroll — showcase del menú */}
      <MenuScroll />

      {/* 4. Sobre Nosotros */}
      <About />

      {/* 5. RadialOrbitalTimeline — proceso del café */}
      <Process />

      {/* 6. Menú de temporada */}
      <Menu />

      {/* 7. ShaderAnimation CTA */}
      <ShaderCTA />

      {/* 8. Testimonios */}
      <Testimonials />

      {/* 9. Footer */}
      <Footer />
    </>
  )
}
