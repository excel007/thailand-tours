export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f4ed 0%, #e8e6dc 50%, #f5f4ed 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c96442' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.15em] uppercase text-terracotta mb-6">
          Authentic Thailand Experiences
        </p>
        <h1 className="text-5xl md:text-7xl text-near-black mb-8 leading-[1.1]">
          Journey Through the<br />
          <span className="text-terracotta">Land of Smiles</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-olive-gray leading-relaxed mb-12">
          From the golden temples of Bangkok to the emerald waters of Phang Nga Bay,
          we craft unforgettable journeys through Thailand&apos;s most extraordinary destinations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#packages"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-terracotta text-ivory text-base hover:bg-terracotta-light transition-colors"
          >
            Explore Tours
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-warm-sand text-charcoal-warm text-base hover:bg-border-warm transition-colors"
            style={{ boxShadow: '0px 0px 0px 1px #d1cfc5' }}
          >
            Learn More
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '10K+', label: 'Happy Travelers' },
            { value: '25+', label: 'Unique Tours' },
            { value: '4.9', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-near-black">{stat.value}</p>
              <p className="text-sm text-stone-gray mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#destinations" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#87867f" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>
    </section>
  )
}
