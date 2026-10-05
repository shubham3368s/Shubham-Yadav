import React from 'react';
import { TRUST_PILLARS, TESTIMONIALS, CERTIFICATIONS } from '../data/servicesData';
import { ShieldCheck, Lock, Award, Clock, CheckCircle2, Quote, Check } from 'lucide-react';

interface TrustGuaranteesProps {
  onOpenInquiry: (initialService?: string) => void;
}

export const TrustGuarantees: React.FC<TrustGuaranteesProps> = ({ onOpenInquiry }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ip-guarantee':
        return <Award className="w-5 h-5 text-sky-400" />;
      case 'nda-confidentiality':
        return <Lock className="w-5 h-5 text-sky-400" />;
      case 'timeline-sla':
        return <Clock className="w-5 h-5 text-sky-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="trust" className="scroll-mt-24 space-y-12">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-sky-500/15">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            <span>02</span>
            <span className="text-sky-500/40">/</span>
            <span>OUR GUARANTEES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#F8FAFC]">
            How We Work With Clients.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-md font-light leading-relaxed">
          Clear contracts, upfront milestone pricing, and direct communication with the engineers and editors doing the work.
        </p>
      </div>

      {/* 4 ENTERPRISE TRUST PILLARS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRUST_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className="studio-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-sky-400/25 flex items-center justify-center">
                  {getIcon(pillar.id)}
                </div>
                <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded bg-sky-950/60 border border-sky-500/30 text-sky-300 uppercase">
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-lg font-medium text-white mt-4 tracking-tight">
                {pillar.title}
              </h3>

              <p className="text-xs text-slate-300 font-light mt-2.5 leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="pt-4 mt-5 border-t border-white/[0.08] flex items-center gap-2 text-[11px] font-mono text-sky-400">
              <Check className="w-3.5 h-3.5" />
              <span>Contractually Enforced</span>
            </div>
          </div>
        ))}
      </div>

      {/* CERTIFICATIONS & COMPLIANCE BAR */}
      <div className="studio-card rounded-2xl p-5 bg-[#090e1c] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-xs text-sky-300 font-medium">
          <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
          <span>Industry Compliance & Verified Partnerships:</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-300 font-mono">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* VERIFIED CLIENT TESTIMONIALS */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
            CLIENT FEEDBACK
          </span>
          <span className="text-xs text-slate-400 font-mono">Recent Engagements</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="studio-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-sky-400/60 mb-3" />
                <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" title="Verified Client" />
                  </div>
                  <div className="text-[11px] text-slate-400 font-light">
                    {t.role} · {t.company}
                  </div>
                </div>

                <span className="text-[11px] font-mono text-sky-400 px-2.5 py-1 rounded bg-sky-950/40 border border-sky-500/25">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
