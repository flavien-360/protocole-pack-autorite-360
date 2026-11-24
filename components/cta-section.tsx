import { Reveal } from '@/components/reveal'

export function CtaSection() {
  return (
    <section className="bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#333333] bg-[#111111] px-6 py-16 text-center md:px-16 md:py-24">
            {/* Filet doré supérieur */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #d4af37 50%, transparent)',
              }}
            />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Passage à l&apos;action
            </p>

            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Passez de la théorie à la pratique.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#a3a3a3] md:text-lg">
              L&apos;infrastructure est déjà construite. Déployez-la clé en main sur votre secteur.
            </p>

            <div className="mt-11">
              <a
                href="https://pack-autorite-360.immo-systeme.fr"
                className="inline-flex items-center justify-center rounded-xl bg-[#d4af37] px-8 py-5 text-sm font-bold uppercase tracking-[0.12em] text-[#0a0a0a] transition-transform hover:scale-[1.02] md:px-12 md:text-base"
              >
                Déployer le Pack Autorité 360
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}