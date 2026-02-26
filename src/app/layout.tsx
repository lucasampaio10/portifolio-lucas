import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
