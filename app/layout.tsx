import type { Metadata } from 'next'
import {Nokora} from 'next/font/google'
import { Providers } from './providers'
import { Header } from './components/Header/Header'
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
      <body className={`relative ${nokora.className} antialiased dark:bg-black-light bg-white-default min-h-screen`}>
        <Providers>
          <Header/>
          <main className='relative container px-4 tablet:px-8 top-12'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}