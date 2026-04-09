const FOOTER_LINKS = {
  Destinations: ['Bangkok', 'Chiang Mai', 'Phuket', 'Krabi', 'Koh Samui', 'Ayutthaya'],
  Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Press'],
  Support: ['FAQs', 'Travel Insurance', 'Visa Info', 'Cancellation Policy', 'Contact Us'],
}

export function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-surface">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <a href="#hero" className="font-serif text-2xl text-ivory">
              Sawasdee<span className="text-terracotta">.</span>
            </a>
            <p className="mt-4 text-sm text-warm-silver leading-relaxed">
              Crafting authentic Thai travel experiences since 2009. Licensed by the Tourism
              Authority of Thailand.
            </p>
            <div className="flex gap-3 mt-6">
              {['FB', 'IG', 'TW', 'YT'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-near-black flex items-center justify-center text-xs text-warm-silver hover:text-ivory hover:bg-dark-surface transition-colors border border-dark-surface"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm text-ivory mb-4 font-sans">{title}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-warm-silver hover:text-ivory transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-near-black flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-gray">
            &copy; {new Date().getFullYear()} Sawasdee Voyages. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-stone-gray hover:text-warm-silver transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-stone-gray hover:text-warm-silver transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
