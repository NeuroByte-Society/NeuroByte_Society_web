import Image from 'next/image'
import Link from 'next/link'

const links = [
  ['Home', '/'],
  ['Mission', '/#mission'],
  ['Programs', '/#programs'],
  ['Join', '/#join'],
  ['About', '/about'],
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#16081f]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="NeuroByte Society logo" width={44} height={44} className="h-11 w-11 rounded-full object-cover shadow-lg shadow-violet-950/30 ring-1 ring-white/10" />
          <span className="text-lg font-semibold tracking-[0.22em] text-violet-200 uppercase">
            NeuroByte Society
          </span>
        </Link>
        <ul className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-violet-300/30 hover:bg-white/5 hover:text-violet-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}