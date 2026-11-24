import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { PainSection } from '@/components/pain-section'
import { MatrixSection } from '@/components/matrix-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <PainSection />
        <MatrixSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
