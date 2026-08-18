import React from 'react';
import { useGamification } from '../context/GamificationContext';
import { useLanguage } from '../context/LanguageContext';
import { plantsData } from '../data/plantsData';
import { 
  User, 
  Bookmark, 
  BookOpen, 
  Award, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function UserProfile({ onSelectPlant }) {
  const { bookmarkedPlants, notes } = useGamification();
  const { t, getPlantCommonName } = useLanguage();

  const savedBookmarks = plantsData.filter(p => bookmarkedPlants.includes(p.id));
  const noteKeys = Object.keys(notes).filter(k => notes[k]?.trim().length > 0);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      <div className="rounded-3xl p-5 sm:p-7 glass-panel border border-emerald-500/30 shadow-lg bg-gradient-to-r from-emerald-900/20 via-teal-900/10 to-transparent flex flex-col sm:flex-row items-center gap-5">
        <div className="relative">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-teal-700 p-1 shadow-lg shadow-emerald-600/30">
            <div className="w-full h-full rounded-[22px] bg-slate-900 flex items-center justify-center text-white font-heading font-extrabold text-2xl">
              VS
            </div>
          </div>
        </div>

        <div className="space-y-2.5 flex-1 text-center sm:text-left w-full">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                AYUSH Botanical Researcher
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold">
                Ayurveda Student
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Smart India Hackathon 2026 AYUSH Botanical Fellow
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs font-bold text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300">
              <Bookmark className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 fill-emerald-600" />
              {savedBookmarks.length} Saved Flora
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-500/20 text-teal-800 dark:text-teal-300">
              <BookOpen className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              {noteKeys.length} Field Notes
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-3xl glass-panel border border-emerald-500/20 shadow-md space-y-3.5">
          <div className="flex items-center justify-between border-b border-emerald-500/10 pb-2.5">
            <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{t.profile.bookmarksTitle} ({savedBookmarks.length})</span>
            </h3>
          </div>

          {savedBookmarks.length === 0 ? (
            <p className="text-xs text-slate-500 py-6 text-center">
              {t.profile.noBookmarks}
            </p>
          ) : (
            <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
              {savedBookmarks.map((plant) => (
                <div
                  key={plant.id}
                  onClick={() => onSelectPlant(plant)}
                  className="cursor-pointer p-2.5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-emerald-500 flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <img src={plant.image} alt={plant.name} className="w-10 h-10 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-slate-900 dark:text-white">
                        {getPlantCommonName(plant)}
                      </h4>
                      <p className="text-[10px] italic text-emerald-600 dark:text-emerald-400">
                        {plant.scientificName}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-5 rounded-3xl glass-panel border border-emerald-500/20 shadow-md space-y-3.5">
          <div className="flex items-center justify-between border-b border-emerald-500/10 pb-2.5">
            <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-600" />
              <span>{t.profile.notesTitle} ({noteKeys.length})</span>
            </h3>
          </div>

          {noteKeys.length === 0 ? (
            <p className="text-xs text-slate-500 py-6 text-center">
              {t.profile.noNotes}
            </p>
          ) : (
            <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
              {noteKeys.map((pId) => {
                const plant = plantsData.find(p => p.id === pId);
                return (
                  <div key={pId} className="p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                    <div className="font-heading font-bold text-xs text-emerald-700 dark:text-emerald-300">
                      {plant ? getPlantCommonName(plant) : pId}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                      "{notes[pId]}"
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
