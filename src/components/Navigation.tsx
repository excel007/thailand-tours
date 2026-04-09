'use client'

import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/95 backdrop-blur-sm border-b border-border-cream">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-serif text-xl text-near-black tracking-tight">
          Sawasdee<span className="text-terracotta">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-olive-gray hover:text-near-black transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-terracotta text-ivory text-sm hover:bg-terracotta-light transition-colors"
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-near-black transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-near-black transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-near-black transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border-cream bg-parchment">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-olive-gray hover:text-near-black transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-terracotta text-ivory text-sm"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
