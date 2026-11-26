'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowUpRight,
  Code2,
  Database,
  GitMerge,
  Inbox,
  Layers,
  LayoutGrid,
  Plug,
  RefreshCw,
  Undo2,
} from 'lucide-react'
import Reveal from './motion/Reveal'
import TiltCard from './motion/TiltCard'

type Decision = {
  icon: ReactNode
  title: string
  description: string
  accent: string
  repo: string
  file: string
  snippet: string
  githubUrl: string
}

const SHOPEASY_BASE = 'https://github.com/lucasampaio10/shopeasy/blob/main/backend/src'
const DATAVIZ_BASE = 'https://github.com/lucasampaio10/dataviz-dashboard/blob/main/backend/src'

const decisions: Decision[] = [
  {
    icon: <Layers className="w-7 h-7" />,
    title: 'Domain-Driven Design',
    description:
      'A regra fica dentro do próprio agregado, não espalhada pelos handlers. O pedido já sabe que não pode ser pago duas vezes — eu só chamo o método certo e ele se vira.',
    accent: 'text-primary bg-primary/15',
    repo: 'shopeasy',
    file: 'Ordering.Domain/Orders/Order.cs',
    snippet: `public void MarkAsPaid(Guid paymentId)
{
    if (Status == OrderStatus.Paid)
        return; // idempotente

    Status = OrderStatus.Paid;
    PaymentId = paymentId;
}`,
    githubUrl: `${SHOPEASY_BASE}/Services/Ordering/ShopEasy.Ordering.Domain/Orders/Order.cs`,
  },
  {
    icon: <GitMerge className="w-7 h-7" />,
    title: 'CQRS',
    description:
      'No DataViz Dashboard isso vira dois serviços: Sales só escreve a venda; Analytics projeta esse evento nas tabelas que o painel consulta. A leitura nunca espera o lado de escrita responder.',
    accent: 'text-secondary bg-secondary/15',
    repo: 'dataviz-dashboard',
    file: 'Analytics.Application/Projections/ProjectSales.cs',
    snippet: `/// Write port of the read model. Each method
/// must be idempotent per event id, because
/// the broker may deliver it more than once.
public interface ISalesProjection
{
    Task Apply(SaleRecordedIntegrationEvent e, ...);
    Task Apply(SaleRefundedIntegrationEvent e, ...);
}`,
    githubUrl: `${DATAVIZ_BASE}/Analytics/DataViz.Analytics.Application/Projections/ProjectSales.cs`,
  },
  {
    icon: <LayoutGrid className="w-7 h-7" />,
    title: 'Clean Architecture',
    description:
      'Domain → Application → Infrastructure → Api, sempre nessa direção. O domínio nem fica sabendo que por trás tem banco, fila ou HTTP — isso é problema da camada de fora.',
    accent: 'text-tertiary bg-tertiary/15',
    repo: 'shopeasy',
    file: 'Ordering.Domain/Orders/IOrderRepository.cs',
    snippet: `namespace ShopEasy.Ordering.Domain.Orders;

public interface IOrderRepository
{
    Task<Order?> GetById(Guid id, CancellationToken ct);
    void Add(Order order);
}`,
    githubUrl: `${SHOPEASY_BASE}/Services/Ordering/ShopEasy.Ordering.Domain/Orders/IOrderRepository.cs`,
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: 'Banco por serviço',
    description:
      'Cada microsserviço tem o seu banco e ninguém bisbilhota tabela alheia. Se um serviço precisa de um dado de outro, ele escuta um evento — quem publica é sempre o dono daquele dado.',
    accent: 'text-primary bg-primary/15',
    repo: 'shopeasy',
    file: 'Catalog.Application/Reservations/ReserveStockWhenOrderPlaced.cs',
    snippet: `internal sealed class ReserveStockWhenOrderPlaced(...)
    : IIntegrationEventHandler<OrderPlacedIntegrationEvent>
{
    // Catalog nunca lê tabela de Ordering.
    // O dado chega pronto, dentro do evento.`,
    githubUrl: `${SHOPEASY_BASE}/Services/Catalog/ShopEasy.Catalog.Application/Reservations/ReserveStockWhenOrderPlaced.cs`,
  },
  {
    icon: <Inbox className="w-7 h-7" />,
    title: 'Transactional Outbox',
    description:
      'O evento é gravado junto com a transação de negócio, na mesma operação de banco. Só depois um processo separado entrega pro broker — assim não existe cenário de "salvei, mas o evento sumiu".',
    accent: 'text-secondary bg-secondary/15',
    repo: 'shopeasy',
    file: 'BuildingBlocks.Infrastructure/Outbox/OutboxPublisher.cs',
    snippet: `var messages = await context.Set<OutboxMessage>()
    .Where(m => m.ProcessedOnUtc == null)
    .OrderBy(m => m.OccurredOnUtc)
    .Take(BatchSize)
    .ToListAsync(ct);

broker.Publish(message.Type, payload, message.Id);
message.MarkAsProcessed(DateTime.UtcNow);`,
    githubUrl: `${SHOPEASY_BASE}/BuildingBlocks/ShopEasy.BuildingBlocks.Infrastructure/Outbox/OutboxPublisher.cs`,
  },
  {
    icon: <RefreshCw className="w-7 h-7" />,
    title: 'Consumidores idempotentes',
    description:
      'No DataViz Dashboard isso é uma tabela: todo evento grava o próprio id antes de aplicar o efeito. Se a fila reentregar, o INSERT da segunda vez simplesmente não acontece — e o resto do processamento para ali.',
    accent: 'text-tertiary bg-tertiary/15',
    repo: 'dataviz-dashboard',
    file: 'Analytics.Infrastructure/ReadModel/SalesProjection.cs',
    snippet: `const string MarkAsProcessed = """
    INSERT INTO processed_events (event_id)
    VALUES (@EventId) ON CONFLICT DO NOTHING
    """;

// só segue se essa foi a primeira entrega
if (!await IsFirstDelivery(eventId)) return;`,
    githubUrl: `${DATAVIZ_BASE}/Analytics/DataViz.Analytics.Infrastructure/ReadModel/SalesProjection.cs`,
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    title: 'Erro previsível não é exceção',
    description:
      '"Produto não encontrado" ou "SKU duplicado" eu trato como Result/Error, e só na borda isso vira um HTTP 404 ou 409. Exception eu guardo pra quando algo realmente quebrou e não devia ter acontecido.',
    accent: 'text-primary bg-primary/15',
    repo: 'shopeasy',
    file: 'BuildingBlocks/Results/Error.cs',
    snippet: `public static Error NotFound(string code, string msg)
    => new(code, msg, ErrorType.NotFound);

public static Error Conflict(string code, string msg)
    => new(code, msg, ErrorType.Conflict);`,
    githubUrl: `${SHOPEASY_BASE}/BuildingBlocks/ShopEasy.BuildingBlocks/Results/Error.cs`,
  },
  {
    icon: <Plug className="w-7 h-7" />,
    title: 'Portas e adaptadores',
    description:
      'O caso de uso só enxerga a interface — um gateway de pagamento, por exemplo. Trocar o provedor de verdade por outro, ou usar uma versão simulada em dev, não mexe em uma linha sequer da regra de negócio.',
    accent: 'text-secondary bg-secondary/15',
    repo: 'shopeasy',
    file: 'Payment.Application/Payments/IPaymentGateway.cs',
    snippet: `public interface IPaymentGateway
{
    Task<ChargeResult> Charge(
        string paymentToken, Money amount, CancellationToken ct);
}`,
    githubUrl: `${SHOPEASY_BASE}/Services/Payment/ShopEasy.Payment.Application/Payments/IPaymentGateway.cs`,
  },
]

