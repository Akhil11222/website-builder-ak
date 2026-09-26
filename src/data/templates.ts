export interface Template {
  id: string;
  name: string;
  category: 'E-Commerce' | 'Agency' | 'Restaurant' | 'Real Estate' | 'Healthcare' | 'Portfolio';
  tagline: string;
  description: string;
  fullPrice: number;
  tokenDeposit: number;
  deliveryHours: number;
  rating: number;
  reviewsCount: number;
  features: string[];
  techStack: string[];
  mockupType: 'ecommerce' | 'saas' | 'restaurant' | 'realestate' | 'healthcare' | 'portfolio';
  popularBadge?: string;
  demoUrl: string;
  stats: { label: string; value: string }[];
}

export const TEMPLATES: Template[] = [
  {
    id: 'aura-commerce',
    name: 'Aura Minimal Storefront',
    category: 'E-Commerce',
    tagline: 'High-speed headless commerce engine with cart drawer & localized payments',
    description: 'Engineered for luxury fashion, lifestyle brands, and modern direct-to-consumer labels. Features micro-animated catalog grids, instant product modal, dynamic cart drawer, multi-currency support, and Stripe / Razorpay checkout hookups.',
    fullPrice: 599,
    tokenDeposit: 59.9,
    deliveryHours: 48,
    rating: 4.96,
    reviewsCount: 84,
    features: [
      'Headless Cart Drawer & Stock Check',
      'Razorpay & Stripe Checkout Ready',
      'Multi-currency Switcher (USD, EUR, INR)',
      'Sub-second Page Load (99 CWV Score)',
      'Automated Order Confirmation Email Flow'
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
    mockupType: 'ecommerce',
    popularBadge: 'Top Merchant Pick',
    demoUrl: 'https://aura-storefront.preview',
    stats: [
      { label: 'Conversion Rate', value: '4.8%' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Setup Time', value: '48h Live' }
    ]
  },
  {
    id: 'nova-saas',
    name: 'Nova Cloud & AI Engine',
    category: 'Agency',
    tagline: 'High-converting SaaS & developer platform with interactive pricing matrix',
    description: 'Designed for B2B SaaS, API infrastructure, and generative AI tools. Includes interactive tiered pricing calculators, dynamic metrics dashboard wireframe, dark terminal demo, API documentation tabs, and customer review carousel.',
    fullPrice: 699,
    tokenDeposit: 69.9,
    deliveryHours: 48,
    rating: 4.98,
    reviewsCount: 112,
    features: [
      'Interactive Tiered Pricing Matrix',
      'Live Metrics & Telemetry Dashboard',
      'Dark Terminal & CLI Sandbox Preview',
      'Documentation Sidebar with Search',
      'Waitlist & Team Invite Modal Systems'
    ],
    techStack: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS'],
    mockupType: 'saas',
    popularBadge: 'Enterprise Grade',
    demoUrl: 'https://nova-cloud.preview',
    stats: [
      { label: 'Sign-up Velocity', value: '+34%' },
      { label: 'Bundle Footprint', value: '42 kB' },
      { label: 'Setup Guarantee', value: '48 Hours' }
    ]
  },
  {
    id: 'artisan-bistro',
    name: "L'Artisan Editorial Bistro",
    category: 'Restaurant',
    tagline: 'Atmospheric dining showcase with instant table reservations & tasting menus',
    description: 'Crafted for fine dining establishments, contemporary bistros, and boutique culinary venues. Showcases categorized tasting menus with dietary filters, calendar-backed reservation modal, chef story section, and private event inquiry forms.',
    fullPrice: 449,
    tokenDeposit: 44.9,
    deliveryHours: 48,
    rating: 4.92,
    reviewsCount: 63,
    features: [
      'Interactive Table Booking Engine',
      'Digital Tasting Menu with Wine Pairings',
      'Dietary Preference Filters (Vegan, GF)',
      'Direct WhatsApp & SMS Concierge Link',
      'Google Maps & Valet Parking Guide'
    ],
    techStack: ['Next.js App Router', 'TypeScript', 'Tailwind CSS'],
    mockupType: 'restaurant',
    demoUrl: 'https://lartisan-dining.preview',
    stats: [
      { label: 'Direct Bookings', value: '68%' },
      { label: 'Table Turn Rate', value: '+22%' },
      { label: 'Handover Time', value: '48 Hours' }
    ]
  },
  {
    id: 'vanguard-realty',
    name: 'Vanguard Architectural Living',
    category: 'Real Estate',
    tagline: 'High-ticket architectural property marketplace with MLS and VIP inquiry',
    description: 'Engineered for luxury brokers, architectural developers, and commercial agencies. Features refined property search, floor plan schematics, mortgage estimator slider, high-res gallery lightbox wireframes, and direct private tour booking.',
    fullPrice: 799,
    tokenDeposit: 79.9,
    deliveryHours: 48,
    rating: 4.99,
    reviewsCount: 76,
    features: [
      'Dynamic Property Filter by SqFt & Price',
      'Interactive Mortgage Estimator Calculator',
      'High-Precision Floor Plan Visualizer',
      'Agent WhatsApp & Direct Call Bridge',
      'Automated PDF Brochure Generator'
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Leaflet Ready'],
    mockupType: 'realestate',
    popularBadge: 'High Ticket Specialist',
    demoUrl: 'https://vanguard-realty.preview',
    stats: [
      { label: 'Lead Capture', value: '3.9x' },
      { label: 'Average Deal Size', value: '$1.4M' },
      { label: 'Handover Guarantee', value: '48 Hours' }
    ]
  },
  {
    id: 'cura-health',
    name: 'Cura Clinic & Diagnostics',
    category: 'Healthcare',
    tagline: 'Clean, accessible medical portal with physician roster & online scheduling',
    description: 'Designed for diagnostic laboratories, specialty clinics, dental practices, and private doctors. Equipped with accessible doctor availability selector, appointment booking triage, patient prep guidelines, and emergency quick-contact dock.',
    fullPrice: 549,
    tokenDeposit: 54.9,
    deliveryHours: 48,
    rating: 4.95,
    reviewsCount: 58,
    features: [
      'Physician Availability & Slot Booking',
      'Specialty Department Directory',
      'HIPAA & Patient Privacy Compliance Ready',
      'Insurance Provider Verification Lookup',
      'Emergency One-Tap Telehealth Hotline'
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS'],
    mockupType: 'healthcare',
    demoUrl: 'https://cura-health.preview',
    stats: [
      { label: 'No-Show Reduction', value: '-41%' },
      { label: 'Accessibility Score', value: '100% WCAG' },
      { label: 'Handover SLA', value: '48 Hours' }
    ]
  },
  {
    id: 'kanso-studio',
    name: 'Kanso Minimalist Agency',
    category: 'Portfolio',
    tagline: 'Monochrome editorial portfolio for visionary design studios & architects',
    description: 'Built for industrial designers, branding agencies, and creative technologists. Delivers asymmetric typography layouts, project deep-dive case studies, client logo showcase, awards timeline, and an interactive quote configurator.',
    fullPrice: 399,
    tokenDeposit: 39.9,
    deliveryHours: 48,
    rating: 4.97,
    reviewsCount: 92,
    features: [
      'Asymmetric Editorial Case Study Layouts',
      'Interactive Client & Awards Timeline',
      'Subtle Framer-grade Scroll Transitions',
      'Integrated Project Inquiry Estimator',
      'Vimeo & Video Embed Support'
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS'],
    mockupType: 'portfolio',
    demoUrl: 'https://kanso-studio.preview',
    stats: [
      { label: 'Awards Won', value: '14 AOTD' },
      { label: 'Bounce Rate', value: '21%' },
      { label: 'Handover Speed', value: '48 Hours' }
    ]
  }
];

export const CATEGORIES = [
  'All',
  'E-Commerce',
  'Agency',
  'Restaurant',
  'Real Estate',
  'Healthcare',
  'Portfolio'
] as const;

export type Category = typeof CATEGORIES[number];
