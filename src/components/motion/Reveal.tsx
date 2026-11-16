'use client'

import { motion, Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Atraso em segundos, útil pra escalonar uma lista de itens entrando em sequência. */
  delay?: number
  /** De onde o elemento "vem" ao entrar. */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  /** Distância percorrida na entrada, em px. */
  distance?: number
}

const offsetFor = (direction: RevealProps['direction'], distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance }
    case 'down':
      return { y: -distance }
    case 'left':
      return { x: distance }
    case 'right':
      return { x: -distance }
    default:
      return {}
  }
}

/**
 * Revela o conteúdo com um fade + leve deslocamento quando ele entra na viewport.
 * `once: true` pra não ficar reanimando toda vez que o usuário sobe e desce a página.
 */
const Reveal = ({ children, delay = 0, direction = 'up', className, distance = 28 }: RevealProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, ...offsetFor(direction, distance) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
