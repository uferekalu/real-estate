'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin, Send, ChevronRight } from 'lucide-react';
import Input from '@/components/ui/Input';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Agents', href: '/agents' },
  { name: 'All Listings', href: '/properties' },
  { name: 'For Sale', href: '/properties?type=sale' },
  { name: 'For Rent', href: '/properties?type=rent' },
  { name: 'Contact', href: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'FAQ', href: '/faq' },
];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5 } },
  };

  return (
    <footer className="bg-gradient-to-b from-surface to-surface-muted relative overflow-hidden border-t border-accent/20">
      {/* Subtle luxury glows matching your FeaturedProperties section */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Brand & Description - Wider column */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4 mb-8 group">
              <span className="text-5xl font-extrabold tracking-tight text-text-heading">
                Neeps
              </span>
              <span className="text-3xl font-medium text-accent">
                International
              </span>
            </Link>

            <p className="text-text-primary leading-relaxed mb-10 text-lg max-w-lg">
              Redefining luxury real estate in Nigeria with unparalleled elegance, trust, and exclusivity.
              From prestigious residences to prime investment opportunities — your gateway to sophisticated living.
            </p>

            {/* Social Icons - Premium with accent color */}
            <div className="flex gap-5">
              {[
                { Icon: Instagram, href: 'https://instagram.com/neepsintl', label: 'Instagram' },
                { Icon: Facebook, href: 'https://facebook.com/neepsintl', label: 'Facebook' },
                { Icon: Twitter, href: 'https://twitter.com/neepsintl', label: 'X (Twitter)' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/neepsintl', label: 'LinkedIn' },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-4 rounded-pill bg-accent/10 hover:bg-accent text-accent hover:text-text-inverted transition-all duration-300 hover:shadow-md hover:shadow-accent/20"
                  whileHover={{ y: -2 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-2xl font-semibold text-text-heading mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent transition-colors flex items-center gap-3 group text-lg"
                  >
                    <ChevronRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-text-heading mb-8">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-3 rounded-pill bg-accent/10">
                  <MapPin size={22} className="text-accent" />
                </div>
                <span className="text-text-primary">Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 rounded-pill bg-accent/10">
                  <Phone size={22} className="text-accent" />
                </div>
                <span className="text-text-primary">+234 123 456 7890</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 rounded-pill bg-accent/10">
                  <Mail size={22} className="text-accent" />
                </div>
                <span className="text-text-primary">info@neepsintl.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter - Elegant and inviting */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-text-heading mb-6">Exclusive Updates</h3>
            <p className="text-text-muted mb-8 text-base">
              Receive private previews, market insights, and new luxury listings first.
            </p>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                suppressHydrationWarning
              />
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                suppressHydrationWarning
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-accent to-accent-hover text-text-heading font-semibold rounded-card shadow-sm hover:shadow-md hover:shadow-accent/30 transition duration-300"
              >
                Subscribe
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar - Subtle and professional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-10 border-t border-accent/20 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted gap-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p>© {new Date().getFullYear()} Neeps International. All rights reserved.</p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-accent transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-accent font-medium">Elegantly crafted by Kalu Ufere</p>
        </motion.div>
      </div>
    </footer>
  );
}