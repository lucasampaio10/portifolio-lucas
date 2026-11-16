'use client'

import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'

type TiltCardProps = {
  children: ReactNode
  className?: string
}

/**
 * Inclina levemente seguindo o mouse, tipo um cartão físico. Fica mais vivo que um `hover:scale`
 * simples sem virar exagero — a rotação é pequena e volta suave quando o mouse sai.
 */
const TiltCard = ({ children, className }: TiltCardProps) => {
  const rotateX = useSpring(0, { stiffness: 220, damping: 22 })
  const rotateY = useSpring(0, { stiffness: 220, damping: 22 })
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - bounds.left) / bounds.width - 0.5
    const py = (event.clientY - bounds.top) / bounds.height - 0.5
    rotateY.set(px * 10)
    rotateX.set(py * -10)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      className={className}
      style={{ transform, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export default TiltCard
