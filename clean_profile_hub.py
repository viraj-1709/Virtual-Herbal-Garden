profile_code = """import React from 'react';
import { useGamification } from '../context/GamificationContext';
import { useLanguage } from '../context/LanguageContext';
import { plantsData } from '../data/plantsData';
import BadgesShelf from './BadgesShelf';
import { 
  User, 
  Sparkles, 
  Bookmark, 
  BookOpen, 
  Award, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function UserProfile({ onSelectPlant }) {
  const { xp, level, bookmarkedPlants, notes } = useGamification();
  const { t, getPlantCommonName } = useLanguage();

  const savedBookmarks = plantsData.filter(p => bookmarkedPlants.includes(p.id));
  const noteKeys = Object.keys(notes).filter(k => notes[k]?.trim().length > 0);

  const nextLevelXP = level * 200;
  const currentLevelProgress = Math.round(((xp % 200) / 200) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      <div className="rounded-3xl p-5 sm:p-7 glass-panel border border-emerald-500/30 shadow-lg bg-gradient-to-r from-emerald-900/20 via-teal-900/10 to-transparent flex flex-col sm:flex-row items-center gap-5">
        <div className="relative">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-500 p-1 shadow-lg shadow-emerald-600/30">
            <div className="w-full h-full rounded-[22px] bg-slate-900 flex items-center justify-center text-white font-heading font-extrabold text-2xl">
              VS
            </div>
          </div>
          <span className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-amber-500 text-white font-extrabold text-[10px] shadow-sm">
            Lvl {level}
          </span>
        </div>

        <div className="space-y-2.5 flex-1 text-center sm:text-left w-full">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                Herbal Explorer
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold">
                Ayurveda Student
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Smart India Hackathon 2026 AYUSH Botanical Fellow
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                {xp} Total XP
              </span>
              <span>Next Level: {nextLevelXP} XP ({currentLevelProgress}%)</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 h-full transition-all duration-300"
                style={{ width: `${currentLevelProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <BadgesShelf />

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
"""

hub_code = """import React from 'react';
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
"""

with open('src/components/UserProfile.jsx', 'w', encoding='utf-8') as f:
    f.write(profile_code)
with open('src/components/AyushKnowledgeHub.jsx', 'w', encoding='utf-8') as f:
    f.write(hub_code)

print("UserProfile.jsx and AyushKnowledgeHub.jsx cleaned.")
