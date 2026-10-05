import { ServiceItem } from '../types/services';

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-automation',
    number: '01',
    category: 'AI WORKFLOWS & AUTOMATION',
    title: 'AI Workflows & Lead Automation.',
    description:
      'We connect your CRM, WhatsApp, and AI agents so inbound leads get answered, qualified, and booked within minutes instead of sitting in an inbox.',
    primaryCta: 'Book an AI Strategy Call',
    secondaryCta: 'See Example Workflows',
    features: [
      'Inbound WhatsApp & Web Lead Qualification',
      'Automated CRM Lead Routing & Follow-ups',
      'Document Parsing & Internal Data Extractors',
      'Custom LLM Tool Integration with Audit Trails'
    ],
    metrics: [
      { label: 'Faster Lead Response', value: '10x' },
      { label: 'Uptime & Reliability', value: '24/7' },
      { label: 'Typical Deployment', value: '14 Days' }
    ],
    backgroundImage: '/src/assets/images/blue_enterprise_lab_1791182313167.jpg',
    videoBg: '/cinematic_hero_bg.mp4',
    accentColor: '#38BDF8', // Ice Cyan
    deliverables: [
      'Custom LLM agent deployed with audit logging',
      'Official WhatsApp Business API setup',
      'Webhooks connected to your CRM and Google Sheets',
      'Team walkthrough and video documentation'
    ]
  },
  {
    id: 'website-development',
    number: '02',
    category: 'FULL-STACK WEB DEVELOPMENT',
    title: 'Modern Website Development.',
    description:
      'We design and code React and Next.js websites that load in under 1 second, pass Google Core Web Vitals, and make it easy for visitors to book a call or buy.',
    primaryCta: 'Start a Web Project',
    secondaryCta: 'View Tech Stack',
    features: [
      'React 19 & Next.js 15 Custom Codebases',
      'High-Speed Landing Pages & Headless Stores',
      'Mobile-First Layouts with Subtle Motion',
      'Google Core Web Vitals & Analytics Setup'
    ],
    metrics: [
      { label: 'Google Lighthouse', value: '99.9%' },
      { label: 'First Contentful Paint', value: '<0.6s' },
      { label: 'Core Web Vitals', value: 'Grade A' }
    ],
    backgroundImage: '/src/assets/images/blue_web_architecture_1791182327995.jpg',
    accentColor: '#2563EB', // Royal Sapphire
    deliverables: [
      'Clean TypeScript codebase with Tailwind CSS',
      'Production deployment on fast edge servers',
      'SEO meta tags, sitemaps, and Open Graph cards',
      'Full GitHub repository handover upon sign-off'
    ]
  },
  {
    id: 'app-development',
    number: '03',
    category: 'MOBILE APP DEVELOPMENT',
    title: 'iOS & Android App Development.',
    description:
      'We build cross-platform and native mobile apps using Flutter and React Native. Fluid touch gestures, offline sync, and clean App Store submissions.',
    primaryCta: 'Build a Mobile App',
    secondaryCta: 'See Architecture',
    features: [
      'Cross-Platform Flutter & React Native Apps',
      'Native Swift (iOS) & Kotlin (Android) Modules',
      'Offline Data Storage & Background Sync',
      'Apple App Store & Google Play Store Setup'
    ],
    metrics: [
      { label: 'Target Frame Rate', value: '120 FPS' },
      { label: 'Store Approval Rate', value: '100%' },
      { label: 'Performance', value: 'Near-Native' }
    ],
    backgroundImage: '/src/assets/images/service_mobile_app_1791179255376.jpg',
    accentColor: '#0EA5E9', // Electric Sky
    deliverables: [
      'Push notifications via Apple APNs and Firebase FCM',
      'Encrypted local storage with SQLite / WatermelonDB',
      'Camera, biometrics, and geolocation integrations',
      'TestFlight betas and assisted store submission'
    ]
  },
  {
    id: 'seo-growth',
    number: '04',
    category: 'SEARCH RANKINGS & TECHNICAL SEO',
    title: 'Technical SEO & Search Rankings.',
    description:
      'We fix crawl and indexing issues, target search terms your buyers actually search for, and build pages structured to climb Google rankings.',
    primaryCta: 'Get a Free SEO Audit',
    secondaryCta: 'See Ranking Process',
    features: [
      'Technical Crawl & Core Web Vitals Fixes',
      'Commercial Keyword Research & Topical Hubs',
      'Schema.org Structured Data & Meta Tagging',
      'Search Console & GA4 Conversion Tracking'
    ],
    metrics: [
      { label: 'Average Traffic Lift', value: '+240%' },
      { label: 'Target Keyword Gains', value: 'Top 3' },
      { label: 'Index Verification', value: '24 Hours' }
    ],
    backgroundImage: '/src/assets/images/hero_video_frame_1791175807031.jpg',
    accentColor: '#3B82F6', // Cobalt
    deliverables: [
      'Complete site health and broken link audit',
      'Keyword mapping spreadsheet prioritized by purchase intent',
      'Rich snippet JSON-LD code for Google search cards',
      'Monthly ranking updates and plain-English reports'
    ]
  },
  {
    id: 'video-editing',
    number: '05',
    category: 'VIDEO EDITING & POST-PRODUCTION',
    title: 'Commercial Video Editing & Grading.',
    description:
      'We edit short-form reels, YouTube videos, and brand films. Full DaVinci Resolve color grading, audio cleanup, subtitles, and fast cut turnarounds.',
    primaryCta: 'Send a Video Brief',
    secondaryCta: 'Watch Showreel',
    features: [
      'Vertical Reels, TikToks & YouTube Shorts Cuts',
      'DaVinci Resolve Color Grading & Tone Matching',
      'Dialogue Cleanup, Foley & Audio Mastering',
      'On-Location 4K Shoots in Gurugram & Delhi NCR'
    ],
    metrics: [
      { label: 'Average Viewer Retention', value: '78%' },
      { label: 'Standard Turnaround', value: '48h' },
      { label: 'Audio Standard', value: 'EBU R128' }
    ],
    backgroundImage: '/src/assets/images/blue_production_studio_1791182340837.jpg',
    videoBg: '/cinematic_hero_bg.mp4',
    accentColor: '#38BDF8', // Cyan
    deliverables: [
      'Vertical (9:16) and widescreen (16:9) master exports',
      'Calibrated color grades exported in high-bitrate ProRes/H.265',
      'Licensed music tracks and dynamic subtitles',
      'Complete archive with raw project files and timeline stems'
    ]
  },
  {
    id: 'digital-marketing',
    number: '06',
    category: 'META ADS & PAID MARKETING',
    title: 'Meta Ads & Paid Acquisition.',
    description:
      'We run Meta and Google ad campaigns, test new ad creatives every week, and hook up Conversions API so you track actual revenue, not just clicks.',
    primaryCta: 'Plan an Ad Campaign',
    secondaryCta: 'See Ad Framework',
    features: [
      'Facebook & Instagram Performance Ad Setup',
      'Meta Conversions API (CAPI) Server Tracking',
      'Weekly Ad Hook & Script Testing Sprints',
      'Direct Revenue Tracking in a Live Dashboard'
    ],
    metrics: [
      { label: 'Average Client ROAS', value: '4.8x' },
      { label: 'Typical CPA Reduction', value: '-35%' },
      { label: 'Tracked Spend Managed', value: '$1.2M+' }
    ],
    backgroundImage: '/src/assets/images/hero_frame_two_1791175836790.jpg',
    accentColor: '#2563EB', // Blue
    deliverables: [
      'High-CTR ad creative designs and copy variations',
      'Lookalike and custom audience targeting setup',
      'Server-side event verification to bypass iOS tracking blocks',
      'Bi-weekly review calls directly with your media buyer'
    ]
  }
];

