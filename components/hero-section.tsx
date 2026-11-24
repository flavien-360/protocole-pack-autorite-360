import { Reveal } from '@/components/reveal'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#333333]/60">
      {/* Halo doré statique et discret — pas de flou animé */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.14]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(212,175,55,0.55), rgba(212,175,55,0))',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-36">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37] md:text-sm">
            Le Protocole d&apos;Acquisition
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          as="h1"
          className="mx-auto mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl"
        >
          L&apos;infrastructure d&apos;acquisition des conseillers du Top 1%.
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-[#a3a3a3] md:text-lg">
            Sans pige téléphonique. Sans boîtage. Laissez l&apos;ingénierie logicielle
            travailler à votre place.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <a
            href="#deploiement"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#333333] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            Découvrir l&apos;architecture
            <span aria-hidden="true">↓</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
