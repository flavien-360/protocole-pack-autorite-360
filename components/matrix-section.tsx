import { Reveal } from '@/components/reveal'
import { Target, Cpu, Mail, BadgeCheck } from 'lucide-react'

const cards = [
  {
    step: '01',
    title: 'Capture Directe',
    icon: Target,
    text: "Un tunnel de qualification optimisé qui filtre les curieux et ne fait remonter que des vendeurs à réelle intention. Vous ne parlez plus qu'à des prospects déjà chauds.",
    span: 'md:col-span-3',
  },
  {
    step: '02',
    title: 'Moteur Central',
    icon: Cpu,
    text: "L'automatisation des flux et de la donnée. Chaque lead est capté, enrichi, scoré et routé sans intervention manuelle. Le cœur de l'infrastructure.",
    span: 'md:col-span-3',
  },
  {
    step: '03',
    title: 'Nurturing',
    icon: Mail,
    text: "Des séquences de relances emails programmées qui entretiennent la relation et maintiennent votre expertise en tête, jusqu'au déclic du mandat.",
    span: 'md:col-span-3',
  },
  {
    step: '04',
    title: 'Autorité',
    icon: BadgeCheck,
    text: "Des publications d'expertise en continu qui installent votre statut de référence sur votre secteur. On ne vous choisit plus par hasard.",
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
              Quatre modules interconnectés. Une seule mécanique : transformer votre présence
              en flux prévisible de mandats.
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
