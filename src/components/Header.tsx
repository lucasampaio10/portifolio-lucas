'use client'

import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 z-50">
      <div className="max-w-container-max mx-auto px-md sm:px-lg">
        <div className="flex justify-between items-center py-md">
          {/* Logo/Name */}
          <div className="font-headline-md text-headline-md font-bold text-on-surface">
            Portifolio.Lucas
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-xl items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links + CV */}
          <div className="hidden md:flex items-center gap-lg">
            <div className="flex items-center gap-md">
              <a
                href="https://github.com/lucasampaio10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lucassampaio-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:lukasrocha0402@gmail.com"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
            <a
              href="/Lucas_Sampaio_Curriculo_Desenvolvedor_fullstack.pdf"
              download="Lucas_Sampaio_Curriculo_Desenvolvedor_fullstack.pdf"
              className="inline-flex items-center gap-sm bg-primary-container text-on-primary-container px-lg py-sm rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Currículo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-md border-t border-outline-variant/20">
            <nav className="flex flex-col gap-md">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-md mt-md pt-md border-t border-outline-variant/20">
              <a
                href="https://github.com/lucasampaio10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lucassampaio-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:lukasrocha0402@gmail.com"
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href="/Lucas_Sampaio_Curriculo_Desenvolvedor_fullstack.pdf"
                download="Lucas_Sampaio_Curriculo_Desenvolvedor_fullstack.pdf"
                className="inline-flex items-center gap-sm bg-primary-container text-on-primary-container px-md py-xs rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity ml-auto"
              >
                <Download size={16} />
                Currículo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
