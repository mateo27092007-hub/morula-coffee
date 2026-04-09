import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-espresso text-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <p className="font-serif text-2xl mb-3">Mórula</p>
            <p className="text-stoneLight text-sm leading-relaxed max-w-[30ch]">
              Del suelo a tu taza, sin rodeos.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram"
                 className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-amber hover:text-amber transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter/X"
                 className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-amber hover:text-amber transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok"
                 className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-amber hover:text-amber transition-colors duration-200">
                <svg width="14" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Horario */}
          <div>
            <p className="text-xs uppercase tracking-widest text-stoneLight mb-4 font-medium">Horario</p>
            <ul className="space-y-2 text-sm text-cream/80">
              <li className="flex justify-between gap-4"><span className="text-stoneLight">Lun–Vie</span><span>07:30 – 20:00</span></li>
              <li className="flex justify-between gap-4"><span className="text-stoneLight">Sábado</span><span>08:00 – 21:00</span></li>
              <li className="flex justify-between gap-4"><span className="text-stoneLight">Domingo</span><span>09:00 – 18:00</span></li>
            </ul>
          </div>

          {/* Ubicación */}
          <div>
            <p className="text-xs uppercase tracking-widest text-stoneLight mb-4 font-medium">Dónde estamos</p>
            <address className="not-italic text-sm text-cream/80 space-y-1">
              <p>Calle de los Olmos 14</p>
              <p>28004 Madrid</p>
              <p className="pt-2 text-stoneLight">Metro: Alonso Martínez</p>
            </address>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-xs uppercase tracking-widest text-stoneLight mb-4 font-medium">Contacto</p>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a href="mailto:hola@morulacoffee.es" className="hover:text-amber transition-colors duration-200">
                  hola@morulacoffee.es
                </a>
              </li>
              <li>
                <a href="tel:+34912847193" className="hover:text-amber transition-colors duration-200">
                  +34 912 847 193
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 gap-4 text-xs text-stoneLight">
          <p>© 2024 Mórula Specialty Coffee S.L. — Madrid</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-cream transition-colors duration-200">Privacidad</Link>
            <Link href="#" className="hover:text-cream transition-colors duration-200">Cookies</Link>
            <Link href="#" className="hover:text-cream transition-colors duration-200">Aviso legal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
