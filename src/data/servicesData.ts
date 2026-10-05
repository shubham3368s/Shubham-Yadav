import { ServiceItem } from '../types/services';

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-automation',
    number: '01',
    category: 'INTELLIGENT SYSTEMS & AUTOMATION',
    title: 'End-to-End AI Automation.',
    description:
      'Custom AI agents, intelligent workflows, CRM integrations, and generative AI pipelines designed to streamline operations and 10x team efficiency.',
    primaryCta: 'Book AI Strategy Call',
    secondaryCta: 'Explore Solutions',
    features: [
      'Autonomous Customer Support & Inbound Sales Agents',
      'CRM, WhatsApp & Lead Routing Workflow Automation',
      'Custom Generative AI Pipelines & Content Workflows',
      'Data Extraction, Document Processing & Operations Bots'
    ],
    metrics: [
      { label: 'Ops Efficiency Gain', value: '10x' },
      { label: 'Agent Availability', value: '24/7' },
      { label: 'Integration SLA', value: '14 Days' }
    ],
    backgroundImage: '/src/assets/images/service_ai_automation_1791179217390.jpg',
    videoBg: '/cinematic_hero_bg.mp4',
    accentColor: '#A855F7',
    deliverables: [
      'Multi-model LLM agent deployment',
      'WhatsApp Business API integration',
      'Custom webhook triggers & error monitoring',
      'Internal team training & SOP documentation'
    ]
  },
  {
    id: 'website-development',
    number: '02',
    category: 'FULL-STACK WEB ENGINEERING',
    title: 'Bespoke Website Development.',
    description:
      'Ultra-fast, conversion-focused websites engineered with React, Next.js, and bespoke cinematic design. Built for speed, SEO dominance, and enterprise scale.',
    primaryCta: 'Start Web Project',
    secondaryCta: 'Tech Breakdown',
    features: [
      'Custom React 19 & Next.js 15 Web Applications',
      'Ultra-Fast E-Commerce & High-Converting Landing Pages',
      'Liquid Glass & Cinematic Motion UI/UX Architecture',
      'Technical SEO, Speed Optimization & Analytics Setup'
    ],
    metrics: [
      { label: 'Lighthouse Performance', value: '99.9%' },
      { label: 'First Contentful Paint', value: '<0.6s' },
      { label: 'Core Web Vitals', value: 'Grade A' }
    ],
    backgroundImage: '/src/assets/images/service_web_dev_1791179230806.jpg',
    accentColor: '#7C3AED',
    deliverables: [
      'Headless CMS or bespoke backend architecture',
      'Interactive animations with Framer Motion',
      'Production deployment on Edge CDN',
      'Mobile-first responsive fidelity testing'
    ]
  },
  {
    id: 'app-development',
    number: '03',
    category: 'MOBILE ENGINEERING',
    title: 'Scalable Mobile App Development.',
    description:
      'Native and cross-platform iOS & Android mobile applications engineered for silky-smooth 120Hz performance, seamless cloud backends, and intuitive UX.',
    primaryCta: 'Build Mobile App',
    secondaryCta: 'Architecture',
    features: [
      'Native iOS (Swift) & Android (Kotlin) Development',
      'Cross-Platform Flutter & React Native Solutions',
      'Real-Time Cloud Backends, Auth & Database Sync',
      'App Store & Play Store End-to-End Deployment'
    ],
    metrics: [
      { label: 'UI Frame Rate', value: '120 FPS' },
      { label: 'Store Approval Rate', value: '100%' },
      { label: 'Cross-Platform Speed', value: 'Near-Native' }
    ],
    backgroundImage: '/src/assets/images/service_mobile_app_1791179255376.jpg',
    accentColor: '#EC4899',
    deliverables: [
      'Native hardware API integrations (Camera, Biometrics, BLE)',
      'Offline-first synchronization with SQLite/WatermelonDB',
      'Push notification pipelines with APNs & FCM',
      'TestFlight beta distribution & app store submission'
    ]
  },
  {
    id: 'seo-growth',
    number: '04',
    category: 'SEARCH DOMINANCE & CRO',
    title: 'Conversion-Engineered SEO & Growth.',
    description:
      'Data-driven technical SEO, search intent dominance, programmatic content clustering, and revenue-focused conversion rate optimization that drives qualified inbound pipeline.',
    primaryCta: 'Get Free SEO Audit',
    secondaryCta: 'Ranking Strategy',
    features: [
      'Technical SEO Audit & Core Web Vitals Optimization',
      'Programmatic Content Architecture & Topical Maps',
      'High-Intent Commercial Keyword Dominance',
      'Conversion Rate Optimization (CRO) & Funnel Analytics'
    ],
    metrics: [
      { label: 'Organic Traffic Lift', value: '+240%' },
      { label: 'Target Keyword Retention', value: 'Top 3' },
      { label: 'Indexed Speed', value: '24 Hours' }
    ],
    backgroundImage: '/src/assets/images/hero_video_frame_1791175807031.jpg',
    accentColor: '#A855F7',
    deliverables: [
      'JSON-LD Schema & semantic graph hierarchy',
      'Backlink acquisition & digital PR roadmap',
      'A/B tested conversion funnel wireframes',
      'Monthly executive search performance reports'
    ]
  },
  {
    id: 'video-editing',
    number: '05',
    category: 'CINEMATIC POST-PRODUCTION',
    title: 'High-Impact Cinematic Video Editing.',
    description:
      'Viral short-form Reels, commercial YouTube productions, and brand documentary films with DaVinci Resolve color grading, motion graphics, and immersive sound design.',
    primaryCta: 'Send Footage / Brief',
    secondaryCta: 'Watch Showreel',
    features: [
      'Short-Form Retention Editing (Reels, TikTok, Shorts)',
      'Commercial DaVinci Resolve Color Grading & Tone',
      'Custom Sound Design, Foley & Dynamic Audio Mixing',
      'On-Location 4K Shoots Across Gurugram & Delhi NCR'
    ],
    metrics: [
      { label: 'Average Retention', value: '78%' },
      { label: '4K Render Turnaround', value: '48h' },
      { label: 'Audio Mastering', value: 'EBU R128' }
    ],
    backgroundImage: '/src/assets/images/service_video_editing_1791179242191.jpg',
    videoBg: '/cinematic_hero_bg.mp4',
    accentColor: '#EC4899',
    deliverables: [
      'Vertical (9:16) and widescreen (16:9) master exports',
      'Anamorphic color science & film grain emulsion',
      'Custom animated subtitles & motion graphics',
      'Project archive with raw stems & LUT profiles'
    ]
  },
  {
    id: 'digital-marketing',
    number: '06',
    category: 'PAID ACQUISITION & MEDIA',
    title: 'Performance-Driven Paid Growth.',
    description:
      'High-ROAS Meta (Facebook & Instagram) and Google ad campaigns with predictive audience segmentation, rapid creative iteration, and direct revenue attribution.',
    primaryCta: 'Launch Ad Campaign',
    secondaryCta: 'ROAS Framework',
    features: [
      'Meta Ads & Conversions API (CAPI) Integration',
      'Weekly Creative Testing & Rapid Iteration Sprints',
      'Omnichannel Retargeting & High-Intent Funnels',
      'Live Revenue Attribution & ROAS Dashboard'
    ],
    metrics: [
      { label: 'Average Return on Ad Spend', value: '4.8x' },
      { label: 'Cost Per Acquisition Reduction', value: '-35%' },
      { label: 'Active Managed Spend', value: '$1.2M+' }
    ],
    backgroundImage: '/src/assets/images/hero_frame_two_1791175836790.jpg',
    accentColor: '#7C3AED',
    deliverables: [
      'Ad creative copy & graphic design variations',
      'Audience segmentation & lookalike models',
      'Custom pixel tracking & server-side event setup',
      'Bi-weekly scaling strategy reviews'
    ]
  }
];

