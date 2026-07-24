'use client'

import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Coffee,
  Calendar,
  Sparkles
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'lukasrocha0402@gmail.com',
      link: 'mailto:lukasrocha0402@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '+55 (85) 981482193',
      link: 'https://wa.me/5585981482193',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Localização',
      value: 'Brasil - Remoto',
      link: null,
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/lucasampaio10',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/lucassampaio-dev',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:lukasrocha0402@gmail.com',
    },
    {
      name: 'Agendar',
      icon: <Calendar className="w-5 h-5" />,
      url: 'https://calendly.com/lucasrocha0402',
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(formData.subject || 'Contato via Portfólio')
    const body = encodeURIComponent(`
    Nome: ${formData.name}
    Email: ${formData.email}

Mensagem:
${formData.message}
    `)

    window.location.href = `mailto:lukasrocha0402@gmail.com?subject=${subject}&body=${body}`

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-xl bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-md sm:px-lg">
        <div className="max-w-3xl mb-xl">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-md block">Aberto para colaborações</span>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-lg">
            Tem um projeto em mente? <span className="text-primary">Vamos conversar</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
            Pode chamar por email, WhatsApp ou pelo formulário abaixo. Se for só pra tirar uma dúvida
            ou trocar ideia sobre alguma tecnologia, também responde.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Left: Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-lg">
            <div className="glass-card p-lg rounded-xl flex flex-col gap-md">
              {contactInfo.map((info, index) => (
                <div key={info.label}>
                  <div className="flex items-center gap-md">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-on-surface-variant font-medium">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-surface hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-on-surface">{info.value}</p>
                      )}
                    </div>
                  </div>
                  {index < contactInfo.length - 1 && <div className="h-px bg-outline-variant/30 my-md"></div>}
                </div>
              ))}
            </div>

            {/* Status Card */}
            <div className="bg-primary-container/20 border border-primary/20 rounded-xl p-lg flex flex-col items-center text-center gap-md">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Status Atual</p>
                <h4 className="font-headline-md text-headline-md text-on-surface">Aceitando novos projetos</h4>
              </div>
            </div>

            <div className="glass-card p-lg rounded-xl flex items-center gap-md">
              <div className="w-12 h-12 rounded-full bg-tertiary-container/30 flex items-center justify-center text-tertiary shrink-0">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface">Prefere um bate-papo?</h4>
                <p className="text-on-surface-variant text-sm">Chama no WhatsApp ou marca uma call rápida, sem compromisso.</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-md">
              <h5 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Presença Social</h5>
              <div className="grid grid-cols-2 gap-md">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-sm p-md rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors group"
                  >
                    <span className="text-primary group-hover:scale-110 transition-transform">{social.icon}</span>
                    <span className="font-label-md text-label-md text-on-surface">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-xl rounded-xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  <div className="flex flex-col gap-sm">
                    <label htmlFor="name" className="font-label-md text-label-md text-on-surface">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-surface-container-low border border-outline-variant p-md rounded-lg text-body-md text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      placeholder="Lucas Sampaio"
                    />
                  </div>

                  <div className="flex flex-col gap-sm">
                    <label htmlFor="email" className="font-label-md text-label-md text-on-surface">
                      Endereço de Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-surface-container-low border border-outline-variant p-md rounded-lg text-body-md text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-sm">
                  <label htmlFor="subject" className="font-label-md text-label-md text-on-surface">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-surface-container-low border border-outline-variant p-md rounded-lg text-body-md text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="Sobre o que você gostaria de conversar?"
                  />
                </div>

                <div className="flex flex-col gap-sm">
                  <label htmlFor="message" className="font-label-md text-label-md text-on-surface">
                    Conte-me sobre sua visão
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-surface-container-low border border-outline-variant p-md rounded-lg text-body-md text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                    placeholder="Compartilhe alguns detalhes sobre o que você está desenvolvendo..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-md pt-md">
                  <p className="text-label-sm text-on-surface-variant max-w-[240px] text-center sm:text-left">
                    Costumo responder em até 24-48h úteis.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-label-md text-label-md font-bold hover:opacity-90 transition-all"
                  >
                    Enviar Mensagem
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
