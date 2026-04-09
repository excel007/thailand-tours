import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sawasdee Voyages — Thailand Tour Agency',
  description:
    'Discover the magic of Thailand with curated tours through Bangkok, Chiang Mai, Phuket, and beyond.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
