import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem } from '../types/services';
import { ArrowUpRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';

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

  // Auto progression with pause on interaction
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
      if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <section
      id="hero"
      aria-label="Xenforge Studio"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-28 pb-10 px-4 sm:px-6 md:px-12 max-w-[1680px] mx-auto select-none"
    >
      {/* 1. TOP STUDIO STATUS BAR (Human studio signal) */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] text-xs font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-slate-200">DLF Cyber City, Gurugram</span>
          <span className="hidden sm:inline text-slate-600">/</span>
          <span className="hidden sm:inline">Delhi NCR Hub</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sky-400">Status: Taking on Q2/Q3 Projects</span>
          <span className="hidden md:inline text-slate-600">·</span>
          <span className="hidden md:inline">Full IP Transfer & NDA</span>
        </div>
      </div>

      {/* 2. MAIN EDITORIAL DISPLAY */}
      <div className="relative z-10 my-auto py-8 max-w-4xl space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {/* Category tag */}
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-sky-400 uppercase">
              <span className="text-sky-300 font-semibold">{currentService.number}</span>
              <span className="text-white/30">/</span>
              <span>{currentService.category}</span>
            </div>

            {/* Main Statement */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.035em] text-[#F8FAFC] leading-[1.05] text-balance">
              {currentService.title}
            </h1>

            {/* Factual human description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              {currentService.description}
            </p>

            {/* Scope highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-slate-300">
              {currentService.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Direct human CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onPrimaryCta(currentService)}
                className="px-7 py-3 rounded-full bg-white text-slate-950 font-medium text-xs sm:text-sm hover:bg-slate-200 transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-[0.98]"
              >
                <span>{currentService.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onSecondaryCta(currentService)}
                className="px-6 py-3 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 text-xs sm:text-sm font-medium transition-all cursor-pointer"
              >
                <span>{currentService.secondaryCta}</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. PRACTICES CAROUSEL DOCK (Clean architectural tabs instead of generic pills) */}
      <div className="relative z-10 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Clickable service indicators */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 scrollbar-none">
          {services.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600/30 text-sky-300 border border-sky-400/40 font-medium'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.number} {item.id.replace('-', ' ').toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Previous / Next Controls */}
        <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
          <span className="font-mono text-xs text-slate-400">
            0{currentIndex + 1} / 0{services.length}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous service"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next service"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
