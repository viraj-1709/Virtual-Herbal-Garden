import os

card_code = """import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { 
  Bookmark, 
  Box, 
  ArrowRight, 
  Sparkles, 
  Check, 
  MapPin,
  Layers
} from 'lucide-react';

export default function PlantCard({ plant, onSelect, onOpen3D }) {
  const { t, getPlantCommonName } = useLanguage();
  const { bookmarkedPlants, toggleBookmark } = useGamification();

  const isBookmarked = bookmarkedPlants.includes(plant.id);

  return (
    <div className="group rounded-3xl overflow-hidden glass-panel border border-emerald-500/20 hover:border-emerald-500 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Card Image Header */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={plant.image}
            alt={plant.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Top Badges: Popular & Bookmark */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            {plant.isPopular ? (
              <span className="px-2.5 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {t.card.popular}
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-emerald-700/80 backdrop-blur-md text-white text-[10px] font-bold">
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
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
            <h3 className="font-heading font-extrabold text-xl leading-snug drop-shadow-sm">
              {getPlantCommonName(plant)}
            </h3>
            <p className="text-xs italic text-emerald-200">
              {plant.scientificName}
            </p>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5 space-y-4">
          
          {/* AYUSH System Badges */}
          <div className="flex flex-wrap gap-1.5">
            {plant.ayushSystems.slice(0, 3).map((sys) => (
              <span
                key={sys}
                className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40"
              >
                🌿 {sys}
              </span>
            ))}
          </div>

          {/* Short Description */}
          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {plant.shortDescription}
          </p>

          {/* Key Benefit Highlights */}
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-bold text-slate-700 dark:text-slate-200">
              {t.card.benefits}:
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
              • {plant.medicinalUses[0]}
            </p>
          </div>

          {/* Parts Used */}
          <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <span className="font-bold text-slate-700 dark:text-slate-200">{t.card.parts}:</span>
            <span>{plant.partsUsed.join(', ')}</span>
          </div>

        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 flex items-center gap-2">
        <button
          onClick={() => onSelect(plant)}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
        >
          {t.card.viewDetails}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {plant.has3DModel && (
          <button
            onClick={() => onOpen3D(plant)}
            title={t.card.view3D}
            className="flex items-center gap-1.5 px-3.5 py-3 rounded-2xl glass-panel border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-colors shadow-sm"
          >
            <Box className="w-4 h-4" />
            <span className="hidden sm:inline">3D</span>
          </button>
        )}
      </div>

    </div>
  );
}
"""

