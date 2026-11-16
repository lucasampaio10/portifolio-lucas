'use client'

import { useEffect, useState } from 'react'

type ProjectShowcaseProps = {
  images: string[]
  alt: string
  /** Tempo que cada imagem fica em destaque antes de trocar. */
  intervalMs?: number
}

/**
 * Alterna entre duas ou mais imagens com crossfade e um zoom lento (efeito Ken Burns),
 * pra projetos que têm mais de uma coisa pra mostrar (ex: a tela do app e o diagrama
 * da arquitetura por trás dela) sem precisar de um vídeo gravado.
 */
const ProjectShowcase = ({ images, alt, intervalMs = 4200 }: ProjectShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [images.length, intervalMs])

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => {
        const isActive = index === activeIndex

        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`${alt}: ${index === 0 ? 'tela do app' : `visão ${index + 1}`}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="absolute inset-0 w-full h-full object-cover object-left-top transition-opacity ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1.06)' : 'scale(1)',
              transitionDuration: `${intervalMs}ms, ${intervalMs}ms`,
              transitionProperty: 'opacity, transform',
              transitionTimingFunction: 'ease-in-out, linear',
            }}
          />
        )
      })}

      {images.length > 1 && (
        <div className="absolute bottom-md right-md flex gap-xs z-10" aria-hidden="true">
          {images.map((src, index) => (
            <span
              key={src}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex ? 'w-4 bg-on-surface' : 'w-1.5 bg-on-surface/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectShowcase
