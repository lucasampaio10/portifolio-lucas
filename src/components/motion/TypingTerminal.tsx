'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SNIPPETS = [
  "const result = await sender.Send(command);",
  "SELECT * FROM products WHERE stock > 0;",
  "flutter build apk --release",
  "docker compose up -d --build",
]

const TYPE_SPEED_MS = 45
const ERASE_SPEED_MS = 25
const HOLD_MS = 1400

/**
 * Janelinha de terminal digitando código de verdade, um trecho atrás do outro, em loop.
 * Só texto + um cursor piscando — nada de dependência de animação de sintaxe pesada.
 */
const TypingTerminal = () => {
  const [snippetIndex, setSnippetIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'holding' | 'erasing'>('typing')

  useEffect(() => {
    const target = SNIPPETS[snippetIndex]

    if (phase === 'typing') {
      if (text.length < target.length) {
        const timer = setTimeout(() => setText(target.slice(0, text.length + 1)), TYPE_SPEED_MS)
        return () => clearTimeout(timer)
      }
      const timer = setTimeout(() => setPhase('holding'), HOLD_MS)
      return () => clearTimeout(timer)
    }

    if (phase === 'holding') {
      const timer = setTimeout(() => setPhase('erasing'), HOLD_MS)
      return () => clearTimeout(timer)
    }

    // erasing
    if (text.length > 0) {
      const timer = setTimeout(() => setText(target.slice(0, text.length - 1)), ERASE_SPEED_MS)
      return () => clearTimeout(timer)
    }

    setSnippetIndex((current) => (current + 1) % SNIPPETS.length)
    setPhase('typing')
  }, [text, phase, snippetIndex])

  return (
    <motion.div
      className="hidden lg:block w-72 rounded-xl bg-surface-container-high/90 border border-outline-variant/30 backdrop-blur-sm shadow-xl overflow-hidden"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="flex items-center gap-xs px-md py-sm border-b border-outline-variant/20">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-sm font-label-sm text-label-sm text-on-surface-variant/60">terminal</span>
      </div>
      <div className="px-md py-lg font-mono text-xs text-on-surface-variant min-h-[72px]">
        <span className="text-primary">{'>'} </span>
        {text}
        <motion.span
          className="inline-block w-[7px] h-[14px] bg-primary ml-[2px] align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </motion.div>
  )
}

export default TypingTerminal
