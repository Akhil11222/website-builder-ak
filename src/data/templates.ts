export interface Template {
  id: string;
  name: string;
  category: 'E-Commerce' | 'Corporate Agency' | 'Restaurant & Cafe' | 'Real Estate' | 'Health & Clinics' | 'Creative Portfolio';
  tagline: string;
  description: string;
  fullPrice: number;
  tokenDeposit: number;
  currency: string;
  deliveryHours: number;
  rating: number;
  reviewsCount: number;
  features: string[];
  techStack: string[];
  mockupType: 'ecommerce' | 'saas' | 'restaurant' | 'realestate' | 'healthcare' | 'portfolio';
  popularBadge?: string;
  demoUrl: string;
  themeColor: string;
  stats: { label: string; value: string }[];
}

export const TEMPLATES: Template[] = [
  {
    id: 'aura-storefront',
    name: 'Aura Headless Storefront',
    category: 'E-Commerce',
    tagline: 'Lightning-fast digital store with dynamic cart drawer, multi-currency checkout & inventory sync.',
    description: 'Engineered for boutique brands, modern DTC labels, and retail stores. Includes sub-second page loads, razor-sharp product zoom, slide-out cart drawer, and instant Razorpay / Stripe payment gateway hookups.',
    fullPrice: 14999,
    tokenDeposit: 1499,
    currency: '₹',
    deliveryHours: 48,
    rating: 4.94,
    reviewsCount: 128,
    features: [
      'Instant Slide-Out Cart & Stock Tracker',
      'Razorpay & Stripe Checkout Integration',
      'Multi-Currency & International Shipping Rates',
      'Sub-Second Core Web Vitals (99/100 score)',
      'Automated Order Email & WhatsApp Receipts'
    ],
    techStack: ['Next.js 16', 'Tailwind CSS', 'TypeScript', 'Stripe / Razorpay'],
    mockupType: 'ecommerce',
    popularBadge: 'Best Seller',
    demoUrl: 'aura-store.live',
    themeColor: 'indigo',
    stats: [
      { label: 'Conversion Lift', value: '+34%' },
      { label: 'Mobile Score', value: '99/100' },
      { label: 'Setup Time', value: '48 Hours' }
    ]
  },
  {
    id: 'nova-saas',
    name: 'Nova SaaS & Cloud Platform',
    category: 'Corporate Agency',
    tagline: 'High-converting software & agency showcase with interactive pricing calculator and KPI dashboard.',
    description: 'Built for enterprise SaaS platforms, AI startups, and consulting agencies. Features an interactive tiered pricing matrix, live analytics preview cards, API documentation hub, and customer case study carousels.',
    fullPrice: 16999,
    tokenDeposit: 1699,
    currency: '₹',
    deliveryHours: 48,
    rating: 4.98,
    reviewsCount: 164,
    features: [
      'Interactive Tiered Pricing Calculator',
      'Live Metrics & Telemetry Dashboard Cards',
      'Interactive Terminal CLI & API Code Tabs',
      'Lead Capture Modal & Team Invitation Flow',
      'Customer Testimonial & Case Study Grid'
    ],
    techStack: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion Ready'],
    mockupType: 'saas',
    popularBadge: 'Enterprise Choice',
    demoUrl: 'nova-cloud.live',
    themeColor: 'blue',
    stats: [
      { label: 'Signup Velocity', value: '+42%' },
      { label: 'Page Weight', value: '48 kB' },
      { label: 'Setup Time', value: '48 Hours' }
    ]
  },
  {
    id: 'artisan-bistro',
    name: "L'Artisan Dining & Cafe",
    category: 'Restaurant & Cafe',
    tagline: 'Warm culinary presentation with instant online table reservation & digital tasting menu.',
    description: 'Crafted for fine dining restaurants, artisanal cafes, and culinary venues. Showcases interactive digital menus with dietary badges, calendar-backed reservation booking, chef profile story, and private event inquiries.',
    fullPrice: 11999,
    tokenDeposit: 1199,
    currency: '₹',
    deliveryHours: 48,
    rating: 4.92,
    reviewsCount: 89,
    features: [
      'Table Reservation Booking Engine',
      'Categorized Food & Wine Tasting Menu',
      'Dietary Preference Filters (Vegan, GF, Halal)',
      'Direct WhatsApp Concierge & Map Directions',
      'Special Occasion & Event Booking Form'
    ],
    techStack: ['Next.js 16', 'Tailwind CSS', 'TypeScript', 'Google Maps API'],
    mockupType: 'restaurant',
    popularBadge: 'Popular',
    demoUrl: 'artisan-dining.live',
    themeColor: 'amber',
    stats: [
      { label: 'Direct Bookings', value: '+52%' },
      { label: 'Menu Engagement', value: '4.2 min' },
      { label: 'Setup Time', value: '48 Hours' }
    ]
  },
  {
    id: 'vanguard-realty',
    name: 'Vanguard Luxury Real Estate',
    category: 'Real Estate',
    tagline: 'Architectural property catalog with advanced MLS filter, floor plan visualizer & VIP tour booking.',
    description: 'Designed for premium brokers, property developers, and architectural firms. Features high-res listing filters by location & budget, interactive floor plans, mortgage estimation slider, and direct WhatsApp agent connects.',
    fullPrice: 18999,
    tokenDeposit: 1899,
    currency: '₹',
    deliveryHours: 48,
    rating: 4.97,
    reviewsCount: 115,
    features: [
      'Property Filter by Price, SqFt & Bedrooms',
      'Interactive Floor Plan Schematic Cards',
      'Monthly Mortgage Calculator Slider',
      'One-Tap Agent Direct Call & WhatsApp Link',
      'Downloadable PDF Property Brochure'
    ],
    techStack: ['Next.js 16', 'Tailwind CSS', 'TypeScript', 'Mapbox Ready'],
    mockupType: 'realestate',
    popularBadge: 'High Ticket',
    demoUrl: 'vanguard-living.live',
    themeColor: 'slate',
    stats: [
      { label: 'Inquiry Rate', value: '3.8x' },
      { label: 'Avg Deal Size', value: '₹1.8 Cr' },
      { label: 'Setup Time', value: '48 Hours' }
    ]
  },
  {
    id: 'cura-health',
    name: 'Cura Clinic & Health Portal',
    category: 'Health & Clinics',
    tagline: 'Patient-first healthcare portal with doctor availability directory and instant appointment booking.',
    description: 'Tailored for diagnostic clinics, multi-specialty hospitals, dental studios, and wellness doctors. Features interactive physician rosters, instant consultation booking slots, patient intake check, and emergency hotline callouts.',
    fullPrice: 13499,
    tokenDeposit: 1349,
    currency: '₹',
    deliveryHours: 48,
    rating: 4.95,
    reviewsCount: 78,
    features: [
      'Doctor Availability & Time Slot Scheduler',
      'Specialist Department Directory & Bios',
      'Patient Pre-Appointment Digital Intake',
      'Insurance Provider Verification Guide',
      'One-Click Emergency Hotline Button'
    ],
    techStack: ['Next.js 16', 'Tailwind CSS', 'TypeScript', 'WCAG AA Ready'],
    mockupType: 'healthcare',
    demoUrl: 'cura-clinic.live',
    themeColor: 'teal',
    stats: [
      { label: 'No-Show Reduction', value: '-38%' },
      { label: 'Patient Rating', value: '98%' },
      { label: 'Setup Time', value: '48 Hours' }
    ]
  },
  {
    id: 'kanso-studio',
    name: 'Kanso Creative Studio',
    category: 'Creative Portfolio',
    tagline: 'Editorial minimalist portfolio for design studios, architects, and visual directors.',
    description: 'Engineered for branding studios, industrial designers, and visual creators. Features smooth typographic case study layouts, client awards showcase, interactive inquiry form, and fluid responsiveness.',
    fullPrice: 9999,
    tokenDeposit: 999,
    currency: '₹',
    deliveryHours: 48,
    rating: 4.96,
    reviewsCount: 142,
    features: [
      'Editorial Asymmetrical Case Study Layouts',
      'Client Recognition & Awards Showcase Grid',
      'Interactive Project Budget & Scope Estimator',
      'High-Resolution Gallery & Video Support',
      'Direct Project Commission Inquiry Drawer'
    ],
    techStack: ['Next.js 16', 'Tailwind CSS', 'TypeScript'],
    mockupType: 'portfolio',
    demoUrl: 'kanso-studio.live',
    themeColor: 'indigo',
    stats: [
      { label: 'Client Inquiries', value: '+65%' },
      { label: 'Industry Awards', value: '18 Awards' },
      { label: 'Setup Time', value: '48 Hours' }
    ]
  }
];

export const CATEGORIES = [
  'All',
  'E-Commerce',
  'Corporate Agency',
  'Restaurant & Cafe',
  'Real Estate',
  'Health & Clinics',
  'Creative Portfolio'
] as const;

export type Category = typeof CATEGORIES[number];