explorer_code = """import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { plantsData } from '../data/plantsData';
import PlantCard from './PlantCard';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Box, 
  RotateCcw,
  Sparkles,
  SlidersHorizontal,
  X
} from 'lucide-react';

export default function PlantExplorer({ onSelectPlant, onOpen3D }) {
  const { t, getPlantCommonName } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSystem, setSelectedSystem] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPart, setSelectedPart] = useState('all');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'list'

  const ayushOptions = [
    'Ayurveda', 
    'Yoga & Naturopathy', 
    'Unani', 
    'Siddha', 
    'Homeopathy'
  ];

  const categoryOptions = [
    'Immunity',
    'Digestive Health',
    'Respiratory Health',
    'Skin Health',
    'Mental Wellbeing',
    'General Wellness'
  ];

  const partsOptions = [
    'Leaves',
    'Roots',
    'Bark',
    'Seeds',
    'Flowers',
    'Inner Leaf Gel (Pulp)'
  ];

  // Filtering Logic
  const filteredPlants = useMemo(() => {
    return plantsData.filter((plant) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        plant.name.toLowerCase().includes(q) ||
        plant.scientificName.toLowerCase().includes(q) ||
        plant.sanskritName.toLowerCase().includes(q) ||
        plant.shortDescription.toLowerCase().includes(q) ||
        getPlantCommonName(plant).toLowerCase().includes(q) ||
        plant.medicinalUses.some(u => u.toLowerCase().includes(q));

      // AYUSH System
      const matchSystem =
        selectedSystem === 'all' || plant.ayushSystems.includes(selectedSystem);

      // Health Category
      const matchCategory =
        selectedCategory === 'all' || plant.healthCategories.includes(selectedCategory);

      // Part Used
      const matchPart =
        selectedPart === 'all' || plant.partsUsed.some(p => p.toLowerCase().includes(selectedPart.toLowerCase()));

      return matchSearch && matchSystem && matchCategory && matchPart;
    });
  }, [searchQuery, selectedSystem, selectedCategory, selectedPart, getPlantCommonName]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSystem('all');
    setSelectedCategory('all');
    setSelectedPart('all');
  };

  const activeFilterCount =
    (selectedSystem !== 'all' ? 1 : 0) +
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedPart !== 'all' ? 1 : 0) +
    (searchQuery ? 1 : 0);

  return (
    <div className="space-y-8">
      
      {/* Top Search & Filter Bar */}
      <div className="space-y-4">
        
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Main Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.explorer.searchPlaceholder}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl glass-panel border border-emerald-500/30 text-sm md:text-base text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* View Switcher Controls */}
          <div className="flex items-center gap-2 self-end lg:self-auto">
            <div className="glass-panel p-1 rounded-2xl border border-emerald-500/30 flex items-center shadow-sm">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'cards'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>{t.explorer.viewCards}</span>
              </button>

              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'list'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600'
                }`}
              >
                <List className="w-4 h-4" />
                <span>{t.explorer.viewList}</span>
              </button>
            </div>

            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl glass-panel border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.explorer.resetFilters}</span>
              </button>
            )}
          </div>

        </div>

        {/* Dropdown Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* AYUSH System Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t.explorer.filterBySystem}
            </label>
            <select
              value={selectedSystem}
              onChange={(e) => setSelectedSystem(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-panel border border-emerald-500/30 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">{t.explorer.allSystems}</option>
              {ayushOptions.map(sys => (
                <option key={sys} value={sys}>🌿 {sys}</option>
              ))}
            </select>
          </div>

          {/* Health Category Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t.explorer.filterByCategory}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-panel border border-emerald-500/30 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">{t.explorer.allCategories}</option>
              {categoryOptions.map(cat => (
                <option key={cat} value={cat}>✨ {cat}</option>
              ))}
            </select>
          </div>

          {/* Plant Part Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t.explorer.filterByPart}
            </label>
            <select
              value={selectedPart}
              onChange={(e) => setSelectedPart(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl glass-panel border border-emerald-500/30 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">All Parts Used</option>
              {partsOptions.map(part => (
                <option key={part} value={part}>🌱 {part}</option>
              ))}
            </select>
          </div>

        </div>

      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 border-b border-emerald-500/10 pb-3">
        <div>
          {t.explorer.showing} <span className="font-bold text-emerald-600 dark:text-emerald-400">{filteredPlants.length}</span> {t.explorer.of} {plantsData.length} {t.explorer.plants}
        </div>
      </div>

      {/* Grid or List Display */}
      {filteredPlants.length === 0 ? (
        <div className="text-center py-16 space-y-4 glass-panel rounded-3xl border border-dashed border-emerald-500/30">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
            <Search className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-lg text-slate-800 dark:text-slate-200">
              {t.explorer.noResults}
            </h4>
            <p className="text-xs text-slate-500">
              Try adjusting your search terms or clearing your category filters.
            </p>
          </div>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-md"
          >
            {t.explorer.resetFilters}
          </button>
        </div>
      ) : viewMode === 'cards' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onSelect={onSelectPlant}
              onOpen3D={onOpen3D}
            />
          ))}
        </div>
      ) : (
        /* Compact List View */
        <div className="space-y-3">
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              onClick={() => onSelectPlant(plant)}
              className="cursor-pointer p-4 rounded-2xl glass-panel border border-emerald-500/20 hover:border-emerald-500 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                    {getPlantCommonName(plant)}
                  </h4>
                  <p className="text-xs italic text-emerald-600 dark:text-emerald-400">
                    {plant.scientificName}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {plant.medicinalUses[0]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <div className="hidden md:flex flex-wrap gap-1">
                  {plant.ayushSystems.slice(0, 2).map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPlant(plant);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 shadow-sm"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
"""

with open('src/components/PlantCard.jsx', 'w', encoding='utf-8') as f:
    f.write(card_code)
with open('src/components/PlantExplorer.jsx', 'w', encoding='utf-8') as f:
    f.write(explorer_code)

print("PlantCard.jsx and PlantExplorer.jsx generated.")
