'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Bath, Ruler, MapPin, Heart } from 'lucide-react';
import { Property } from '@/data/properties';
import { useState } from 'react';
import Badge from '@/components/ui/Badge';
import IconButton from '@/components/ui/IconButton';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export default function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-card shadow-md hover:shadow-lg bg-surface ${
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
          <Badge status={property.status}>
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </Badge>
        </div>

        {/* Favorite button */}
        <IconButton
          suppressHydrationWarning
          className="absolute top-4 left-4 z-20"
        >
          <Heart
            className="w-5 h-5 text-text-inverted"
            style={{ fill: isHovered ? 'var(--color-accent)' : 'none', stroke: isHovered ? 'var(--color-accent)' : 'white' }}
          />
        </IconButton>
      </div>

      {/* Content */}
      <div className="p-card-padding lg:p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl lg:text-3xl font-bold text-text-heading leading-tight">
            {property.title}
          </h3>
          <span className="text-xl lg:text-2xl font-semibold text-accent whitespace-nowrap">
            ${property.price.toLocaleString()}
            {property.type === 'rent' && <span className="text-base font-normal">/mo</span>}
          </span>
        </div>

        <div className="flex items-center gap-2 text-text-muted mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-base">{property.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <BedDouble className="w-5 h-5 text-accent" />
            <span className="font-medium">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-accent" />
            <span className="font-medium">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-accent" />
            <span className="font-medium">{property.size} sqft</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 4).map(amenity => (
            <span key={amenity} className="px-3 py-1.5 bg-surface-muted rounded-pill text-sm font-medium text-text-muted">
              {amenity}
            </span>
          ))}
        </div>

        <Link
          href={`/properties/${property.id}`}
          className="block w-full py-4 text-center bg-surface-inverted/75 text-text-inverted font-semibold rounded-card hover:bg-surface-inverted/55 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}