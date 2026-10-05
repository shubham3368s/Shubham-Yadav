import React from 'react';
import { Search, User, Menu, X } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  delay: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Digital Marketing', href: '#digital-marketing', delay: '100ms' },
  { label: 'Website Dev', href: '#website-dev', delay: '150ms' },
  { label: 'App Dev', href: '#app-dev', delay: '200ms' },
  { label: 'AI Automation', href: '#ai-automation', delay: '250ms' },
  { label: 'Gurugram / NCR', href: '#ncr-hub', delay: '300ms' },
];

interface NavbarProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  activeItem: string;
  onSelectItem: (label: string, href?: string) => void;
  onSearchClick?: () => void;
  onProfileClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  onToggleMenu,
  activeItem,
  onSelectItem,
  onSearchClick,
  onProfileClick,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full select-none bg-black/50 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3.5 md:py-4 w-full max-w-[1680px] mx-auto"
      >
        {/* LEFT: LOGO */}
        <div
          className="h-8 md:h-10 flex items-center text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-white animate-blur-fade-up cursor-pointer hover:opacity-90 transition-opacity"
          style={{ animationDelay: '0ms' }}
          onClick={() => onSelectItem('Hero', '#hero')}
          role="button"
          tabIndex={0}
          aria-label="Xenforge home"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onSelectItem('Hero', '#hero');
            }
          }}
        >
          XENFORGE
        </div>

        {/* CENTER: DESKTOP NAVIGATION (Visible only at lg and above) */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => onSelectItem(item.label, item.href)}
                className={`text-sm transition-colors cursor-pointer animate-blur-fade-up relative py-1 ${
                  isActive ? 'text-white font-medium' : 'text-white/80 hover:text-white'
                }`}
                style={{ animationDelay: item.delay }}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-white rounded-full"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3">
          {/* Search Button (Visible at sm and above) */}
          <button
            type="button"
            onClick={onSearchClick}
            className="hidden sm:flex rounded-full liquid-glass px-4 md:px-6 py-2 items-center gap-2 text-sm text-white hover:text-gray-200 hover:bg-white/[0.04] transition-all cursor-pointer animate-blur-fade-up focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2"
            style={{ animationDelay: '350ms' }}
            aria-label="Search services"
          >
            <Search className="w-[18px] h-[18px] shrink-0 text-white/90" />
            <span className="font-normal text-white/90">Search</span>
          </button>

          {/* Profile / Client Portal Button (Visible at sm and above) */}
          <button
            type="button"
            onClick={onProfileClick}
            className="hidden sm:flex w-10 h-10 rounded-full liquid-glass items-center justify-center text-white hover:text-gray-200 hover:bg-white/[0.04] transition-all cursor-pointer animate-blur-fade-up focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2"
            style={{ animationDelay: '400ms' }}
            aria-label="Client Portal & Booking"
          >
            <User className="w-[18px] h-[18px] shrink-0" />
          </button>

          {/* Hamburger Button (Visible only below lg) */}
          <button
            type="button"
            onClick={onToggleMenu}
            className="lg:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white cursor-pointer animate-blur-fade-up relative overflow-hidden focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2"
            style={{ animationDelay: '350ms' }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* Menu Icon */}
              <Menu
                className={`w-5 h-5 absolute transition-all duration-500 ease-out ${
                  isMenuOpen
                    ? 'opacity-0 rotate-180 scale-50 pointer-events-none'
                    : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              {/* X Icon */}
              <X
                className={`w-5 h-5 absolute transition-all duration-500 ease-out ${
                  isMenuOpen
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 -rotate-180 scale-50 pointer-events-none'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};
