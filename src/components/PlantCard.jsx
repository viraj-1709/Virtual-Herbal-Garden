import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { 
  Bookmark, 
  Box, 
  ArrowRight, 
  Sparkles, 
  Check
} from 'lucide-react';

export default function PlantCard({ plant, onSelect, onOpen3D }) {
  const { t, getPlantCommonName } = useLanguage();
  const { bookmarkedPlants, toggleBookmark } = useGamification();

  const isBookmarked = bookmarkedPlants.includes(plant.id);

  return (
    <div className="group rounded-3xl overflow-hidden glass-panel border border-emerald-500/20 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={plant.image}
            alt={plant.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            {plant.isPopular ? (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Popular
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-700/80 backdrop-blur-md text-white text-[10px] font-bold">
                {plant.family}
              </span>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(plant.id);
              }}
              title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
              className={`p-2 rounded-full backdrop-blur-md transition-transform hover:scale-110 active:scale-95 ${
                isBookmarked
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-black/40 text-white hover:bg-black/60'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
            <h3 className="font-heading font-extrabold text-lg leading-snug drop-shadow-sm">
              {getPlantCommonName(plant)}
            </h3>
            <p className="text-xs italic text-emerald-200">
              {plant.scientificName}
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap gap-1.5">
            {plant.ayushSystems.slice(0, 3).map((sys) => (
              <span
                key={sys}
                className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40"
              >
                {sys}
              </span>
            ))}
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {plant.shortDescription}
          </p>

          <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
            <span className="font-bold text-slate-700 dark:text-slate-200">{t.card.parts}:</span>
            <span className="line-clamp-1">{plant.partsUsed.join(', ')}</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 pt-0 flex items-center gap-2 border-t border-emerald-500/10">
        <button
          onClick={() => onSelect(plant)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 text-xs font-bold transition-all shadow-sm"
        >
          {t.card.viewDetails}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {plant.has3DModel && (
          <button
            onClick={() => onOpen3D(plant)}
            title={t.card.view3D}
            className="flex items-center gap-1 px-3 py-2.5 rounded-xl glass-panel border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-colors"
          >
            <Box className="w-4 h-4" />
            <span className="hidden sm:inline">3D</span>
          </button>
        )}
      </div>
    </div>
  );
}
