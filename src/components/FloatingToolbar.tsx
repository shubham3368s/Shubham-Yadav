import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Layers,
  Briefcase,
  Volume2,
  VolumeX,
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface FloatingToolbarProps {
  onOpenInquiry: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
  activeSection?: string;
}

export const FloatingToolbar: React.FC<FloatingToolbarProps> = ({
  onOpenInquiry,
  isMuted,
  onToggleSound,
  activeSection = 'hero',
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tools = [
    {
      id: 'hero',
      label: 'Home',
      icon: Home,
      action: () => scrollTo('hero'),
    },
    {
      id: 'services',
      label: 'Services',
      icon: Layers,
      action: () => scrollTo('services'),
    },
    {
      id: 'work',
      label: 'Client Work',
      icon: Briefcase,
      action: () => scrollTo('work'),
    },
    {
      id: 'sound',
      label: isMuted ? 'Unmute Ambient' : 'Mute Ambient',
      icon: isMuted ? VolumeX : Volume2,
      action: onToggleSound,
      isSpecial: !isMuted,
    },
    {
      id: 'inquiry',
      label: 'Book Consultation',
      icon: MessageSquare,
      action: onOpenInquiry,
      highlight: true,
    },
  ];

  return (
    <aside
      aria-label="Quick Actions Toolbar"
      className="fixed z-40 select-none
        /* Desktop: Vertical right dock */
        md:right-6 md:top-1/2 md:-translate-y-1/2 md:flex-col
        /* Mobile: Sleek bottom floating dock */
        bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 flex flex-row items-center gap-2 p-1.5 rounded-full liquid-glass border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl"
    >
      {tools.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeSection === item.id;
        const isHovered = hoveredIndex === item.id;

        return (
          <div key={item.id} className="relative flex items-center justify-center">
            <button
              type="button"
              onClick={item.action}
              onMouseEnter={() => setHoveredIndex(item.id)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(item.id)}
              onBlur={() => setHoveredIndex(null)}
              aria-label={item.label}
              className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2 ${
                item.highlight
                  ? 'bg-fuchsia-600 text-white hover:bg-fuchsia-500 shadow-[0_0_16px_rgba(236,72,153,0.4)]'
                  : isActive
                  ? 'bg-white/15 text-white'
                  : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <IconComponent className="w-4 h-4 shrink-0" />

              {/* Pulse indicator for inquiry */}
              {item.highlight && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              )}
            </button>

            {/* Desktop Tooltip (Left floating) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -8, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -6, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="hidden md:block absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-[#0B0710]/95 border border-white/15 text-white text-[11px] font-medium whitespace-nowrap shadow-xl pointer-events-none"
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </aside>
  );
};
