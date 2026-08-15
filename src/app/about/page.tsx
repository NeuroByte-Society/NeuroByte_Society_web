export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20 backdrop-blur md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">About NeuroByte Society</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          A club for people who want to build, study, and share.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          NeuroByte Society brings together students and builders interested in artificial
          intelligence, machine learning, deep learning, natural language processing, and
          computational neuroscience. We focus on practical learning, open collaboration, and
          projects that help members grow from curious beginners into confident contributors.
        </p>
      </div>
    </section>
  )
}