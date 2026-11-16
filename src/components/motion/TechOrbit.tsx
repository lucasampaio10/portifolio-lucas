'use client'

import { motion } from 'framer-motion'
import { Cloud, Code2, Database, GitBranch, Server, Smartphone } from 'lucide-react'

const ORBIT_ICONS = [
  { Icon: Code2, label: 'React / Next.js' },
  { Icon: Smartphone, label: 'Flutter' },
  { Icon: Server, label: '.NET' },
  { Icon: Database, label: 'PostgreSQL' },
  { Icon: Cloud, label: 'Azure' },
  { Icon: GitBranch, label: 'CI/CD' },
]

const RADIUS = 150

/**
 * Anel de tecnologias girando ao redor de um núcleo — decorativo, mas gira de verdade (não é
 * só um hover). Cada ícone contra-rotaciona pra ficar sempre em pé, em vez de girar de ponta-cabeça
 * junto com o anel.
 */
const TechOrbit = () => {
  return (
    <div
      className="relative hidden lg:flex items-center justify-center shrink-0"
      style={{ width: RADIUS * 2 + 64, height: RADIUS * 2 + 64 }}
      aria-hidden="true"
    >
      {/* Anéis guia */}
      <div
        className="absolute rounded-full border border-primary/15"
        style={{ width: RADIUS * 2, height: RADIUS * 2 }}
      />
      <div
        className="absolute rounded-full border border-dashed border-primary/25"
        style={{ width: RADIUS * 2 + 40, height: RADIUS * 2 + 40 }}
      />

      {/* Núcleo */}
      <div className="absolute w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center">
        <motion.div
          className="w-14 h-14 rounded-full bg-primary/25 flex items-center justify-center text-primary font-headline-md text-headline-md"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          LS
        </motion.div>
      </div>

      {/* Anel girando */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {ORBIT_ICONS.map(({ Icon, label }, index) => {
          const angle = (index / ORBIT_ICONS.length) * 2 * Math.PI
          // Arredondado pra evitar divergência de ponto flutuante entre o cálculo de
          // Math.cos/sin no servidor (SSR) e no cliente, que gerava mismatch de hidratação.
          const x = Math.round(RADIUS * Math.cos(angle) * 100) / 100
          const y = Math.round(RADIUS * Math.sin(angle) * 100) / 100

          return (
            <div
              key={label}
              className="absolute top-1/2 left-1/2"
              style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
            >
              {/* Contra-rotação: o anel pai gira 360°, este wrapper gira -360° no mesmo tempo. */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary shadow-lg"
                title={label}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default TechOrbit
