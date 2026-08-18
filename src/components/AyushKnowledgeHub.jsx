import React from 'react';
import { ayushSystemsData, traditionalPreparations } from '../data/ayushData';
import { 
  BookOpen, 
  Layers, 
  Flame, 
  ShieldCheck,
  TreeDeciduous,
  Compass
} from 'lucide-react';

export default function AyushKnowledgeHub() {
  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
          <BookOpen className="w-3.5 h-3.5" />
          <span>AYUSH Educational Repository</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
          The Five Pillars of AYUSH Healthcare
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Traditional healthcare systems recognized by the Ministry of AYUSH, Government of India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ayushSystemsData.map((sys) => (
          <div
            key={sys.id}
            className="rounded-3xl p-5 sm:p-6 glass-panel border border-emerald-500/20 hover:border-emerald-500/60 shadow-lg space-y-4 transition-all"
          >
            <div>
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${sys.badgeClass}`}>
                {sys.name}
              </span>
              <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white mt-2">
                {sys.name}
              </h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {sys.slogan}
              </p>
            </div>

            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {sys.description}
            </p>

            <div className="space-y-1.5 pt-2 border-t border-emerald-500/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Core Theoretical Principles
              </span>
              <div className="space-y-1.5">
                {sys.keyConcepts.map((c, idx) => (
                  <div key={idx} className="p-2.5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 text-xs space-y-0.5">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300">
                      • {c.title}:
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px]">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5 pt-1">
              <span className="font-bold text-slate-700 dark:text-slate-200">Treatises:</span>
              <span className="italic">{sys.classicalTexts.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-4">
        <div className="text-center space-y-1">
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
            Classical Herbal Formulation Methods (Kalpana)
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            How traditional herbs are processed, extracted, and administered for clinical effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {traditionalPreparations.map((prep, i) => (
            <div key={i} className="p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1.5 shadow-sm">
              <div className="font-heading font-bold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>{prep.name}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {prep.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl p-5 sm:p-7 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white shadow-xl space-y-2.5">
        <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <TreeDeciduous className="w-4 h-4" />
          <span>Biodiversity Conservation & GAP Compliance</span>
        </div>
        <h3 className="font-heading font-extrabold text-lg sm:text-xl">
          Preserving India's Threatened Botanical Wealth
        </h3>
        <p className="text-xs text-emerald-100 leading-relaxed max-w-3xl">
          Over 90% of medicinal plants in trade are harvested from natural forest habitats. The Virtual Herbal Garden supports sustainable GAP (Good Agricultural Practices), ex-situ botanical gene banks, and public digital education to protect vulnerable Ayurvedic flora.
        </p>
      </div>
    </div>
  );
}
