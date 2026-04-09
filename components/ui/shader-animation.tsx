'use client'

import { useEffect, useRef } from 'react'

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationIdRef = useRef<number>(0)
  const rendererRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    let THREE: any

    const init = async () => {
      THREE = await import('three')

      const vertexShader = `void main() { gl_Position = vec4(position, 1.0); }`
      const fragmentShader = `
        precision highp float;
        uniform vec2 resolution;
        uniform float time;
        void main(void) {
          vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
          float t = time * 0.05;
          float lineWidth = 0.002;
          vec3 color = vec3(0.0);
          for(int j = 0; j < 3; j++){
            for(int i = 0; i < 5; i++){
              color[j] += lineWidth * float(i*i) / abs(
                fract(t - 0.01*float(j) + float(i)*0.01)*5.0
                - length(uv)
                + mod(uv.x + uv.y, 0.2)
              );
            }
          }
          gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
        }
      `

      const camera = new THREE.Camera()
      camera.position.z = 1
      const scene = new THREE.Scene()
      const geometry = new THREE.PlaneGeometry(2, 2)
      const uniforms = {
        time:       { value: 1.0 },
        resolution: { value: new THREE.Vector2() },
      }
      const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
      scene.add(new THREE.Mesh(geometry, material))

      const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'low-power' })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      rendererRef.current = renderer
      container.appendChild(renderer.domElement)

      const onResize = () => {
        renderer.setSize(container.clientWidth, container.clientHeight)
        uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height)
      }
      onResize()
      window.addEventListener('resize', onResize, false)

      let frameCount = 0
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate)
        frameCount++
        // Render every other frame (30fps cap) to save GPU
        if (frameCount % 2 === 0) {
          uniforms.time.value += 0.05
          renderer.render(scene, camera)
        }
      }

      // Only animate when visible
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate()
          } else {
            cancelAnimationFrame(animationIdRef.current)
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(container)

      return () => {
        observer.disconnect()
        window.removeEventListener('resize', onResize)
        cancelAnimationFrame(animationIdRef.current)
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
        renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }

    let cleanup: (() => void) | undefined
    init().then(fn => { cleanup = fn })
    return () => { cleanup?.() }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full" style={{ background: '#000', overflow: 'hidden' }} />
  )
}
