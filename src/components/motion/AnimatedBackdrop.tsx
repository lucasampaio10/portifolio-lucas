'use client'

import { motion } from 'framer-motion'

/**
 * Dois borrões de cor derivando devagar atrás da foto do Hero. Só isso já tira a seção do
 * "imagem parada com overlay escuro" — é sutil de propósito, pra não competir com o texto.
 */
const AnimatedBackdrop = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute w-[36rem] h-[36rem] rounded-full bg-primary/20 blur-[110px]"
        animate={{
          x: ['-10%', '14%', '-10%'],
          y: ['-6%', '10%', '-6%'],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '-10%', left: '-6%' }}
      />
      <motion.div
        className="absolute w-[30rem] h-[30rem] rounded-full bg-secondary/10 blur-[110px]"
        animate={{
          x: ['6%', '-12%', '6%'],
          y: ['8%', '-8%', '8%'],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '-12%', right: '-6%' }}
      />
    </div>
  )
}

export default AnimatedBackdrop
