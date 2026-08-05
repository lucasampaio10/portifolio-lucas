import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users, Code, GraduationCap } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Engenheiro de Software',
      company: 'Unifor Hub',
      location: 'Fortaleza, Ceará',
      period: 'Julho 2026 - Presente',
      duration: '1+ mês',
      type: 'Full-time',
      description: 'Desenvolvimento da plataforma DIANA (Diagnóstico Integrado de Análise Normativa de Absenteísmo), voltada à conformidade com a NR-1 e à gestão de saúde ocupacional.',
      achievements: [
        'Atuação fullstack: React (web) e React Native (mobile) no frontend, .NET 8 com Clean Architecture e CQRS no backend, PostgreSQL como banco de dados',
        'Modelagem de entidades com Entity Framework Core 8, incluindo Fluent API e interceptors de auditoria',
        'Design de contratos de API REST (estrutura de endpoints, envelope de resposta JSON, padronização de erros)',
        'Desenvolvimento de dashboards e visualização de dados de absenteísmo, com definição de KPIs e componentes gráficos'
      ],
      technologies: ['React', 'React Native', '.NET 8', 'Clean Architecture', 'CQRS', 'Entity Framework Core', 'PostgreSQL'],
    },
    {
      id: 2,
      title: 'Desenvolvedor de Sistemas',
      company: 'MEDGRUPO',
      location: 'Fortaleza, Ceará',
      period: 'Março 2026 - Junho 2026',
      duration: '4 meses',
      type: 'Full-time',
      description: 'Desenvolvimento backend em C#/.NET para plataforma de preparação para provas de residência médica.',
      achievements: [
        'Implementação de consumers RabbitMQ para processamento assíncrono de mensagens',
        'Aplicação de padrões Entity Framework Core e boas práticas de arquitetura em C#/.NET',
        'Participação ativa em revisões de código (PR reviews) e manutenção dos padrões de qualidade da equipe'
      ],
      technologies: ['C#', '.NET', 'RabbitMQ', 'Entity Framework Core'],
    },
    {
      id: 3,
      title: 'Analista de QA Pleno',
      company: 'Impar Tecnologia',
      location: 'Fortaleza, Ceará - Presencial',
      period: 'Janeiro 2026 - Março 2026',
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
    },
    {
      id: 4,
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
    },
    {
      id: 5,
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
    },
    {
      id: 6,
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
    },
    {
      id: 7,
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
    },
    {
      id: 8,
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
    },
    {
      id: 9,
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
    },
    {
      id: 10,
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
    }
  ]

  const skills = [
    { name: 'Aprendizado Rápido', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Trabalho em Equipe', icon: <Users className="w-5 h-5" /> },
    { name: 'Clean Code', icon: <Code className="w-5 h-5" /> },
    { name: 'Entrega no Prazo', icon: <Award className="w-5 h-5" /> }
  ]

  const education = {
    title: 'Sistemas De Informação (Bacharelado)',
    institution: 'Estácio',
    period: '2020 - 2026',
    description: 'Formação sólida em programação, banco de dados, redes e desenvolvimento de software, com foco em tecnologias modernas e melhores práticas de desenvolvimento.'
  }

  return (
    <section id="experience" className="py-xl bg-surface">
      <div className="max-w-container-max mx-auto px-md sm:px-lg">
        {/* Header */}
        <header className="mb-xl">
          <div className="inline-flex items-center gap-sm px-md py-xs rounded-full bg-secondary-container/30 border border-secondary/20 mb-md">
            <Briefcase className="text-secondary" size={16} />
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Jornada Profissional</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
            De estagiário de QA a Engenheiro de Software
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Passei por testes, automação e desenvolvimento — cada etapa me ensinou
            algo que uso até hoje no código que escrevo.
          </p>
        </header>

        {/* Timeline */}
        <div className="flex items-center gap-md mb-lg">
          <div className="w-12 h-[2px] bg-primary"></div>
          <h3 className="font-headline-md text-headline-md text-on-surface">Linha do Tempo</h3>
        </div>

        <div className="relative mb-xl">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary-container to-transparent opacity-20 hidden md:block"></div>

          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex flex-col md:flex-row gap-lg md:pl-20 mb-lg group">
              <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary border-4 border-surface z-10 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>

              <div className="md:w-1/3">
                <span className="font-label-md text-label-md text-primary font-bold">{exp.period}</span>
                <h4 className="font-headline-md text-headline-md text-on-surface mt-xs">{exp.title}</h4>
                <p className="font-label-md text-label-md text-secondary mt-1">{exp.company}</p>
                <div className="flex flex-col gap-xs mt-sm text-sm text-on-surface-variant">
                  <div className="flex items-center gap-xs">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-xs">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <span className={`inline-flex w-fit px-sm py-xs rounded-full font-label-sm text-label-sm mt-xs ${
                    exp.type === 'Full-time'
                      ? 'bg-secondary-container/30 text-secondary'
                      : exp.type === 'Freelance'
                      ? 'bg-tertiary-container/30 text-tertiary'
                      : 'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="md:w-2/3 glass-card p-lg rounded-xl">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-md">
                  {exp.description}
                </p>
                <ul className="space-y-2 mb-md">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-on-surface-variant text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-sm">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="bg-surface-container px-sm py-1 rounded text-label-sm border border-outline-variant/30 text-on-surface-variant">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bento Grid for Skills & Education */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="md:col-span-2 glass-card rounded-2xl p-xl">
            <h4 className="font-headline-lg text-headline-lg text-on-surface mb-lg">Competências Profissionais</h4>
            <div className="grid grid-cols-2 gap-md">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center p-md bg-surface-container-high rounded-lg">
                  <div className="text-primary mr-3">{skill.icon}</div>
                  <span className="font-medium text-on-surface-variant">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-container/20 rounded-2xl p-xl border border-primary/20 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-md">
              <GraduationCap className="text-primary" size={28} />
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-xs">{education.title}</h4>
            <p className="text-primary font-label-md text-label-md mb-xs">{education.institution}</p>
            <p className="text-on-surface-variant text-sm mb-sm">{education.period}</p>
            <p className="text-on-surface-variant text-sm">{education.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
