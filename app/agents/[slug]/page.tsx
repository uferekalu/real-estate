import { notFound } from 'next/navigation';
import AgentProfileClient from './AgentProfileClient';

const agentsData = [
  {
    slug: 'kalu-ufere',
    name: 'Kalu Ufere',
    role: 'Founder & CEO',
    specialty: 'Luxury Estates & Investments',
    experience: '15+ years',
    listingsSold: 150,
    activeListings: 28,
    clientSatisfaction: '98%',
    image: 'https://www.shutterstock.com/image-photo/manager-portrait-mature-black-man-260nw-2480451617.jpg',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=85',
    bio: 'Visionary leader with over 15 years of experience transforming Nigeria\'s luxury real estate landscape. Kalu founded Neeps International with a mission to bring global standards of excellence to the Nigerian market while celebrating local heritage and innovation.',
    expertise: [
      'Ultra-luxury residential properties',
      'High-value investment portfolios',
      'Market trend analysis & forecasting',
      'International buyer representation',
      'Off-market & exclusive listings',
    ],
    achievements: [
      'Most Transactions Closed 2022–2025 – Luxury Segment',
      'Top 1% of Nigerian Real Estate Professionals',
      'Featured in Forbes Africa Luxury Real Estate 2024',
      'Multiple Platinum Awards – Neeps International',
    ],
    phone: '+234 801 234 5678',
    email: 'kalu@neepsintl.com',
    social: {
      linkedin: 'https://linkedin.com/in/kaluufere',
      twitter: 'https://twitter.com/kaluufere',
      instagram: 'https://instagram.com/kaluufere.re',
    },
    languages: ['English', 'Igbo', 'Pidgin'],
    workingAreas: ['Lagos Island', 'Banana Island', 'Ikoyi', 'Victoria Island', 'Lekki Phase 1', 'Abuja (selected)'],
  },
  {
    slug: 'adaeze-okoro',
    name: 'Adaeze Okoro',
    role: 'Chief Operating Officer',
    specialty: 'Commercial Properties & Operations',
    experience: '12+ years',
    listingsSold: 120,
    activeListings: 19,
    clientSatisfaction: '97%',
    image: 'https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=85',
    bio: 'Strategic powerhouse behind Neeps International operations. Adaeze brings meticulous attention to detail and exceptional client relationship management to every transaction.',
    expertise: ['Commercial real estate', 'Office & retail spaces', 'Investment structuring', 'Lease negotiations', 'Portfolio management'],
    achievements: ['Best Operational Excellence Award 2023–2025', 'Highest Client Retention Rate', 'Featured in BusinessDay Luxury Report'],
    phone: '+234 802 345 6789',
    email: 'adaeze@neepsintl.com',
    social: { linkedin: '#', twitter: '#', instagram: '#' },
    languages: ['English', 'Yoruba', 'Pidgin'],
    workingAreas: ['Victoria Island', 'Ikoyi', 'Lekki', 'Abuja CBD', 'Port Harcourt'],
  },
  {
    slug: 'chinedu-eze',
    name: 'Chinedu Eze',
    role: 'Lead Agent',
    specialty: 'Commercial Properties & Operations',
    experience: '13+ years',
    listingsSold: 60,
    activeListings: 19,
    clientSatisfaction: '90%',
    image: 'https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=85',
    bio: 'Strategic powerhouse behind Neeps International operations. Adaeze brings meticulous attention to detail and exceptional client relationship management to every transaction.',
    expertise: ['Commercial real estate', 'Office & retail spaces', 'Investment structuring', 'Lease negotiations', 'Portfolio management'],
    achievements: ['Best Operational Excellence Award 2023–2025', 'Highest Client Retention Rate', 'Featured in BusinessDay Luxury Report'],
    phone: '+234 802 345 6789',
    email: 'chinedueze@neepsintl.com',
    social: { linkedin: '#', twitter: '#', instagram: '#' },
    languages: ['English', 'Yoruba', 'Pidgin'],
    workingAreas: ['Victoria Island', 'Ikoyi', 'Lekki', 'Abuja CBD', 'Port Harcourt'],
  },
  {
    slug: 'sophia-adebayo',
    name: 'Sophia Adebayo',
    role: 'Senior Agent',
    specialty: 'Commercial Properties & Operations',
    experience: '12+ years',
    listingsSold: 120,
    activeListings: 19,
    clientSatisfaction: '97%',
    image: 'https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=85',
    bio: 'Strategic powerhouse behind Neeps International operations. Adaeze brings meticulous attention to detail and exceptional client relationship management to every transaction.',
    expertise: ['Commercial real estate', 'Office & retail spaces', 'Investment structuring', 'Lease negotiations', 'Portfolio management'],
    achievements: ['Best Operational Excellence Award 2023–2025', 'Highest Client Retention Rate', 'Featured in BusinessDay Luxury Report'],
    phone: '+234 802 345 6789',
    email: 'sophia@neepsintl.com',
    social: { linkedin: '#', twitter: '#', instagram: '#' },
    languages: ['English', 'Yoruba', 'Pidgin'],
    workingAreas: ['Victoria Island', 'Ikoyi', 'Lekki', 'Abuja CBD', 'Port Harcourt'],
  },
  {
    slug: 'david-okon',
    name: 'David Okon',
    role: 'Investment Specialist',
    specialty: 'Commercial Properties & Operations',
    experience: '12+ years',
    listingsSold: 120,
    activeListings: 19,
    clientSatisfaction: '97%',
    image: 'https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=85',
    bio: 'Strategic powerhouse behind Neeps International operations. Adaeze brings meticulous attention to detail and exceptional client relationship management to every transaction.',
    expertise: ['Commercial real estate', 'Office & retail spaces', 'Investment structuring', 'Lease negotiations', 'Portfolio management'],
    achievements: ['Best Operational Excellence Award 2023–2025', 'Highest Client Retention Rate', 'Featured in BusinessDay Luxury Report'],
    phone: '+234 802 345 6789',
    email: 'davidokon@neepsintl.com',
    social: { linkedin: '#', twitter: '#', instagram: '#' },
    languages: ['English', 'Yoruba', 'Pidgin'],
    workingAreas: ['Victoria Island', 'Ikoyi', 'Lekki', 'Abuja CBD', 'Port Harcourt'],
  },
];

export default async function AgentProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const agent = agentsData.find((a) => a.slug === slug.toLowerCase());

  if (!agent) {
    notFound();
  }

  return <AgentProfileClient agent={agent} />;
}