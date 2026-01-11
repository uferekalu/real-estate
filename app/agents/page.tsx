'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, Globe, Building2, Award, Users, Star } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const agents = [
  {
    name: 'Kalu Ufere',
    role: 'Founder & CEO',
    specialty: 'Luxury Estates & Investments',
    experience: '15+ years',
    listings: 150,
    image: 'https://www.shutterstock.com/image-photo/manager-portrait-mature-black-man-260nw-2480451617.jpg',
    bio: 'Visionary leader passionate about elevating Nigerian property standards. Specializes in high-net-worth client portfolios and market analysis.',
    phone: '+234-801-234-5678',
    email: 'kalu@neepsintl.com',
    social: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Adaeze Okoro',
    role: 'Chief Operating Officer',
    specialty: 'Commercial Properties & Operations',
    experience: '12+ years',
    listings: 120,
    image: 'https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg',
    bio: 'Expert in seamless client experiences and operational excellence. Focuses on commercial real estate and investment strategies.',
    phone: '+234-802-345-6789',
    email: 'adaeze@neepsintl.com',
    social: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Chinedu Eze',
    role: 'Lead Agent',
    specialty: 'Residential & High-End Investments',
    experience: '10+ years',
    listings: 200,
    image: 'https://media.istockphoto.com/id/611614554/photo/smiling-real-estate-agent-standing-outside-modern-house.jpg?s=612x612&w=0&k=20&c=P1aHsfYKkoMycbycIQbBsiw3AdEDo0HxEmE_v0l4KFE=',
    bio: 'Specialist in prime residential properties, helping clients build wealth through strategic real estate investments.',
    phone: '+234-803-456-7890',
    email: 'chinedu@neepsintl.com',
    social: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Sophia Adebayo',
    role: 'Senior Agent',
    specialty: 'Coastal Properties & Rentals',
    experience: '8+ years',
    listings: 180,
    image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Passionate about waterfront homes and vacation rentals. Delivers personalized service with market expertise.',
    phone: '+234-804-567-8901',
    email: 'sophia@neepsintl.com',
    social: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'David Okon',
    role: 'Investment Specialist',
    specialty: 'Commercial & Development Projects',
    experience: '14+ years',
    listings: 95,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Expert in real estate investments and development. Guides clients through complex transactions with precision.',
    phone: '+234-805-678-9012',
    email: 'david@neepsintl.com',
    social: { linkedin: '#', twitter: '#', instagram: '#' },
  },
];

const testimonials = [
  {
    quote: 'Kalu and his team made our dream home a reality. Professional and attentive throughout.',
    author: 'John D., Lagos',
    rating: 5,
  },
  {
    quote: 'Exceptional service from start to finish. Highly recommend Neeps International.',
    author: 'Sarah M., Abuja',
    rating: 5,
  },
  // Add more
];

export default function Agents() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-950/75">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1522204523234-8720aa4e3d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=90"
            alt="Neeps International Agents"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 to-gray-950/80" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Our Expert Agents
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
            Meet our team of dedicated professionals committed to delivering exceptional real estate experiences.
          </p>
        </motion.div>
      </section>

      {/* Agents Grid */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <span className="text-gray-950 text-lg font-medium tracking-widest uppercase block mb-4">
            Dedicated Professionals
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-950 mb-6">
            Find Your Perfect Agent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our agents are experts in Nigeria's luxury real estate market, ready to guide you every step of the way.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gray-950/20 transition-all duration-500 bg-white"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-950 mb-1">{agent.name}</h3>
                <p className="text-gray-950/80 font-semibold text-lg mb-2">{agent.role}</p>
                <p className="text-gray-600 text-sm mb-4">{agent.specialty} • {agent.experience}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{agent.bio}</p>
                
                <div className="space-y-3 mb-6">
                  <a href={`tel:${agent.phone}`} className="flex items-center gap-3 text-gray-950 hover:text-gray-950/70 transition-colors">
                    <Phone className="w-5 h-5" />
                    {agent.phone}
                  </a>
                  <a href={`mailto:${agent.email}`} className="flex items-center gap-3 text-gray-950 hover:text-gray-950/70 transition-colors">
                    <Mail className="w-5 h-5" />
                    {agent.email}
                  </a>
                </div>
                
                <Link
                  href={`/agents/${agent.name.toLowerCase().replace(/\s/g, '-')}`}
                  className="block w-full py-3 text-center bg-gray-950/75 text-white font-semibold rounded-xl hover:bg-gray-950 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-950/75 py-24 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center mb-16"
          >
            <span className="text-white text-lg font-medium tracking-widest uppercase block mb-4">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Hear from satisfied clients about their experiences with our agents.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                <p className="text-white font-semibold">{testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 text-center bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-950 mb-8"
          >
            Ready to Find Your Dream Property?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Connect with one of our expert agents today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-14 py-6 bg-gray-950/75 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-gray-950/50 hover:bg-gray-950 transition-all duration-500 hover:-translate-y-1"
            >
              Contact an Agent
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}