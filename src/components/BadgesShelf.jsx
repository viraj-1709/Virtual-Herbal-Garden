import React from 'react';
import { useGamification } from '../context/GamificationContext';
import { useLanguage } from '../context/LanguageContext';
import { Award, Lock, CheckCircle2, ShieldCheck, Compass, BookMarked, Target, Trophy, Cpu } from 'lucide-react';

export default function BadgesShelf() {
  const { unlockedBadges, exploredPlants, quizHistory } = useGamification();
  const { t } = useLanguage();

  const allBadges = [
    {
      id: 'explorer_novice',
      title: 'Herbal Apprentice',
      description: 'Started the Virtual Herbal Garden exploration.',
      icon: Compass,
      unlocked: true,
      progress: '100%'
    },
    {
      id: 'plant_explorer_5',
      title: 'Plant Explorer',
      description: 'Explored 5 distinct medicinal species in detail.',
      icon: BookMarked,
      unlocked: unlockedBadges.includes('plant_explorer_5'),
      progress: `${Math.min(100, Math.round((exploredPlants.length / 5) * 100))}%`
    },
    {
      id: 'ayush_scholar_10',
      title: 'AYUSH Scholar',
      description: 'Explored 10 verified classical medicinal plants.',
      icon: ShieldCheck,
      unlocked: unlockedBadges.includes('ayush_scholar_10'),
      progress: `${Math.min(100, Math.round((exploredPlants.length / 10) * 100))}%`
    },
    {
      id: '3d_botanist',
      title: '3D Botanical Specialist',
      description: 'Inspected 3 interactive 3D plants and hotspots.',
      icon: Cpu,
      unlocked: unlockedBadges.includes('3d_botanist'),
      progress: unlockedBadges.includes('3d_botanist') ? '100%' : '50%'
    },
    {
      id: 'herbal_novice',
      title: 'Herbal Quizzer',
      description: 'Completed your first herbal knowledge quiz.',
      icon: Target,
      unlocked: unlockedBadges.includes('herbal_novice') || quizHistory.length > 0,
      progress: quizHistory.length > 0 ? '100%' : '0%'
    },
    {
      id: 'master_herbalist',
      title: 'Master Herbalist',
      description: 'Scored 80% or above in the Herbal Knowledge Quiz.',
      icon: Trophy,
      unlocked: unlockedBadges.includes('master_herbalist'),
      progress: unlockedBadges.includes('master_herbalist') ? '100%' : '0%'
    }
  ];

  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-500" />
          <span>{t.badges.title}</span>
        </h3>
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
          {allBadges.filter(b => b.unlocked).length} of {allBadges.length} Unlocked
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {allBadges.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.id}
              className={`p-3.5 rounded-2xl border transition-all ${
                b.unlocked
                  ? 'glass-panel border-amber-500/40 bg-amber-500/5 shadow-sm'
                  : 'glass-panel border-slate-300/40 dark:border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  b.unlocked ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                }`}>
                  {b.unlocked ? <Icon className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {b.title}
                    </h4>
                    {b.unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {b.description}
                  </p>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full overflow-hidden mt-1.5">
                    <div
                      className="bg-amber-500 h-full rounded-full"
                      style={{ width: b.progress }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
