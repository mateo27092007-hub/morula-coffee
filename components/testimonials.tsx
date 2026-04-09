const testimonials = [
  {
    quote: 'Llevo cinco años buscando un flat white que no me haga arrepentirme a la mitad. En Mórula lo encontré en la primera visita. No he vuelto a buscar.',
    name: 'Beatriz Alcántara',
    role: 'Diseñadora · cliente desde 2019',
    initials: 'BA',
    bg: 'bg-amber',
    dark: true,
  },
  {
    quote: 'Pedí el Etiopía Anaerobic sin saber qué esperaba. Me serviste un vaso y tardé un minuto en entender lo que estaba tomando. Fermentación anaerobia en V60. Impresionante.',
    name: 'Marco Ferretti',
    role: 'Fotógrafo · Q Grader aficionado',
    initials: 'MF',
    bg: 'bg-roast',
    dark: false,
  },
  {
    quote: 'Soy barista en otra ciudad. Vine en viaje de trabajo y acabé pasando la tarde aquí preguntando sobre el proceso. El equipo sabe exactamente lo que hace.',
    name: 'Nadia Overbeck',
    role: 'Head Barista · Düsseldorf',
    initials: 'NO',
    bg: 'bg-stone',
    dark: false,
  },
]

const QuoteSVG = () => (
  <svg className="text-amber mb-5" width="20" height="16" viewBox="0 0 20 16" fill="currentColor">
    <path d="M0 16V9.6C0 4.267 2.667 1.067 8 0l1.067 1.6C6.4 2.4 4.8 4 4.267 6.4H8V16H0zm12 0V9.6C12 4.267 14.667 1.067 20 0l1.067 1.6C18.4 2.4 16.8 4 16.267 6.4H20V16h-8z" />
  </svg>
)

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-cream py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal mb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-amber font-medium mb-3">Lo que dicen</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-espresso">
            Sin guiones,<br />sin regalos.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_0.9fr] gap-6 items-start">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${i + 1} spotlight-card rounded-3xl p-8 md:p-9
                          ${i === 0 ? 'bg-espresso md:-mt-8' : i === 2 ? 'bg-cream border border-espresso/10 md:mt-6' : 'bg-creamDark'}`}
            >
              <QuoteSVG />
              <p className={`text-base leading-relaxed mb-7 ${t.dark ? 'text-cream/90' : 'text-espresso/85'}`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className={`flex items-center gap-3 pt-5 border-t ${t.dark ? 'border-white/10' : 'border-espresso/10'}`}>
                <div className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center shrink-0`}>
                  <span className="text-cream text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className={`text-sm font-semibold ${t.dark ? 'text-cream' : 'text-espresso'}`}>{t.name}</p>
                  <p className={`text-xs ${t.dark ? 'text-stoneLight' : 'text-stone'}`}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
