'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import AnimatedBackdrop from './motion/AnimatedBackdrop'
import AnimatedCounter from './motion/AnimatedCounter'
import ParticleField from './motion/ParticleField'
import TechOrbit from './motion/TechOrbit'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/WhatsApp Image 2026-07-24 at 14.47.46.jpeg"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/50"></div>
        <ParticleField />
        <AnimatedBackdrop />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-md sm:px-lg lg:px-xl py-xl w-full flex items-center justify-between gap-xl">
        <motion.div
          className="glass-card max-w-2xl rounded-2xl p-xl"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.h1
            variants={item}
            className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-lg"
          >
            Lucas Sampaio
            <span className="block text-primary">Full Stack & Mobile</span>
            <span className="block font-body-lg text-body-lg font-normal text-on-surface-variant mt-sm">
              React · Flutter · Next.js
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-body-lg text-body-lg text-on-surface-variant mb-xl leading-relaxed max-w-lg"
          >
            Trabalho com <strong className="text-on-surface">React</strong>, <strong className="text-on-surface">Next.js</strong> e <strong className="text-on-surface">Flutter </strong>
             no dia a dia. Já entreguei vários projetos em produção e venho de QA, então testo o que construo antes de te entregar.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-sm mb-xl">
            {['React', 'Next.js', 'TypeScript', 'Flutter', 'React Native', 'C#/.NET', 'Python', 'Azure'].map((tech) => (
              <span
                key={tech}
                className="px-md py-xs bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-md">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity"
            >
              Ver Projetos
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="/Lucas_Sampaio_Curriculo_Desenvolvedor_fullstack.pdf"
              download="Lucas_Sampaio_Curriculo_Desenvolvedor_fullstack.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-surface-container-high inline-flex items-center justify-center gap-sm text-on-surface px-xl py-md rounded-lg font-label-md text-label-md hover:bg-surface-bright transition-colors"
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="flex flex-wrap gap-xl mt-xl pt-xl border-t border-outline-variant/30">
            <div>
              <div className="font-headline-md text-headline-md text-primary">
                <AnimatedCounter value={3} suffix="+" />
              </div>
              <div className="text-on-surface-variant text-sm">Anos de Experiência</div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary">
                <AnimatedCounter value={6} />
              </div>
              <div className="text-on-surface-variant text-sm">Projetos Desenvolvidos</div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary">
                <AnimatedCounter value={20} suffix="+" />
              </div>
              <div className="text-on-surface-variant text-sm">Tecnologias Dominadas</div>
            </div>
          </motion.div>
        </motion.div>

        <TechOrbit />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <a href="#skills" className="text-on-surface-variant hover:text-primary transition-colors duration-200">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
