import type { Metadata } from 'next'
import {Nokora} from 'next/font/google'
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
    <html lang="en">
      <body className={`${nokora.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}