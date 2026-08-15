import Link from 'next/link'

const focusAreas = ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'NLP', 'Computational Neuroscience']

const initiatives = [
  {
    title: 'Weekly coding sessions',
    description: 'Hands-on sessions for Python, data science, and practical AI/ML workflows.',
  },
  {
    title: 'Project sprints',
    description: 'Beginner-to-advanced build weeks that turn ideas into GitHub-ready prototypes.',
  },
  {
    title: 'Research and blogs',
    description: 'Short writes, reading groups, and insights that connect neuroscience with applied AI.',
  },
  {
    title: 'Open-source and hackathons',
    description: 'Team up for campus programs, community challenges, and global hackathons.',
  },
]

const audience = ['Beginners', 'Researchers', 'Hobbyists', 'Builders', 'Curious minds']

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/neurobyte-society',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/NeuroByte-Society',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/neurobyte_society/',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@neurobyte-society',
  },
]

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="relative z-10">
          <p className="mb-4 inline-flex rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-violet-200">
            Neuroscience x AI x Code
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
            Where curiosity meets code and ideas become research.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            NeuroByte Society is a student community for exploring AI, ML, deep learning, NLP,
            and computational neuroscience through collaborative learning and real projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#join"
              className="rounded-full border border-violet-300/20 bg-violet-950/60 px-6 py-3 font-semibold text-violet-100 transition hover:-translate-y-0.5 hover:border-violet-200/30 hover:bg-violet-900/80"
            >
              Join the Society
            </Link>
            <Link
              href="/#programs"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-violet-300/30 hover:bg-white/10"
            >
              See What We Do
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 shadow-2xl shadow-violet-950/20 backdrop-blur">
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-6 shadow-2xl shadow-violet-950/30 backdrop-blur-xl md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-200/80">
              Mission Snapshot
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <p>
                We learn by doing, through coding challenges, hands-on projects, and open
                collaboration.
              </p>
              <p>
                Our club brings together people who want to build beginner-friendly systems
                while also exploring serious neuroscience and AI questions.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-3xl font-semibold text-white">5+</p>
                <p className="mt-1 text-sm text-slate-400">Core focus areas</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-3xl font-semibold text-white">Weekly</p>
                <p className="mt-1 text-sm text-slate-400">Coding and learning sessions</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-violet-300/15 bg-violet-300/10 p-4 text-sm text-violet-50">
              Open to everyone, from complete beginners to researchers and hobbyists.
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-200/80">Our Mission</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Build a community that learns in public.</h2>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-slate-300 shadow-xl shadow-slate-950/20 backdrop-blur md:p-8">
            <p className="leading-8">
              We foster a community of passionate learners and builders who explore the frontiers
              of artificial intelligence, machine learning, deep learning, natural language
              processing, and computational neuroscience. The goal is simple: learn together,
              build together, and share what we discover.
            </p>
          </div>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-200/80">What We Do</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">A club built around momentum, not just announcements.</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {initiatives.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[var(--panel)] p-6 shadow-lg shadow-slate-950/20 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="join" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-200/80">Who Can Join?</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Anyone curious about tech, neuroscience, or the future of AI.</h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-8">
              Whether you are a beginner, a researcher, or a hobbyist, you are welcome here. The
              club is designed to be approachable at the start and still deep enough for ambitious
              builders.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {audience.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-violet-300/15 bg-violet-300/10 p-6 shadow-xl shadow-violet-950/20 backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-100/90">Connect With Us</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4 text-sm font-medium text-violet-50 transition hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-slate-950/70"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm text-slate-200">
              Follow us for weekly updates, project drops, and collaboration calls.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}