'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { demoProperties } from '@/data/properties';
import PropertyCard from '@/components/property/PropertyCard';
import { Filter, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    type: '', // '' | 'sale' | 'rent'
    bedrooms: '',
    location: '',
    amenities: [] as string[],
  });

  const [sortBy, setSortBy] = useState('newest');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const allAmenities = useMemo(() => {
    const set = new Set<string>();
    demoProperties.forEach(p => p.amenities.forEach(a => set.add(a)));
    return Array.from(set);
  }, []);

  const displayedProperties = useMemo(() => {
    let result = [...demoProperties];
    if (filters.priceMin) {
      const min = Number(filters.priceMin);
      if (!isNaN(min)) result = result.filter(p => p.price >= min);
    }
    if (filters.priceMax) {
      const max = Number(filters.priceMax);
      if (!isNaN(max)) result = result.filter(p => p.price <= max);
    }

    if (filters.type) {
      result = result.filter(p => p.type === filters.type);
    }

    if (filters.bedrooms) {
      const beds = Number(filters.bedrooms);
      if (!isNaN(beds)) result = result.filter(p => p.bedrooms >= beds);
    }

    if (filters.location.trim()) {
      const search = filters.location.toLowerCase().trim();
      result = result.filter(p => p.location.toLowerCase().includes(search));
    }

    if (filters.amenities.length > 0) {
      result = result.filter(p =>
        filters.amenities.every(amen => p.amenities.includes(amen))
      );
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  const resetFilters = () => {
    setFilters({
      priceMin: '',
      priceMax: '',
      type: '',
      bedrooms: '',
      location: '',
      amenities: [],
    });
  };

  return (
    <section className="pt-24 lg:pt-32 pb-20 lg:pb-32 bg-gradient-to-b from-[#f8f5f1] to-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-gold text-lg lg:text-xl font-medium tracking-widest uppercase">
            All Properties
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary">
            Discover Our Complete Collection
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our curated selection of luxury homes, investment properties, and premium rentals across Nigeria
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10 lg:mb-12">
          <div className="text-lg font-medium text-gray-700">
            Showing <span className="text-gold font-bold">{displayedProperties.length}</span> of{' '}
            {demoProperties.length} properties
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              className="lg:hidden flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>

            <div className="relative flex-1 sm:flex-none min-w-[200px]">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
              >
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <AnimatePresence>
            {(isDesktop || showFiltersMobile) && (
              <motion.aside
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className={`
                  lg:sticky lg:top-24 lg:h-fit lg:w-80 lg:block lg:z-auto
                  ${showFiltersMobile 
                    ? 'fixed inset-0 z-50 bg-white/95 backdrop-blur-lg overflow-y-auto' 
                    : 'hidden lg:block'}
                `}
              >
                <div className="p-6 lg:p-0">
                  {showFiltersMobile && (
                    <div className="flex items-center justify-between mb-8 lg:hidden">
                      <h3 className="text-2xl font-bold text-primary">Filters</h3>
                      <button 
                        onClick={() => setShowFiltersMobile(false)}
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                      >
                        <X size={28} />
                      </button>
                    </div>
                  )}

                  <div className="space-y-8 lg:space-y-10">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-primary">Price Range</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="number"
                          placeholder="Min"
                          value={filters.priceMin}
                          onChange={e => setFilters(prev => ({ ...prev, priceMin: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={filters.priceMax}
                          onChange={e => setFilters(prev => ({ ...prev, priceMax: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-primary">Type</h4>
                      <div className="flex flex-wrap gap-3">
                        {['sale', 'rent'].map(t => (
                          <button
                            key={t}
                            onClick={() => setFilters(prev => ({
                              ...prev,
                              type: prev.type === t ? '' : t
                            }))}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                              filters.type === t
                                ? 'bg-gold text-primary shadow-md'
                                : 'bg-white border border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            {t === 'sale' ? 'For Sale' : 'For Rent'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-primary">Bedrooms</h4>
                      <select
                        value={filters.bedrooms}
                        onChange={e => setFilters(prev => ({ ...prev, bedrooms: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
                      >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                      </select>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-primary">Location</h4>
                      <input
                        type="text"
                        placeholder="e.g. Lagos, Ikoyi, Abuja..."
                        value={filters.location}
                        onChange={e => setFilters(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/30 transition"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-primary">Amenities</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {allAmenities.map(amen => (
                          <button
                            key={amen}
                            onClick={() => {
                              setFilters(prev => ({
                                ...prev,
                                amenities: prev.amenities.includes(amen)
                                  ? prev.amenities.filter(a => a !== amen)
                                  : [...prev.amenities, amen]
                              }));
                            }}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                              filters.amenities.includes(amen)
                                ? 'bg-gold/10 border-gold/30 border text-gold'
                                : 'bg-white border border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            {amen}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={resetFilters}
                      className="w-full py-3.5 mt-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition duration-300"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {displayedProperties.length > 0 ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                  {displayedProperties.map((property, i) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: i * 0.08 }}
                    >
                      <PropertyCard property={property} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                    No properties found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or clear them to see all listings
                  </p>
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary rounded-full font-medium hover:bg-gold/90 transition shadow-md"
                  >
                    Reset Filters
                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}