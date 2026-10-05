import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types/services';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filtered = SERVICES.filter((s) => {
    const q = query.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.features.some((f) => f.toLowerCase().includes(q))
    );
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search Capabilities"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl studio-card rounded-2xl p-6 shadow-2xl relative"
          >
            {/* SEARCH INPUT */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3 w-full">
                <Search className="w-5 h-5 text-sky-400 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search AI automation, Next.js, video editing, NCR shoot, SLA..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-slate-500 outline-none w-full text-sm sm:text-base font-light"
                />
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* POPULAR TAGS */}
            <div className="mt-4">
              <span className="text-[11px] uppercase tracking-wider text-sky-400 font-mono">
                Suggested Practices & Guarantees
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  'Enterprise AI Automation',
                  'Next.js 15 Web Systems',
                  'Gurugram & NCR Shoot',
                  'Meta Ads (CAPI)',
                  'Flutter Mobile App',
                  '100% IP Handover',
                  'Signed NDA SLA'
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-sky-950/40 text-slate-300 hover:text-sky-200 transition-colors border border-sky-500/15 cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* RESULTS */}
            {query && (
              <div className="mt-5 pt-4 border-t border-white/10 max-h-56 overflow-y-auto space-y-2">
                {filtered.length > 0 ? (
                  filtered.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelectService(item);
                        onClose();
                      }}
                      className="p-3 rounded-xl bg-white/[0.03] hover:bg-sky-950/30 border border-transparent hover:border-sky-500/20 cursor-pointer transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-[11px] font-mono text-sky-400">
                          {item.number} / {item.category}
                        </div>
                        <h4 className="text-sm font-medium text-white">{item.title}</h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 py-3 text-center">
                    No direct match found. Please contact our technical team for custom specifications.
                  </p>
                )}
              </div>
            )}

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Press ESC to dismiss</span>
              <span className="flex items-center gap-1 text-sky-400">
                <ShieldCheck className="w-3.5 h-3.5" /> Xenforge Verified Search
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
