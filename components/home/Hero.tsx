'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 500], [0, 120])

  const scale = useTransform(scrollY, [0, 500], [1.05, 1.15])

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-10" />
        
        <motion.img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=90"
          alt="Luxury villa at sunset"
          className="object-cover w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
      </motion.div>
      <div className="relative z-20 container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <span className="inline-block text-white text-xl lg:text-2xl font-medium tracking-[0.35em] uppercase mb-6">
              The Neeps International
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.02] tracking-[-0.02em]">
              Discover Your {" "}
              <br className="sm:hidden" />
              <span className="text-gold block sm:inline">Dream Property</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.1 }}
              className="mt-8 text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl font-light leading-relaxed"
            >
              Exclusive residences • Prime investment opportunities • Luxury living spaces across Nigeria and beyond
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.9 }}
              className="mt-10 flex flex-col sm:flex-row gap-5 sm:gap-8"
            >
              <a
                href="/properties"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gold text-[#1a1a1a] font-semibold text-lg rounded-full overflow-hidden shadow-xl hover:shadow-gold/40 transition-all duration-500 hover:-translate-y-1 active:translate-y-0"
              >
                <span className="relative z-10 text-white">Explore Properties</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-[#d4b67a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <ArrowRight className="ml-3 w-5 h-5 relative z-10 text-white transition-transform group-hover:translate-x-1.5" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/50 text-white font-medium text-lg rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/70 transition-all duration-400"
              >
                Speak with an Expert
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2.2, duration: 1.6 }}
        className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <div className="w-7 h-12 border-2 border-white/50 rounded-full flex items-center justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-white rounded-full"
          />
        </div>
        <span className="text-white text-xs sm:text-sm tracking-widest uppercase font-medium">
          Scroll to discover
        </span>
      </motion.div>
    </section>
  )
}