import type { Metadata } from 'next'
import { Outfit, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mórula — Specialty Coffee',
  description: 'Del suelo a tu taza, sin rodeos. Café de origen único tostado en pequeños lotes en Madrid.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSerif.variable} scroll-smooth`}>
      <body className="bg-cream font-sans text-espresso antialiased">
        {children}
      </body>
    </html>
  )
}
