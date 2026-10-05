import React from 'react';
import { Star, Clock, Calendar, MapPin, Zap, Sparkles, Layers } from 'lucide-react';

interface MetadataProps {
  rating?: string;
  duration?: string;
  releaseDate?: string;
  tag2Icon?: 'clock' | 'location' | 'zap' | 'layers';
  tag3Icon?: 'calendar' | 'sparkles' | 'clock';
}

export const Metadata: React.FC<MetadataProps> = ({
  rating = '4.9/5.0 Top Agency',
  duration = 'Gurugram & Delhi NCR',
  releaseDate = 'Q2 2025 Intake',
  tag2Icon = 'location',
  tag3Icon = 'sparkles',
}) => {
  return (
    <div
      className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm font-medium animate-blur-fade-up text-white"
      style={{ animationDelay: '300ms' }}
    >
      {/* Rating / Metric */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white shrink-0" />
        <span className="tracking-wide">{rating}</span>
      </div>

      <span className="w-1 h-1 rounded-full bg-white/40 hidden xs:inline-block" aria-hidden="true" />

      {/* Duration / Location / Spec */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {tag2Icon === 'location' ? (
          <MapPin className="w-4 h-4 shrink-0 text-white/90" />
        ) : tag2Icon === 'zap' ? (
          <Zap className="w-4 h-4 shrink-0 text-white/90" />
        ) : tag2Icon === 'layers' ? (
          <Layers className="w-4 h-4 shrink-0 text-white/90" />
        ) : (
          <Clock className="w-4 h-4 shrink-0 text-white/90" />
        )}
        <span className="tracking-wide text-white/90">{duration}</span>
      </div>

      <span className="w-1 h-1 rounded-full bg-white/40 hidden xs:inline-block" aria-hidden="true" />

      {/* Status / Date */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {tag3Icon === 'sparkles' ? (
          <Sparkles className="w-4 h-4 shrink-0 text-white/90" />
        ) : tag3Icon === 'clock' ? (
          <Clock className="w-4 h-4 shrink-0 text-white/90" />
        ) : (
          <Calendar className="w-4 h-4 shrink-0 text-white/90" />
        )}
        <span className="tracking-wide text-white/90">{releaseDate}</span>
      </div>
    </div>
  );
};
