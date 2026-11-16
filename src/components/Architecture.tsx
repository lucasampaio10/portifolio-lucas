'use client'

import type { ReactNode } from 'react'
import {
  AlertTriangle,
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
      'A regra de negócio mora no agregado, não no handler. Um pedido sabe sozinho que não pode ser pago duas vezes; o caso de uso só chama o método certo.',
    accent: 'text-primary bg-primary/15',
  },
  {
    icon: <GitMerge className="w-7 h-7" />,
    title: 'CQRS',
    description:
      'Comando muda estado e passa pelo agregado. Query nunca passa pelo domínio: projeta direto do banco pro formato da resposta, sem rastreamento de mudanças no caminho.',
    accent: 'text-secondary bg-secondary/15',
  },
  {
    icon: <LayoutGrid className="w-7 h-7" />,
    title: 'Clean Architecture',
    description:
      'Domain → Application → Infrastructure → Api. A dependência sempre aponta pra dentro: o domínio não sabe que existe banco, fila ou HTTP.',
    accent: 'text-tertiary bg-tertiary/15',
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: 'Banco por serviço',
    description:
      'Em microsserviços, nenhum serviço lê tabela de outro. Quando um precisa de um dado que não é seu, ele vem num evento, publicado por quem é dono daquele dado.',
    accent: 'text-primary bg-primary/15',
  },
  {
    icon: <Inbox className="w-7 h-7" />,
    title: 'Transactional Outbox',
    description:
      'Um evento nunca é publicado direto no broker. Ele é gravado na mesma transação da mudança de negócio, e um processo separado entrega depois. Salvar e perder o evento não é uma opção.',
    accent: 'text-secondary bg-secondary/15',
  },
  {
    icon: <RefreshCw className="w-7 h-7" />,
    title: 'Consumidores idempotentes',
    description:
      'Mensageria entrega pelo menos uma vez, então toda reação a evento tolera chegar duplicada — seja pelo id da operação, seja por um índice único no banco.',
    accent: 'text-tertiary bg-tertiary/15',
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    title: 'Erro previsível não é exceção',
    description:
      '"Produto não encontrado" ou "SKU duplicado" voltam como Result/Error, traduzidos pra HTTP na borda. Exceção fica reservada pra invariante quebrada e falha de verdade inesperada.',
    accent: 'text-primary bg-primary/15',
  },
  {
    icon: <Plug className="w-7 h-7" />,
    title: 'Portas e adaptadores',
    description:
      'A aplicação só conhece a interface (ex: um gateway de pagamento). Trocar o provedor de verdade, ou usar um simulado em dev, não toca em nenhum caso de uso.',
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
            Não são modismos: são escolhas que apareceram de novo no ShopEasy e no DataViz
            Dashboard porque resolvem um problema real, não porque estavam na moda.
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
      </div>
    </section>
  )
}

export default Architecture
