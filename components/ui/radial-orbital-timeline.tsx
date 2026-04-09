'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowRight, Link, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface TimelineItem {
  id: number
  title: string
  date: string
  content: string
  category: string
  icon: React.ElementType
  relatedIds: number[]
  status: 'completed' | 'in-progress' | 'pending'
  energy: number
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[]
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const [rotationAngle, setRotationAngle] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({})
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)
  const angleRef = useRef(0)
  const rafRef = useRef<number>(0)
  const autoRotateRef = useRef(true)
  const isVisibleRef = useRef(false)

  // Sync ref with state to avoid stale closure in rAF
  useEffect(() => { autoRotateRef.current = autoRotate }, [autoRotate])

  // rAF-based rotation (replaces setInterval — much more efficient)
  useEffect(() => {
    let lastTime = 0
    const loop = (time: number) => {
      rafRef.current = requestAnimationFrame(loop)
      if (!isVisibleRef.current || !autoRotateRef.current) return
      const delta = time - lastTime
      lastTime = time
      // ~0.3 deg per 50ms = 6 deg/s
      angleRef.current = (angleRef.current + (delta / 50) * 0.3) % 360
      setRotationAngle(Number(angleRef.current.toFixed(2)))
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  // Pause when not visible
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting },
      { threshold: 0.1 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const toggleItem = useCallback((id: number) => {
    setExpandedItems(prev => {
      const next: Record<number, boolean> = {}
      Object.keys(prev).forEach(k => { next[parseInt(k)] = false })
      next[id] = !prev[id]

      if (!prev[id]) {
        setActiveNodeId(id)
        setAutoRotate(false)
        const item = timelineData.find(i => i.id === id)
        const pulse: Record<number, boolean> = {}
        item?.relatedIds.forEach(r => { pulse[r] = true })
        setPulseEffect(pulse)
        // Center on node
        const idx = timelineData.findIndex(i => i.id === id)
        const target = 270 - (idx / timelineData.length) * 360
        angleRef.current = target
        setRotationAngle(target)
      } else {
        setActiveNodeId(null)
        setAutoRotate(true)
        setPulseEffect({})
      }
      return next
    })
  }, [timelineData])

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({})
      setActiveNodeId(null)
      setPulseEffect({})
      setAutoRotate(true)
    }
  }

  const calcPos = (index: number) => {
    const angle  = ((index / timelineData.length) * 360 + rotationAngle) % 360
    const rad    = (angle * Math.PI) / 180
    const x      = 200 * Math.cos(rad)
    const y      = 200 * Math.sin(rad)
    const zIndex = Math.round(100 + 50 * Math.cos(rad))
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(rad)) / 2)))
    return { x, y, zIndex, opacity }
  }

  const getStatusStyles = (status: TimelineItem['status']) => {
    if (status === 'completed')   return 'text-white bg-black border-white'
    if (status === 'in-progress') return 'text-black bg-white border-black'
    return 'text-white bg-black/40 border-white/50'
  }

  const getStatusLabel = (status: TimelineItem['status']) => {
    if (status === 'completed')   return 'COMPLETO'
    if (status === 'in-progress') return 'EN CURSO'
    return 'PENDIENTE'
  }

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-espresso overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div className="absolute w-full h-full flex items-center justify-center" ref={orbitRef}
             style={{ perspective: '1000px' }}>

          {/* Centre orb */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-amber via-amberLight to-cream animate-pulse flex items-center justify-center z-10 pointer-events-none">
            <div className="absolute w-20 h-20 rounded-full border border-cream/20 animate-ping opacity-70" />
            <div className="absolute w-24 h-24 rounded-full border border-cream/10 animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
            <div className="w-8 h-8 rounded-full bg-cream/80 backdrop-blur-md" />
          </div>

          {/* Orbit ring */}
          <div className="absolute w-96 h-96 rounded-full border border-cream/10 pointer-events-none" />

          {timelineData.map((item, index) => {
            const pos        = calcPos(index)
            const isExpanded = expandedItems[item.id]
            const isRelated  = activeNodeId ? (timelineData.find(i => i.id === activeNodeId)?.relatedIds.includes(item.id) ?? false) : false
            const isPulsing  = pulseEffect[item.id]
            const Icon       = item.icon

            return (
              <div
                key={item.id}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  zIndex:  isExpanded ? 200 : pos.zIndex,
                  opacity: isExpanded ? 1 : pos.opacity,
                }}
                onClick={e => { e.stopPropagation(); toggleItem(item.id) }}
              >
                {/* Aura */}
                <div
                  className={`absolute rounded-full ${isPulsing ? 'animate-pulse' : ''}`}
                  style={{
                    background: 'radial-gradient(circle, rgba(176,120,64,0.25) 0%, transparent 70%)',
                    width:  `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left:   `-${(item.energy * 0.25)}px`,
                    top:    `-${(item.energy * 0.25)}px`,
                  }}
                />

                {/* Node */}
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2
                  transition-all duration-300
                  ${isExpanded ? 'bg-cream text-espresso border-cream shadow-lg shadow-cream/20 scale-150'
                    : isRelated ? 'bg-amber/50 text-cream border-cream animate-pulse'
                    : 'bg-espresso text-cream border-cream/40'}
                `}>
                  <Icon size={16} />
                </div>

                {/* Label */}
                <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300
                  ${isExpanded ? 'text-cream scale-125' : 'text-cream/70'}`}>
                  {item.title}
                </div>

                {/* Card */}
                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-espresso/95 backdrop-blur-lg border-cream/20 shadow-xl overflow-visible text-cream">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-cream/40" />
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                          {getStatusLabel(item.status)}
                        </Badge>
                        <span className="text-xs font-mono text-cream/50">{item.date}</span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-cream">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-cream/80">
                      <p>{item.content}</p>
                      <div className="mt-4 pt-3 border-t border-cream/10">
                        <div className="flex justify-between items-center mb-1">
                          <span className="flex items-center gap-1"><Zap size={10} /> Intensidad</span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-cream/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-amber to-amberLight" style={{ width: `${item.energy}%` }} />
                        </div>
                      </div>
                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-cream/10">
                          <div className="flex items-center mb-2 gap-1">
                            <Link size={10} className="text-cream/60" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-cream/60">Conectado con</h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map(relId => {
                              const rel = timelineData.find(i => i.id === relId)
                              return (
                                <Button key={relId} variant="outline" size="sm"
                                  className="h-6 px-2 text-xs rounded-none border-cream/20 bg-transparent hover:bg-cream/10 text-cream/80 hover:text-cream"
                                  onClick={e => { e.stopPropagation(); toggleItem(relId) }}>
                                  {rel?.title}
                                  <ArrowRight size={8} className="ml-1 text-cream/50" />
                                </Button>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
