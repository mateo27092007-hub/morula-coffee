'use client'

import Link from 'next/link'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-espresso/8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link href="#" className="font-serif text-xl text-espresso tracking-tight">
          Mórula
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone">
          <Link href="#about"       className="hover:text-espresso transition-colors duration-200">Nosotros</Link>
          <Link href="#proceso"     className="hover:text-espresso transition-colors duration-200">Proceso</Link>
          <Link href="#menu"        className="hover:text-espresso transition-colors duration-200">Menú</Link>
          <Link href="#testimonios" className="hover:text-espresso transition-colors duration-200">Reseñas</Link>
        </div>
        <Link
          href="#menu"
          className="btn-tactile hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                     bg-espresso text-cream text-sm font-medium hover:bg-roast transition-colors duration-200"
        >
          Ver Menú
        </Link>
      </div>
    </nav>
  )
}
