'use client'

import { useState } from 'react'

const TESTIMONIALS = [
  {
    name: 'Sarah & James',
    location: 'London, UK',
    text: 'Our Grand Thailand tour was absolutely flawless. The guides knew every hidden temple and the best pad thai spots. We felt like we were traveling with old friends, not a tour company.',
    rating: 5,
    trip: 'Grand Thailand — 14 Days',
  },
  {
    name: 'Marco Bellini',
    location: 'Milan, Italy',
    text: 'The Island Paradise package exceeded every expectation. The snorkeling at Phi Phi was magical, and the sunset cruise was the highlight of our honeymoon. Truly unforgettable.',
    rating: 5,
    trip: 'Island Paradise — 10 Days',
  },
  {
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    text: 'As a solo traveler, I was nervous about navigating Thailand. Sawasdee made everything seamless. My guide Noi was incredibly knowledgeable and made me feel safe and welcome everywhere.',
    rating: 5,
    trip: 'Essential Thailand — 7 Days',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-near-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.15em] uppercase text-terracotta mb-4">
            What Travelers Say
          </p>
          <h2 className="text-4xl md:text-5xl text-ivory leading-[1.1]">
            Stories From the Road
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 flex items-center justify-center gap-1">
            {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#d4a853">
                <path d="M10 1l2.4 6.5H19l-5.3 4 2 6.5L10 14l-5.7 4 2-6.5L1 7.5h6.6L10 1z" />
              </svg>
            ))}
          </div>

          <blockquote className="font-serif text-xl md:text-2xl text-ivory leading-relaxed mb-8">
            &ldquo;{TESTIMONIALS[active].text}&rdquo;
          </blockquote>

          <p className="font-serif text-lg text-ivory">{TESTIMONIALS[active].name}</p>
          <p className="text-sm text-warm-silver">{TESTIMONIALS[active].location}</p>
          <p className="text-xs text-stone-gray mt-1">{TESTIMONIALS[active].trip}</p>

          <div className="flex items-center justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active ? 'bg-terracotta scale-125' : 'bg-dark-surface hover:bg-stone-gray'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
