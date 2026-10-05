import React from 'react';
import { Volume2, VolumeX, MessageSquare } from 'lucide-react';

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
}) => {
  return (
    <div
      aria-label="Quick Actions"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 select-none"
    >
      {/* Ambient Sound Toggle */}
      <button
        type="button"
        onClick={onToggleSound}
        aria-label={isMuted ? 'Unmute Ambient Sound' : 'Mute Ambient Sound'}
        className="w-10 h-10 rounded-full bg-[#0a0f1d]/90 hover:bg-[#131b30] border border-white/10 text-slate-400 hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-md"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
      </button>

      {/* Direct Inquire Button */}
      <button
        type="button"
        onClick={onOpenInquiry}
        className="px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all flex items-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(37,99,235,0.4)] active:scale-[0.98]"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Start a Project</span>
      </button>
    </div>
  );
};
