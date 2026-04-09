const DESTINATIONS = [
  {
    name: 'Bangkok',
    description: 'The vibrant capital where ancient temples meet modern energy. Grand Palace, street food, and floating markets await.',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=400&fit=crop&q=80',
    tag: 'Culture & Nightlife',
  },
  {
    name: 'Chiang Mai',
    description: 'The rose of the North. Explore hundreds of ancient temples, night bazaars, and misty mountain trails.',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=400&fit=crop&q=80',
    tag: 'Temples & Nature',
  },
  {
    name: 'Phuket',
    description: 'Pristine white-sand beaches, crystal-clear Andaman waters, and world-class diving spots.',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&h=400&fit=crop&q=80',
    tag: 'Beaches & Islands',
  },
  {
    name: 'Krabi',
    description: 'Dramatic limestone cliffs rising from turquoise waters. A rock climber and beach lover\'s paradise.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&q=80',
    tag: 'Adventure & Scenery',
  },
  {
    name: 'Koh Samui',
    description: 'Palm-fringed beaches, luxury resorts, and the perfect blend of relaxation and nightlife.',
    image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&h=400&fit=crop&q=80',
    tag: 'Luxury & Wellness',
  },
  {
    name: 'Ayutthaya',
    description: 'The ancient capital\'s UNESCO-listed ruins tell the story of a magnificent Siamese kingdom.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&q=80',
    tag: 'History & Heritage',
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-near-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.15em] uppercase text-terracotta mb-4">
            Featured Destinations
          </p>
          <h2 className="text-4xl md:text-5xl text-ivory leading-[1.1]">
            Discover Thailand&apos;s Treasures
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((d) => (
            <article
              key={d.name}
              className="group rounded-2xl overflow-hidden bg-dark-surface border border-dark-surface hover:border-warm-silver/20 transition-all"
              style={{ boxShadow: 'rgba(0,0,0,0.2) 0px 4px 24px' }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-near-black/80 text-warm-silver text-xs">
                  {d.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-ivory mb-2">{d.name}</h3>
                <p className="text-sm text-warm-silver leading-relaxed">{d.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
