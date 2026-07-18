'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Award,
  Building2,
  Star,
  ArrowRight,
} from 'lucide-react';

interface Agent {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  listingsSold: number;
  activeListings: number;
  clientSatisfaction: string;
  image: string;
  coverImage: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  phone: string;
  email: string;
  social: Record<string, string>;
  languages: string[];
  workingAreas: string[];
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function AgentProfileClient({ agent }: { agent: Agent }) {
  return (
    <main className="bg-gradient-to-b from-surface to-surface-muted min-h-screen">
      {/* Hero / Cover Section */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src={agent.coverImage}
          alt={`${agent.name} - Cover`}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-inverted/40 via-surface-inverted/70 to-surface-inverted/90" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 bg-surface-inverted/60 backdrop-blur-md px-5 py-2 rounded-pill mb-6">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-text-inverted/90 font-medium">{agent.specialty}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-text-inverted mb-4 drop-shadow-2xl leading-tight">
              {agent.name}
            </h1>

            <p className="text-2xl md:text-3xl text-text-inverted/90 font-light mb-8">
              {agent.role}
            </p>

            <div className="flex flex-wrap gap-6 text-text-inverted/90">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>{agent.listingsSold}+ Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span>{agent.clientSatisfaction} Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left - Profile card */}
          <motion.div className="lg:col-span-1" variants={container} initial="hidden" animate="visible">
            <div className="bg-surface rounded-card shadow-xl overflow-hidden sticky top-8">
              <div className="relative h-80">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-inverted/70 via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-heading mb-1">{agent.name}</h3>
                <p className="text-text-muted font-medium mb-6">{agent.role}</p>

                <div className="space-y-5 mb-8">
                  <div className="flex items-center gap-4 text-text-primary">
                    <div className="bg-surface-muted p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-text-heading" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Phone</p>
                      <a href={`tel:${agent.phone}`} className="font-medium hover:text-accent transition-colors">
                        {agent.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-text-primary">
                    <div className="bg-surface-muted p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-text-heading" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Email</p>
                      <a href={`mailto:${agent.email}`} className="font-medium hover:text-accent transition-colors">
                        {agent.email}
                      </a>
                    </div>
                  </div>
                </div>

                {Object.keys(agent.social).length > 0 && (
                  <div className="flex gap-4 mb-8">
                    {agent.social.linkedin && (
                      <a href={agent.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface-muted rounded-lg hover:bg-border transition-colors">
                        <Linkedin className="w-5 h-5 text-text-heading" />
                      </a>
                    )}
                    {agent.social.twitter && (
                      <a href={agent.social.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface-muted rounded-lg hover:bg-border transition-colors">
                        <Twitter className="w-5 h-5 text-text-heading" />
                      </a>
                    )}
                    {agent.social.instagram && (
                      <a href={agent.social.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface-muted rounded-lg hover:bg-border transition-colors">
                        <Instagram className="w-5 h-5 text-text-heading" />
                      </a>
                    )}
                  </div>
                )}

                <Link
                  href="/contact"
                  className="block w-full py-4 text-center bg-surface-inverted/90 text-text-inverted font-semibold rounded-card hover:bg-surface-inverted transition-colors shadow-lg"
                >
                  Contact {agent.name.split(' ')[0]}
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right column - content sections */}
          <motion.div className="lg:col-span-2 space-y-16" variants={container} initial="hidden" animate="visible">
            <motion.section variants={item}>
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
                About {agent.name.split(' ')[0]}
              </h2>
              <p className="text-lg text-text-primary leading-relaxed">{agent.bio}</p>
            </motion.section>

            <motion.section variants={item}>
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">Areas of Expertise</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {agent.expertise.map((exp, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-surface rounded-card shadow-sm border border-border">
                    <div className="mt-1">
                      <Award className="w-6 h-6 text-amber-500" />
                    </div>
                    <p className="text-text-heading font-medium">{exp}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={item}>
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">Notable Achievements</h2>
              <div className="space-y-4">
                {agent.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-surface rounded-card shadow-sm border border-border">
                    <div className="bg-amber-100 p-3 rounded-pill">
                      <Star className="w-6 h-6 text-amber-600 fill-current" />
                    </div>
                    <p className="text-text-heading font-medium">{ach}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={item} className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface p-8 rounded-card shadow-md border border-border text-center">
                <div className="text-4xl font-bold text-text-heading mb-2">{agent.experience}</div>
                <p className="text-text-muted">Experience</p>
              </div>
              <div className="bg-surface p-8 rounded-card shadow-md border border-border text-center">
                <div className="text-4xl font-bold text-text-heading mb-2">{agent.listingsSold}+</div>
                <p className="text-text-muted">Transactions</p>
              </div>
              <div className="bg-surface p-8 rounded-card shadow-md border border-border text-center">
                <div className="text-4xl font-bold text-text-heading mb-2">{agent.clientSatisfaction}</div>
                <p className="text-text-muted">Satisfaction</p>
              </div>
            </motion.section>

            <motion.div variants={item} className="pt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-surface-inverted/90 text-text-inverted font-bold text-xl rounded-pill shadow-2xl hover:shadow-surface-inverted/40 hover:bg-surface-inverted transition-all duration-500 hover:-translate-y-1"
              >
                Schedule a Consultation
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
