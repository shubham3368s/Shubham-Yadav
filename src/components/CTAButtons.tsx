import React from 'react';
import { Play } from 'lucide-react';

interface CTAButtonsProps {
  onWatchNow?: () => void;
  onLearnMore?: () => void;
  watchText?: string;
  learnText?: string;
}

export const CTAButtons: React.FC<CTAButtonsProps> = ({
  onWatchNow,
  onLearnMore,
  watchText = 'Watch Reel',
  learnText = 'Learn More',
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
      {/* Button 1: Watch Now / Showreel - The only solid-colored interactive element */}
      <button
        type="button"
        onClick={onWatchNow}
        className="animate-blur-fade-up bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-gray-200 active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5 text-sm sm:text-base cursor-pointer shadow-[0_4px_24px_rgba(255,255,255,0.15)] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        style={{ animationDelay: '600ms' }}
        aria-label={watchText}
      >
        <Play className="w-[18px] h-[18px] fill-black text-black shrink-0" />
        <span>{watchText}</span>
      </button>

      {/* Button 2: Learn More - Liquid Glass */}
      <button
        type="button"
        onClick={onLearnMore}
        className="animate-blur-fade-up rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 text-white hover:text-gray-200 hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-200 flex items-center justify-center text-sm sm:text-base cursor-pointer focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2"
        style={{ animationDelay: '700ms' }}
        aria-label={learnText}
      >
        <span>{learnText}</span>
      </button>
    </div>
  );
};
