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
  accentColor = '#A855F7',
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
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#050507]">
      {/* 1. Base Dark Canvas */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* 2. Dynamic Service Background Image Transition */}
      <AnimatePresence mode="sync">
        {!imageFailed && (
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentImage}
              alt=""
              role="presentation"
              className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.08]"
              onError={() => setImageFailed(true)}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Ambient Looping Cinema Video (Top layer with subtle opacity blend) */}
      {!videoFailed && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover mix-blend-screen transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-35' : 'opacity-0'
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* 4. Layered Atmospheric Lighting (Deep Purple & Magenta Accents) */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 pointer-events-none transition-colors duration-1000"
        style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #EC4899 0%, #7C3AED 50%, transparent 70%)' }}
      />

      {/* 5. Cinematic Vignette & Readability Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/60 to-[#050507]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,7,0.75)_100%)]" />

      {/* 6. Optical Bottom Blur Overlay (Pure optical blur with mask) */}
      <div className="bottom-blur-overlay" aria-hidden="true" />
    </div>
  );
};
