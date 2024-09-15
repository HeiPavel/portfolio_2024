import type { Metadata } from 'next'
import {Nokora} from 'next/font/google'
import { Providers } from './providers'
import { Header } from './components/Header'
import './globals.css'

const nokora = Nokora({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: "Pavlo Trofymovych | Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className='scroll-smooth'
    >
      <body className={`relative ${nokora.className} antialiased dark:bg-black-light bg-white min-h-screen`}>
        <Providers>
          <Header/>
          <main className='relative container top-12'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}