import os

hero_code = """import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Compass, 
  Box, 
  Award, 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Flame,
  ArrowRight,
  Leaf
} from 'lucide-react';

export default function HomeHero({ setActiveTab, onSelectPlant }) {
  const { t } = useLanguage();

  const ayushPills = [
    { name: 'Ayurveda', color: 'border-emerald-500/40 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10' },
    { name: 'Yoga & Naturopathy', color: 'border-amber-500/40 text-amber-700 dark:text-amber-300 bg-amber-500/10' },
    { name: 'Unani', color: 'border-purple-500/40 text-purple-700 dark:text-purple-300 bg-purple-500/10' },
    { name: 'Siddha', color: 'border-orange-500/40 text-orange-700 dark:text-orange-300 bg-orange-500/10' },
    { name: 'Homeopathy', color: 'border-sky-500/40 text-sky-700 dark:text-sky-300 bg-sky-500/10' },
  ];

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background Natural Ambient Blur Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-teal-400/20 dark:bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Hackathon Innovation Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/40 shadow-sm animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
              {t.hero.badge}
            </span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* AYUSH Systems Quick Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {ayushPills.map((pill) => (
              <span
                key={pill.name}
                className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md transition-transform hover:scale-105 ${pill.color}`}
              >
                🌿 {pill.name}
              </span>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('explore')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Compass className="w-5 h-5" />
              {t.hero.btnExplore}
            </button>

            <button
              onClick={() => setActiveTab('3d-garden')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-panel border border-emerald-500/40 text-emerald-900 dark:text-emerald-200 font-bold text-sm hover:border-emerald-500 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <Box className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              {t.hero.btn3D}
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl glass-panel border border-amber-500/40 text-amber-900 dark:text-amber-300 font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <Award className="w-5 h-5 text-amber-600" />
              {t.hero.btnQuiz}
            </button>
          </div>

        </div>

        {/* Feature Grid Quick Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-emerald-500/20">
          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 text-center space-y-1 hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">12+</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.hero.statSpecies}</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 text-center space-y-1 hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Layers className="w-5 h-5" />
            </div>
            <div className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">5 Pillars</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.hero.statSystems}</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 text-center space-y-1 hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">100%</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.hero.statAccuracy}</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 text-center space-y-1 hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Box className="w-5 h-5" />
            </div>
            <div className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">360° 3D</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.hero.statInteractive}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
"""

