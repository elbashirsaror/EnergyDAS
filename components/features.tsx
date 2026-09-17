import { Activity, Cpu, Gauge, LineChart, Settings2, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Data acquisition systems",
    description:
      "energyDAS PLC hardware, modules and accessories capture accurate metering data from across your plant, down to individual assets.",
  },
  {
    icon: Activity,
    title: "SCADA & control",
    description:
      "Supervisory control and automation that keeps operators in command of every process, with alarms, trends and remote access.",
  },
  {
    icon: Gauge,
    title: "Monitoring & diagnostics",
    description:
      "Continuous monitoring surfaces faults, drift and waste early—so you fix issues before they become downtime or overspend.",
  },
  {
    icon: LineChart,
    title: "Utility bill analytics",
    description:
      "Consolidate and validate utility bills, benchmark sites and turn big data into clear energy and cost savings.",
  },
  {
    icon: Settings2,
    title: "Energy engineering",
    description:
      "Master planning, HVAC, lighting, retrofit and retro-commissioning delivered by chartered energy engineers.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & carbon",
    description:
      "Demand-side management, greenhouse gas schemas and energy policy support to keep you compliant and on target.",
  },
]

export function Features() {
  return (
    <section id="systems" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Systems &amp; Engineering</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            One partner for the full energy lifecycle
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            From the sensor on the floor to the boardroom report, energyDAS gives you the hardware,
            software and expertise to run leaner, cleaner facilities.
          </p>
        </div>

        <div id="engineering" className="mt-16 grid scroll-mt-16 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
