export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-violet-100/90">
          © {new Date().getFullYear()} NeuroByte Society · Neuroscience, AI, and open collaboration.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-violet-100/80">
          <a href="https://www.linkedin.com/company/neurobyte-society" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-violet-300/30 hover:bg-white/5 hover:text-violet-100">
            LinkedIn
          </a>
          <a href="https://github.com/NeuroByte-Society" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-violet-300/30 hover:bg-white/5 hover:text-violet-100">
            GitHub
          </a>
          <a href="https://www.instagram.com/neurobyte_society/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-violet-300/30 hover:bg-white/5 hover:text-violet-100">
            Instagram
          </a>
          <a href="https://www.youtube.com/@neurobyte-society" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-violet-300/30 hover:bg-white/5 hover:text-violet-100">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  )
}