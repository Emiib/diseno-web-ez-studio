import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'EZ Studio | Peluquería & Barbería en Gualeguaychú',
  description: 'Peluquería y barbería en Gualeguaychú, Entre Ríos. Cortes, fades y barba con atención personalizada.',
  keywords: ['peluquería Gualeguaychú', 'barbería Gualeguaychú', 'EZ Studio', 'corte de pelo', 'fade', 'barba'],
  alternates: { canonical: 'https://ezstudio666.com/' },
  openGraph: { title: 'EZ Studio | Peluquería & Barbería', description: 'Tu estilo. Nuestra firma. Reservá tu turno en Gualeguaychú.', type: 'website', locale: 'es_AR' },
  twitter: { card: 'summary_large_image', title: 'EZ Studio | Peluquería & Barbería', description: 'Tu estilo. Nuestra firma.' },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const businessSchema = { '@context': 'https://schema.org', '@type': 'HairSalon', name: 'EZ Studio - Peluquería & Barbería', url: 'https://ezstudio666.com/', telephone: '+54 3446 57-2872', address: { '@type': 'PostalAddress', streetAddress: 'Gervasio Méndez 359', addressLocality: 'Gualeguaychú', addressRegion: 'Entre Ríos', addressCountry: 'AR' }, openingHours: 'Mo-Sa 09:00-21:00', sameAs: ['https://www.instagram.com/ezstudio666/'] }
  return <html lang="es"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} /></body></html>
}
