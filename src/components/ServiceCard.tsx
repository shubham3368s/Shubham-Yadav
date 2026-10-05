import React from 'react';
import { ServiceItem } from '../types/services';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
  onAction: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelect,
  onAction,
}) => {
  return (
    <div className="studio-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group">
      <div>
        {/* TOP ROW: Number & Category */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <span className="font-mono text-xs text-sky-400 font-medium">
            {service.number} · {service.category}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {service.metrics[0].value} {service.metrics[0].label}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl sm:text-2xl font-normal text-white mt-4 tracking-tight">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-xs sm:text-sm text-slate-300 font-light mt-2.5 leading-relaxed">
          {service.description}
        </p>

        {/* KEY DELIVERABLES */}
        <div className="mt-5 space-y-2">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onAction(service)}
          className="text-xs font-medium text-white hover:text-sky-300 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <span>{service.primaryCta}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
        </button>

        <button
          type="button"
          onClick={() => onSelect(service)}
          className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
        >
          Focus in Hero
        </button>
      </div>
    </div>
  );
};
