'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0f0f0f]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Ready to Find Your
            <br />
            <span className="text-gold">Perfect Property?</span>
          </h2>

          <p className="mt-8 text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto">
            Let our expert team guide you through Nigeria's most exclusive real estate opportunities
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 lg:gap-8">
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="px-12 py-6 bg-gold text-primary font-semibold text-xl lg:text-2xl rounded-full shadow-2xl hover:shadow-gold/30 transition-all duration-500"
            >
              Speak with an Expert
            </motion.a>

            <motion.a
              href="/properties"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="px-12 py-6 bg-transparent border-2 border-gold text-gold font-semibold text-xl lg:text-2xl rounded-full hover:bg-gold/10 transition-all duration-500"
            >
              Browse All Listings
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}