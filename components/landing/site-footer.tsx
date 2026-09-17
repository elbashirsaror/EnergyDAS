import { Logo } from "./logo"

const columns = [
  {
    title: "Systems",
    links: ["energyDAS PLC", "SCADA", "Modules", "Monitoring & Diagnostics"],
  },
  {
    title: "Engineering",
    links: ["Energy Master Planning", "HVAC", "Lighting Systems", "Retro-Commissioning"],
  },
  {
    title: "Company",
    links: ["Our Business", "Leadership", "Where we work", "Community"],
  },
  {
    title: "Careers",
    links: ["Working at energyDAS", "Culture", "Search Jobs", "Contact"],
  },
]

export function SiteFooter() {
  return (
    <footer id="careers" className="scroll-mt-16 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div id="company" className="scroll-mt-16">
            <a href="#" className="flex items-center gap-2" aria-label="energyDAS home">
              <Logo className="h-7 w-7 text-primary" />
              <span className="text-lg font-semibold tracking-tight">
                energy<span className="text-primary">DAS</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Data acquisition, SCADA and energy engineering to help you measure, monitor and manage
              energy across every facility.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} energyDAS PLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["LinkedIn", "X", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
