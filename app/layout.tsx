import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: "Protocole d'Acquisition — Pack Autorité 360",
  description:
    "L'architecture exacte pour générer des mandats immobiliers qualifiés de manière prédictive. Accès confidentiel.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${geist.variable} dark scroll-smooth bg-[#09090B]`}>
      <body className="font-sans antialiased bg-[#09090B] text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Script id="chatbase-embed" strategy="lazyOnload">
          {`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="su1L6oVkjma7CvXLrrBMb";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}
        </Script>
      </body>
    </html>
  )
}