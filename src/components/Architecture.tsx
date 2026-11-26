'use client'

import type { ReactNode } from 'react'
import {
  AlertTriangle,
  ArrowUpRight,
  Database,
  GitMerge,
  Inbox,
  Layers,
  LayoutGrid,
  Plug,
  RefreshCw,
} from 'lucide-react'
import Reveal from './motion/Reveal'
import TiltCard from './motion/TiltCard'

type Decision = {
  icon: ReactNode
  title: string
  description: string
  accent: string
}

const decisions: Decision[] = [
  {
    icon: <Layers className="w-7 h-7" />,
    title: 'Domain-Driven Design',
    description:
      'A regra fica dentro do próprio agregado, não espalhada pelos handlers. O pedido já sabe que não pode ser pago duas vezes — eu só chamo o método certo e ele se vira.',
    accent: 'text-primary bg-primary/15',
  },
  {
    icon: <GitMerge className="w-7 h-7" />,
    title: 'CQRS',
    description:
      'Separo escrita de leitura. Quem muda estado passa pelo domínio e pelas regras; quem só lê vai direto no banco e projeta pro formato que a tela precisa, sem esse caminho todo.',
    accent: 'text-secondary bg-secondary/15',
  },
  {
    icon: <LayoutGrid className="w-7 h-7" />,
    title: 'Clean Architecture',
    description:
      'Domain → Application → Infrastructure → Api, sempre nessa direção. O domínio nem fica sabendo que por trás tem banco, fila ou HTTP — isso é problema da camada de fora.',
    accent: 'text-tertiary bg-tertiary/15',
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: 'Banco por serviço',
    description:
      'Cada microsserviço tem o seu banco e ninguém bisbilhota tabela alheia. Se um serviço precisa de um dado de outro, ele escuta um evento — quem publica é sempre o dono daquele dado.',
    accent: 'text-primary bg-primary/15',
  },
  {
    icon: <Inbox className="w-7 h-7" />,
    title: 'Transactional Outbox',
    description:
      'O evento é gravado junto com a transação de negócio, na mesma operação de banco. Só depois um processo separado entrega pro broker — assim não existe cenário de "salvei, mas o evento sumiu".',
    accent: 'text-secondary bg-secondary/15',
  },
  {
    icon: <RefreshCw className="w-7 h-7" />,
    title: 'Consumidores idempotentes',
    description:
      'Fila entrega pelo menos uma vez, e às vezes duas. Então todo consumer que escrevo aguenta receber a mesma mensagem de novo sem bagunçar nada — ou confere o id da operação, ou confia num índice único do banco.',
    accent: 'text-tertiary bg-tertiary/15',
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    title: 'Erro previsível não é exceção',
    description:
      '"Produto não encontrado" ou "SKU duplicado" eu trato como Result/Error, e só na borda isso vira um HTTP 404 ou 409. Exception eu guardo pra quando algo realmente quebrou e não devia ter acontecido.',
    accent: 'text-primary bg-primary/15',
  },
  {
    icon: <Plug className="w-7 h-7" />,
    title: 'Portas e adaptadores',
    description:
      'O caso de uso só enxerga a interface — um gateway de pagamento, por exemplo. Trocar o provedor de verdade por outro, ou usar uma versão simulada em dev, não mexe em uma linha sequer da regra de negócio.',
    accent: 'text-secondary bg-secondary/15',
  },
]

const Architecture = () => {
  return (
    <section id="architecture" className="py-xl bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-md sm:px-lg">
        <Reveal className="mb-xl max-w-3xl">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-md block">
            Como eu penso arquitetura
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
            Decisões que repito projeto após projeto
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Usei essas mesmas escolhas no ShopEasy e no DataViz Dashboard — não porque estava na
            moda, mas porque na prática elas resolveram problema de verdade nos dois.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          {decisions.map((decision, index) => (
            <Reveal key={decision.title} delay={index * 0.06}>
              <TiltCard className="glass-card rounded-xl p-lg h-full flex flex-col gap-md">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${decision.accent}`}>
                  {decision.icon}
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">{decision.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{decision.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={decisions.length * 0.06} className="mt-lg">
          <a
            href="https://github.com/lucasampaio10/shopeasy/blob/docs/solid-principles/docs/SOLID.md"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-sm font-label-md text-label-md text-primary hover:text-primary/80 transition-colors"
          >
            Quer ver o SOLID aplicado linha a linha? Veja no código do ShopEasy
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Architecture
