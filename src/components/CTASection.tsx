import React, { useState } from 'react';
import { Camera, MapPin, Check, Loader2, ArrowRight, MessageSquare, ShieldCheck, Lock } from 'lucide-react';
import { submitInquiry } from '../services/contactApi';
import { InquiryFormData } from '../types/services';

interface CTASectionProps {
  onOpenInquiry: (initialService?: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenInquiry }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: 'End-to-End AI Automation',
    projectDetails: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMsg('Please enter either a phone number or email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await submitInquiry(formData);
      setSubmittedRef(res.inquiryId || 'CONFIRMED');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-28 md:space-y-36">
      {/* ========================================================
          ON-GROUND GURUGRAM & DELHI NCR PRODUCTION HUB
          ======================================================== */}
      <section id="ncr-hub" className="scroll-mt-24 space-y-6">
        <div className="studio-card rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>ON-GROUND STUDIO INFRASTRUCTURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#F8FAFC] text-balance">
              On-Location Video & Photo Shoots across Gurugram & Delhi NCR.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              We bring full 4K cinema packages (Sony FX cameras, motorized gimbal rigs, multi-channel wireless audio, and professional studio lighting) directly to your corporate premises, retail stores, or event venues with on-site backup and insured gear.
            </p>

            {/* COVERAGE DISTRICTS */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <span className="text-white font-medium block">DLF Cyber City</span>
                <span className="text-slate-400 text-[11px]">Corporate & Commercial</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <span className="text-white font-medium block">Golf Course Road</span>
                <span className="text-slate-400 text-[11px]">Luxury Real Estate & Lifestyle</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <span className="text-white font-medium block">South & Central Delhi</span>
                <span className="text-slate-400 text-[11px]">Brand Films & Documentaries</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <span className="text-white font-medium block">Noida Expressways</span>
                <span className="text-slate-400 text-[11px]">Tech Hubs & Industrial</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenInquiry('Gurugram & Delhi NCR On-Location Shoot')}
                className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 shadow-[0_2px_16px_rgba(37,99,235,0.35)]"
              >
                <Camera className="w-4 h-4" />
                <span>Schedule On-Location Shoot</span>
              </button>

              <a
                href="https://wa.me/919876543210?text=Hi%20Xenforge%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20shoot%20or%20project."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <span>WhatsApp Instant Connect</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ON-PAGE CONTACT & PROPOSAL SECTION
          ======================================================== */}
      <section id="contact" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase">
            <span>05</span>
            <span className="text-sky-500/40">/</span>
            <span>CONTACT US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#F8FAFC] text-balance">
            Tell Us About Your Project.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light">
            Send us a note about what you need built, filmed, or automated. We&apos;ll reply within 24 hours with a scope and fixed quote.
          </p>
        </div>

        <div className="max-w-2xl mx-auto studio-card rounded-2xl p-6 sm:p-9 shadow-2xl">
          {submittedRef ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-blue-600/20 text-sky-400 border border-sky-500/30 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
                PROPOSAL TICKET: {submittedRef}
              </span>
              <h3 className="text-2xl font-normal text-white">Inquiry Successfully Dispatched</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto font-light leading-relaxed">
                Thank you! Our technical producer will contact you via WhatsApp / Phone to schedule a discovery session.
              </p>
              <button
                type="button"
                onClick={() => setSubmittedRef(null)}
                className="mt-4 px-6 py-2 rounded-full liquid-glass text-xs font-medium text-white hover:text-sky-200 transition-colors cursor-pointer"
              >
                Submit Additional Brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-sky-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
                    Phone / WhatsApp <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-sky-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-sky-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
                    Primary Practice
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070F26] border border-sky-500/20 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                  >
                    <option value="End-to-End AI Automation">01 — AI Automation</option>
                    <option value="Bespoke Website Development">02 — Website Development</option>
                    <option value="Scalable Mobile App Development">03 — App Development</option>
                    <option value="Conversion-Engineered SEO & Growth">04 — SEO & Growth</option>
                    <option value="High-Impact Video Editing">05 — Video Editing</option>
                    <option value="Performance-Driven Digital Marketing">06 — Digital Marketing / Paid Ads</option>
                    <option value="Gurugram & Delhi NCR On-Location Shoot">On-Location Shoot (Gurugram & NCR)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
                  Project Scope / Shoot Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline your project timeline, tech requirements, or NCR shoot dates..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-sky-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 resize-none"
                />
              </div>

              {/* Confidentiality Guarantee Notice */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono bg-sky-950/20 p-2.5 rounded-lg border border-sky-500/15">
                <Lock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>We sign a mutual NDA before reviewing any confidential documents or numbers.</span>
              </div>

              {errorMsg && (
                <div className="text-xs text-rose-400 bg-rose-950/30 border border-rose-500/30 px-3.5 py-2 rounded-xl">
                  {errorMsg}
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Open for new client projects this month</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_14px_rgba(37,99,235,0.35)]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
