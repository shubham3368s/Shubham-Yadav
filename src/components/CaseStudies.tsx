import React from 'react';
import { CASE_STUDIES } from '../data/servicesData';
import { ArrowUpRight, TrendingUp, ShieldCheck } from 'lucide-react';

interface CaseStudiesProps {
  onOpenInquiry: (initialService?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenInquiry }) => {
  return (
    <section id="work" className="scroll-mt-24 space-y-10">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-sky-500/15">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            <span>04</span>
            <span className="text-sky-500/40">/</span>
            <span>RECENT WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#F8FAFC]">
            Recent Client Projects.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-md font-light leading-relaxed">
          Real results from software we built, commercial videos we filmed, and ad campaigns we managed.
        </p>
      </div>

      {/* CASE STUDIES CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {CASE_STUDIES.map((study, idx) => (
          <div
            key={idx}
            className="studio-card rounded-2xl p-7 flex flex-col justify-between group"
          >
            <div>
              {/* TOP: Client & Service */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="text-xs font-mono text-slate-300">{study.client}</span>
                <span className="text-[11px] font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-950/40 border border-sky-500/20">
                  {study.service}
                </span>
              </div>

              {/* QUANTIFIED OUTCOME */}
              <div className="mt-5 p-3 rounded-xl bg-sky-950/30 border border-sky-500/25 flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  {study.results}
                </span>
              </div>

              {/* TITLE & DESCRIPTION */}
              <h3 className="text-xl font-normal text-white mt-4 tracking-tight leading-snug">
                {study.title}
              </h3>
              <p className="text-xs text-slate-300 font-light mt-3 leading-relaxed">
                {study.description}
              </p>

              {/* TAGS */}
              <div className="mt-5 flex flex-wrap gap-2">
                {study.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-sky-500/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" /> Audited SLA
              </span>
              <button
                type="button"
                onClick={() => onOpenInquiry(study.service)}
                className="text-xs font-medium text-white hover:text-sky-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Request Technical Blueprint</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
