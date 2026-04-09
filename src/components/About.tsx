const FEATURES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l3.5 7.1 7.8 1.1-5.6 5.5 1.3 7.8L16 21.8 8.9 25.5l1.3-7.8-5.6-5.5 7.8-1.1L16 4z" stroke="#c96442" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Expert Local Guides',
    description: 'Our Thai guides bring deep cultural knowledge and insider access you won\'t find in guidebooks.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 16h24M4 8h24M4 24h24" stroke="#c96442" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="8" r="2" stroke="#c96442" strokeWidth="1.5" />
        <circle cx="22" cy="16" r="2" stroke="#c96442" strokeWidth="1.5" />
        <circle cx="14" cy="24" r="2" stroke="#c96442" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Fully Customizable',
    description: 'Every itinerary is tailored to your pace, interests, and travel style — no cookie-cutter tours.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 28c6.6 0 12-5.4 12-12S22.6 4 16 4 4 9.4 4 16s5.4 12 12 12z" stroke="#c96442" strokeWidth="1.5" />
        <path d="M16 8v8l5 3" stroke="#c96442" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our team in Thailand, so you\'re never truly on your own.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 24l8-10 6 6 6-8 4 4" stroke="#c96442" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="4" width="26" height="24" rx="3" stroke="#c96442" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Best Price Guarantee',
    description: 'We match or beat any comparable tour price. Premium experiences shouldn\'t cost a premium.',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.15em] uppercase text-terracotta mb-4">
              Why Sawasdee Voyages
            </p>
            <h2 className="text-4xl md:text-5xl text-near-black leading-[1.1] mb-6">
              Travel With Those Who Know Thailand Best
            </h2>
            <p className="text-olive-gray leading-relaxed mb-4">
              Founded in Bangkok in 2009, Sawasdee Voyages was born from a simple belief: the best way
              to experience Thailand is through the eyes of those who call it home. Our team of
              passionate local travel experts has been crafting authentic, immersive journeys for
              over fifteen years.
            </p>
            <p className="text-olive-gray leading-relaxed">
              We don&apos;t just show you Thailand — we help you feel it. From hidden street food stalls
              only locals know, to secluded island beaches far from the tourist crowds, every moment
              is designed to be genuine and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-xl bg-parchment border border-border-cream"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-serif text-lg text-near-black mb-2">{f.title}</h3>
                <p className="text-sm text-olive-gray leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
