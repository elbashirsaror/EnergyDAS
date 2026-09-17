"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

const navLinks = [
  { label: "Systems", href: "#systems" },
  { label: "Engineering", href: "#engineering" },
  { label: "Applications", href: "#applications" },
  { label: "News", href: "#news" },
  { label: "Company", href: "#company" },
  { label: "Careers", href: "#careers" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2" aria-label="energyDAS home">
          <Logo className="h-7 w-7 text-primary" />
          <span className="text-lg font-semibold tracking-tight">
            energy<span className="text-primary">DAS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" nativeButton={false} render={<a href="#company" />}>
            Client login
          </Button>
          <Button nativeButton={false} render={<a href="#contact" />}>
            Request a demo
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" nativeButton={false} render={<a href="#company" />}>
                Client login
              </Button>
              <Button
                nativeButton={false}
                render={<a href="#contact" onClick={() => setOpen(false)} />}
              >
                Request a demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
