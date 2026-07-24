import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Lucas Sampaio - Desenvolvedor Frontend & Mobile',
  description: 'Portfólio profissional de Lucas Sampaio - Desenvolvedor especializado em React, Next.js, TypeScript e Flutter',
  keywords: 'React, Next.js, TypeScript, Flutter, React Native, Frontend, Mobile, JavaScript',
  authors: [{ name: 'Lucas Sampaio' }],
  openGraph: {
    title: 'Lucas Sampaio - Desenvolvedor Frontend & Mobile',
    description: 'Portfólio profissional - React, Next.js, TypeScript e Flutter',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
