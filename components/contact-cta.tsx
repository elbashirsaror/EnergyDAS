"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-primary text-primary-foreground">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to take control of your energy?
              </h2>
              <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
                Book a demo or talk to our engineers. We&apos;ll assess your sites and show you where
                energyDAS can cut consumption, cost and carbon.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-primary-foreground/90">
                {[
                  "Free site and energy assessment",
                  "Hardware, SCADA and engineering under one roof",
                  "Dedicated support and diagnostics",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-card p-6 text-card-foreground sm:p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
                    <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Thanks for reaching out!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Organisation</Label>
                      <Input id="company" name="company" placeholder="Acme Utilities" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" name="email" type="email" required placeholder="jane@acme.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your sites</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Number of sites, energy goals and any challenges you're facing."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Request a demo
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to our Terms and Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
