'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import { Property } from '@/data/properties';

interface PropertyGalleryProps {
  property: Property;
}

export default function PropertyGallery({ property }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % property.images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + property.images.length) % property.images.length);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="relative">
      {/* Main Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 rounded-3xl overflow-hidden">
        {/* Large main image */}
        <motion.div
          className="relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 h-64 md:h-96 lg:h-[600px] overflow-hidden cursor-pointer"
          onClick={() => openLightbox(0)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={property.images[0]}
            alt={`${property.title} - Main`}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            {property.video && (
              <a
                href={`https://www.youtube.com/watch?v=${property.video}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
              >
                <Play className="w-5 h-5 text-white" />
              </a>
            )}
            {property.virtualTour && (
              <a
                href={property.virtualTour}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
              >
                <ZoomIn className="w-5 h-5 text-white" /> {/* Icon for 360 tour */}
              </a>
            )}
          </div>
        </motion.div>

        {/* Thumbnails */}
        {property.images.slice(1, 5).map((img, idx) => (
          <motion.div
            key={idx}
            className="relative h-32 md:h-48 lg:h-72 overflow-hidden cursor-pointer"
            onClick={() => openLightbox(idx + 1)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img}
              alt={`${property.title} - Image ${idx + 2}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation arrows for main gallery */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative w-full max-w-7xl h-[90vh]" onClick={e => e.stopPropagation()}>
            <Image
              src={property.images[lightboxIndex]}
              alt={`${property.title} - Full View`}
              fill
              className="object-contain"
            />
            {/* Lightbox navigation */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev - 1 + property.images.length) % property.images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 rounded-full hover:bg-white/20"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={() => setLightboxIndex((prev) => (prev + 1) % property.images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 rounded-full hover:bg-white/20"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 p-3 bg-white/10 rounded-full hover:bg-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}