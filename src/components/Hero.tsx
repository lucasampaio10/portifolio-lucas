import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div className="animate-fade-in">
            <div className="mb-4">
              <span className="px-4 py-2 bg-primary-900/50 text-primary-400 rounded-full text-sm font-medium">
                👋 Olá! Eu sou Desenvolvedor
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Lucas
              <span className="block text-primary-400">Frontend & Mobile</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-400">
                React · Flutter · Next.js
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Desenvolvedor com foco em <strong className="text-slate-200">React</strong>, <strong className="text-slate-200">Next.js</strong> e <strong className="text-slate-200">Flutter</strong>.
              Experiência em projetos reais com entregas em produção e visão de qualidade aplicada ao código.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Next.js', 'TypeScript', 'Flutter', 'React Native', 'C#/.NET', 'Python', 'Azure'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-700 text-slate-300 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Ver Projetos
                <ExternalLink className="ml-2" size={20} />
              </a>

              <a
                href="/Currículo Lucas Sampaio.pdf"
                download="Currículo Lucas Sampaio.pdf"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-400 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Download CV
                <Download className="ml-2" size={20} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-slate-700">
              <div>
                <div className="text-2xl font-bold text-primary-400">2+</div>
                <div className="text-slate-400 text-sm">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400">6</div>
                <div className="text-slate-400 text-sm">Projetos Desenvolvidos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400">20+</div>
                <div className="text-slate-400 text-sm">Tecnologias Dominadas</div>
              </div>
            </div>
          </div>

          {/* Right side - Image/Avatar */}
          <div className="animate-slide-up lg:justify-self-end">
            <div className="relative">
              {/* Placeholder for profile image */}
               <div className="w-80 h-80 mx-auto lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/avatar.png"
                    alt="Lucas - Desenvolvedor Full Stack"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-red-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#skills" className="text-slate-500 hover:text-primary-400 transition-colors duration-200">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
