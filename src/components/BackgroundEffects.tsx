import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundEffectsProps {
  currentImage: string;
  videoSrc?: string;
  accentColor?: string;
  isMuted?: boolean;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  currentImage,
  videoSrc = '/cinematic_hero_bg.mp4',
  isMuted = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.defaultMuted = isMuted;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [isMuted, videoSrc]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#050811]">
      {/* 1. Base Architectural Midnight Canvas */}
      <div className="absolute inset-0 bg-[#050811]" />

      {/* 2. Real Photography / Cinematography Backdrop */}
      <AnimatePresence mode="sync">
        {!imageFailed && (
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentImage}
              alt=""
              role="presentation"
              className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.05]"
              onError={() => setImageFailed(true)}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Real Commercial Video Layer (Subtle, filmic texture) */}
      {!videoFailed && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? 'opacity-25' : 'opacity-0'
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* 4. Film Contrast & Exposure Scrim (Replaces artificial glowing orbs with natural studio lighting) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/90 via-[#050811]/60 to-[#050811]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0%,rgba(5,8,17,0.7)_80%)]" />

      {/* 5. Clean Architectural Grid Line Accent (Human design craft) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
};
