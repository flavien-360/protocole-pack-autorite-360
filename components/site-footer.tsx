export function SiteFooter() {
  return (
    <footer className="border-t border-[#333333]/60 bg-[#0a0a0a] pb-20 md:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <p className="text-center text-[12px] leading-relaxed text-[#666666]">
          © 2026 Pack Autorité 360 — Flavien Houvenaeghel EI · SIRET 109 157 297 00010. Tous droits réservés.{' '}
          <a
            href="https://pack-autorite-360.immo-systeme.fr/mentions-legales"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] underline underline-offset-2 transition-colors hover:text-[#d4af37]"
          >
            Mentions Légales, RGPD &amp; CGV
          </a>
        </p>
      </div>
    </footer>
  )
}