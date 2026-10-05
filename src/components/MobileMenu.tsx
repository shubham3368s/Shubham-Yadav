import React from 'react';
import { Search, User } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
  activeItem: string;
  onSelectItem: (label: string, href?: string) => void;
  onSearchClick?: () => void;
  onProfileClick?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  activeItem,
  onSelectItem,
  onSearchClick,
  onProfileClick,
}) => {
  return (
    <div
      id="mobile-navigation"
      role="region"
      aria-label="Mobile Navigation Menu"
      className={`lg:hidden absolute top-[64px] sm:top-[72px] left-0 right-0 z-40 transition-all duration-500 ease-out bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl ${
        isOpen
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="px-4 py-4 sm:px-6 space-y-1">
        {navItems.map((item, index) => {
          const isActive = activeItem === item.label;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                onSelectItem(item.label, item.href);
                onClose();
              }}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              }}
              className={`w-full text-left py-3 px-3 rounded-lg transition-all duration-300 font-medium text-sm flex items-center justify-between cursor-pointer ${
                isActive
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              } ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'}`}
            >
              <span>{item.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          );
        })}

        {/* Below sm only: Bordered bottom control section with Search and Profile */}
        <div className="sm:hidden pt-4 mt-2 border-t border-gray-800 flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              onSearchClick?.();
              onClose();
            }}
            className="flex-1 rounded-full liquid-glass px-4 py-2.5 flex items-center justify-center gap-2 text-sm text-white hover:text-gray-200 transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4 shrink-0 text-gray-300" />
            <span>Search</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onProfileClick?.();
              onClose();
            }}
            className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white hover:text-gray-200 transition-colors shrink-0 cursor-pointer"
            aria-label="User Profile"
          >
            <User className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
