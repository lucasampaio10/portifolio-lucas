'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Snippet = {
  content: ReactNode
  top: string
  left?: string
  right?: string
  /** Esconde em telas pequenas, pra não lotar o Hero no mobile. */
  hiddenOnMobile?: boolean
  duration: number
  delay: number
  rotate: number
}

const kw = (text: string) => <span className="text-primary">{text}</span>
const str = (text: string) => <span className="text-tertiary">{text}</span>
const fn = (text: string) => <span className="text-secondary">{text}</span>

const SNIPPETS: Snippet[] = [
  {
    content: (
      <>
        {kw('const')} {fn('useOrder')} = () {'=>'} {'{}'}
      </>
    ),
    top: '10%',
    left: '3%',
    duration: 7,
    delay: 0,
    rotate: -4,
  },
  {
    content: (
      <>
        {kw('SELECT')} * {kw('FROM')} orders;
      </>
    ),
    top: '66%',
    left: '2%',
    duration: 8,
    delay: 0.6,
    rotate: 3,
    hiddenOnMobile: true,
  },
  {
    content: (
      <>
        {'<'}Widget state={'{'}{str("'live'")}{'}'} {'/>'}
      </>
    ),
    top: '28%',
    right: '4%',
    duration: 9,
    delay: 0.3,
    rotate: 5,
    hiddenOnMobile: true,
  },
  {
    content: (
      <>
        {kw('public class')} OrderService
      </>
    ),
    top: '80%',
    right: '6%',
    duration: 7.5,
    delay: 1,
    rotate: -3,
    hiddenOnMobile: true,
  },
  {
    content: (
      <>
        git commit -m {str('"feat: ship it"')}
      </>
    ),
    top: '4%',
    right: '20%',
    duration: 8.5,
    delay: 0.9,
    rotate: 2,
    hiddenOnMobile: true,
  },
]

/**
 * Pedaços de código soltos, flutuando devagar pelo Hero — o "isso aqui é o que eu faço"
 * dito de um jeito mais vivo do que uma lista de badges. Decorativo e fora do fluxo de leitura.
 */
const FloatingCodeSnippets = () => {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none select-none" aria-hidden="true">
      {SNIPPETS.map((snippet, index) => (
        <motion.div
          key={index}
          className={`absolute font-mono text-xs sm:text-sm px-sm py-xs rounded-lg bg-surface-container-high/80 border border-outline-variant/20 backdrop-blur-sm text-on-surface-variant shadow-lg ${
            snippet.hiddenOnMobile ? 'hidden sm:block' : ''
          }`}
          style={{ top: snippet.top, left: snippet.left, right: snippet.right }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.9, 0.9, 0],
            y: [0, -16, 0],
            rotate: [0, snippet.rotate, 0],
          }}
          transition={{
            duration: snippet.duration,
            delay: snippet.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {snippet.content}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingCodeSnippets
