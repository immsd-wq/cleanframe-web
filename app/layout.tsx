import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CleanFrame AI',
  description: 'Remove watermarks and objects from images and videos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
