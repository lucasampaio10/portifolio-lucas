'use client'

import { useEffect, useRef } from 'react'

type Particle = { x: number; y: number; vx: number; vy: number }

const PARTICLE_COUNT = 46
const LINK_DISTANCE = 130
const LINE_COLOR = '176, 198, 255' // --primary em RGB, pra desenhar com opacidade variável

/**
 * Rede de pontos se movendo devagar e se conectando quando ficam perto — um fundo que nunca
 * para, sem pesar a página (canvas puro, sem lib de partículas). Respeita quem pediu menos
 * movimento no sistema.
 */
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let frameId: number

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = canvas.width = parent.clientWidth
      height = canvas.height = parent.clientHeight
    }

    const spawn = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)

      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        ctx.beginPath()
        ctx.arc(a.x, a.y, 1.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${LINE_COLOR}, 0.6)`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.hypot(dx, dy)
          if (distance < LINK_DISTANCE) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${0.18 * (1 - distance / LINK_DISTANCE)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      frameId = requestAnimationFrame(step)
    }

    resize()
    spawn()
    step()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}

export default ParticleField
