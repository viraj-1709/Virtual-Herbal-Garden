import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { plantsData } from '../data/plantsData';
import { 
  Bot, 
  Send, 
  Lightbulb, 
  Sparkles, 
  ArrowRight, 
  Box, 
  Check, 
  Leaf,
  Activity
} from 'lucide-react';

export default function AiHerbalAssistant({ onSelectPlant, onOpen3D }) {
  const { t, getPlantCommonName } = useLanguage();
  const [query, setQuery] = useState('Show me plants traditionally associated with digestive health.');
  const [activeCategory, setActiveCategory] = useState('Digestive Health');
  const [isSearching, setIsSearching] = useState(false);

  const ayushBadges = [
    { name: 'Ayurveda', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' },
    { name: 'Yoga & Naturopathy', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' },
    { name: 'Unani', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' },
    { name: 'Siddha', color: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300' },
    { name: 'Homeopathy', color: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300' }
  ];

  const getFilteredPlants = () => {
    const q = query.toLowerCase();
    if (q.includes('digest') || q.includes('gut') || q.includes('bloat') || activeCategory === 'Digestive Health') {
      return plantsData.filter(p => p.healthCategories.includes('Digestive Health')).slice(0, 3);
    }
    if (q.includes('immunit') || q.includes('rejuvenat') || activeCategory === 'Immunity') {
      return plantsData.filter(p => p.healthCategories.includes('Immunity')).slice(0, 3);
    }
    if (q.includes('skin') || q.includes('acne') || q.includes('glow') || activeCategory === 'Skin Health') {
      return plantsData.filter(p => p.healthCategories.includes('Skin Health')).slice(0, 3);
    }
    if (q.includes('stress') || q.includes('sleep') || q.includes('mind') || activeCategory === 'Mental Wellbeing') {
      return plantsData.filter(p => p.healthCategories.includes('Mental Wellbeing')).slice(0, 3);
    }
    if (q.includes('cough') || q.includes('cold') || q.includes('respirat') || activeCategory === 'Respiratory Health') {
      return plantsData.filter(p => p.healthCategories.includes('Respiratory Health')).slice(0, 3);
    }
    return plantsData.slice(0, 3);
  };

  const currentPlants = getFilteredPlants();

  const handleAsk = (e) => {
    e?.preventDefault();
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 200);
  };

  const handleQuickSuggestion = (item) => {
    setActiveCategory(item);
    setQuery(`Show me medicinal plants traditionally associated with ${item.toLowerCase()}.`);
  };

  return (
    <div className="space-y-6">
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 p-6 md:p-8 shadow-xl">
        <div className="space-y-5">
          
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider">
                AI Knowledge Assistant
              </span>
              <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                AYUSH Corpus Verified
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-slate-900 dark:text-white">
              {t.assistant.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {t.assistant.subheading}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {ayushBadges.map((badge) => (
              <span
                key={badge.name}
                className={`px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20 shadow-sm ${badge.color}`}
              >
                {badge.name}
              </span>
            ))}
          </div>

          <form onSubmit={handleAsk} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md flex-shrink-0">
              <Bot className="w-6 h-6" />
            </div>

            <div className="flex-1 w-full flex items-center rounded-2xl glass-panel border border-emerald-500/40 shadow-inner px-4 py-2.5 focus-within:border-emerald-500 transition-all">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.assistant.placeholder}
                className="w-full bg-transparent text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all ml-2"
              >
                <Send className="w-3.5 h-3.5" />
                {t.assistant.btnAsk}
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              Suggested topics:
            </span>
            {t.assistant.quickSuggestions.map((sug) => (
              <button
                key={sug}
                type="button"
                onClick={() => handleQuickSuggestion(sug)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === sug
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                }`}
              >
                {sug}
              </button>
            ))}
          </div>

        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2.5 p-3.5 rounded-2xl glass-panel border border-emerald-500/20 text-slate-800 dark:text-slate-200">
          <Activity className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <p className="text-xs font-medium">
            {t.assistant.recommendationPrefix} <span className="font-bold text-emerald-700 dark:text-emerald-300">"{activeCategory}"</span> in classical AYUSH medical texts:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {currentPlants.map((plant) => (
            <div
              key={plant.id}
              className="group rounded-3xl overflow-hidden glass-panel border border-emerald-500/20 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  
                  {plant.isPopular && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      Popular
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-heading font-extrabold text-base drop-shadow-sm">
                      {getPlantCommonName(plant)}
                    </h3>
                    <p className="text-[11px] italic text-emerald-200">
                      {plant.scientificName}
                    </p>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {plant.ayushSystems.slice(0, 2).map((sys) => (
                      <span
                        key={sys}
                        className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {plant.medicinalUses[0]}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 flex items-center gap-2 border-t border-emerald-500/10">
                <button
                  onClick={() => onSelectPlant(plant)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {plant.has3DModel && (
                  <button
                    onClick={() => onOpen3D(plant)}
                    title="View 3D Model"
                    className="p-2.5 rounded-xl glass-panel border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <Box className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl glass-panel border border-amber-500/30 p-4 shadow-md flex items-center gap-3.5 bg-amber-50/20 dark:bg-amber-950/20">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <h4 className="font-heading font-bold text-xs text-amber-900 dark:text-amber-300">
              {t.assistant.didYouKnow}
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {t.assistant.fact}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
