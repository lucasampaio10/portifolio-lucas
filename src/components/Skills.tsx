import {
  Smartphone,
  Server,
  Cloud,
  Database,
  Code,
  TestTube,
  GitBranch,
  Container,
  Settings,
  Heart
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      accent: 'text-primary bg-primary/20',
      span: 'md:col-span-8',
      description: 'Interfaces responsivas, acessíveis e performáticas, com foco na experiência de quem usa.',
      skills: ['Flutter', 'React Native', 'Xamarin', 'React/Next.js', 'TypeScript'],
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="w-8 h-8" />,
      accent: 'text-secondary bg-secondary/20',
      span: 'md:col-span-4',
      description: 'APIs robustas e bancos de dados bem modelados.',
      skills: ['C#/.NET', 'NestJS', 'APIs REST', 'Supabase', 'PostgreSQL', 'SQL Server', 'MongoDB'],
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-8 h-8" />,
      accent: 'text-tertiary bg-tertiary/20',
      span: 'md:col-span-6',
      description: 'Infraestrutura e deploy pensados para escalar sem dor de cabeça.',
      skills: ['Docker', 'Docker Swarm', 'Azure', 'Traefik', 'CI/CD'],
    },
    {
      title: 'Ferramentas & Automação',
      icon: <TestTube className="w-8 h-8" />,
      accent: 'text-primary bg-primary/20',
      span: 'md:col-span-6',
      description: 'Versionamento, automação e testes que dão confiança para entregar.',
      skills: ['Git/GitHub', 'Prisma', 'N8n', 'RabbitMQ', 'Testes Automatizados'],
    },
  ]

  const tools = [
    { name: 'VS Code', icon: <Code className="w-6 h-6" /> },
    { name: 'Git', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'Docker', icon: <Container className="w-6 h-6" /> },
    { name: 'SQL', icon: <Database className="w-6 h-6" /> },
    { name: 'Azure', icon: <Cloud className="w-6 h-6" /> },
    { name: 'N8n', icon: <Settings className="w-6 h-6" /> },
  ]

  return (
    <section id="skills" className="py-xl bg-surface">
      <div className="max-w-container-max mx-auto px-md sm:px-lg">
        {/* Header */}
        <div className="mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
            Áreas de Atuação
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Do backend ao mobile, essas são as tecnologias que uso no dia a dia
            para tirar um projeto do papel e colocar em produção.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg mb-xl">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`${category.span} glass-card hover-lift rounded-xl p-lg flex flex-col justify-between min-h-[280px] transition-transform duration-300 hover:-translate-y-1`}
            >
              <div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-md ${category.accent}`}>
                  {category.icon}
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">{category.title}</h3>
                <p className="text-on-surface-variant max-w-sm">{category.description}</p>
              </div>
              <div className="mt-xl flex gap-sm flex-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-md py-xs bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="text-center mb-xl">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Ferramentas do Dia a Dia</h3>
          <div className="flex flex-wrap justify-center gap-md">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center p-md bg-surface-container-high rounded-lg"
              >
                <div className="text-primary mb-sm">{tool.icon}</div>
                <span className="text-sm font-medium text-on-surface-variant">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="bg-primary-container/20 border border-primary/20 rounded-xl p-xl text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-md">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-md">O que me diferencia</h3>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-3xl mx-auto">
            Passei por QA antes de virar desenvolvedor, e isso muda a forma como eu escrevo código: penso em casos de borda,
            escrevo teste e reviso a própria entrega antes de considerar algo pronto.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
