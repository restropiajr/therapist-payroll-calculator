import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { cm } from '@/utils/cm'
import { Header, Footer } from '@/components'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Therapy Payroll Calculate',
  description: 'Calculates payroll for therapists',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cm(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          'min-h-screen w-full bg-green-100'
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