type DecisionCardProps = {
  decision: Decision
}

const DecisionCard = ({ decision }: DecisionCardProps) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <TiltCard className="h-full [perspective:1200px]">
      <motion.div
        className="relative h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: 'easeInOut' }}
      >
        {/* Frente: descrição */}
        <div
          className="glass-card rounded-xl p-lg h-full flex flex-col gap-md"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-start justify-between">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${decision.accent}`}>
              {decision.icon}
            </div>
            <button
              type="button"
              onClick={() => setFlipped(true)}
              aria-label={`Ver código de ${decision.title}`}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant/70 hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </button>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface">{decision.title}</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">{decision.description}</p>
        </div>

        {/* Verso: código real */}
        <div
          className="absolute inset-0 glass-card rounded-xl p-lg h-full flex flex-col gap-sm bg-surface-container-high"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-start justify-between gap-sm">
            <div className="min-w-0">
              <span className="font-label-sm text-label-sm text-primary">{decision.repo}</span>
              <span className="block font-mono text-[11px] text-on-surface-variant/70 truncate">{decision.file}</span>
            </div>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              aria-label="Voltar"
              className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-on-surface-variant/70 hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Undo2 className="w-4 h-4" />
            </button>
          </div>
          <pre className="font-mono text-[11px] leading-relaxed text-on-surface-variant overflow-auto flex-1 whitespace-pre">
            <code>{decision.snippet}</code>
          </pre>
          <a
            href={decision.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-xs font-label-sm text-label-sm text-primary hover:text-primary/80 transition-colors"
          >
            Ver arquivo completo
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </TiltCard>
  )
}

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
            moda, mas porque na prática elas resolveram problema de verdade nos dois. Clica no{' '}
            <Code2 className="w-4 h-4 inline-block align-text-bottom" /> de cada card pra ver o
            código de verdade por trás.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          {decisions.map((decision, index) => (
            <Reveal key={decision.title} delay={index * 0.06} className="h-full">
              <DecisionCard decision={decision} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Architecture
