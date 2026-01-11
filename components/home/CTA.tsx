'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-40 bg-gradient-to-b from-[#f8f5f1] to-white overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#c9a96e_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      {/* Soft glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary leading-[1.05] tracking-tight">
            Ready to Find Your
            <br className="hidden sm:block" />
            <span className="text-gold">Perfect Property?</span>
          </h2>

          <p className="mt-8 text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Let our expert team guide you through Nigeria's most exclusive real estate opportunities — from luxury residences to high-yield investments.
          </p>

          <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-10">
            {/* Primary CTA - Gold filled */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="
                group relative inline-flex items-center justify-center
                px-10 sm:px-14 py-6 sm:py-7
                bg-gold text-primary
                font-semibold text-xl lg:text-2xl
                rounded-full
                shadow-xl shadow-gold/20
                hover:shadow-2xl hover:shadow-gold/30
                transition-all duration-500
                overflow-hidden
              "
            >
              <span className="relative z-10">Speak with an Expert</span>
              <div className="
                absolute inset-0 bg-gradient-to-r from-gold to-[#d4b67a]
                scale-x-0 group-hover:scale-x-100 origin-left
                transition-transform duration-500
              " />
              <ArrowRight className="ml-4 w-6 h-6 relative z-10 transition-transform group-hover:translate-x-2" />
            </motion.a>

            {/* Secondary CTA - Outline */}
            <motion.a
              href="/properties"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="
                group inline-flex items-center justify-center
                px-10 sm:px-14 py-6 sm:py-7
                border-2 border-gold text-gold
                font-semibold text-xl lg:text-2xl
                rounded-full
                hover:bg-gold/5 hover:text-primary
                transition-all duration-500
              "
            >
              Browse All Listings
              <ArrowRight className="ml-4 w-6 h-6 transition-transform group-hover:translate-x-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}