import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users, Code } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Analista de QA Pleno',
      company: 'Impar Tecnologia',
      location: 'Fortaleza, Ceará - Presencial',
      period: 'Janeiro 2026 - Presente',
      duration: '1+ mês',
      type: 'Full-time',
      description: 'Garantia de qualidade em sistemas críticos de saúde pública, atuando com automação de testes e processos de QA em aplicações web e mobile.',
      achievements: [
        'Automação de testes com Cypress e Selenium',
        'Testes de API REST com validação de contratos',
        'QA em aplicativo mobile com Appium',
        'Criação de scripts e planos de teste para fluxos críticos de SAMU e regulação médica',
        'Integração entre visão de dev e QA no mesmo ciclo de entrega'
      ],
      technologies: ['Cypress', 'Selenium', 'Appium', 'Postman', 'JavaScript', 'Git'],
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Desenvolvedor de Software Nível 2',
      company: 'Impar Tecnologia',
      location: 'Fortaleza, Ceará - Presencial',
      period: 'Setembro 2025 - Janeiro 2026',
      duration: '5+ meses',
      type: 'Full-time',
      description: 'Desenvolvimento de aplicações web modernas e responsivas com foco em performance e experiência do usuário.',
      achievements: [
        'Desenvolvimento de aplicações web com Next.js e React',
        'Implementação de interfaces responsivas com Tailwind CSS',
        'Desenvolvimento com TypeScript para maior segurança de tipos',
        'Criação de componentes reutilizáveis e modulares',
        'Otimização de performance e SEO das aplicações'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'ESLint', 'PostCSS', 'Git'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      title: 'Desenvolvedor Full Stack',
      company: 'Companhia de trade - Freelance',
      location: 'Fortaleza, Ceará - Remoto',
      period: 'Outubro 2025 - Novembro 2025',
      duration: '2+ meses',
      type: 'Freelance',
      description: 'Desenvolvimento de uma plataforma completa de backtesting para estratégias de trading, com foco em performance, modularidade e visualização de dados financeiros.',
      achievements: [
        'Arquitetura modular com motor de backtesting em Python (engine, metrics, visualization, execution)',
        'Cálculo de métricas avançadas: Sharpe Ratio, Max Drawdown, Win Rate, Profit Factor, Expectancy e análises por dia/mês',
        'Frontend full stack com Next.js, TypeScript e Supabase para persistência e autenticação',
        'Lógica de execução de trades com position sizing e gerenciamento de risco configurável',
        'Configuração de deploy com scripts para Linux e Windows'
      ],
      technologies: ['Next.js', 'TypeScript', 'Python', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Git'],
      color: 'from-rose-500 to-pink-600'
    },
    {
      id: 4,
      title: 'Desenvolvedor',
      company: 'Maple Agency - Freelance',
      location: 'Fortaleza, Ceará - Remoto',
      period: 'Julho 2025 - Novembro 2025',
      duration: '5+ meses',
      type: 'Freelance',
      description: 'Desenvolvimento de aplicações em Flutter com foco em qualidade e performance.',
      achievements: [
        'Desenvolvimento de aplicações Flutter completas',
        'Implementação de clean architecture e melhores práticas',
        'Integração com APIs e serviços externos',
        'Entrega de soluções de alta qualidade no prazo',
        'Colaboração eficiente com equipe remota'
      ],
      technologies: ['Flutter', 'Dart', 'APIs REST', 'Git', 'Clean Architecture'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 5,
      title: 'Desenvolvedor',
      company: 'IzzyWay',
      location: 'Fortaleza, Ceará - Presencial',
      period: 'Março 2025 - Agosto 2025',
      duration: '6 meses',
      type: 'Full-time',
      description: 'Atuação em diversas tecnologias e ferramentas para desenvolvimento de soluções robustas e inovadoras.',
      achievements: [
        'Expertise em Flutter, Xamarin e C# para aplicações mobile e web',
        'Trabalho com frameworks .NET Framework e .NET Core',
        'Experiência com SQL e SQL Server para gerenciamento de dados',
        'Desenvolvimento e integração de APIs REST',
        'Vivência em ambientes de computação em nuvem (Azure)',
        'Utilização de Git para controle de versionamento',
        'Adepto de metodologias ágeis (Scrum e Kanban)'
      ],
      technologies: ['Flutter', 'C#', 'Xamarin', '.NET Framework', '.NET Core', 'Git', 'SQL', 'APIs REST', 'Azure', 'Scrum', 'Kanban'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 6,
      title: 'Analista de QA',
      company: 'IzzyWay',
      location: 'Fortaleza, Ceará',
      period: 'Julho 2024 - Março 2025',
      duration: '9 meses',
      type: 'Full-time',
      description: 'Responsável pela elaboração e execução de testes manuais e automatizados em todas as fases do ciclo de vida do desenvolvimento de software.',
      achievements: [
        'Testes com Selenium em C#, Appium em C#, Robot em Python',
        'Execução de testes em ambientes de pré-QA, QA e pré-produção',
        'Detecção precoce de bugs e problemas de qualidade',
        'Configuração de ambientes desktop, web e mobile',
        'Criação de documentações com WordPress e HTML5',
        'Colaboração com desenvolvedores para entender requisitos',
        'Experiência com Azure e metodologia ágil Scrum'
      ],
      technologies: ['Selenium', 'Appium', 'Robot Framework', 'Python', 'C#', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Azure', 'Scrum'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 7,
      title: 'Estagiário de QA',
      company: 'IzzyWay',
      location: 'Fortaleza, Ceará',
      period: 'Março 2024 - Julho 2024',
      duration: '5 meses',
      type: 'Estágio',
      description: 'Início da jornada em qualidade de software com foco em aprendizado e desenvolvimento de competências.',
      achievements: [
        'Documentação de software e processos',
        'Comunicação empresarial eficaz',
        'Conhecimento em banco de dados',
        'Ferramentas de melhoria de qualidade',
        'Programação lógica e acompanhamento de bugs',
        'Experiência com C# e Programação Orientada a Objetos',
        'Utilização de Selenium para testes automatizados'
      ],
      technologies: ['C#', 'POO', 'Selenium', 'SQL', 'Documentação', 'Git'],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 8,
      title: 'Estagiário de Dados e Automação',
      company: 'ChatZDesk Brasil',
      location: 'São Paulo - Remoto',
      period: 'Dezembro 2023 - Março 2024',
      duration: '4 meses',
      type: 'Estágio',
      description: 'Desenvolvimento e manutenção de pipelines de dados para coleta, transformação e análise.',
      achievements: [
        'Implementação de soluções de automação para tarefas repetitivas',
        'Criação de ferramentas para visualização e análise de dados',
        'Colaboração com diversas áreas da empresa',
        'Domínio em análise de dados e automação',
        'Experiência com Docker Swarm e Traefik',
        'Trabalho com RabbitMQ, N8n, Typebot, Appsmith e Supabase',
        'Destaque em comunicação e trabalho em equipe'
      ],
      technologies: ['Python', 'SQL', 'JavaScript', 'PostgreSQL', 'Docker Swarm', 'Traefik', 'RabbitMQ', 'N8n', 'Supabase', 'Git'],
      color: 'from-indigo-500 to-purple-600'
    }
  ]

  const skills = [
    { name: 'Aprendizado Rápido', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Trabalho em Equipe', icon: <Users className="w-5 h-5" /> },
    { name: 'Clean Code', icon: <Code className="w-5 h-5" /> },
    { name: 'Entrega no Prazo', icon: <Award className="w-5 h-5" /> }
  ]

  const education = [
    {
      title: 'Sistemas De Informação (Bacharelado)',
      institution: 'Estácio',
      period: '2020 - 2026',
      description: 'Formação sólida em programação, banco de dados, redes e desenvolvimento de software, com foco em tecnologias modernas e melhores práticas de desenvolvimento.'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Minha jornada como desenvolvedor, com foco em crescimento contínuo
            e entrega de soluções de qualidade.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-slate-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-slate-900 shadow-lg z-10 mt-6"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                <div className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} text-white`}>
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.type === 'Full-time'
                          ? 'bg-green-900/50 text-green-400'
                          : 'bg-blue-900/50 text-blue-400'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-primary-400 font-semibold mb-4">{exp.company}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period} • {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Principais Conquistas:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-slate-400">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700 text-primary-400 rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills & Soft Skills */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Skills */}
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Competências Profissionais</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center p-4 bg-slate-700 rounded-lg"
                >
                  <div className="text-primary-400 mr-3">{skill.icon}</div>
                  <span className="font-medium text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Educação</h3>
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-6 pb-6">
                <h4 className="text-lg font-semibold text-white mb-2">{edu.title}</h4>
                <p className="text-primary-400 font-medium mb-2">{edu.institution}</p>
                <p className="text-slate-400 text-sm mb-3">{edu.period}</p>
                <p className="text-slate-400">{edu.description}</p>
              </div>
            ))}

            {/* Certifications placeholder */}
            <div className="mt-8 p-4 bg-slate-700 rounded-lg">
              <h4 className="font-semibold text-white mb-2">🏆 Próximos Passos</h4>
              <p className="text-slate-400 text-sm">
                Sempre em busca de novas certificações e conhecimentos para me manter atualizado
                com as melhores práticas do mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
