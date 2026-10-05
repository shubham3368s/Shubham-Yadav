import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { submitInquiry } from '../services/contactApi';
import { InquiryFormData } from '../types/services';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'End-to-End AI Automation',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService,
    projectDetails: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successResult, setSuccessResult] = useState<{ id: string; message: string } | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Sync initial service when opened with a specific service
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService, isOpen]);

  // Trap focus and prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setErrorMsg('');
      setSuccessResult(null);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMsg('Please enter either your Phone/WhatsApp or an Email address.');
      return;
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const response = await submitInquiry(formData);
      setSuccessResult({
        id: response.inquiryId || 'XF-CONFIRMED',
        message: response.message,
      });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="inquiry-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl liquid-glass rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/15 relative my-8"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close client hub"
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white/60"
            >
              <X className="w-5 h-5" />
            </button>

            {successResult ? (
              /* SUCCESS STATE */
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">
                    REF: {successResult.id}
                  </span>
                  <h3 className="text-2xl font-normal text-white">Inquiry Received</h3>
                  <p className="text-sm text-gray-300 max-w-sm mx-auto font-light leading-relaxed">
                    {successResult.message}
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* INQUIRY FORM */
              <div>
                {/* HEADER */}
                <div className="pb-5 border-b border-white/10 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-500" />
                    <span className="text-xs font-mono uppercase tracking-widest text-fuchsia-400">
                      XENFORGE CLIENT HUB
                    </span>
                  </div>
                  <h2 id="inquiry-title" className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
                    Start Your Project.
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 font-light">
                    Tell us what you&apos;re building and we&apos;ll help you plan the next step.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  {/* FULL NAME */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
                      Full Name <span className="text-fuchsia-400">*</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
                    />
                  </div>

                  {/* PHONE & EMAIL GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
                        Phone / WhatsApp <span className="text-fuchsia-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
                      />
                    </div>
                  </div>

                  {/* INTERESTED SERVICE DROPDOWN */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
                      Interested Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0710] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40"
                    >
                      <option value="End-to-End AI Automation">01 — AI Automation</option>
                      <option value="Bespoke Website Development">02 — Website Development</option>
                      <option value="Scalable Mobile App Development">03 — App Development</option>
                      <option value="Conversion-Engineered SEO & Growth">04 — SEO & Growth</option>
                      <option value="High-Impact Video Editing">05 — Video Editing</option>
                      <option value="Performance-Driven Digital Marketing">06 — Digital Marketing / Paid Ads</option>
                      <option value="Gurugram & Delhi NCR On-Location Shoot">On-Location Shoot (Gurugram & Delhi NCR)</option>
                    </select>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
                      Project Details / Shoot Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your timeline, business goals, or preferred shoot location in NCR..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 resize-none"
                    />
                  </div>

                  {/* ERROR MESSAGE */}
                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-rose-400 bg-rose-950/30 border border-rose-500/30 px-3.5 py-2 rounded-xl"
                    >
                      {errorMsg}
                    </motion.div>
                  )}

                  {/* SUBMISSION FOOTER */}
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
                      <span>Gurugram HQ • Delhi NCR Hub</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-white text-black font-medium text-xs sm:text-sm hover:bg-gray-200 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
