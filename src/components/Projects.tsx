'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import { ArrowUpRight, ExternalLink, Github, Play, Server, Smartphone } from 'lucide-react'

type Project = {
  id: number
  title: string
  subtitle: string
  description: string
  /** Capa do card: vídeo, imagem ou, na falta dos dois, o ícone sobre o gradiente. */
  video?: string
  image?: string
  icon?: ReactNode
  technologies: string[]
  status: string
  category: string
  github: string
  demo: string | null
  color: string
  span: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DashInvest',
    subtitle: 'App de Investimentos',
    description: 'Aplicativo Flutter para controle de investimentos com clean architecture, gráficos interativos e análise de portfólio em tempo real. Dashboard personalizado, histórico de transações e notificações push.',
    video: '/dashinvest-demo.mp4',
    technologies: ['Flutter', 'Dart', 'Firebase', 'BLoC Pattern'],
    status: 'Concluído',
    category: 'Mobile',
    github: 'https://github.com/lucasampaio10/DashInvest',
    demo: 'https://github.com/lucasampaio10/DashInvest/releases/tag/portifolio',
    color: 'from-green-500 to-emerald-600',
    span: 'md:col-span-8',
  },
  {
    id: 2,
    title: 'App Financeiro',
    subtitle: 'Controle Pessoal',
    description: 'Controle de receitas e despesas com gráficos dinâmicos, categorização inteligente e sincronização em nuvem via Supabase.',
    video: '/app-financeiro.mp4',
    technologies: ['Flutter', 'Supabase', 'PostgreSQL'],
    status: 'Concluído',
    category: 'Mobile',
    github: 'https://github.com/lucasampaio10/app-financeiro',
    demo: 'https://github.com/lucasampaio10/app-financeiro/releases/tag/portifolio',
    color: 'from-blue-500 to-cyan-600',
    span: 'md:col-span-4',
  },
  {
    id: 3,
    title: 'LifePlus',
    subtitle: 'Questionário de Saúde',
    description: 'Questionários de saúde com cálculo de expectativa de vida, backend Supabase com triggers PL/pgSQL e dashboard administrativo.',
    icon: <Smartphone className="w-10 h-10" />,
    technologies: ['Flutter', 'Supabase', 'PL/pgSQL'],
    status: 'Concluído',
    category: 'Mobile',
    github: 'https://github.com/lucasampaio10/life_pluss',
    demo: 'https://lifeplus-app.vercel.app',
    color: 'from-red-500 to-pink-600',
    span: 'md:col-span-4',
  },
  {
    id: 4,
    title: 'ShopEasy',
    subtitle: 'E-commerce em Microsserviços',
    description: 'Catálogo, pedidos e pagamentos em serviços separados, cada um com seu banco, fechando o pedido por uma saga com compensação de estoque. Outbox transacional e consumidores idempotentes sobre RabbitMQ.',
    icon: <Server className="w-10 h-10" />,
    technologies: ['.NET 8', 'DDD', 'CQRS', 'RabbitMQ', 'PostgreSQL', 'Docker'],
    status: 'Concluído',
    category: 'Backend',
    github: 'https://github.com/lucasampaio10/shopeasy',
    demo: null,
    color: 'from-slate-700 to-slate-900',
    span: 'md:col-span-4',
  },
  {
    id: 5,
    title: 'DataViz Dashboard',
    subtitle: 'Painel de Vendas com CQRS',
    description: 'Um serviço registra as vendas e outro monta, a partir dos eventos, as tabelas que o painel consulta. Escrita e leitura em bancos separados, com indicadores comparados ao período anterior.',
    image: '/projects/dataviz-dashboard.png',
    technologies: ['.NET 8', 'Next.js', 'Chart.js', 'RabbitMQ', 'Docker'],
    status: 'Concluído',
    category: 'Web',
    github: 'https://github.com/lucasampaio10/dataviz-dashboard',
    demo: null,
    color: 'from-cyan-500 to-blue-600',
    span: 'md:col-span-4',
  },
]

const filters = ['Todos', 'Mobile', 'Web', 'Backend']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const visibleProjects = projects.filter(
    (project) => activeFilter === 'Todos' || project.category === activeFilter
  )

  return (
    <section id="projects" className="py-xl bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-md sm:px-lg">
        {/* Header */}
        <div className="mb-xl">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-md block">Projetos Selecionados</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm max-w-2xl">
            Alguns projetos que fiz
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            De app de investimentos a backend em microsserviços — aqui vai uma amostra
            do que já construí, com o código aberto pra quem quiser dar uma olhada.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-lg border-b border-outline-variant/30 pb-md mb-xl">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-label-md text-label-md transition-colors ${
                activeFilter === filter ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
          {visibleProjects.map((project) => (
            <div key={project.id} className={`${project.span} group`}>
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-md bg-surface-container-high">
                {project.video ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="w-full h-full object-cover object-left-top"
                    src={project.image}
                    alt={`Tela do projeto ${project.title}`}
                    loading="lazy"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white`}>
                    {project.icon}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-md left-md flex gap-sm">
                  <span className={`px-sm py-xs rounded-full font-label-sm text-label-sm border border-outline-variant/20 ${
                    project.status === 'Concluído'
                      ? 'bg-surface-container/90 text-on-surface'
                      : 'bg-tertiary-container/90 text-on-tertiary-container'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center gap-sm opacity-0 group-hover:opacity-100">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-sm bg-surface-container rounded-full shadow-lg hover:scale-110 transition-transform"
                      aria-label={`Ver demo de ${project.title}`}
                    >
                      <Play className="w-5 h-5 text-primary" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-sm bg-surface-container rounded-full shadow-lg hover:scale-110 transition-transform"
                    aria-label={`Ver código de ${project.title}`}
                  >
                    <Github className="w-5 h-5 text-on-surface" />
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-start gap-md">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">{project.title}</h3>
                  <p className="text-primary font-label-md text-label-md mb-sm">{project.subtitle}</p>
                  <p className="text-on-surface-variant mb-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-sm">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-sm py-xs bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="text-primary shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="glass-card rounded-xl p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
          <div className="text-center md:text-left">
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Gostou do que viu?</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Isso é só uma parte — tenho outros projetos em andamento e espaço na agenda
              pra novos desafios.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-label-md text-label-md hover:opacity-90 transition-all shrink-0"
          >
            Vamos conversar
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
