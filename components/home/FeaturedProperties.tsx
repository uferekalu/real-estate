'use client'

import { motion } from 'framer-motion'
import { demoProperties } from '@/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import { ArrowRight } from 'lucide-react'

export default function FeaturedProperties() {
  const featured = demoProperties.slice(0, 6)

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#f8f5f1] to-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-gold text-lg font-medium tracking-widest uppercase">
            Curated Selection
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Featured Properties
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most exclusive listings handpicked for discerning buyers and smart investors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featured.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
            >
              <PropertyCard property={property} featured />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/properties"
            className="inline-flex items-center gap-3 text-xl font-medium text-primary hover:text-gold transition-colors group"
          >
            View All Properties
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}