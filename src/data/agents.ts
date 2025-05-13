import { Agent } from '../types/Agent';

export const agents: Agent[] = [
  {
    id: 'agent-001',
    name: 'Sana Qureshi',
    photo: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=500',
    role: 'Founder & Principal Agent',
    phone: '+92 300 123 4567',
    email: 'sana.qureshi@urbannest.com',
    bio: "Sana brings over 15 years of experience in Lahore's luxury real estate market. As the founder of UrbanNest Realty, she has established herself as a trusted advisor for high-value property transactions. Sana specializes in DHA and Bahria Town luxury homes and has personally closed over PKR 2 billion in sales throughout her career. Her deep market knowledge, negotiation skills, and commitment to client satisfaction have earned her a loyal clientele of referrals and repeat business.",
    properties: ['prop-001', 'prop-004', 'prop-007', 'prop-010'],
    rating: 4.9,
    featured: true,
    socialMedia: {
      facebook: 'facebook.com/sanaqureshi',
      twitter: 'twitter.com/sanaqureshi',
      instagram: 'instagram.com/sanaqureshi',
      linkedin: 'linkedin.com/in/sanaqureshi'
    }
  },
  {
    id: 'agent-002',
    name: 'Ahmed Khan',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500',
    role: 'Senior Property Consultant',
    phone: '+92 321 987 6543',
    email: 'ahmed.khan@urbannest.com',
    bio: "With a background in architecture and 8 years in real estate, Ahmed brings a unique perspective to the property market. He specializes in modern apartments and commercial properties in Gulberg and Johar Town areas. Ahmed is known for his attention to detail and ability to match clients with properties that perfectly suit their needs and preferences. His technical knowledge of building structures and design makes him an invaluable resource for buyers concerned about property quality and potential.",
    properties: ['prop-002', 'prop-005', 'prop-008', 'prop-009'],
    rating: 4.8,
    featured: true,
    socialMedia: {
      facebook: 'facebook.com/ahmedkhan',
      instagram: 'instagram.com/ahmedkhan',
      linkedin: 'linkedin.com/in/ahmedkhan'
    }
  },
  {
    id: 'agent-003',
    name: 'Zara Malik',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=500',
    role: 'Luxury Property Specialist',
    phone: '+92 333 456 7890',
    email: 'zara.malik@urbannest.com',
    bio: "Zara specializes in high-end properties and has built a reputation for discretion and personalized service. With 10 years in luxury real estate, she has an extensive network of affluent clients and investors. Zara's expertise in Bahria Town and DHA Phase 6-8 makes her the go-to agent for premium properties in these areas. Her background in interior design allows her to help clients envision a property's potential, and her negotiation skills consistently secure excellent deals for her buyers and sellers alike.",
    properties: ['prop-003', 'prop-006'],
    rating: 4.9,
    featured: true,
    socialMedia: {
      instagram: 'instagram.com/zaramalik',
      linkedin: 'linkedin.com/in/zaramalik'
    }
  },
  {
    id: 'agent-004',
    name: 'Omar Farooq',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=500',
    role: 'Commercial Property Expert',
    phone: '+92 345 678 9012',
    email: 'omar.farooq@urbannest.com',
    bio: "Omar has specialized in commercial real estate for 12 years, with extensive experience in office spaces, retail properties, and industrial facilities. His background in business administration gives him insight into the needs of commercial clients, from startups to established corporations. Omar maintains a detailed database of commercial properties throughout Lahore and has strong relationships with property owners and developers. His clients appreciate his market analysis skills and strategic approach to commercial property investments.",
    properties: [],
    rating: 4.7,
    featured: false,
    socialMedia: {
      linkedin: 'linkedin.com/in/omarfarooq'
    }
  }
];