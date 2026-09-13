import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Collector | India, collected differently',
  description: 'A trusted, editorial travel intelligence platform for discovering India.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
