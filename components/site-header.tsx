export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#333333]/60 bg-[#0a0a0a]/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        {/* Spacer gauche pour centrer le logo */}
        <div className="hidden w-40 md:block" aria-hidden="true" />

        {/* Logo centré */}
        <div className="flex flex-1 justify-start md:justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://d1yei2z3i6k35z.cloudfront.net/16648441/6a7f0a8e8897d2.77018182_logo-pack-transparent.png.png"
            alt="Pack Autorité 360"
            className="h-10 w-auto max-h-10 object-contain"
          />
        </div>

        {/* Badge accès confidentiel */}
        <div className="flex w-auto items-center justify-end md:w-40">
          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#a3a3a3]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" aria-hidden="true" />
            <span className="hidden sm:inline">Accès Confidentiel</span>
            <span className="sm:hidden">Confidentiel</span>
          </span>
        </div>
      </div>
    </header>
  )
}
