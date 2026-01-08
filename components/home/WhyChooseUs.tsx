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
    <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#c9a96e_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-gold text-lg font-medium tracking-widest uppercase">Why Choose</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
            The Neeps International
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -12, transition: { duration: 0.4 } }}
              className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-gold/50 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-8 h-8 text-gold" strokeWidth={1.8} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-white/80 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}