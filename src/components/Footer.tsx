import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest text-on-surface py-xl">
      <div className="max-w-container-max mx-auto px-md sm:px-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-md">
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="font-headline-md text-headline-md font-bold mb-sm">
              Lucas<span className="text-primary">Dev</span>
            </div>
            <p className="text-on-surface-variant text-sm max-w-md">
              Desenvolvedor Frontend & Mobile, trabalho com React, Next.js e Flutter.
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-lg">
            <a
              href="https://github.com/lucasampaio10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucassampaio-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:lukasrocha0402@gmail.com"
              className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-lg pt-lg border-t border-outline-variant/20 text-center">
          <p className="text-on-surface-variant text-sm flex items-center justify-center">
            Feito com <Heart size={16} className="mx-1 text-tertiary" /> por Lucas
            <span className="mx-2">•</span>
            © 2026 Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
