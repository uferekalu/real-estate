'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Bath, Ruler, MapPin, Heart } from 'lucide-react';
import { Property } from '@/data/properties';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export default function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      style={{
        perspective: 1000,
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      whileHover={{ scale: featured ? 1.02 : 1.05 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl bg-white ${
        featured ? 'col-span-1 md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Image with gradient overlay */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={featured}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
        
        {/* Status badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
            property.status === 'available' ? 'bg-green-500/90 text-white' :
            property.status === 'sold' ? 'bg-red-500/90 text-white' :
            property.status === 'pending' ? 'bg-yellow-500/90 text-white' :
            'bg-blue-500/90 text-white'
          }`}>
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </span>
        </div>
        
        {/* Favorite button */}
        <button className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors">
          <Heart className="w-5 h-5 text-white" fill={isHovered ? '#c9a96e' : 'none'} stroke={isHovered ? '#c9a96e' : 'white'} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a1a] leading-tight">
            {property.title}
          </h3>
          <span className="text-xl lg:text-2xl font-semibold text-[#c9a96e] whitespace-nowrap">
            ${property.price.toLocaleString()}
            {property.type === 'rent' && <span className="text-base font-normal">/mo</span>}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-base">{property.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <BedDouble className="w-5 h-5 text-[#c9a96e]" />
            <span className="font-medium">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-[#c9a96e]" />
            <span className="font-medium">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#c9a96e]" />
            <span className="font-medium">{property.size} sqft</span>
          </div>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {property.amenities.slice(0, 4).map(amenity => (
              <span key={amenity} className="px-3 py-1.5 bg-[#f8f5f1] rounded-full text-sm font-medium text-gray-700">
                {amenity}
              </span>
            ))}
          </div>
        </motion.div>

        <Link
          href={`/properties/${property.id}`}
          className="block w-full py-4 text-center bg-[#c9a96e] text-white font-semibold rounded-2xl hover:bg-[#b8975c] transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}