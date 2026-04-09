const PACKAGES = [
  {
    name: 'Essential Thailand',
    duration: '7 Days',
    price: '$899',
    description: 'Bangkok and Chiang Mai highlights with guided temple tours, street food walks, and a night market experience.',
    highlights: ['Grand Palace Tour', 'Doi Suthep Temple', 'Street Food Tour', 'Night Bazaar Visit'],
    popular: false,
  },
  {
    name: 'Island Paradise',
    duration: '10 Days',
    price: '$1,499',
    description: 'Phuket, Krabi, and Koh Samui island-hopping with snorkeling, beachside dining, and sunset cruises.',
    highlights: ['Phi Phi Islands', 'Railay Beach', 'Snorkeling Trip', 'Sunset Cruise'],
    popular: true,
  },
  {
    name: 'Grand Thailand',
    duration: '14 Days',
    price: '$2,299',
    description: 'The ultimate Thailand experience covering north to south — culture, nature, beaches, and everything between.',
    highlights: ['All Major Cities', 'Hill Tribe Trek', 'Floating Market', 'Thai Cooking Class'],
    popular: false,
  },
]

export function Packages() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-parchment">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.15em] uppercase text-terracotta mb-4">
            Tour Packages
          </p>
          <h2 className="text-4xl md:text-5xl text-near-black leading-[1.1]">
            Curated Journeys for Every Traveler
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative rounded-2xl p-8 border transition-all ${
                pkg.popular
                  ? 'bg-ivory border-terracotta/30 scale-[1.02]'
                  : 'bg-ivory border-border-cream'
              }`}
              style={
                pkg.popular
                  ? { boxShadow: 'rgba(201,100,66,0.1) 0px 4px 24px' }
                  : { boxShadow: 'rgba(0,0,0,0.05) 0px 4px 24px' }
              }
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-terracotta text-ivory text-xs font-sans">
                  Most Popular
                </span>
              )}

              <p className="text-sm text-stone-gray mb-1">{pkg.duration}</p>
              <h3 className="font-serif text-2xl text-near-black mb-2">{pkg.name}</h3>
              <p className="text-3xl font-serif text-terracotta mb-4">
                {pkg.price}
                <span className="text-sm text-stone-gray font-sans"> / person</span>
              </p>
              <p className="text-sm text-olive-gray leading-relaxed mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-olive-gray">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                      <circle cx="8" cy="8" r="7" stroke="#c96442" strokeWidth="1.5" />
                      <path d="M5 8l2 2 4-4" stroke="#c96442" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center h-11 leading-[44px] rounded-lg text-sm transition-colors ${
                  pkg.popular
                    ? 'bg-terracotta text-ivory hover:bg-terracotta-light'
                    : 'bg-warm-sand text-charcoal-warm hover:bg-border-warm'
                }`}
                style={!pkg.popular ? { boxShadow: '0px 0px 0px 1px #d1cfc5' } : undefined}
              >
                {pkg.popular ? 'Book This Tour' : 'View Details'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
