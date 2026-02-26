import { ExternalLink, Github, Play, Smartphone, TrendingUp, Heart, DollarSign } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DashInvest',
      subtitle: 'App de Investimentos',
      description: 'Aplicativo Flutter para controle de investimentos com clean architecture, gráficos interativos e análise de portfólio em tempo real.',
      longDescription: 'Desenvolvido com foco em performance e escalabilidade, utilizando princípios de clean architecture. Inclui dashboard personalizado, histórico de transações e notificações push.',
      icon: <TrendingUp className="w-6 h-6" />,
      video: '/dashinvest-demo.mp4',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Clean Architecture', 'BLoC Pattern'],
      features: [
        'Dashboard interativo com gráficos',
        'Controle de portfólio em tempo real',
        'Histórico detalhado de transações',
        'Notificações push personalizadas'
      ],
      status: 'Concluído',
      github: 'https://github.com/lucasampaio10/DashInvest',
      demo: 'https://github.com/lucasampaio10/DashInvest/releases/tag/portifolio',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 2,
      title: 'App Financeiro',
      subtitle: 'Controle Pessoal',
      description: 'Aplicativo completo para controle de receitas e despesas com gráficos dinâmicos, categorização inteligente e autenticação segura.',
      longDescription: 'Sistema robusto de controle financeiro pessoal com integração Firebase/Supabase, análise de gastos por categoria e relatórios mensais detalhados.',
      icon: <DollarSign className="w-6 h-6" />,
      video: '/app-financeiro.mp4',
      technologies: ['Flutter', 'Supabase', 'PostgreSQL', 'Charts', 'Auth'],
      features: [
        'Controle de receitas e despesas',
        'Gráficos e relatórios detalhados',
        'Categorização automática',
        'Sincronização em nuvem'
      ],
      status: 'Concluído',
      github: 'https://github.com/lucasampaio10/app-financeiro',
      demo: 'https://github.com/lucasampaio10/app-financeiro/releases/tag/portifolio',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      title: 'LifePlus',
      subtitle: 'Questionário de Saúde',
      description: 'App de questionários de saúde com cálculo de expectativa de vida, backend Supabase com triggers PL/pgSQL e dashboard administrativo.',
      longDescription: 'Plataforma completa de avaliação de saúde com algoritmos avançados de cálculo, backend robusto e interface administrativa para análise de dados.',
      icon: <Heart className="w-6 h-6" />,
      image: '/projects/lifeplus.jpg',
      technologies: ['Flutter', 'Supabase', 'PL/pgSQL', 'Triggers', 'Dashboard'],
      features: [
        'Questionários dinâmicos de saúde',
        'Cálculo de expectativa de vida',
        'Backend com triggers e funções',
        'Dashboard administrativo'
      ],
      status: 'Concluído',
      github: 'https://github.com/lucasampaio10/life_pluss',
      demo: 'https://lifeplus-app.vercel.app',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 4,
      title: 'ShopEasy',
      subtitle: 'E-commerce Mobile',
      description: 'Aplicativo de e-commerce completo com carrinho de compras, sistema de pagamentos, reviews de produtos e chat com vendedores.',
      longDescription: 'Plataforma de e-commerce mobile desenvolvida com React Native, oferecendo uma experiência de compra fluida e intuitiva. Inclui sistema de busca avançada, wishlist, notificações push e integração com APIs de pagamento.',
      icon: <TrendingUp className="w-6 h-6" />,
      image: '/projects/shopeasy.jpg',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe API', 'Socket.io', 'Redux'],
      features: [
        'Carrinho de compras com persistência local',
        'Sistema de pagamentos integrado',
        'Chat em tempo real com vendedores',
        'Busca avançada com filtros',
        'Sistema de reviews e avaliações',
        'Notificações push personalizadas'
      ],
      status: 'Em desenvolvimento',
      github: 'https://github.com/lucasrocha0402/shopeasy',
      demo: null,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 5,
      title: 'DataViz Dashboard',
      subtitle: 'Analytics & Visualização',
      description: 'Dashboard interativo para visualização de dados com gráficos dinâmicos, filtros avançados e exportação de relatórios.',
      longDescription: 'Plataforma web para análise e visualização de dados empresariais, desenvolvida com Next.js e TypeScript. Oferece insights em tempo real através de gráficos interativos e relatórios personalizáveis.',
      icon: <TrendingUp className="w-6 h-6" />,
      image: '/projects/dataviz.jpg',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Supabase', 'Tailwind CSS', 'Recharts'],
      features: [
        'Gráficos interativos e responsivos',
        'Filtros avançados por período e categoria',
        'Exportação de relatórios em PDF/Excel',
        'Temas claro e escuro',
        'Dashboard personalizável',
        'Integração com APIs externas'
      ],
      status: 'Concluído',
      github: 'https://github.com/lucasampaio10/traidehubfront',
      demo: 'https://dataviz-dashboard.vercel.app',
      color: 'from-cyan-500 to-blue-600'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Uma seleção dos projetos que desenvolvi, mostrando diferentes tecnologias
            e soluções para problemas reais.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  {project.video ? (
                    <video
                      className="aspect-video w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center">
                      <div className={`p-8 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                        <Smartphone className="w-16 h-16" />
                      </div>
                    </div>
                  )}
                  {/* Overlay with demo/github links */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-xl transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          <Play className="w-5 h-5 text-primary-400" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <Github className="w-5 h-5 text-slate-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Status Badge */}
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Concluído'
                      ? 'bg-green-900/50 text-green-400'
                      : 'bg-yellow-900/50 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-400 font-semibold text-lg">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-lg leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Principais Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-primary-400 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Ver Demo
                      <ExternalLink className="ml-2" size={18} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-slate-600 text-slate-300 hover:border-primary-500 hover:text-primary-400 font-semibold rounded-lg transition-colors duration-200"
                  >
                    Código Fonte
                    <Github className="ml-2" size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-slate-900 rounded-xl p-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Gostou dos projetos?
          </h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Estes são apenas alguns exemplos do meu trabalho. Tenho outros projetos em desenvolvimento
            e sempre aberto a novos desafios!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Vamos conversar?
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
