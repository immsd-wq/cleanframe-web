'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">CleanFrame AI</h1>
        <p>Remove unwanted text, logos & objects</p>
        <Link href="/editor" className="bg-blue-600 px-6 py-3 rounded-lg inline-block text-white hover:bg-blue-700">
          Start Cleaning
        </Link>
      </div>
    </main>
  )
}
