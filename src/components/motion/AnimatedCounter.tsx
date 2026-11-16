'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

type AnimatedCounterProps = {
  /** Valor final. O texto que vem depois (ex: "+") é passado em `suffix`. */
  value: number
  suffix?: string
  duration?: number
  className?: string
}

/** Conta de 0 até o valor final quando entra na tela — pros números do Hero pararem de ser estáticos. */
const AnimatedCounter = ({ value, suffix = '', duration = 1.4, className }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest).toString())

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, value, { duration, ease: 'easeOut' })
    return controls.stop
  }, [isInView, value, duration, count])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default AnimatedCounter
