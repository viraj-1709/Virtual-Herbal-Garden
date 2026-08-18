import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { plantsData } from '../data/plantsData';
import PlantCard from './PlantCard';
import { 
  Search, 
  Grid, 
  List, 
  RotateCcw,
  X
} from 'lucide-react';

export default function PlantExplorer({ onSelectPlant, onOpen3D }) {
  const { t, getPlantCommonName } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSystem, setSelectedSystem] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPart, setSelectedPart] = useState('all');
  const [viewMode, setViewMode] = useState('cards');

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

  const filteredPlants = useMemo(() => {
    return plantsData.filter((plant) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        plant.name.toLowerCase().includes(q) ||
        plant.scientificName.toLowerCase().includes(q) ||
        plant.sanskritName.toLowerCase().includes(q) ||
        plant.shortDescription.toLowerCase().includes(q) ||
        getPlantCommonName(plant).toLowerCase().includes(q) ||
        plant.medicinalUses.some(u => u.toLowerCase().includes(q));

      const matchSystem =
        selectedSystem === 'all' || plant.ayushSystems.includes(selectedSystem);

      const matchCategory =
        selectedCategory === 'all' || plant.healthCategories.includes(selectedCategory);

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
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.explorer.searchPlaceholder}
              className="w-full pl-10 pr-10 py-3 rounded-2xl glass-panel border border-emerald-500/30 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="glass-panel p-1 rounded-2xl border border-emerald-500/30 flex items-center shadow-sm">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'cards'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{t.explorer.viewCards}</span>
              </button>

              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'list'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>{t.explorer.viewList}</span>
              </button>
            </div>

            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 px-3 py-2 rounded-2xl glass-panel border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              {t.explorer.filterBySystem}
            </label>
            <select
              value={selectedSystem}
              onChange={(e) => setSelectedSystem(e.target.value)}
              className="w-full px-3 py-2 rounded-xl glass-panel border border-emerald-500/30 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none"
            >
              <option value="all">{t.explorer.allSystems}</option>
              {ayushOptions.map(sys => (
                <option key={sys} value={sys}>{sys}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              {t.explorer.filterByCategory}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl glass-panel border border-emerald-500/30 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none"
            >
              <option value="all">{t.explorer.allCategories}</option>
              {categoryOptions.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              {t.explorer.filterByPart}
            </label>
            <select
              value={selectedPart}
              onChange={(e) => setSelectedPart(e.target.value)}
              className="w-full px-3 py-2 rounded-xl glass-panel border border-emerald-500/30 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none"
            >
              <option value="all">All Parts</option>
              {partsOptions.map(part => (
                <option key={part} value={part}>{part}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 border-b border-emerald-500/10 pb-2">
        <div>
          {t.explorer.showing} <span className="font-bold text-emerald-600 dark:text-emerald-400">{filteredPlants.length}</span> {t.explorer.of} {plantsData.length} {t.explorer.plants}
        </div>
      </div>

      {filteredPlants.length === 0 ? (
        <div className="text-center py-12 space-y-3 glass-panel rounded-3xl border border-dashed border-emerald-500/30">
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
            <Search className="w-6 h-6" />
          </div>
          <h4 className="font-heading font-bold text-base text-slate-800 dark:text-slate-200">
            {t.explorer.noResults}
          </h4>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'cards' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
        <div className="space-y-2.5">
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              onClick={() => onSelectPlant(plant)}
              className="cursor-pointer p-3.5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-emerald-500 flex items-center justify-between gap-3 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    {getPlantCommonName(plant)}
                  </h4>
                  <p className="text-[11px] italic text-emerald-600 dark:text-emerald-400">
                    {plant.scientificName}
                  </p>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPlant(plant);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
              >
                Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
