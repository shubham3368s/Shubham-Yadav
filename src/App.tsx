/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceSlider } from './components/ServiceSlider';
import { CaseStudies } from './components/CaseStudies';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { FloatingToolbar } from './components/FloatingToolbar';
import { InquiryModal } from './components/InquiryModal';
import { SearchModal } from './components/SearchModal';
import { SERVICES, AGENCY_STATS } from './data/servicesData';
import { ServiceItem } from './types/services';

export default function App() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('End-to-End AI Automation');
  const [isAmbientMuted, setIsAmbientMuted] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  const currentService = SERVICES[currentServiceIndex] || SERVICES[0];

  // Scroll section spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'work', 'ncr-hub', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForInquiry(serviceName);
    } else {
      setSelectedServiceForInquiry(currentService.title);
    }
    setIsInquiryModalOpen(true);
  };

  const handleSelectServiceFromSearch = (service: ServiceItem) => {
    const index = SERVICES.findIndex((s) => s.id === service.id);
    if (index !== -1) {
      setCurrentServiceIndex(index);
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryHeroCta = (service: ServiceItem) => {
    handleOpenInquiry(service.title);
  };

  const handleSecondaryHeroCta = (service: ServiceItem) => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050507] text-[#F5F5F5] selection:bg-fuchsia-500/30 selection:text-white overflow-x-hidden">
      {/* 1. CINEMATIC BACKGROUND VISUAL & MEDIA ENGINE */}
      <BackgroundEffects
        currentImage={currentService.backgroundImage}
        videoSrc={currentService.videoBg || '/cinematic_hero_bg.mp4'}
        accentColor={currentService.accentColor}
        isMuted={isAmbientMuted}
      />

      {/* 2. MINIMALIST TOP NAVIGATION (Sticky with glass blur) */}
      <Navbar
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
        activeSection={activeSection}
      />

      {/* 3. HERO FULL-SCREEN SECTION (Editorial typography & carousel) */}
      <main>
        <Hero
          services={SERVICES}
          currentIndex={currentServiceIndex}
          onSelectIndex={setCurrentServiceIndex}
          onPrimaryCta={handlePrimaryHeroCta}
          onSecondaryCta={handleSecondaryHeroCta}
        />

        {/* 4. SCROLLABLE EDITORIAL AGENCY CONTAINER */}
        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 space-y-28 md:space-y-36">
          {/* CREDENTIALS RIBBON (Tabular figures, zero pill badges) */}
          <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {AGENCY_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="space-y-1 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 last:border-none"
                >
                  <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-normal text-white block tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-gray-300 block">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-gray-400 font-light block">
                    {stat.context}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. CORE SERVICES & CAPABILITIES SHOWCASE */}
          <ServiceSlider
            services={SERVICES}
            onSelectHeroService={(idx) => setCurrentServiceIndex(idx)}
            onOpenInquiryForService={(service) => handleOpenInquiry(service.title)}
          />

          {/* 6. QUANTIFIED CASE STUDIES & IMPACT */}
          <CaseStudies onOpenInquiry={handleOpenInquiry} />

          {/* 7. NCR SHOOT HUB, ABOUT & ON-PAGE CONTACT */}
          <CTASection onOpenInquiry={handleOpenInquiry} />
        </div>
      </main>

      {/* 8. QUIET FOOTER */}
      <Footer />

      {/* 9. FLOATING UTILITY TOOLBAR (Vertical dock on desktop / bottom pill on mobile) */}
      <FloatingToolbar
        onOpenInquiry={() => handleOpenInquiry()}
        isMuted={isAmbientMuted}
        onToggleSound={() => setIsAmbientMuted(!isAmbientMuted)}
        activeSection={activeSection}
      />

      {/* 10. CLIENT INQUIRY MODAL (Full functional validation & API integration) */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialService={selectedServiceForInquiry}
      />

      {/* 11. KEYWORD SEARCH MODAL */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectService={handleSelectServiceFromSearch}
      />
    </div>
  );
}
