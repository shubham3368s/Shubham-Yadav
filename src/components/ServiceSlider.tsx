import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem } from '../types/services';
import { ServiceCard } from './ServiceCard';

interface ServiceSliderProps {
  services: ServiceItem[];
  onSelectHeroService: (index: number) => void;
  onOpenInquiryForService: (service: ServiceItem) => void;
}

export const ServiceSlider: React.FC<ServiceSliderProps> = ({
  services,
  onSelectHeroService,
  onOpenInquiryForService,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dev' | 'ai' | 'media'>('all');

  const filteredServices = services.filter((s) => {
    if (activeFilter === 'dev') return s.id === 'website-development' || s.id === 'app-development';
    if (activeFilter === 'ai') return s.id === 'ai-automation';
    if (activeFilter === 'media') return s.id === 'video-editing' || s.id === 'digital-marketing' || s.id === 'seo-growth';
    return true;
  });

  return (
    <section id="services" className="scroll-mt-24 space-y-10">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-sky-500/15">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            <span>03</span>
            <span className="text-sky-500/40">/</span>
            <span>WHAT WE DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#F8FAFC] text-balance">
            Our Core Services.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-md font-light leading-relaxed">
          Six focused services covering web development, mobile apps, AI automations, video editing, and paid marketing.
        </p>
      </div>

      {/* SEGMENTED FILTER CONTROLS */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          { id: 'all', label: 'All Capabilities (06)' },
          { id: 'ai', label: 'AI Automation' },
          { id: 'dev', label: 'Web & Mobile Engineering' },
          { id: 'media', label: 'Video, Shoots & Paid Growth' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-blue-600 text-white shadow-[0_2px_14px_rgba(37,99,235,0.35)] border border-sky-400/30'
                : 'liquid-glass text-slate-300 hover:text-white hover:border-sky-400/30'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ASYMMETRIC SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => {
            const originalIndex = services.findIndex((s) => s.id === service.id);
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <ServiceCard
                  service={service}
                  onSelect={() => {
                    if (originalIndex !== -1) {
                      onSelectHeroService(originalIndex);
                      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onAction={() => onOpenInquiryForService(service)}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};
