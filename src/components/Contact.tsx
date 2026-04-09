'use client'

import { useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24 md:py-32 bg-parchment">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.15em] uppercase text-terracotta mb-4">
              Start Your Journey
            </p>
            <h2 className="text-4xl md:text-5xl text-near-black leading-[1.1] mb-6">
              Ready to Explore Thailand?
            </h2>
            <p className="text-olive-gray leading-relaxed mb-8">
              Tell us about your dream Thailand trip and our travel experts will craft
              a personalized itinerary just for you. No obligation, no spam — just
              genuine travel advice.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warm-sand flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3h12a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="#4d4c48" strokeWidth="1.5" />
                    <path d="M1 5l8 5 8-5" stroke="#4d4c48" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-near-black">hello@sawasdee-voyages.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warm-sand flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M10 12l-2-2a10.1 10.1 0 01-4 4l2 2L17 5l-2-2-5 5z" stroke="#4d4c48" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-near-black">+66 (0) 2-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warm-sand flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1C5.7 1 3 3.7 3 7c0 5.3 6 10 6 10s6-4.7 6-10c0-3.3-2.7-6-6-6z" stroke="#4d4c48" strokeWidth="1.5" />
                    <circle cx="9" cy="7" r="2" stroke="#4d4c48" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-near-black">123 Sukhumvit Road, Bangkok 10110</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-ivory border border-border-cream">
                <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" stroke="#2d6a4f" strokeWidth="1.5" />
                    <path d="M10 16l4 4 8-8" stroke="#2d6a4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-near-black mb-2">Thank You!</h3>
                <p className="text-olive-gray">We&apos;ll be in touch within 24 hours with a personalized travel plan.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="w-full h-11 px-4 rounded-xl bg-ivory border border-border-cream text-near-black text-sm placeholder:text-stone-gray focus:outline-none focus:border-focus-blue transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full h-11 px-4 rounded-xl bg-ivory border border-border-cream text-near-black text-sm placeholder:text-stone-gray focus:outline-none focus:border-focus-blue transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full h-11 px-4 rounded-xl bg-ivory border border-border-cream text-near-black text-sm placeholder:text-stone-gray focus:outline-none focus:border-focus-blue transition-colors"
                />
                <select className="w-full h-11 px-4 rounded-xl bg-ivory border border-border-cream text-olive-gray text-sm focus:outline-none focus:border-focus-blue transition-colors appearance-none">
                  <option value="">Select a Tour Package</option>
                  <option value="essential">Essential Thailand — 7 Days</option>
                  <option value="island">Island Paradise — 10 Days</option>
                  <option value="grand">Grand Thailand — 14 Days</option>
                  <option value="custom">Custom Itinerary</option>
                </select>
                <input
                  type="text"
                  placeholder="Preferred Travel Dates"
                  className="w-full h-11 px-4 rounded-xl bg-ivory border border-border-cream text-near-black text-sm placeholder:text-stone-gray focus:outline-none focus:border-focus-blue transition-colors"
                />
                <textarea
                  placeholder="Tell us about your dream trip..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-border-cream text-near-black text-sm placeholder:text-stone-gray focus:outline-none focus:border-focus-blue transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-terracotta text-ivory text-base hover:bg-terracotta-light transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
