import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenInquiry: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenInquiry,
  activeSection = 'hero',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Capabilities', href: '#services' },
    { label: 'Trust & Guarantees', href: '#trust' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Studio & NCR', href: '#ncr-hub' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
          isScrolled
            ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-sky-500/15 shadow-[0_4px_30px_rgba(2,6,23,0.7)] py-3 sm:py-3.5'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <nav
          aria-label="Primary Navigation"
          className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between"
        >
          {/* LEFT: XENFORGE WORDMARK */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2 rounded"
            aria-label="Xenforge Home"
          >
            <span className="text-base sm:text-lg font-semibold tracking-[0.28em] text-[#F8FAFC] uppercase group-hover:text-white transition-colors">
              XENFORGE
            </span>
          </a>

          {/* CENTER: DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-900/40 border border-sky-500/15 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-blue-600/20 border border-sky-400/30"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* RIGHT: TRUSTED ACTIONS & CONTROLS */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search Xenforge Capabilities"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full liquid-glass flex items-center justify-center text-slate-300 hover:text-white hover:border-sky-400/30 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2"
            >
              <Search className="w-4 h-4 text-slate-300" />
            </button>

            {/* Client Portal / Enterprise Hub Button */}
            <button
              type="button"
              onClick={onOpenInquiry}
              aria-label="Client Portal & Direct Booking"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-xs font-medium text-slate-200 hover:text-white hover:border-sky-400/30 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Client Portal</span>
            </button>

            {/* Primary Action Button (Desktop) */}
            <button
              type="button"
              onClick={onOpenInquiry}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all cursor-pointer shadow-[0_2px_16px_rgba(37,99,235,0.35)] active:scale-[0.98] border border-sky-400/30 focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full liquid-glass flex items-center justify-center text-white cursor-pointer relative focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4 text-slate-200" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4 text-slate-200" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU DRAWER (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[60px] z-40 lg:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-sky-500/20 shadow-2xl p-5"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.04] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-sky-500/15 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs text-center cursor-pointer shadow-lg transition-colors"
                >
                  Get a Fixed Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