export const AGENCY_STATS = [
  { value: '4.9 / 5.0', label: 'Client Satisfaction', context: '50+ Verified Reviews' },
  { value: '150+ Shoots', label: 'Gurugram & Delhi NCR', context: 'DLF Cyber City, Golf Course Rd & Noida' },
  { value: '10x Faster', label: 'Operational Velocity', context: 'Powered by AI Automation' },
  { value: '99.9%', label: 'Application Uptime', context: 'Enterprise Cloud Architecture' }
];

export const CASE_STUDIES = [
  {
    title: 'Autonomous Inbound Sales & Booking Engine',
    client: 'Apex Logistics & Freight',
    service: 'AI Automation',
    results: '+320% Qualified Leads Handled · Zero Human Latency',
    description:
      'Engineered an enterprise WhatsApp & CRM automation bot that instantly qualifies shippers, calculates freight estimates, and syncs directly into dispatch scheduling.',
    tags: ['Custom AI Agents', 'WhatsApp Business API', 'HubSpot CRM Sync'],
    accent: '#A855F7'
  },
  {
    title: 'Ultra-Fast Luxury Real Estate Experience',
    client: 'Vanguard Realty Group (Gurugram)',
    service: 'Website Development',
    results: '0.4s Global Load Time · +185% Property Inquiries',
    description:
      'Architected a bespoke Next.js 15 web application featuring interactive floorplans, liquid-glass property dossiers, and cinema video walk-throughs.',
    tags: ['Next.js 15', 'Framer Motion', 'Tailwind CSS', 'High-ROAS Funnel'],
    accent: '#7C3AED'
  },
  {
    title: 'Omnichannel Meta Ad Campaign & Shoot Series',
    client: 'Lumina Wellness & Performance',
    service: 'Video Editing & Digital Marketing',
    results: '5.2x Blended ROAS · 2.4M Video Views across NCR',
    description:
      'Directed on-location 4K cinematic video shoots across Cyber City and South Delhi, producing 24 high-retention ad variants scaled aggressively on Instagram.',
    tags: ['4K On-Location Shoot', 'DaVinci Grading', 'Meta Performance Ads'],
    accent: '#EC4899'
  }
];
