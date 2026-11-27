import { Reveal } from '@/components/reveal'
import { Share2, Target, Mail, CalendarCheck } from 'lucide-react'

const cards = [
  {
    step: '01',
    title: 'Autorité Locale & Diffusion de Biens',
    icon: Share2,
    text: "Quatre carrousels d'expertise par semaine à votre nom sur vos communes, validés en un clic, plus la diffusion express de vos biens conformes Loi Alur et DPE (Nouveaux biens, Sous offre, Vendu) en moins d'une minute.",
    span: 'md:col-span-3',
  },
  {
    step: '02',
    title: 'Capture Ciblée',
    icon: Target,
    text: "Votre page dédiée offre le Guide de la Valorisation Immobilière en échange des coordonnées et de la ville du bien. Seuls les propriétaires réellement intéressés entrent dans votre base.",
    span: 'md:col-span-3',
  },
  {
    step: '03',
    title: 'Relances Automatisées',
    icon: Mail,
    text: "Des séquences d'e-mails envoyées à votre nom éduquent les propriétaires hésitants sur la stratégie de prix et maintiennent votre expertise en tête jusqu'au passage à l'action.",
    span: 'md:col-span-3',
  },
  {
    step: '04',
    title: 'Agenda Qualifié',
    icon: CalendarCheck,
    text: "À chaque étape du parcours, les propriétaires matures peuvent réserver directement un créneau d'Analyse Stratégique de 15 minutes dans vos disponibilités.",
    span: 'md:col-span-3',
  },
]

export function MatrixSection() {
  return (
    <section id="deploiement" className="border-b border-[#333333]/60 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              L&apos;architecture de la solution
            </p>
          </Reveal>
          <Reveal
            delay={0.08}
            as="h2"
            className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl"
          >
            La Matrice.
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-[#a3a3a3] md:text-lg">
              Quatre piliers interconnectés. Une seule mécanique : transformer votre présence
              locale en rendez-vous vendeurs qualifiés.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <Reveal key={card.step} delay={i * 0.08} className={card.span}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-[#333333] bg-[#111111] p-7 transition-colors hover:border-[#d4af37]/60 md:p-9">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#333333] bg-[#0a0a0a] text-[#d4af37]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium tabular-nums text-[#666666]">
                      {card.step}
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-[#a3a3a3] md:text-base">
                      {card.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}