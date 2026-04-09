export function MarqueeStrip() {
  const items = [
    'Origen único',
    'Tostado en pequeños lotes',
    'Sin intermediarios',
    'Comercio directo con fincas',
    'Certificado SCA',
  ]

  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="bg-amber py-3.5 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-cream font-medium text-sm tracking-wider mx-8">{item}</span>
            <span className="text-cream/50 mx-1">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
