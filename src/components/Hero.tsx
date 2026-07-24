import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'

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
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-md sm:px-lg lg:px-xl py-xl w-full">
        <div className="glass-card max-w-2xl animate-fade-in rounded-2xl p-xl">

          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-lg">
            Lucas Sampaio
            <span className="block text-primary">Full Stack & Mobile</span>
            <span className="block font-body-lg text-body-lg font-normal text-on-surface-variant mt-sm">
              React · Flutter · Next.js
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl leading-relaxed max-w-lg">
            Trabalho com <strong className="text-on-surface">React</strong>, <strong className="text-on-surface">Next.js</strong> e <strong className="text-on-surface">Flutter </strong>
             no dia a dia. Já entreguei vários projetos em produção e venho de QA, então testo o que construo antes de te entregar.
          </p>

          <div className="flex flex-wrap gap-sm mb-xl">
            {['React', 'Next.js', 'TypeScript', 'Flutter', 'React Native', 'C#/.NET', 'Python', 'Azure'].map((tech) => (
              <span
                key={tech}
                className="px-md py-xs bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-md">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-label-md text-label-md hover:opacity-90 transition-all"
            >
              Ver Projetos
              <ArrowRight size={20} />
            </a>

            <a
              href="/Lucas_Sampaio_Curriculo_Desenvolvedor_fullstack.pdf"
              download="Lucas_Sampaio_Curriculo_Desenvolvedor_fullstack.pdf"
              className="bg-surface-container-high inline-flex items-center justify-center gap-sm text-on-surface px-xl py-md rounded-lg font-label-md text-label-md hover:bg-surface-bright transition-all"
            >
              Download CV
              <Download size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-xl mt-xl pt-xl border-t border-outline-variant/30">
            <div>
              <div className="font-headline-md text-headline-md text-primary">3+</div>
              <div className="text-on-surface-variant text-sm">Anos de Experiência</div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary">6</div>
              <div className="text-on-surface-variant text-sm">Projetos Desenvolvidos</div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary">20+</div>
              <div className="text-on-surface-variant text-sm">Tecnologias Dominadas</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#skills" className="text-on-surface-variant hover:text-primary transition-colors duration-200">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
