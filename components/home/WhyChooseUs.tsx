'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Key, Users, Percent, MapPin, Clock } from 'lucide-react'

const advantages = [
  { icon: ShieldCheck, title: "Verified Properties", desc: "Every listing is personally inspected and legally verified" },
  { icon: Key, title: "Exclusive Access", desc: "First access to off-market luxury properties" },
  { icon: Users, title: "Expert Team", desc: "Dedicated agents with 10+ years of high-end experience" },
  { icon: Percent, title: "Best Market Value", desc: "Competitive pricing backed by real-time market analysis" },
  { icon: MapPin, title: "Prime Locations", desc: "Only the most prestigious neighborhoods and emerging hotspots" },
  { icon: Clock, title: "Lifetime Support", desc: "After-sale assistance and investment management" },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-gray-950/75 text-white relative overflow-hidden">
      {/* Subtle luxury pattern - lower opacity & softer */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#c9a96e_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block text-gold text-lg lg:text-xl font-medium tracking-[0.35em] uppercase mb-4">
            Why Choose
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
            The Neeps International
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="
                group relative
                bg-white/5 backdrop-blur-xl
                border border-white/8 rounded-3xl
                p-8 lg:p-10
                hover:border-gold/40 hover:bg-white/8
                transition-all duration-500 ease-out
                shadow-xl shadow-black/20
              "
            >
              {/* Icon container with glow on hover */}
              <div className="
                w-16 h-16 lg:w-20 lg:h-20
                rounded-2xl bg-gold/10
                flex items-center justify-center mb-6 lg:mb-8
                group-hover:bg-gold/25 group-hover:shadow-[0_0_25px_rgba(201,169,110,0.35)]
                transition-all duration-500
              ">
                <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-gold" strokeWidth={1.6} />
              </div>

              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-5 text-white group-hover:text-gold transition-colors duration-500">
                {item.title}
              </h3>

              <p className="text-white/80 text-base lg:text-lg leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />
    </section>
  )
}