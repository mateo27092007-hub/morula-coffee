'use client'

import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'
import { Leaf, Sun, Flame, FlaskConical, Coffee, Heart } from 'lucide-react'

const coffeeJourney = [
  {
    id: 1,
    title: 'La Finca',
    date: 'Año 1–4',
    content: 'Todo comienza en altitudes entre 1.500 y 2.200 metros. Los cafetos crecen bajo sombra de árboles nativos. Desde la siembra hasta el primer fruto pasan cuatro años de cuidado.',
    category: 'Origen',
    icon: Leaf,
    relatedIds: [2],
    status: 'completed' as const,
    energy: 100,
  },
  {
    id: 2,
    title: 'Cosecha',
    date: 'Oct–Dic',
    content: 'Solo se recolectan los frutos maduros en su punto exacto. En Etiopía esto se hace a mano, uno a uno, por familias que llevan generaciones en el mismo terreno.',
    category: 'Proceso',
    icon: Sun,
    relatedIds: [1, 3],
    status: 'completed' as const,
    energy: 90,
  },
  {
    id: 3,
    title: 'Proceso',
    date: '72–120 h',
    content: 'Natural, lavado o anaeróbico. Cada método revela perfiles distintos del mismo grano. Trabajamos con productores para definir qué proceso maximiza las notas de cada lote.',
    category: 'Fermentación',
    icon: FlaskConical,
    relatedIds: [2, 4],
    status: 'completed' as const,
    energy: 80,
  },
  {
    id: 4,
    title: 'Tueste',
    date: 'Madrid',
    content: 'En nuestra tostadora de tambor controlamos cada segundo de la curva. Tiempo total: 9–11 minutos. Desarrollo: 20–23%. Tostamos para revelar, no para corregir.',
    category: 'Tostado',
    icon: Flame,
    relatedIds: [3, 5],
    status: 'in-progress' as const,
    energy: 65,
  },
  {
    id: 5,
    title: 'Cata',
    date: 'Cada lote',
    content: 'Antes de salir al bar, cada lote pasa por una sesión de cupping con nuestro equipo. Si no supera 85 puntos SCA, no llega a tu taza. Sin excepciones.',
    category: 'Control',
    icon: Coffee,
    relatedIds: [4, 6],
    status: 'in-progress' as const,
    energy: 50,
  },
  {
    id: 6,
    title: 'Tu Taza',
    date: 'Hoy',
    content: 'El último eslabón de una cadena que tardó meses en construirse. Lo que percibes en boca es el resultado de miles de decisiones tomadas antes de que llegara a tus manos.',
    category: 'Servicio',
    icon: Heart,
    relatedIds: [5],
    status: 'pending' as const,
    energy: 30,
  },
]

export function Process() {
  return (
    <section id="proceso" className="relative">
      {/* Header above the orbital */}
      <div className="bg-espresso pt-20 pb-0 px-6 md:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-amber font-medium mb-3">
          Del origen al servicio
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-4">
          Seis etapas,<br />cero atajos.
        </h2>
        <p className="text-stoneLight text-sm max-w-[50ch] mx-auto leading-relaxed">
          Haz clic en cada nodo para explorar lo que ocurre antes de que el café llegue a tu mesa.
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={coffeeJourney} />
    </section>
  )
}
