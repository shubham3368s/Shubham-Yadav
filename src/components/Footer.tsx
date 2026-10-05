import React from 'react';
import { ArrowUp, ShieldCheck, Lock, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-sky-500/15 bg-[#030712]/95 pt-16 pb-12 select-none">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* BRAND & TRUST GUARANTEE COLUMN */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xl font-semibold tracking-[0.28em] text-white uppercase block">
              XENFORGE
            </span>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm font-light leading-relaxed">
              We are a digital agency based in Gurugram, Delhi NCR. We build web and mobile software, automate lead workflows with AI, and shoot and edit commercial video.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-sky-400">
                <Lock className="w-3.5 h-3.5" /> 100% IP Transfer
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <ShieldCheck className="w-3.5 h-3.5" /> Mutual NDA Signed
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <Award className="w-3.5 h-3.5" /> Fixed Milestone Quotes
              </span>
            </div>

            <div className="text-xs text-slate-400 font-mono pt-1">
              Studio: DLF Cyber City & Golf Course Road, Gurugram (Delhi NCR)
            </div>
          </div>

          {/* CAPABILITIES LINKS */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold block">
              Services
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01. AI Workflows & Bots
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  02. React & Next.js Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03. iOS & Android Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  04. Technical SEO
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  05. Video Editing & Grading
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  06. Meta Ads & Paid Growth
                </a>
              </li>
            </ul>
          </div>

          {/* DIRECT VERIFIED CONTACT */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold block">
              Enterprise Contact
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <span className="text-white block font-medium">Direct Project Office</span>
                <span>inquire@xenforge.studio</span>
              </li>
              <li>
                <span className="text-white block font-medium">WhatsApp Business Line</span>
                <span>+91 98765 43210</span>
              </li>
              <li>
                <span className="text-white block font-medium">Studio Production Hub</span>
                <span>Gurugram, Delhi & Noida</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} XENFORGE Creative Technologies. All rights reserved. Registered in Gurugram, India.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-sky-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
