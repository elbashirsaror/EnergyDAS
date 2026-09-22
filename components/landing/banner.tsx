import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/50 to-background" />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24">
  

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-dashboard.png"
              alt="energyDAS SCADA dashboard showing live power consumption, demand gauges and facility metering"
              width={1600}
              height={1000}
              className="h-auto w-full"
              priority
            />
          
        </div>
      </div>
    </section>
  )
}