assistant_code = """import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { plantsData } from '../data/plantsData';
import { 
  Bot, 
  Send, 
  Lightbulb, 
  Sparkles, 
  ArrowRight, 
  Box, 
  CheckCircle2, 
  Heart,
  Leaf
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

  // Determine filtered matching plants
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
    setTimeout(() => setIsSearching(false), 300);
  };

  const handleQuickSuggestion = (item) => {
    setActiveCategory(item);
    setQuery(`Show me medicinal plants traditionally associated with ${item.toLowerCase()}.`);
  };

  return (
    <div className="space-y-8">
      {/* Top Main Hero Assistant Banner (Direct Match & Upgrade to Reference Image) */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 p-6 md:p-10 shadow-2xl">
        {/* Scenic Temple / Garden Subtle Background Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-amber-500/5 to-teal-900/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          
          {/* Header Title & Subtitle */}
          <div className="max-w-3xl space-y-2">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white flex items-center gap-3">
              <span>{t.assistant.heading}</span>
              <span className="text-emerald-500 animate-pulse">🌿</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {t.assistant.subheading}
            </p>
          </div>

          {/* AYUSH System Selector Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {ayushBadges.map((badge) => (
              <span
                key={badge.name}
                className={`px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20 shadow-sm flex items-center gap-1.5 ${badge.color}`}
              >
                <span>🍃</span>
                {badge.name}
              </span>
            ))}
          </div>

          {/* Interactive AI Chat Prompt Bar with Robot Avatar */}
          <form onSubmit={handleAsk} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            
            {/* VedaBot Avatar */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg flex-shrink-0 flex items-center justify-center">
              <div className="w-full h-full bg-white dark:bg-emerald-950 rounded-2xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-emerald-600 dark:text-emerald-400 animate-bounce" />
              </div>
            </div>

            {/* Input Field & Submit Button */}
            <div className="flex-1 w-full flex items-center rounded-2xl glass-panel border border-emerald-500/40 shadow-inner px-4 py-2.5 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.assistant.placeholder}
                className="w-full bg-transparent text-sm sm:text-base text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-xs sm:text-sm shadow-md hover:opacity-90 active:scale-95 transition-all ml-2"
              >
                <Send className="w-4 h-4" />
                {t.assistant.btnAsk}
              </button>
            </div>
          </form>

          {/* Quick Clickable Suggestions */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Popular inquiries:
            </span>
            {t.assistant.quickSuggestions.map((sug) => (
              <button
                key={sug}
                type="button"
                onClick={() => handleQuickSuggestion(sug)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
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

      {/* AI Results Section with Verified Knowledge Plants & Did You Know Banner */}
      <div className="space-y-6">
        
        {/* Assistant Response Status */}
        <div className="flex items-center gap-3 p-4 rounded-2xl glass-panel border border-emerald-500/20 text-slate-800 dark:text-slate-200">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
            <Leaf className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm font-medium">
            {t.assistant.recommendationPrefix} <span className="font-bold text-emerald-700 dark:text-emerald-300">"{activeCategory}"</span> in AYUSH systems based on classical texts and verified clinical literature.
          </p>
        </div>

        {/* 3 Result Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentPlants.map((plant) => (
            <div
              key={plant.id}
              className="group rounded-2xl overflow-hidden glass-panel border border-emerald-500/20 hover:border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Badges */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {plant.isPopular && (
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    Popular
                  </span>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-heading font-extrabold text-lg drop-shadow-sm">
                    {getPlantCommonName(plant)}
                  </h3>
                  <p className="text-xs italic text-emerald-200">
                    {plant.scientificName}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  
                  {/* AYUSH System tag */}
                  <div className="flex flex-wrap gap-1.5">
                    {plant.ayushSystems.slice(0, 2).map((sys) => (
                      <span
                        key={sys}
                        className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40"
                      >
                        🌿 {sys}
                      </span>
                    ))}
                  </div>

                  {/* Medicinal use preview */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {plant.medicinalUses[0]}
                  </p>

                  {/* Parts used pill */}
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <span className="font-bold text-slate-700 dark:text-slate-200">Parts Used:</span>
                    <span>{plant.partsUsed.join(', ')}</span>
                  </div>
                </div>

                {/* Actions: View Details & 3D Model */}
                <div className="pt-2 flex items-center gap-2 border-t border-emerald-500/10">
                  <button
                    onClick={() => onSelectPlant(plant)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {plant.has3DModel && (
                    <button
                      onClick={() => onOpen3D(plant)}
                      title="Open 3D Model"
                      className="p-2.5 rounded-xl glass-panel border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <Box className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* "Did You Know?" Fact Card Banner (Exact match to reference image) */}
        <div className="rounded-2xl glass-panel border border-amber-500/30 p-5 shadow-lg flex items-center gap-4 bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-transparent">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
            <Lightbulb className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-0.5 flex-1">
            <h4 className="font-heading font-bold text-sm text-amber-900 dark:text-amber-300">
              {t.assistant.didYouKnow}
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {t.assistant.fact}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
"""

with open('src/components/HomeHero.jsx', 'w', encoding='utf-8') as f:
    f.write(hero_code)
with open('src/components/AiHerbalAssistant.jsx', 'w', encoding='utf-8') as f:
    f.write(assistant_code)

print("HomeHero.jsx and AiHerbalAssistant.jsx generated.")
