import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroNavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalSlides?: number;
}

export const HeroNavigation: React.FC<HeroNavigationProps> = ({
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex items-center gap-3 shrink-0">
      {/* Previous Button */}
      <button
        type="button"
        onClick={onPrevious}
        className="animate-blur-fade-up rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 text-white hover:text-gray-200 hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm font-medium cursor-pointer focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2"
        style={{ animationDelay: '800ms' }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 shrink-0" />
        <span>Previous</span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={onNext}
        className="animate-blur-fade-up rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 text-white hover:text-gray-200 hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm font-medium cursor-pointer focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2"
        style={{ animationDelay: '900ms' }}
        aria-label="Next slide"
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
      </button>
    </div>
  );
};
