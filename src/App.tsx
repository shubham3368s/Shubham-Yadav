/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar, NAV_ITEMS } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { HeroContent, SlideData } from './components/HeroContent';
import {
  X,
  Search,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Check,
  MapPin,
  Video,
  Palette,
  Target,
  Camera,
  Code2,
  Smartphone,
  Cpu,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  Layers,
  Zap,
  Clock,
  ShieldCheck,
  Star
} from 'lucide-react';

const SLIDES: SlideData[] = [
  {
    id: 'digital-marketing',
    category: 'CREATIVE & PRODUCTION',
    title: 'Digital Marketing & Production.',
    description: 'Video editing, high-converting Meta ads, graphic design, and on-location 4K video & photo shoots across Gurugram and Delhi NCR.',
    rating: '4.9/5.0 Client Rating',
    duration: 'Gurugram & Delhi NCR',
    releaseDate: 'Bookings Open',
    tag2Icon: 'location',
    tag3Icon: 'sparkles',
    watchText: 'Book a Shoot',
    learnText: 'Explore Work',
    features: [
      'Cinematic Video Editing (Shorts, Reels & Brand Documentaries)',
      'High-Impact Graphic Designing & Brand Visual Identity',
      'High-ROAS Meta Ad Campaigns (Facebook & Instagram)',
      'On-Location 4K Video & Photo Shoots (Gurugram & Delhi NCR)'
    ]
  },
  {
    id: 'website-dev',
    category: 'BESPOKE WEB ENGINEERING',
    title: 'High-Performance Web Development.',
    description: 'Ultra-fast, conversion-focused websites engineered with React, Next.js, and bespoke cinematic design. Built for speed, SEO, and enterprise scale.',
    rating: '99.9% Lighthouse Score',
    duration: 'Full-Stack Web',
    releaseDate: 'Fast Turnaround',
    tag2Icon: 'zap',
    tag3Icon: 'clock',
    watchText: 'Start Web Project',
    learnText: 'Tech Breakdown',
    features: [
      'Custom React & Next.js Web Applications',
      'Ultra-Fast E-Commerce & High-Converting Landing Pages',
      'Modern Liquid Glass & Cinematic Motion UI/UX',
      'Technical SEO, Speed Optimization & Analytics Setup'
    ]
  },
  {
    id: 'app-dev',
    category: 'MOBILE ENGINEERING',
    title: 'Scalable Mobile App Development.',
    description: 'Native and cross-platform iOS & Android mobile applications engineered for silky-smooth 120Hz performance, seamless cloud backends, and intuitive UX.',
    rating: 'iOS & Android Native',
    duration: 'Cross-Platform',
    releaseDate: 'App Store Ready',
    tag2Icon: 'layers',
    tag3Icon: 'sparkles',
    watchText: 'Build Mobile App',
    learnText: 'Architecture',
    features: [
      'Native iOS (Swift) & Android (Kotlin) Development',
      'Cross-Platform Flutter & React Native Solutions',
      'Real-Time Cloud Backends, Auth & Database Sync',
      'App Store & Play Store End-to-End Deployment'
    ]
  },
  {
    id: 'ai-automation',
    category: 'INTELLIGENT SYSTEMS',
    title: 'End-to-End AI Automation.',
    description: 'Custom AI agents, intelligent workflow automation, CRM integrations, and generative AI pipelines designed to streamline operations and 10x team efficiency.',
    rating: '10x Ops Efficiency',
    duration: 'Autonomous Systems',
    releaseDate: '24/7 Operations',
    tag2Icon: 'zap',
    tag3Icon: 'sparkles',
    watchText: 'Book AI Strategy Call',
    learnText: 'Explore Solutions',
    features: [
      'Autonomous Customer Support & Inbound Sales Agents',
      'CRM, WhatsApp & Lead Routing Workflow Automation',
      'Custom Generative AI Pipelines & Content Workflows',
      'Data Extraction, Document Processing & Operations Bots'
    ]
  },
];

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('Digital Marketing');

  // Interactive overlays
  const [isWatchModalOpen, setIsWatchModalOpen] = useState(false);
  const [isLearnModalOpen, setIsLearnModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  // Booking inquiry state in profile/portal modal
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    service: 'Digital Marketing (Shoot in NCR)',
    message: ''
  });

  const currentSlide = SLIDES[currentSlideIndex];

  const handlePreviousSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const nextIdx = prev === 0 ? SLIDES.length - 1 : prev - 1;
      return nextIdx;
    });
  }, []);

  const handleNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const nextIdx = prev === SLIDES.length - 1 ? 0 : prev + 1;
      return nextIdx;
    });
  }, []);

  const handleSelectNav = (label: string, href?: string) => {
    setActiveNavItem(label);
    setIsMenuOpen(false);

    if (href) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (label === 'Digital Marketing') {
      setCurrentSlideIndex(0);
      document.getElementById('digital-marketing')?.scrollIntoView({ behavior: 'smooth' });
    } else if (label === 'Website Dev') {
      setCurrentSlideIndex(1);
      document.getElementById('website-dev')?.scrollIntoView({ behavior: 'smooth' });
    } else if (label === 'App Dev') {
      setCurrentSlideIndex(2);
      document.getElementById('app-dev')?.scrollIntoView({ behavior: 'smooth' });
    } else if (label === 'AI Automation') {
      setCurrentSlideIndex(3);
      document.getElementById('ai-automation')?.scrollIntoView({ behavior: 'smooth' });
    } else if (label.includes('Gurugram') || label.includes('NCR')) {
      document.getElementById('ncr-hub')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard navigation & accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsWatchModalOpen(false);
        setIsLearnModalOpen(false);
        setIsSearchOpen(false);
        setIsProfileOpen(false);
      } else if (e.key === 'ArrowLeft' && !isSearchOpen && !isWatchModalOpen && !isLearnModalOpen && !isProfileOpen) {
        handlePreviousSlide();
      } else if (e.key === 'ArrowRight' && !isSearchOpen && !isWatchModalOpen && !isLearnModalOpen && !isProfileOpen) {
        handleNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePreviousSlide, handleNextSlide, isSearchOpen, isWatchModalOpen, isLearnModalOpen, isProfileOpen]);

  // Filtered search results
  const filteredServices = SLIDES.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      (s.features && s.features.some((f) => f.toLowerCase().includes(q)))
    );
  });

  return (
    <div className="relative min-h-screen w-full bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      {/* 1. Fixed Background Video + Optical Bottom Blur Overlay */}
      <BackgroundVideo />

      {/* 2. Top Header Navigation (Sticky with backdrop-blur) */}
      <Navbar
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        activeItem={activeNavItem}
        onSelectItem={handleSelectNav}
        onSearchClick={() => setIsSearchOpen(true)}
        onProfileClick={() => setIsProfileOpen(true)}
      />

      {/* Mobile Drawer Menu (Visible only below lg) */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeItem={activeNavItem}
        onSelectItem={handleSelectNav}
        onSearchClick={() => setIsSearchOpen(true)}
        onProfileClick={() => setIsProfileOpen(true)}
      />

      {/* ========================================================
          HERO SECTION (Full Viewport 100dvh, Natural Bottom Placement)
          ======================================================== */}
      <section
        id="hero"
        className="relative min-h-[calc(100dvh-64px)] flex flex-col justify-end w-full"
      >
        <HeroContent
          currentSlide={currentSlide}
          currentIndex={currentSlideIndex}
          totalSlides={SLIDES.length}
          onPrevious={handlePreviousSlide}
          onNext={handleNextSlide}
          onWatchNow={() => {
            if (currentSlide.id === 'digital-marketing') {
              setIsProfileOpen(true);
            } else if (currentSlide.id === 'website-dev') {
              scrollToSection('website-dev');
            } else if (currentSlide.id === 'app-dev') {
              scrollToSection('app-dev');
            } else if (currentSlide.id === 'ai-automation') {
              setIsProfileOpen(true);
            } else {
              setIsWatchModalOpen(true);
            }
          }}
          onLearnMore={() => {
            if (currentSlide.id === 'digital-marketing') {
              scrollToSection('digital-marketing');
            } else if (currentSlide.id === 'website-dev') {
              scrollToSection('website-dev');
            } else if (currentSlide.id === 'app-dev') {
              scrollToSection('app-dev');
            } else if (currentSlide.id === 'ai-automation') {
              scrollToSection('ai-automation');
            } else {
              setIsLearnModalOpen(true);
            }
          }}
        />

        {/* Subtle Ambient Scroll Down Indicator */}
        <div
          onClick={() => scrollToSection('digital-marketing')}
          className="w-full flex flex-col items-center justify-center pb-4 z-20 cursor-pointer text-white/50 hover:text-white transition-colors"
          role="button"
          tabIndex={0}
          aria-label="Scroll down to services"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/60 mb-1">
            Scroll to Explore Services
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-white/70" />
        </div>
      </section>

      {/* ========================================================
          SCROLLABLE CONTENT (Normal Website Flow with Liquid Glass)
          ======================================================== */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-12 py-16 space-y-28 md:space-y-36">

        {/* CREDENTIALS & REGION TICKER RIBBON */}
        <div className="liquid-glass rounded-2xl p-5 md:p-6 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-white/10 last:border-r-0">
              <span className="text-2xl sm:text-3xl font-normal tracking-tight text-white block">4.9 / 5.0</span>
              <span className="text-xs uppercase tracking-wider text-gray-400 mt-1 block">Client Satisfaction</span>
            </div>
            <div className="border-r border-white/10 last:border-r-0">
              <span className="text-2xl sm:text-3xl font-normal tracking-tight text-white block">150+ Shoots</span>
              <span className="text-xs uppercase tracking-wider text-gray-400 mt-1 block">Gurugram & Delhi NCR</span>
            </div>
            <div className="border-r border-white/10 last:border-r-0">
              <span className="text-2xl sm:text-3xl font-normal tracking-tight text-white block">10x Speed</span>
              <span className="text-xs uppercase tracking-wider text-gray-400 mt-1 block">With AI Automation</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-normal tracking-tight text-white block">99.9%</span>
              <span className="text-xs uppercase tracking-wider text-gray-400 mt-1 block">Web & App Uptime</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            SECTION 1: DIGITAL MARKETING & ON-LOCATION SHOOTS
            ======================================================== */}
        <section id="digital-marketing" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-medium tracking-wider uppercase mb-3">
                <Video className="w-3.5 h-3.5" /> Service 01 • Creative & Production
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-white">
                Digital Marketing & Production.
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg font-light leading-relaxed">
              From viral video edits and high-converting Meta ad campaigns to on-site cinema video & photo shoots across Gurugram and Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Video Editing */}
            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:bg-white/[0.03] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
                  <Video className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Video Editing</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  High-retention Shorts, Reels, commercial YouTube videos, and brand documentary edits with DaVinci Resolve color grading and custom sound design.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] text-gray-300 font-mono">
                • 4K 60FPS Delivery • Fast Turnaround
              </div>
            </div>

            {/* Card 2: Graphic Designing */}
            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:bg-white/[0.03] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
                  <Palette className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Graphic Designing</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Brand identity packages, high-CTR performance ad creatives, pitch decks, infographics, and custom visual assets designed to stop the scroll.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] text-gray-300 font-mono">
                • Brand Guidelines • Vector & UI Assets
              </div>
            </div>

            {/* Card 3: Meta Ads */}
            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:bg-white/[0.03] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
                  <Target className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Meta Ad Campaigns</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Data-driven Facebook & Instagram ad management, retargeting funnels, creative A/B testing, and audience segmentation engineered for maximum ROAS.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] text-gray-300 font-mono">
                • Pixel & CAPI Setup • Weekly Scaling
              </div>
            </div>

            {/* Card 4: Video & Photo Shoots (NCR) */}
            <div className="liquid-glass rounded-2xl p-6 border border-fuchsia-500/30 bg-fuchsia-950/10 flex flex-col justify-between hover:bg-fuchsia-950/20 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-white mb-4">
                  <Camera className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Video & Photo Shoot</h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  On-location 4K cinema gear, gimbal stabilizers, wireless audio, and studio lighting brought directly to your office or venue in Gurugram & Delhi NCR.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] text-fuchsia-300 font-mono">
                • Gurugram & Delhi NCR • Raw Footage Backup
              </div>
            </div>
          </div>

          {/* Interactive Action Bar */}
          <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-fuchsia-400 shrink-0" />
              <span className="text-sm text-gray-200">
                Need a shoot this week in Gurugram, DLF Cyber City, Golf Course Road, Delhi, or Noida?
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setContactForm({ ...contactForm, service: 'Digital Marketing (Shoot in NCR)' });
                setIsProfileOpen(true);
              }}
              className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Shoot in NCR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: WEBSITE DEVELOPMENT
            ======================================================== */}
        <section id="website-dev" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-medium tracking-wider uppercase mb-3">
                <Code2 className="w-3.5 h-3.5" /> Service 02 • High-Performance Web
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-white">
                Bespoke Website Development.
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg font-light leading-relaxed">
              We design and code lightning-fast, conversion-optimized websites engineered with React, Next.js, and bespoke cinematic UI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
              <span className="text-xs uppercase tracking-widest text-fuchsia-400 font-mono">01 / SPEED & ARCHITECTURE</span>
              <h3 className="text-xl font-medium text-white">Next.js & React 19 Core</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Sub-second load times, server-side rendering (SSR), and fluid client interactions. Clean TypeScript codebases engineered for zero technical debt.
              </p>
              <ul className="text-xs text-gray-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 100/100 Lighthouse Performance
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Mobile Viewport Precision
                </li>
              </ul>
            </div>

            <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
              <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">02 / BRAND PRESENCE</span>
              <h3 className="text-xl font-medium text-white">Cinematic Liquid UI/UX</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Original visual compositions that leave templates behind. Subtle glassmorphism, responsive typography, and tactile feedback built to elevate your brand.
              </p>
              <ul className="text-xs text-gray-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Tailored Brand Interactions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Smooth View Transitions
                </li>
              </ul>
            </div>

            <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">03 / CONVERSION & SEO</span>
              <h3 className="text-xl font-medium text-white">Rank & Convert</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Structured Schema.org markup, semantic HTML, and conversion-focused copy layout engineered to turn search traffic into booked clients.
              </p>
              <ul className="text-xs text-gray-300 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Meta CAPI & Analytics Ready
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Fast WhatsApp/Form Capture
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 3: MOBILE APP DEVELOPMENT
            ======================================================== */}
        <section id="app-dev" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium tracking-wider uppercase mb-3">
                <Smartphone className="w-3.5 h-3.5" /> Service 03 • Mobile Engineering
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-white">
                Scalable Mobile App Development.
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg font-light leading-relaxed">
              Native and cross-platform iOS & Android mobile applications engineered for silky-smooth 120Hz gesture interaction and offline-first durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">01 / PLATFORMS</span>
              <h3 className="text-xl font-medium text-white">Flutter & React Native</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Single unified codebase delivering native iOS and Android experiences without compromising on speed or device capabilities.
              </p>
              <div className="text-xs text-gray-300 pt-2 font-mono">• iOS 18+ • Android 15+ • Tablet</div>
            </div>

            <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">02 / BACKEND & SYNC</span>
              <h3 className="text-xl font-medium text-white">Real-Time Cloud Backends</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Reliable cloud infrastructure, secure JWT authentication, instant push notifications, payment gateways, and real-time database sync.
              </p>
              <div className="text-xs text-gray-300 pt-2 font-mono">• Sub-second latency • Secure Auth</div>
            </div>

            <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">03 / LAUNCH</span>
              <h3 className="text-xl font-medium text-white">Store Publishing & QA</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                End-to-end management through Apple App Store review and Google Play Store verification, with TestFlight betas and crash monitoring.
              </p>
              <div className="text-xs text-gray-300 pt-2 font-mono">• 100% Submission Pass Rate</div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 4: AI AUTOMATION SYSTEMS
            ======================================================== */}
        <section id="ai-automation" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-wider uppercase mb-3">
                <Cpu className="w-3.5 h-3.5" /> Service 04 • Autonomous Workflows
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-white">
                End-to-End AI Automation.
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg font-light leading-relaxed">
              Custom AI agents, intelligent workflow automation, CRM integrations, and generative pipelines that scale operations and cut manual workload by 90%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white">24/7 Inbound AI Agents</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Autonomous WhatsApp & web agents trained on your business documents. They answer inquiries, qualify leads, and schedule appointments instantly.
              </p>
              <div className="text-xs text-emerald-300/80 pt-2 font-mono">• WhatsApp • CRM • Instant Booking</div>
            </div>

            <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white">Ops & Lead Routing</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Sync Meta ad leads into Google Sheets, Slack, Notion, and CRMs automatically. Trigger automated personalized follow-up emails and SMS notifications.
              </p>
              <div className="text-xs text-emerald-300/80 pt-2 font-mono">• Zero manual data entry • 100% SLA</div>
            </div>

            <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white">Content Generation Bots</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Automated multi-variant copy generation, video script drafting from trending topics, and automated marketing performance dashboards.
              </p>
              <div className="text-xs text-emerald-300/80 pt-2 font-mono">• Programmatic Creative Scaling</div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 5: GURUGRAM & DELHI NCR PRODUCTION HUB
            ======================================================== */}
        <section id="ncr-hub" className="scroll-mt-24 space-y-6">
          <div className="liquid-glass rounded-2xl p-8 md:p-12 border border-fuchsia-500/30 bg-fuchsia-950/10 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5 text-fuchsia-400" /> On-Ground Production Studio
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-white">
                Shoot On-Location Across Gurugram & Delhi NCR.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                We bring cinema cameras, dual-wireless lav mics, motorized gimbals, and studio keylights directly to your premises. Same-day raw footage delivery and dedicated creative producers on-site.
              </p>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white font-medium block">DLF Cyber City</span>
                  <span className="text-gray-400 text-[11px]">Corporate & Commercial</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white font-medium block">Golf Course Road</span>
                  <span className="text-gray-400 text-[11px]">Luxury & Lifestyle</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white font-medium block">Central & South Delhi</span>
                  <span className="text-gray-400 text-[11px]">Fashion & Brand Films</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white font-medium block">Noida Expressways</span>
                  <span className="text-gray-400 text-[11px]">Tech Hubs & Events</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setContactForm({ ...contactForm, service: 'Digital Marketing (Shoot in NCR)' });
                    setIsProfileOpen(true);
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Camera className="w-4 h-4" />
                  <span>Book Gurugram / NCR Shoot</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsWatchModalOpen(true)}
                  className="px-6 py-2.5 rounded-full liquid-glass text-white font-medium text-sm hover:text-gray-200 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Watch Xenforge Reel</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 6: CONSULTATION & PROJECT INQUIRY
            ======================================================== */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-fuchsia-400 font-mono">START YOUR PROJECT</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-white">
              Let&apos;s Build Something Extraordinary.
            </h2>
            <p className="text-gray-400 text-sm font-light">
              Shoot inquiries across Gurugram / Delhi NCR, high-performance web development, mobile apps, or enterprise AI automation.
            </p>
          </div>

          <div className="max-w-2xl mx-auto liquid-glass rounded-2xl p-6 sm:p-8 border border-white/15 shadow-2xl">
            {bookingSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-medium text-white">Inquiry Received</h4>
                <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                  Thank you! Our creative lead will reach out via WhatsApp / Phone within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full liquid-glass text-xs font-medium text-white hover:text-gray-200 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Service Required</label>
                  <select
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white/40"
                  >
                    <option value="Digital Marketing (Shoot in NCR)">Digital Marketing (Video & Photo Shoot - Gurugram & Delhi NCR)</option>
                    <option value="Video Editing & Graphic Design">Video Editing & Graphic Designing</option>
                    <option value="Meta Ads Management">Meta Ads Management (High ROAS Campaigns)</option>
                    <option value="Website Development">Website Development (React / Next.js)</option>
                    <option value="App Development">Mobile App Development (iOS & Android)</option>
                    <option value="AI Automation">AI Automation & Autonomous Workflows</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Project Brief / Shoot Location</label>
                  <textarea
                    rows={3}
                    placeholder="Details about shoot dates in Gurugram/NCR, web/app requirements, or business goals..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-white/40 resize-none"
                  />
                </div>

                {formError && (
                  <p className="text-xs text-rose-400 bg-rose-950/30 border border-rose-500/30 px-3 py-1.5 rounded-lg">
                    {formError}
                  </p>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-gray-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span>Gurugram • Delhi NCR Studio</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (!contactForm.phone.trim() && !contactForm.name.trim()) {
                        setFormError('Please enter your name or phone number so we can get in touch.');
                        return;
                      }
                      setFormError('');
                      setBookingSubmitted(true);
                    }}
                    className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-xs hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    Send Project Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            FOOTER
            ======================================================== */}
        <footer className="pt-12 pb-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-[0.2em] text-white">XENFORGE</span>
            <span>•</span>
            <span>Digital Agency & Production Studio</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('digital-marketing')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Digital Marketing
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('website-dev')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Web
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('app-dev')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              App
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('ai-automation')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              AI Automation
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="hover:text-white transition-colors cursor-pointer text-white underline underline-offset-4"
            >
              Contact Gurugram NCR
            </button>
          </div>
        </footer>

      </div>

      {/* ========================================================
          INTERACTIVE OVERLAYS (Lightweight liquid-glass dialogs)
          ======================================================== */}

      {/* SEARCH MODAL */}
      {isSearchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search Services"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl liquid-glass rounded-2xl p-6 shadow-2xl relative border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3 w-full">
                <Search className="w-5 h-5 text-gray-400 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search video editing, Delhi NCR shoot, web dev, AI..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-base font-light"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Filter Tags */}
            <div className="mt-4">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Popular Capabilities</span>
              <div className="flex flex-wrap gap-2 mt-2.5">
                {[
                  'Video Editing',
                  'Meta Ads',
                  'Gurugram & Delhi NCR Shoot',
                  'Website Development',
                  'App Development',
                  'AI Automation'
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSearchQuery(tag)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 transition-colors cursor-pointer border border-white/10"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Preview */}
            {searchQuery && (
              <div className="mt-5 pt-4 border-t border-white/10 max-h-48 overflow-y-auto space-y-2">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => {
                        scrollToSection(service.id);
                        setIsSearchOpen(false);
                      }}
                      className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/10 cursor-pointer transition-colors flex items-center justify-between"
                    >
                      <div>
                        <h4 className="text-sm font-medium text-white">{service.title}</h4>
                        <p className="text-xs text-gray-400 truncate max-w-md">{service.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-gray-400 py-2">No direct matches. Contact us for custom requirements.</p>
                )}
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">ESC</kbd> to close</span>
              <span>Xenforge Studio Hub</span>
            </div>
          </div>
        </div>
      )}

      {/* WATCH REEL MODAL */}
      {isWatchModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Xenforge Reel Player"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-fade-in p-4 sm:p-8"
        >
          <div className="w-full max-w-5xl liquid-glass rounded-2xl overflow-hidden border border-white/15 shadow-2xl flex flex-col max-h-[90vh]">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs uppercase tracking-widest text-white/90 font-medium">
                  XENFORGE SHOWREEL • {currentSlide.title.replace('.', '')}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsWatchModalOpen(false)}
                className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Exit reel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Screen Area */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <video
                autoPlay
                loop
                playsInline
                muted={isVideoMuted}
                className="w-full h-full object-cover"
              >
                <source src="/cinematic_hero_bg.mp4" type="video/mp4" />
              </video>

              {/* Reel Watermark */}
              <div className="absolute top-4 left-6 pointer-events-none bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                <h3 className="text-sm sm:text-base font-medium tracking-tight text-white drop-shadow-md">
                  XENFORGE CREATIVE STUDIO
                </h3>
                <p className="text-[11px] text-fuchsia-300">
                  {currentSlide.id === 'digital-marketing'
                    ? '4K Video Shoots • Meta Ads • Gurugram & Delhi NCR'
                    : currentSlide.title}
                </p>
              </div>

              {/* Player Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setIsVideoMuted(!isVideoMuted)}
                    className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-white hover:text-gray-200 cursor-pointer"
                    aria-label={isVideoMuted ? 'Unmute' : 'Mute'}
                  >
                    {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-xs text-white/80 font-mono">00:48 / 4K UHD 60FPS</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 border border-white/20 text-white font-mono">PRO RES</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 border border-white/20 text-white font-mono">HDR</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (!document.fullscreenElement) {
                        document.documentElement.requestFullscreen().catch(() => {});
                      } else {
                        document.exitFullscreen().catch(() => {});
                      }
                    }}
                    className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-white hover:text-gray-200 cursor-pointer"
                    aria-label="Toggle Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LEARN MORE SERVICE DOSSIER MODAL */}
      {isLearnModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Service Details"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={() => setIsLearnModalOpen(false)}
        >
          <div
            className="w-full max-w-2xl liquid-glass rounded-2xl p-6 sm:p-8 shadow-2xl relative border border-white/15 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-fuchsia-400 font-semibold">
                  {currentSlide.category || 'Xenforge Solutions'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal text-white tracking-tight mt-1">{currentSlide.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsLearnModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-gray-300 font-light leading-relaxed">
              <p>{currentSlide.description}</p>
            </div>

            {/* Feature Checklist */}
            <div className="mt-5 space-y-2.5">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block">Deliverables & Scope</span>
              {currentSlide.features?.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Special Highlight for Gurugram & Delhi NCR Shoots */}
            {currentSlide.id === 'digital-marketing' && (
              <div className="mt-6 p-4 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/30 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-fuchsia-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <span className="font-medium text-white block mb-0.5">On-Location Shoot Coverage: Gurugram & Delhi NCR</span>
                  <span className="text-gray-300">
                    We bring cinema-grade gear (4K Sony FX cameras, gimbal stabilization, wireless lav audio, professional studio lighting) to your office, studio, retail location, or event anywhere across Gurugram, DLF Cyber City, Golf Course Road, Delhi, and Noida.
                  </span>
                </div>
              </div>
            )}

            {/* Technical Highlights */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="block text-[11px] uppercase tracking-wider text-gray-400">Quality</span>
                <span className="text-sm font-medium text-white">{currentSlide.rating}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="block text-[11px] uppercase tracking-wider text-gray-400">Hub</span>
                <span className="text-sm font-medium text-white">{currentSlide.duration}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="block text-[11px] uppercase tracking-wider text-gray-400">Status</span>
                <span className="text-sm font-medium text-white">{currentSlide.releaseDate}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="block text-[11px] uppercase tracking-wider text-gray-400">Delivery</span>
                <span className="text-sm font-medium text-white">Guaranteed SLA</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsLearnModalOpen(false);
                  setIsProfileOpen(true);
                }}
                className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Book / Inquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CLIENT PORTAL & DIRECT INQUIRY / BOOKING MODAL */}
      {isProfileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Client Portal & Booking"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={() => setIsProfileOpen(false)}
        >
          <div
            className="w-full max-w-lg liquid-glass rounded-2xl p-6 sm:p-7 shadow-2xl relative border border-white/15 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-fuchsia-600 to-purple-400 flex items-center justify-center text-white font-semibold text-sm shadow-inner tracking-wider">
                  XF
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Xenforge Client Hub</h3>
                  <span className="text-xs text-fuchsia-400 font-light flex items-center gap-1">
                    <MapPin className="w-3 h-3 inline" /> Gurugram & Delhi NCR Studio
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsProfileOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close portal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-medium text-white">Inquiry Received</h4>
                <p className="text-xs text-gray-300 max-w-xs mx-auto leading-relaxed">
                  Thank you! A Xenforge producer will contact you via WhatsApp / Call within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setBookingSubmitted(false);
                    setIsProfileOpen(false);
                  }}
                  className="mt-4 px-6 py-2 rounded-full liquid-glass text-xs font-medium text-white hover:text-gray-200 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <div className="mt-4 space-y-3">
                  <div className="text-xs text-gray-300 leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    Schedule a photo/video shoot in Gurugram / Delhi NCR or discuss Web, App, and AI Automation projects with our leads.
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Interested Service</label>
                    <select
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white/40"
                    >
                      <option value="Digital Marketing (Shoot in NCR)">Digital Marketing (Video & Photo Shoot - Gurugram/NCR)</option>
                      <option value="Video Editing & Graphic Design">Video Editing & Graphic Designing</option>
                      <option value="Meta Ads Management">Meta Ads Management (FB & Instagram)</option>
                      <option value="Website Development">Website Development (React / Next.js)</option>
                      <option value="App Development">Mobile App Development (iOS & Android)</option>
                      <option value="AI Automation">AI Automation & Autonomous Workflows</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Project Notes (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="Brief details regarding dates, shoot locations in NCR, or project goals..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-white/40 resize-none"
                    />
                  </div>
                </div>

                {formError && (
                  <p className="mt-3 text-xs text-rose-400 bg-rose-950/30 border border-rose-500/30 px-3 py-1.5 rounded-lg">
                    {formError}
                  </p>
                )}

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] text-gray-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span>Gurugram HQ • Delhi NCR</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (!contactForm.phone.trim() && !contactForm.name.trim()) {
                        setFormError('Please enter your name or phone number so we can reach you.');
                        return;
                      }
                      setFormError('');
                      setBookingSubmitted(true);
                    }}
                    className="px-5 py-2 rounded-full bg-white text-black font-medium text-xs hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
