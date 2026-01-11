'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Globe, Users, Award } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5 } },
};

const teamMembers = [
    {
        name: 'Kalu Ufere',
        role: 'Founder & CEO',
        image: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=4184539718263658', // Professional Nigerian businessman
        bio: 'Visionary leader with 15+ years in luxury real estate, passionate about elevating Nigerian property standards.',
    },
    {
        name: 'Adaeze Okoro',
        role: 'Chief Operating Officer',
        image: 'https://www.shutterstock.com/image-photo/black-real-estate-agent-inspecting-600nw-2520678619.jpg', // Professional businesswoman
        bio: 'Expert in operations and client relations, ensuring seamless experiences for our discerning clientele.',
    },
    {
        name: 'Chinedu Eze',
        role: 'Lead Agent',
        image: 'https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064824.jpg?semt=ais_hybrid&w=740&q=80', // Confident real estate professional
        bio: 'Specialist in high-end investments, helping clients build wealth through prime Nigerian properties.',
    },
];

const values = [
    { icon: Globe, title: 'Global Standards', desc: 'Bringing international luxury to Nigeria\'s dynamic real estate landscape.' },
    { icon: Users, title: 'Client-Centric', desc: 'Tailored service for sophisticated buyers and investors.' },
    { icon: Award, title: 'Excellence', desc: 'Curated selections that redefine prestige and value.' },
    { icon: Building2, title: 'Innovation', desc: 'Pioneering sustainable and tech-forward properties.' },
];

export default function About() {
    return (
        <main className="bg-gradient-to-b from-[#f8f5f1] to-white min-h-screen">
            {/* Hero Section - Fixed text visibility with stronger overlay */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://i.ytimg.com/vi/JgFqnCOCJH0/maxresdefault.jpg" // Luxury home in Lagos
                        alt="Neeps International - Luxury Real Estate in Nigeria"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-primary/50 to-black/60" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                        About Neeps International
                    </h1>
                    <p className="text-2xl md:text-3xl text-white max-w-4xl mx-auto drop-shadow-lg">
                        Elevating luxury real estate in Nigeria with unparalleled elegance, trust, and innovation.
                    </p>
                </motion.div>
            </section>

            {/* Story Section */}
            <section className="container mx-auto px-6 lg:px-12 py-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    <motion.div variants={itemVariants}>
                        <span className="text-gold text-lg font-medium tracking-widest uppercase block mb-4">
                            Our Story
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                            Redefining Luxury Living in Nigeria
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            Founded in 2015, Neeps International emerged from a vision to bridge global luxury standards with Nigeria's vibrant real estate market. Starting in Lagos, we've grown to curate exclusive properties nationwide, from oceanfront villas to high-rise investments.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-10">
                            Our commitment to excellence has earned us recognition as Nigeria's premier luxury real estate firm, serving high-net-worth individuals and savvy investors with discretion and expertise.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 text-xl font-medium text-primary hover:text-gold transition-colors group"
                        >
                            Get in Touch
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://cdn.mos.cms.futurecdn.net/tEhKgqsJ9CnyNbMLfAQwbV.jpg" // Elegant Ishahayi Beach House - premium Nigerian luxury
                            alt="Neeps International Journey - Luxury Property"
                            width={800}
                            height={600}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent" />
                    </motion.div>
                </motion.div>
            </section>

            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f8f5f1] to-white">
                {/* Subtle elegant light background texture */}
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="https://png.pngtree.com/background/20250105/original/pngtree-elegant-textured-background-light-beige-or-golden-silk-cotton-or-wool-picture-image_15278769.jpg"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold text-lg font-medium tracking-widest uppercase">
                            Our Core Values
                        </span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary">
                            What Sets Us Apart
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
                    >
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="text-center p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 border border-gold/10"
                            >
                                <div className="mx-auto mb-8 p-6 rounded-full bg-gold/10 w-fit shadow-md">
                                    <value.icon size={48} className="text-gold" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-primary">{value.title}</h3>
                                <p className="text-gray-700 text-lg leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-6 lg:px-12 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="text-center mb-16"
                >
                    <span className="text-gold text-lg font-medium tracking-widest uppercase">
                        Our Experts
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary">
                        Meet the Team
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                        Passionate professionals dedicated to your success in luxury real estate.
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 bg-white"
                        >
                            <div className="relative h-96 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 scale-105 hover:scale-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            <div className="p-10 text-center">
                                <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                                <p className="text-gold font-semibold text-lg mb-4">{member.role}</p>
                                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="mt-16 text-center">
                    <Link
                        href="/agents"
                        className="inline-flex items-center gap-3 text-xl font-medium text-primary hover:text-gold transition-colors group"
                    >
                        View All Agents
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-gold to-[#d4b67a] py-28 text-center">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-primary mb-8"
                    >
                        Ready to Experience Excellence?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-primary/90 mb-12 max-w-4xl mx-auto"
                    >
                        Join Neeps International in redefining your real estate journey.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 px-14 py-7 bg-primary text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-primary/50 hover:bg-primary/90 transition-all duration-500 hover:-translate-y-1"
                        >
                            Contact Us Today
                            <ArrowRight className="w-7 h-7" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}