import type { Metadata } from 'next'
import {Nokora} from 'next/font/google'
import { Providers } from './providers'
import { ThemeSwitch } from './components/ThemeSwitch'
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
    <html lang="en" suppressHydrationWarning>
      <body className={`relative ${nokora.className} antialiased dark:bg-black-light bg-white`}>
        <Providers>
          <ThemeSwitch/>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}