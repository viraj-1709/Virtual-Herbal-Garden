import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sprout, ShieldCheck } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-emerald-500/20 glass-panel mt-16 pt-10 pb-6 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
                  Virtual Herbal Garden
                </span>
                <p className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">
                  Smart India Hackathon 2026 • PSS03
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
              An interactive 3D digital botanical platform promoting public education, biodiversity preservation, and research access across India's traditional AYUSH healthcare heritage.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
              Platform Modules
            </div>
            <ul className="space-y-1 font-medium">
              <li>
                <button onClick={() => setActiveTab('explore')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Virtual Plant Explorer
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('3d-garden')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Interactive 3D Garden
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('ayush')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  AYUSH Systems Hub
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tours')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Guided Virtual Tours
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('quiz')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Knowledge Quiz
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
              National Initiative
            </div>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Developed for the Smart India Hackathon 2026 aligned with Ministry of AYUSH botanical preservation standards.
            </p>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-800 dark:text-emerald-300 font-semibold">
              Inspiring a Healthier, Greener, and Self-Reliant India.
            </div>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-emerald-950/20 dark:bg-emerald-950/60 border border-emerald-500/20 flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <p className="text-[10px] sm:text-[11px] leading-relaxed">
            {t.disclaimer}
          </p>
        </div>

        <div className="text-center text-[10px] text-slate-400 pt-1 border-t border-emerald-500/10">
          © 2026 Virtual Herbal Garden Prototype • Smart India Hackathon 2026. Built with React & Three.js.
        </div>
      </div>
    </footer>
  );
}
