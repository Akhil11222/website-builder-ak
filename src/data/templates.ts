export interface Template {
  id: string;
  title: string;
  tagline: string;
  category: 'E-Commerce' | 'Agency' | 'Restaurant' | 'Real Estate' | 'Healthcare' | 'Creative';
  fullPrice: number;
  tokenPrice: number;
  readyInHours: number;
  techStack: string[];
  features: string[];
  mockupType: 'ecommerce' | 'agency' | 'restaurant' | 'realestate' | 'healthcare' | 'creative';
  rating: number;
  liveReviews: number;
}

export const CATEGORIES = [
  'All',
  'E-Commerce',
  'Agency',
  'Restaurant',
  'Real Estate',
  'Healthcare'
] as const;

export type Category = (typeof CATEGORIES)[number];

export const TEMPLATES: Template[] = [
  {
    id: 'novastore',
    title: 'NovaStore',
    tagline: 'High-conversion headless storefront with dynamic cart and instant UPI checkout.',
    category: 'E-Commerce',
    fullPrice: 14999,
    tokenPrice: 1499,
    readyInHours: 48,
    techStack: ['Next.js 15', 'Tailwind', 'Stripe / Razorpay', 'Headless Cart'],
    features: ['1-Click Instant Checkout', 'Automated Inventory Sync', 'Mobile-First PWA Support'],
    mockupType: 'ecommerce',
    rating: 4.96,
    liveReviews: 38
  },
  {
    id: 'apexstudio',
    title: 'ApexStudio',
    tagline: 'Sleek modern digital agency portal with interactive case studies and calendar booking.',
    category: 'Agency',
    fullPrice: 11999,
    tokenPrice: 1199,
    readyInHours: 48,
    techStack: ['Next.js 15', 'Framer Motion', 'Cal.com Sync', 'CMS Blog'],
    features: ['Interactive Case Studies', 'Lead Scoring Form', 'Automated Calendar Sync'],
    mockupType: 'agency',
    rating: 4.94,
    liveReviews: 29
  },
  {
    id: 'velvetdine',
    title: 'VelvetDine',
    tagline: 'Warm culinary experience with interactive QR digital menus and table reservations.',
    category: 'Restaurant',
    fullPrice: 9999,
    tokenPrice: 999,
    readyInHours: 48,
    techStack: ['React 19', 'Tailwind CSS', 'OpenTable API', 'WhatsApp Order'],
    features: ['Digital QR Smart Menu', 'Table Booking Engine', 'WhatsApp Order Router'],
    mockupType: 'restaurant',
    rating: 4.92,
    liveReviews: 44
  },
  {
    id: 'primeestates',
    title: 'PrimeEstates',
    tagline: 'Luxury real estate showcase with 3D floor plan explorer and mortgage calculator.',
    category: 'Real Estate',
    fullPrice: 16999,
    tokenPrice: 1699,
    readyInHours: 48,
    techStack: ['Next.js 15', 'Leaflet Maps', 'Filter Engine', 'Lead Capture'],
    features: ['Interactive Property Map', 'Instant Mortgage Calculator', 'VIP Broker Lead Routing'],
    mockupType: 'realestate',
    rating: 4.98,
    liveReviews: 23
  },
  {
    id: 'pulsecare',
    title: 'PulseCare',
    tagline: 'HIPAA-conscious clinic portal with instant doctor appointment scheduling.',
    category: 'Healthcare',
    fullPrice: 12999,
    tokenPrice: 1299,
    readyInHours: 48,
    techStack: ['Next.js 15', 'Tailwind', 'Patient Intake', 'SMS Reminder'],
    features: ['Specialist Slot Booking', 'Digital Intake Forms', 'Automated SMS Alerts'],
    mockupType: 'healthcare',
    rating: 4.95,
    liveReviews: 31
  },
  {
    id: 'minimalfolio',
    title: 'MinimalFolio',
    tagline: 'Editorial grid portfolio with silky smooth transitions for creators & architects.',
    category: 'Agency', // filterable under All / Agency
    fullPrice: 8999,
    tokenPrice: 899,
    readyInHours: 48,
    techStack: ['Next.js 15', 'Tailwind CSS', 'Subtle Motion', 'Fast CDN'],
    features: ['High-DPI Project Carousels', 'Client Testimonial Feed', 'Direct Inbound Inquiry'],
    mockupType: 'creative',
    rating: 4.91,
    liveReviews: 52
  }
];
