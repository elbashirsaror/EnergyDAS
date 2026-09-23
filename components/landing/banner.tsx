import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
<section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/50 to-background" />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Data acquisition, SCADA &amp; energy engineering
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Measure, monitor and manage energy across every facility
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            energyDAS combines industrial-grade data acquisition, SCADA and expert engineering to
            help you cut consumption, improve reliability and meet your carbon targets.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
              Request a demo
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="#systems" />}>
              Explore our systems
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Trusted across industrial, utility and public-sector sites
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="/images/EnergyDAS Banner 4.png"
              alt="energyDAS SCADA dashboard showing live power consumption, demand gauges and facility metering"
              width={1600}
              height={1000}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
