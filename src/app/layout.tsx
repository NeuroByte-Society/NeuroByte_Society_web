import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NeuroByte Society | Neuroscience x AI Club',
  description:
    'NeuroByte Society is a student community where neuroscience meets AI, code, research, and collaborative projects.',
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-slate-100 antialiased">
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}