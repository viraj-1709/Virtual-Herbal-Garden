import os

modal_code = """import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { 
  X, 
  Volume2, 
  VolumeX, 
  Bookmark, 
  Share2, 
  Box, 
  Sun, 
  Droplets, 
  Compass, 
  Sparkles, 
  AlertTriangle, 
  BookOpen, 
  Heart,
  Save,
  Check,
  Flame,
  Leaf,
  Layers
} from 'lucide-react';

export default function PlantDetailModal({ plant, onClose, onOpen3D }) {
  const { t, getPlantCommonName, lang } = useLanguage();
  const { bookmarkedPlants, toggleBookmark, notes, saveNote, markPlantExplored } = useGamification();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'significance' | 'pharmacology' | 'cultivation' | 'preparations' | 'notes'
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [savedNoteSuccess, setSavedNoteSuccess] = useState(false);

  const isBookmarked = plant ? bookmarkedPlants.includes(plant.id) : false;

  useEffect(() => {
    if (plant) {
      markPlantExplored(plant.id);
      setNoteText(notes[plant.id] || '');
      setActiveTab('overview');
    }
  }, [plant?.id]);

  if (!plant) return null;

  // Speech Synthesis Audio Guide
  const handlePlayAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech not supported in this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const commonName = getPlantCommonName(plant);
    const speechText = `${commonName}, botanical name ${plant.scientificName}, family ${plant.family}. ${plant.shortDescription}. Traditional uses: ${plant.medicinalUses.join('. ')}`;
    
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSaveNotes = (e) => {
    e.preventDefault();
    saveNote(plant.id, noteText);
    setSavedNoteSuccess(true);
    setTimeout(() => setSavedNoteSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 shadow-2xl bg-white dark:bg-herbal-darkCard">
        
        {/* Modal Top Hero Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden flex-shrink-0 bg-slate-900">
          <img
            src={plant.bannerImage || plant.image}
            alt={plant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Close & Action Buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={handleShare}
              title={t.modal.share}
              className="p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-transform active:scale-95"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => toggleBookmark(plant.id)}
              title={isBookmarked ? "Bookmarked" : "Bookmark"}
              className={`p-2.5 rounded-full backdrop-blur-md transition-transform active:scale-95 ${
                isBookmarked ? 'bg-amber-500 text-white' : 'bg-black/40 text-white hover:bg-black/60'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => {
                if (isPlayingAudio) window.speechSynthesis.cancel();
                onClose();
              }}
              className="p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-transform active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Pronunciation on Hero Banner */}
          <div className="absolute bottom-4 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/90 text-[10px] font-extrabold uppercase tracking-widest text-white">
                  {plant.family}
                </span>
                {plant.isPopular && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-[10px] font-extrabold uppercase tracking-widest text-white">
                    Popular
                  </span>
                )}
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl mt-1 drop-shadow-md">
                {getPlantCommonName(plant)}
              </h2>
              <p className="text-xs sm:text-sm italic text-emerald-200 font-medium">
                {plant.scientificName} • <span className="not-italic font-sans text-amber-200 font-bold">{plant.sanskritName}</span>
              </p>
            </div>

            {/* Audio Guide & 3D Triggers */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePlayAudio}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold backdrop-blur-md border border-white/20 transition-all ${
                  isPlayingAudio
                    ? 'bg-amber-500 text-white animate-pulse'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isPlayingAudio ? t.modal.stopAudio : t.modal.playAudio}</span>
              </button>

              {plant.has3DModel && (
                <button
                  onClick={() => {
                    onClose();
                    onOpen3D(plant);
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg transition-all"
                >
                  <Box className="w-4 h-4" />
                  <span>3D Model</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-emerald-500/20 overflow-x-auto select-none bg-emerald-50/50 dark:bg-emerald-950/30">
          {[
            { id: 'overview', label: t.modal.tabOverview, icon: Leaf },
            { id: 'significance', label: t.modal.tabSignificance, icon: BookOpen },
            { id: 'pharmacology', label: t.modal.tabPharmacology, icon: Sparkles },
            { id: 'cultivation', label: t.modal.tabCultivation, icon: Droplets },
            { id: 'preparations', label: t.modal.tabPreparations, icon: Flame },
            { id: 'notes', label: t.modal.tabNotes, icon: Bookmark },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Tab Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-800 dark:text-slate-200">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in">
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
                {plant.shortDescription}
              </p>

              {/* AYUSH Systems Association */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {t.card.ayush}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {plant.ayushSystems.map((sys) => (
                    <span
                      key={sys}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                    >
                      🌿 {sys}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Medicinal Uses Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Verified Medicinal Uses
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {plant.medicinalUses.map((use, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl glass-panel border border-emerald-500/20 flex items-start gap-2.5 text-xs font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phytochemicals Chips */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Bioactive Phytochemicals
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {plant.phytochemicals.map((chem) => (
                    <span
                      key={chem}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold glass-panel border border-teal-500/30 text-teal-800 dark:text-teal-300"
                    >
                      🧪 {chem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Precautions Alert */}
              {plant.precautions && (
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-xs">
                    <span className="font-bold text-amber-900 dark:text-amber-300">{t.modal.precautions}:</span>
                    <p className="text-amber-800 dark:text-amber-400">{plant.precautions}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TRADITIONAL SIGNIFICANCE */}
          {activeTab === 'significance' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-5 rounded-2xl glass-panel border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2">
                <h4 className="font-heading font-bold text-base text-emerald-900 dark:text-emerald-200">
                  Classical Literature & Scriptural Wisdom
                </h4>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {plant.traditionalSignificance}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Anatomical Plant Parts Used in Classical Formulations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {plant.partsUsed.map((part) => (
                    <span
                      key={part}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300"
                    >
                      🌱 {part}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PHARMACOLOGY & AYURVEDIC PROFILE */}
          {activeTab === 'pharmacology' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Rasa (Taste)</span>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{plant.ayurvedicProfile.rasa}</p>
                </div>
                <div className="p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Guna (Qualities)</span>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{plant.ayurvedicProfile.guna}</p>
                </div>
                <div className="p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Virya (Potency)</span>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{plant.ayurvedicProfile.virya}</p>
                </div>
                <div className="p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Vipaka (Post-Digestive Effect)</span>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{plant.ayurvedicProfile.vipaka}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-300 dark:border-teal-800 space-y-1">
                <span className="text-xs font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wide">
                  Dosha Karma (Influence on Bio-energies)
                </span>
                <p className="text-xs sm:text-sm font-medium text-teal-800 dark:text-teal-200">
                  {plant.ayurvedicProfile.doshaKarma}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: CULTIVATION GUIDE */}
          {activeTab === 'cultivation' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-emerald-600" />
                    Climate & Habitat
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">{plant.cultivation.climate}</p>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-sky-600" />
                    Soil Requirements
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">{plant.cultivation.soil}</p>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-amber-500" />
                    Sunlight Needs
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">{plant.cultivation.sunlight}</p>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    Watering
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">{plant.cultivation.watering}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-1">
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                  Home Gardening & Balcony Tips
                </span>
                <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">
                  {plant.cultivation.homeGardening}
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: HOME RECIPES / PREPARATIONS */}
          {activeTab === 'preparations' && (
            <div className="space-y-4 animate-in fade-in">
              {plant.preparations.map((prep, i) => (
                <div key={i} className="p-4 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                  <div className="font-heading font-bold text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-500" />
                    {prep.name}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {prep.usage}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: PERSONAL STUDY NOTES */}
          {activeTab === 'notes' && (
            <form onSubmit={handleSaveNotes} className="space-y-4 animate-in fade-in">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Personal Herbalist Notes ({getPlantCommonName(plant)})
                </label>
                <textarea
                  rows={6}
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder={t.modal.notesPlaceholder}
                  className="w-full p-4 rounded-2xl glass-panel border border-emerald-500/30 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Notes are saved securely to your browser storage and accessible from your profile.
                </span>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-md"
                >
                  {savedNoteSuccess ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                  <span>{savedNoteSuccess ? 'Saved!' : t.modal.saveNotes}</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
"""

with open('src/components/PlantDetailModal.jsx', 'w', encoding='utf-8') as f:
    f.write(modal_code)

print("PlantDetailModal.jsx generated.")
