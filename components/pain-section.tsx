import { Reveal } from '@/components/reveal'

export function PainSection() {
  return (
    <section className="border-b border-[#333333]/60 bg-[#0a0a0a]">
      <div className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#666666]">
            Pourquoi la méthode classique est morte
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          as="h2"
          className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl"
        >
          La prospection manuelle s&apos;effondre.
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <Reveal delay={0.12}>
            <div className="flex flex-col">
              <span className="text-6xl font-semibold tracking-tight text-[#d4af37] md:text-7xl">
                99%
              </span>
              <span className="mt-2 text-sm uppercase tracking-[0.2em] text-[#666666]">
                Taux d&apos;échec
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="space-y-5 text-pretty text-base leading-relaxed text-[#a3a3a3] md:text-lg">
              <p>
                La pige téléphonique repose sur un pari perdu d&apos;avance : interrompre des
                inconnus pour espérer qu&apos;un sur cent accepte de vous écouter. Chaque appel
                rejeté n&apos;est pas neutre — il érode votre énergie, votre discipline et,
                surtout, votre positionnement.
              </p>
              <p>
                Le boîtage et la relance à froid produisent le même effet : ils vous placent
                en <span className="text-white">demandeur</span>, quand un conseiller
                d&apos;autorité devrait être{' '}
                <span className="text-white">recherché</span>. Le temps investi ne se
                capitalise jamais : dès que vous arrêtez, le flux s&apos;arrête.
              </p>
              <p className="border-l-2 border-[#d4af37] pl-5 text-white">
                Le problème n&apos;est pas votre effort. C&apos;est l&apos;absence d&apos;un
                système qui travaille sans vous.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