export const AGENCY_STATS = [
  { value: '4.9 / 5.0', label: 'Average Client Rating', context: 'Across 50+ Completed Engagements' },
  { value: '100% IP', label: 'Code & Asset Ownership', context: 'Transferred Fully to You' },
  { value: '150+ Shoots', label: 'Filmed in Gurugram & NCR', context: 'DLF Cyber City, Golf Course & Noida' },
  { value: '48h', label: 'Standard Turnaround', context: 'On Video Drafts & Sprint Milestones' }
];

export const TRUST_PILLARS = [
  {
    id: 'ip-guarantee',
    title: 'You Own 100% of the Code & Assets',
    description: 'Once paid, you own every line of code, Figma file, raw video file, and asset. No ongoing licensing fees, no hostage code, and zero vendor lock-in.',
    badge: 'LEGAL GUARANTEE',
  },
  {
    id: 'nda-confidentiality',
    title: 'Mutual NDA Before We Talk',
    description: 'We sign an NDA before you share project files, customer numbers, or product roadmaps. Your business data remains strictly private.',
    badge: 'CONFIDENTIALITY',
  },
  {
    id: 'timeline-sla',
    title: 'Fixed Pricing & Milestone Dates',
    description: 'We quote upfront based on clear deliverables and timelines. If your scope does not change, your price and launch date do not change.',
    badge: 'ON-TIME PROMISE',
  },
  {
    id: 'direct-access',
    title: 'Direct Communication with Builders',
    description: 'You work directly with the developers, designers, and editors handling your work on Slack or WhatsApp. No layers of account managers.',
    badge: 'DIRECT ACCESS',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Xenforge built our WhatsApp quote bot in under two weeks. It handled 4,200 shipper quote requests and synced them into our dispatch sheet with zero manual data entry.',
    name: 'Amitav Roy',
    role: 'VP of Operations',
    company: 'FreightStream Global Logistics',
    metric: '4,200 Quotes Automated',
    verified: true,
  },
  {
    quote:
      'Our new Next.js site loads in 400ms across India and the Gulf. In the first three months, qualified property inquiries doubled, and Google ranked us #1 for our key search terms.',
    name: 'Siddharth Oberoi',
    role: 'Founder & CEO',
    company: 'Vanguard Luxury Estates (Gurugram)',
    metric: '0.4s Page Load Time',
    verified: true,
  },
  {
    quote:
      'They shot 4K video at our Gurugram office and delivered 32 ad cuts. Our cost per lead dropped by 35% on Instagram within a month, with clear CAPI tracking in Meta.',
    name: 'Meera Krishnan',
    role: 'Head of Growth',
    company: 'Lumina Performance Brands',
    metric: '4.9x Blended Meta ROAS',
    verified: true,
  },
];

