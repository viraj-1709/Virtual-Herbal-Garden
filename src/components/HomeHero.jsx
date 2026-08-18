import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Compass, 
  Box, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Leaf
} from 'lucide-react';

export default function HomeHero({ setActiveTab }) {
  const { t } = useLanguage();

  const ayushPills = [
    { name: 'Ayurveda', color: 'border-emerald-500/40 text-emerald-800 dark:text-emerald-300 bg-emerald-500/10' },
    { name: 'Yoga & Naturopathy', color: 'border-amber-500/40 text-amber-800 dark:text-amber-300 bg-amber-500/10' },
    { name: 'Unani', color: 'border-purple-500/40 text-purple-800 dark:text-purple-300 bg-purple-500/10' },
    { name: 'Siddha', color: 'border-orange-500/40 text-orange-800 dark:text-orange-300 bg-orange-500/10' },
    { name: 'Homeopathy', color: 'border-sky-500/40 text-sky-800 dark:text-sky-300 bg-sky-500/10' },
  ];

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/40 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
            {t.hero.badge}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-tight">
          {t.hero.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {ayushPills.map((pill) => (
            <span
              key={pill.name}
              className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md transition-transform hover:scale-105 ${pill.color}`}
            >
              {pill.name}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <button
            onClick={() => setActiveTab('explore')}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 active:scale-95 transition-all"
          >
            <Compass className="w-4 h-4" />
            {t.hero.btnExplore}
          </button>

          <button
            onClick={() => setActiveTab('3d-garden')}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl glass-panel border border-emerald-500/40 text-emerald-900 dark:text-emerald-200 font-bold text-xs sm:text-sm hover:border-emerald-500 hover:scale-105 active:scale-95 transition-all shadow-sm"
          >
            <Box className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            {t.hero.btn3D}
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-panel border border-amber-500/40 text-amber-900 dark:text-amber-300 font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-sm"
          >
            <Award className="w-4 h-4 text-amber-600" />
            {t.hero.btnQuiz}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-emerald-500/20">
          <div className="glass-panel p-4 rounded-2xl border border-emerald-500/20 text-center space-y-1">
            <div className="w-9 h-9 mx-auto rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Leaf className="w-4 h-4" />
            </div>
            <div className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">12 Species</div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{t.hero.statSpecies}</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-emerald-500/20 text-center space-y-1">
            <div className="w-9 h-9 mx-auto rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Layers className="w-4 h-4" />
            </div>
            <div className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">5 Systems</div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{t.hero.statSystems}</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-emerald-500/20 text-center space-y-1">
            <div className="w-9 h-9 mx-auto rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">Classical</div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{t.hero.statAccuracy}</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-emerald-500/20 text-center space-y-1">
            <div className="w-9 h-9 mx-auto rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Box className="w-4 h-4" />
            </div>
            <div className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">3D Models</div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{t.hero.statInteractive}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
