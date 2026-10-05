import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem } from '../types/services';
import { ChevronLeft, ChevronRight, Play, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  services: ServiceItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onPrimaryCta: (service: ServiceItem) => void;
  onSecondaryCta: (service: ServiceItem) => void;
}

export const Hero: React.FC<HeroProps> = ({
  services,
  currentIndex,
  onSelectIndex,
  onPrimaryCta,
  onSecondaryCta,
}) => {
  const currentService = services[currentIndex];
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number>(null);

  // Auto progression every 7 seconds, paused on hover or user interaction
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      onSelectIndex((currentIndex + 1) % services.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, onSelectIndex, services.length]);

  const handlePrevious = () => {
    onSelectIndex(currentIndex === 0 ? services.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % services.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <section
      id="hero"
      aria-label="Xenforge Cinematic Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[100dvh] w-full flex flex-col justify-end pt-24 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 max-w-[1680px] mx-auto select-none overflow-hidden"
    >
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4">
        {/* LEFT CONTENT: EDITORIAL TYPOGRAPHY & CTAs */}
        <div className="flex-1 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.04, y: -16 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 md:space-y-6"
            >
              {/* EYEBROW: Unboxed, zero-pill discipline */}
              <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-fuchsia-400 uppercase">
                <span className="font-semibold">{currentService.number}</span>
                <span className="text-white/40" aria-hidden="true">/</span>
                <span>{currentService.category}</span>
              </div>

              {/* MAIN EDITORIAL HEADING */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.04em] text-[#F5F5F5] leading-[1.06] text-balance">
                {currentService.title}
              </h1>

              {/* CONCISE DESCRIPTION */}
              <p className="text-sm sm:text-base md:text-lg text-[#A1A1AA] max-w-2xl font-light leading-relaxed">
                {currentService.description}
              </p>

              {/* DELIVERABLE HIGHLIGHTS (Clean typographic list, no badge sandwich) */}
              <div className="hidden sm:flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs text-gray-300">
                {currentService.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Primary Bright White Button */}
                <button
                  type="button"
                  onClick={() => onPrimaryCta(currentService)}
                  className="px-6 sm:px-8 py-3 rounded-full bg-white text-black font-medium text-xs sm:text-sm hover:bg-gray-200 active:scale-[0.98] transition-all flex items-center gap-2.5 shadow-[0_4px_24px_rgba(255,255,255,0.18)] cursor-pointer group focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  <Play className="w-3.5 h-3.5 fill-black text-black group-hover:translate-x-0.5 transition-transform" />
                  <span>{currentService.primaryCta}</span>
                </button>

                {/* Secondary Liquid Glass Button */}
                <button
                  type="button"
                  onClick={() => onSecondaryCta(currentService)}
                  className="px-6 sm:px-8 py-3 rounded-full liquid-glass text-[#F5F5F5] font-medium text-xs sm:text-sm hover:text-white hover:bg-white/[0.05] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2"
                >
                  <span>{currentService.secondaryCta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT CONTROLS: REAL CAROUSEL NAVIGATION & INDEX COUNTER */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-4 shrink-0 pt-4 md:pt-0">
          {/* SLIDE COUNTER (e.g. 01 / 06) */}
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-white/70">
            <span className="text-white font-semibold text-base sm:text-lg">
              {currentService.number}
            </span>
            <span className="text-white/40">/</span>
            <span>0{services.length}</span>
          </div>

          {/* PREVIOUS & NEXT PILL BUTTONS */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous service"
              className="px-4 py-2.5 rounded-full liquid-glass text-xs font-medium text-white hover:text-gray-200 hover:bg-white/[0.05] active:scale-[0.96] transition-all flex items-center gap-1.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2"
            >
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next service"
              className="px-4 py-2.5 rounded-full liquid-glass text-xs font-medium text-white hover:text-gray-200 hover:bg-white/[0.05] active:scale-[0.96] transition-all flex items-center gap-1.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>

      {/* AMBIENT SCROLL PROMPT */}
      <div
        onClick={() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="relative z-10 w-full pt-6 flex flex-col items-center justify-center cursor-pointer text-white/40 hover:text-white/80 transition-colors"
        role="button"
        tabIndex={0}
        aria-label="Scroll to explore all capabilities"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium mb-1">
          Scroll to Explore Capabilities
        </span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-white/60" />
      </div>
    </section>
  );
};
