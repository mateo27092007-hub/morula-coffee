import Image from 'next/image'

const products = [
  {
    id: 1,
    type: 'Filter · V60',
    name: 'Etiopía Anaerobic',
    description: 'Fermentación anaerobia de 72 h. Frutas rojas maduras, hibisco seco y un final limpio de bergamota que dura. El mejor de la temporada, sin discusión.',
    price: '€4.80',
    tags: ['Frutos rojos', 'Hibisco', 'Bergamota'],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80',
    dark: false,
    large: true,
  },
  {
    id: 2,
    type: 'Espresso · Doppio',
    name: 'Colombia Gesha Washed',
    description: 'Crema densa color avellana. Melocotón blanco y caña de azúcar. Acidez brillante que no cansa en veinte mililitros de concentración pura.',
    price: '€3.20',
    tags: [],
    image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=700&q=80',
    dark: true,
    large: false,
  },
  {
    id: 3,
    type: 'Leche · Flat White',
    name: 'Perú Cajamarca Natural',
    description: 'Leche de micro-granja a 4 °C. El natural de Cajamarca aporta chocolate con leche y un regusto de nuez tostada que dura diez minutos.',
    price: '€4.20',
    tags: [],
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=700&q=80',
    dark: false,
    large: false,
  },
]

export function Menu() {
  return (
    <section id="menu" className="bg-creamDark py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.22em] text-amber font-medium mb-3">Lo que preparamos</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-espresso">
              Menú de temporada
            </h2>
          </div>
          <p className="reveal text-sm text-stone max-w-[40ch] leading-relaxed">
            Cada preparación nace del perfil de sabor del grano. Ninguna receta es fija;
            todo cambia cuando cambia el origen.
          </p>
        </div>

        {/* Asymmetric grid [large | stack] */}
        <div className="grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-5">

          {/* Large card */}
          <div className="spotlight-card card-shimmer reveal delay-1 bg-cream rounded-3xl overflow-hidden group cursor-default">
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src={products[0].image}
                alt={products[0].name}
                width={900}
                height={506}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-amber uppercase tracking-widest font-medium mb-2">{products[0].type}</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-espresso">{products[0].name}</h3>
                  <p className="text-stone text-sm leading-relaxed mt-3 max-w-[46ch]">{products[0].description}</p>
                </div>
                <span className="shrink-0 text-2xl font-bold text-espresso">{products[0].price}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {products[0].tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-creamDark text-espresso text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right stack */}
          <div className="flex flex-col gap-5">
            {products.slice(1).map((p, i) => (
              <div
                key={p.id}
                className={`spotlight-card card-shimmer reveal delay-${i + 2} rounded-3xl overflow-hidden group cursor-default flex-1
                            ${p.dark ? 'bg-espresso' : 'bg-cream'}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={700}
                    height={393}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105
                                ${p.dark ? 'opacity-80' : ''}`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className={`text-xs uppercase tracking-widest font-medium mb-1.5 ${p.dark ? 'text-amber' : 'text-amber'}`}>
                        {p.type}
                      </p>
                      <h3 className={`font-serif text-xl ${p.dark ? 'text-cream' : 'text-espresso'}`}>{p.name}</h3>
                      <p className={`text-xs leading-relaxed mt-2 max-w-[38ch] ${p.dark ? 'text-stoneLight' : 'text-stone'}`}>
                        {p.description}
                      </p>
                    </div>
                    <span className={`shrink-0 text-xl font-bold ${p.dark ? 'text-cream' : 'text-espresso'}`}>{p.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wide bottom card */}
        <div className="spotlight-card card-shimmer reveal delay-4 mt-5 bg-amber rounded-3xl overflow-hidden group cursor-default
                        grid grid-cols-1 md:grid-cols-[1fr_1.6fr]">
          <div className="overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516743619420-154b70a65fea?w=800&q=80"
              alt="Batch brew en cafetera de cristal"
              width={800}
              height={420}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 aspect-[4/3] md:aspect-auto"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-xs text-cream/70 uppercase tracking-widest font-medium mb-2">Batch Brew · 1 litro</p>
            <h3 className="font-serif text-2xl md:text-3xl text-cream mb-3">Rotación diaria de origen</h3>
            <p className="text-cream/80 text-sm leading-relaxed max-w-[50ch]">
              Cada mañana preparamos un lote de un origen distinto. Sin repetición semanal.
              Tazas para llevar, precio de café de barrio, calidad de campeón de barismo.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-3xl font-bold text-cream">€2.40</span>
              <span className="text-cream/60 text-sm">· por taza · recarga gratis</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
