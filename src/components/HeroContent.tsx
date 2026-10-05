import React from 'react';
import { Metadata } from './Metadata';
import { CTAButtons } from './CTAButtons';
import { HeroNavigation } from './HeroNavigation';

export interface SlideData {
  id: string;
  category?: string;
  title: string;
  description: string;
  rating: string;
  duration: string;
  releaseDate: string;
  tag2Icon?: 'clock' | 'location' | 'zap' | 'layers';
  tag3Icon?: 'calendar' | 'sparkles' | 'clock';
  watchText?: string;
  learnText?: string;
  features?: string[];
}

interface HeroContentProps {
  currentSlide: SlideData;
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalSlides: number;
  onWatchNow?: () => void;
  onLearnMore?: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  currentSlide,
  onPrevious,
  onNext,
  currentIndex,
  totalSlides,
  onWatchNow,
  onLearnMore,
}) => {
  return (
    <section
      aria-label="Xenforge Services"
      className="flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16 z-10 w-full max-w-[1680px] mx-auto select-none"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
        {/* Left Hero Content */}
        <div className="flex-1 max-w-3xl">
          {/* Metadata */}
          <Metadata
            rating={currentSlide.rating}
            duration={currentSlide.duration}
            releaseDate={currentSlide.releaseDate}
            tag2Icon={currentSlide.tag2Icon}
            tag3Icon={currentSlide.tag3Icon}
          />

          {/* Title */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.04em] mb-4 md:mb-6 text-white leading-[1.08] animate-blur-fade-up drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: '400ms' }}
          >
            {currentSlide.title}
          </h1>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl font-light leading-relaxed animate-blur-fade-up drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]"
            style={{ animationDelay: '500ms' }}
          >
            {currentSlide.description}
          </p>

          {/* CTA Buttons */}
          <CTAButtons
            onWatchNow={onWatchNow}
            onLearnMore={onLearnMore}
            watchText={currentSlide.watchText || 'Watch Reel'}
            learnText={currentSlide.learnText || 'Learn More'}
          />
        </div>

        {/* Hero Navigation Arrows */}
        <div className="pt-2 md:pt-0">
          <HeroNavigation
            onPrevious={onPrevious}
            onNext={onNext}
            currentIndex={currentIndex}
            totalSlides={totalSlides}
          />
        </div>
      </div>
    </section>
  );
};
