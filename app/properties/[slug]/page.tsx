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
        image: 'https://www.shutterstock.com/image-photo/manager-portrait-mature-black-man-260nw-2480451617.jpg',
        bio: 'Visionary leader with 15+ years in luxury real estate, passionate about elevating Nigerian property standards.',
    },
    {
        name: 'Adaeze Okoro',
        role: 'Chief Operating Officer',
        image: 'https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg',
        bio: 'Expert in operations and client relations, ensuring seamless experiences for our discerning clientele.',
    },
    {
        name: 'Chinedu Eze',
        role: 'Lead Agent',
        image: 'https://media.istockphoto.com/id/611614554/photo/smiling-real-estate-agent-standing-outside-modern-house.jpg?s=612x612&w=0&k=20&c=P1aHsfYKkoMycbycIQbBsiw3AdEDo0HxEmE_v0l4KFE=',
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
        <main className="bg-gradient-to-b from-surface-muted to-surface min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://cdn.mos.cms.futurecdn.net/es8trvdq6bW36hErkvPjUR.jpg"
                        alt="Neeps International - Luxury Real Estate in Nigeria"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-surface-inverted/50 to-black/60" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-text-inverted mb-6 leading-tight drop-shadow-2xl">
                        About Neeps International
                    </h1>
                    <p className="text-2xl md:text-3xl text-text-inverted max-w-4xl mx-auto drop-shadow-lg">
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
                        <span className="text-accent text-lg font-medium tracking-widest uppercase block mb-4">
                            Our Story
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-8">
                            Redefining Luxury Living in Nigeria
                        </h2>
                        <p className="text-xl text-text-primary leading-relaxed mb-6">
                            Founded in 2015, Neeps International emerged from a vision to bridge global luxury standards with Nigeria's vibrant real estate market. Starting in Lagos, we've grown to curate exclusive properties nationwide, from oceanfront villas to high-rise investments.
                        </p>
                        <p className="text-xl text-text-primary leading-relaxed mb-10">
                            Our commitment to excellence has earned us recognition as Nigeria's premier luxury real estate firm, serving high-net-worth individuals and savvy investors with discretion and expertise.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 text-xl font-medium text-text-heading hover:text-accent transition-colors group"
                        >
                            Get in Touch
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative rounded-card overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/c4a3a256-95fe-4271-b420-826c1b6e2a55/07-Hutton-Drive-2641-Beverly-Hills-luxury-resort-style-home-with-modern-indoor-outdoor-design-and-backyard-pool-terrace.jpg"
                            alt="Neeps International Journey - Luxury Property"
                            width={1200}
                            height={800}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
                    </motion.div>
                </motion.div>
            </section>

            <section className="bg-surface-inverted/90 text-text-inverted py-28 relative overflow-hidden">
                {/* Subtle luxury gradient overlay */}
                <div className="absolute inset-0 opacity-45 bg-gradient-to-br from-accent/50 via-accent/10 to-transparent pointer-events-none" />

                {/* Optional: soft top glow/divider */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="text-center mb-16"
                    >
                        <span className="text-accent text-xl font-semibold tracking-widest uppercase block">
                            Our Core Values
                        </span>
                        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-text-inverted drop-shadow-lg">
                            What Sets Us Apart
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                    >
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="group relative text-center p-8 rounded-2xl bg-white/6 backdrop-blur-xl border border-white/10 hover:border-accent/60 hover:bg-white/10 transition-all duration-500 shadow-xl hover:shadow-accent/30"
                            >
                                <div className="mx-auto mb-6 p-5 rounded-pill bg-gradient-to-br from-accent/50 to-accent/20 w-fit group-hover:scale-110 transition-transform duration-400 shadow-md">
                                    <value.icon size={44} className="text-accent drop-shadow-md" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-text-inverted drop-shadow-md">
                                    {value.title}
                                </h3>
                                <p className="text-white/90 text-lg leading-relaxed drop-shadow-sm">
                                    {value.desc}
                                </p>
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
                    <span className="text-accent text-lg font-medium tracking-widest uppercase">
                        Our Experts
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-text-heading">
                        Meet the Team
                    </h2>
                    <p className="mt-6 text-xl text-text-muted max-w-3xl mx-auto">
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
                            className="rounded-card overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 bg-surface"
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
                                <h3 className="text-2xl font-bold text-text-heading mb-1">{member.name}</h3>
                                <p className="text-accent font-semibold text-lg mb-4">{member.role}</p>
                                <p className="text-text-primary leading-relaxed">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="mt-16 text-center">
                    <Link
                        href="/agents"
                        className="inline-flex items-center gap-3 text-xl font-medium text-text-heading hover:text-accent transition-colors group"
                    >
                        View All Agents
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-accent to-accent-hover py-28 text-center">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-text-heading mb-8"
                    >
                        Ready to Experience Excellence?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-text-heading/90 mb-12 max-w-4xl mx-auto"
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
                            className="inline-flex items-center gap-4 px-14 py-7 bg-surface-inverted text-text-inverted font-bold text-xl rounded-pill shadow-2xl hover:shadow-surface-inverted/50 hover:bg-surface-inverted/90 transition-all duration-500 hover:-translate-y-1"
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
