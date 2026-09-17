const testimonials = [
  {
    quote:
      "energyDAS gave us plant-wide visibility we never had before. We identified compressed air leaks in the first month and cut our energy bill by double digits.",
    name: "David Okafor",
    role: "Operations Director, Meridian Metals",
    initials: "DO",
  },
  {
    quote:
      "The SCADA rollout across our water treatment sites was seamless. Diagnostics now flag issues remotely before our teams are even on site.",
    name: "Helen Marsh",
    role: "Head of Assets, Clearflow Water",
    initials: "HM",
  },
  {
    quote:
      "Their engineers understood our estate and our carbon commitments. Utility bill analytics alone paid for the programme within a year.",
    name: "Rahul Desai",
    role: "Energy Manager, Northgate Healthcare Trust",
    initials: "RD",
  },
]

const stats = [
  { value: "500+", label: "Sites monitored" },
  { value: "18%", label: "Average energy saved" },
  { value: "24/7", label: "Monitoring & diagnostics" },
  { value: "20+ yrs", label: "Energy engineering" },
]

export function Testimonials() {
  return (
    <section id="applications" className="scroll-mt-16 bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Trusted across sectors</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Powering industrial, utility and public-sector sites
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Agricultural, healthcare, mining, metals, renewables, water and more—energyDAS adapts to
            the demands of your industry.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <blockquote className="flex-1 text-pretty text-base leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="text-3xl font-bold tracking-tight text-primary">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
