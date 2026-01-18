import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CleanFrame AI',
  description: 'Remove watermarks and objects from images and videos',
    manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}<
              <script dangerouslySetInnerHTML={{__html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js');
            });
          }
        `}} />/body>
    </html>
  )
}
