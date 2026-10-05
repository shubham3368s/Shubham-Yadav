import React from 'react';
import { Camera, Code2, Cpu, Video, CheckCircle2 } from 'lucide-react';

export const StudioManifesto: React.FC = () => {
  return (
    <section className="space-y-12">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            <span>ABOUT US</span>
            <span className="text-white/30">/</span>
            <span>STUDIO & PRODUCTION ROSTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#F8FAFC]">
            Why We Started Xenforge.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-md font-light leading-relaxed">
          Most agencies either only write code or only shoot video. We built a studio in Gurugram that handles the entire pipeline under one roof.
        </p>
      </div>

      {/* FOUNDER MANIFESTO PANEL */}
      <div className="studio-card rounded-2xl p-8 sm:p-10 space-y-6">
        <div className="space-y-4 max-w-3xl text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          <p>
            When companies launch a new product, they usually have to hire three separate vendors: a software agency to write the code, a video production house to film the commercial, and a performance marketing team to run the ads.
          </p>
          <p>
            The software agency builds an app that doesn&apos;t match the marketing. The video agency delivers pretty footage with no direct call-to-action. The ad agency blames the website for poor conversion rates. Everyone points fingers, and the client pays three different retainers.
          </p>
          <p className="text-white font-normal">
            We built Xenforge as a single integrated studio based in DLF Cyber City, Gurugram. Our developers, video editors, and media buyers collaborate on the same projects daily. When we engineer your web or mobile app, we also script and film the 4K video, automate your WhatsApp lead routing, and test the Meta ad creatives.
          </p>
        </div>

        {/* THREE CORE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-mono">
              <Code2 className="w-4 h-4" />
              <span>Full-Stack Engineering</span>
            </div>
            <h4 className="text-white font-medium text-sm">No Templates, Pure Code</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              We write clean React, Next.js, and TypeScript. Fast page loads, mobile responsiveness, and zero bloated page-builder plugins.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-mono">
              <Video className="w-4 h-4" />
              <span>Real Film Gear</span>
            </div>
            <h4 className="text-white font-medium text-sm">Sony FX Cameras & DaVinci</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              We own and operate our camera, lighting, and sound gear. We shoot on location in NCR and color grade in DaVinci Resolve Studio.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-mono">
              <Cpu className="w-4 h-4" />
              <span>AI Lead Operations</span>
            </div>
            <h4 className="text-white font-medium text-sm">Automated Pipeline Handover</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              We wire up WhatsApp bots and CRM triggers so inbound inquiries get qualified and scheduled without manual data entry.
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCTION HARDWARE & TECH ROSTER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* HARDWARE ROSTER */}
        <div className="studio-card rounded-2xl p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
              <Camera className="w-4 h-4" />
              <span>IN-HOUSE CAMERA & LIGHTING GEAR</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Gurugram Studio</span>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span><strong>Cameras:</strong> Sony FX6 & Sony FX3 Full-Frame Cinema Rigs (4K 120p, 10-bit 4:2:2)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span><strong>Lenses:</strong> Sony G-Master 24-70mm f/2.8 II, 50mm f/1.2, 35mm f/1.4</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span><strong>Stabilization:</strong> DJI RS3 Pro with LiDAR rangefinder & wireless video transmitters</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span><strong>Lighting:</strong> Aputure 600d Pro daylight & Aputure 300x bi-color with softbox diffusers</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span><strong>Audio:</strong> Sennheiser AVX digital wireless lavaliers & MKH-416 boom microphones</span>
            </li>
          </ul>
        </div>

        {/* SOFTWARE & CODE STACK */}
        <div className="studio-card rounded-2xl p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
              <Code2 className="w-4 h-4" />
              <span>SOFTWARE & POST-PRODUCTION STACK</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Production Tested</span>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span><strong>Color & Post:</strong> DaVinci Resolve Studio on Apple M-Series workstations with calibrated monitors</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span><strong>Web Core:</strong> React 19, Next.js 15, TypeScript, Tailwind CSS, Framer Motion</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span><strong>Mobile:</strong> Flutter & React Native for simultaneous iOS & Android deployment</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span><strong>Backend & AI:</strong> Node.js, Python, PostgreSQL, Redis, WhatsApp Business API</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span><strong>Hosting & Edge:</strong> Cloudflare edge caching, Vercel, AWS infrastructure</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
