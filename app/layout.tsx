import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Booking.com',
  description: 'Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Find What You Need At Booking.com, The Biggest Travel Site In The World. Hotels. Get Instant Confirmation. Airport Taxi available. We speak your language. Motels. Low Rates. Hostels.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        
        </body>
    </html>
  )
}

export { metadata };