export const CERTIFICATIONS = [
  'Meta Business Partner Certified',
  'AWS & Google Cloud Certified Architecture',
  'Apple Developer Program Member',
  'ISO 27001 Security Aligned Standards',
];

export const CASE_STUDIES = [
  {
    title: 'FreightStream: Automated Freight Quote Bot',
    client: 'FreightStream Global Logistics',
    service: 'AI Automation',
    results: '4,200 Quotes Handled · Sub-3s Response Time',
    description:
      'Replaced a slow manual email quote process with an automated WhatsApp bot connected to HubSpot and internal dispatch sheets. Shippers get pricing instantly without human delays.',
    tags: ['Custom AI Agents', 'WhatsApp Business API', 'HubSpot CRM Sync', 'Encrypted Webhooks'],
    accent: '#38BDF8'
  },
  {
    title: 'Vanguard Luxury Estates: 400ms Property Portal',
    client: 'Vanguard Luxury Estates (Gurugram)',
    service: 'Website Development',
    results: '0.4s Page Load · +185% Inquiries',
    description:
      'Rebuilt a sluggish WordPress site with Next.js and Tailwind, adding interactive floorplans and fast mobile browsing for DLF Cyber City and Golf Course Road buyers.',
    tags: ['Next.js 15', 'Framer Motion', 'Tailwind CSS', 'High-Converting UI'],
    accent: '#2563EB'
  },
  {
    title: 'Lumina: On-Location Shoot & Meta Ad Scaling',
    client: 'Lumina Performance Brands',
    service: 'Video Editing & Digital Marketing',
    results: '4.9x Meta ROAS · 32 Ad Cuts Tested',
    description:
      'Filmed a 2-day on-site video shoot in DLF Cyber City, edited 32 short-form ad hooks, and ran Meta campaigns with server-side CAPI tracking to cut acquisition costs by 35%.',
    tags: ['4K On-Location Shoot', 'DaVinci Grading', 'Meta Performance Ads', 'CAPI Integration'],
    accent: '#0EA5E9'
  }
];
