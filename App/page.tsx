import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Testimonials } from "@/components/landing/testimonials"
import { Faq } from "@/components/landing/faq"
import { ContactCta } from "@/components/landing/contact-cta"
import { SiteFooter } from "@/components/landing/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
