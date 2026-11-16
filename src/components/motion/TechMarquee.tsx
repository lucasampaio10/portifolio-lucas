'use client'

import { motion } from 'framer-motion'

const STACK = [
  'React', 'Next.js', 'TypeScript', 'Flutter', 'React Native', 'C# / .NET',
  'Node.js', 'PostgreSQL', 'Docker', 'RabbitMQ', 'Azure', 'Python',
]

/**
 * Faixa de tecnologias rolando sem parar — um respiro visual entre o Hero e o resto da página,
 * e uma forma rápida de mostrar a stack toda sem precisar de outra seção de texto.
 */
const TechMarquee = () => {
  const track = [...STACK, ...STACK]

  return (
    <div className="relative w-full overflow-hidden border-y border-outline-variant/20 bg-surface-container-lowest py-md">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-xl w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {track.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="font-label-md text-label-md text-on-surface-variant/70 uppercase tracking-wider whitespace-nowrap flex items-center gap-xl"
          >
            {tech}
            <span className="text-primary/40">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default TechMarquee
