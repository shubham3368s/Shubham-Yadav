import React, { useState } from 'react';
import { Camera, MapPin, Check, Loader2, ArrowRight, Phone, MessageSquare, Mail, Sparkles } from 'lucide-react';
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
      setErrorMsg('Please enter either a phone or email address.');
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
        <div className="liquid-glass rounded-2xl p-8 sm:p-12 border border-fuchsia-500/25 bg-fuchsia-950/10 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-fuchsia-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>ON-GROUND STUDIO INFRASTRUCTURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#F5F5F5] text-balance">
              On-Location Video & Photo Shoots across Gurugram & Delhi NCR.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              We bring full 4K cinema packages (Sony FX cameras, motorized gimbal rigs, multi-channel wireless audio, and professional studio lighting) directly to your corporate premises, retail stores, or event venues.
            </p>

            {/* COVERAGE DISTRICTS */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-white font-medium block">DLF Cyber City</span>
                <span className="text-gray-400 text-[11px]">Corporate & Commercial</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-white font-medium block">Golf Course Road</span>
                <span className="text-gray-400 text-[11px]">Luxury Real Estate & Lifestyle</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-white font-medium block">South & Central Delhi</span>
                <span className="text-gray-400 text-[11px]">Brand Films & Fashion</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-white font-medium block">Noida Expressways</span>
                <span className="text-gray-400 text-[11px]">Tech Hubs & Industrial</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenInquiry('Gurugram & Delhi NCR On-Location Shoot')}
                className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-xs sm:text-sm hover:bg-gray-200 transition-colors cursor-pointer flex items-center gap-2"
              >
                <Camera className="w-4 h-4" />
                <span>Schedule On-Location Shoot</span>
              </button>

              <a
                href="https://wa.me/919876543210?text=Hi%20Xenforge%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20shoot%20or%20project."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full liquid-glass text-white font-medium text-xs sm:text-sm hover:text-gray-200 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Instant Connect</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT XENFORGE SECTION
          ======================================================== */}
      <section id="about" className="scroll-mt-24 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-fuchsia-400 uppercase mb-2">
              <span>04</span>
              <span className="text-white/40">/</span>
              <span>ABOUT XENFORGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#F5F5F5]">
              Human Vision. Machine Velocity.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md font-light leading-relaxed">
            We operate at the convergence of creative direction, software architecture, and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-fuchsia-400 uppercase">PRINCIPLE 01</span>
            <h3 className="text-xl font-normal text-white">Zero Mediocrity</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              We reject generic templates, lazy AI boilerplate, and uninspired design. Every line of code and frame of footage is intentionally crafted.
            </p>
          </div>
          <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-purple-400 uppercase">PRINCIPLE 02</span>
            <h3 className="text-xl font-normal text-white">Full-Funnel Ownership</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              From creative shoot production to backend cloud systems and paid Meta ad distribution, we own the complete pipeline from click to conversion.
            </p>
          </div>
          <div className="liquid-glass rounded-2xl p-7 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-emerald-400 uppercase">PRINCIPLE 03</span>
            <h3 className="text-xl font-normal text-white">Autonomous Scaling</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              We embed bespoke AI automation workflows into client businesses so their operational throughput scales effortlessly without bloat.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          ON-PAGE CONTACT & PROPOSAL SECTION
          ======================================================== */}
      <section id="contact" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-fuchsia-400 uppercase">
            <span>05</span>
            <span className="text-white/40">/</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#F5F5F5] text-balance">
            Let&apos;s Build What Comes Next.
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] font-light">
            Share your project parameters and receive a structured architectural proposal or shoot date within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto liquid-glass rounded-2xl p-6 sm:p-9 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          {submittedRef ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                PROPOSAL TICKET: {submittedRef}
              </span>
              <h3 className="text-2xl font-normal text-white">Inquiry Successfully Dispatched</h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto font-light leading-relaxed">
                Thank you! Our technical producer will contact you via WhatsApp / Phone to schedule a discovery session.
              </p>
              <button
                type="button"
                onClick={() => setSubmittedRef(null)}
                className="mt-4 px-6 py-2 rounded-full liquid-glass text-xs font-medium text-white hover:text-gray-200 transition-colors cursor-pointer"
              >
                Submit Additional Brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
                    Your Name <span className="text-fuchsia-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sen"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
                    Phone / WhatsApp <span className="text-fuchsia-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
                    Primary Practice
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0710] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-white/40"
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
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
                  Project Scope / Shoot Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline your project timeline, tech requirements, or NCR shoot dates..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-white/40 resize-none"
                />
              </div>

              {errorMsg && (
                <div className="text-xs text-rose-400 bg-rose-950/30 border border-rose-500/30 px-3.5 py-2 rounded-xl">
                  {errorMsg}
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[11px] text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Available for Q2 / Q3 2026 Deployments</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-white text-black font-medium text-xs sm:text-sm hover:bg-gray-200 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
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
          )}
        </div>
      </section>
    </div>
  );
};
