import React, { useRef, useEffect } from 'react';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure autoplay works reliably across mobile and desktop browsers
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Fallback if browser requires interaction
      });
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 z-0 h-full w-full object-cover pointer-events-none"
        poster="/src/assets/images/hero_video_frame_1791175807031.jpg"
      >
        <source src="/cinematic_hero_bg.mp4" type="video/mp4" />
      </video>

      {/* Bottom Blur Overlay: ONLY blur, strictly no dark gradient or vignette */}
      <div
        className="bottom-blur-overlay"
        aria-hidden="true"
      />
    </>
  );
};
