import os

three_d_garden_code = """import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { plantsData } from '../data/plantsData';
import ThreeCanvasViewer from './ThreeCanvasViewer';
import { 
  Box, 
  RotateCcw, 
  Sun, 
  Moon, 
  Grid, 
  Sparkles, 
  Info, 
  ChevronRight, 
  ArrowRight,
  Eye,
  CheckCircle2
} from 'lucide-react';

export default function ThreeDPlantGarden({ initialPlant, onOpenDetails }) {
  const { t, getPlantCommonName } = useLanguage();
  const { mark3DViewed, addXP } = useGamification();

  const plantsWith3D = plantsData.filter(p => p.has3DModel);
  const [currentPlant, setCurrentPlant] = useState(() => {
    return initialPlant && initialPlant.has3DModel ? initialPlant : plantsWith3D[0];
  });

  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [wireframe, setWireframe] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (initialPlant && initialPlant.has3DModel) {
      setCurrentPlant(initialPlant);
    }
  }, [initialPlant]);

  useEffect(() => {
    if (currentPlant) {
      mark3DViewed(currentPlant.id);
      setSelectedHotspot(null);
    }
  }, [currentPlant?.id]);

  const handleSelectHotspot = (hotspot) => {
    setSelectedHotspot(hotspot);
    addXP(10, 'Inspected botanical anatomical hotspot');
  };

  return (
    <div className="space-y-8">
      
      {/* 3D Garden Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
            <Box className="w-3.5 h-3.5" />
            <span>Interactive 3D Three.js Studio</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            {t.threeD.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {t.threeD.subtitle}
          </p>
        </div>

        {/* 3D Model Quick Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {plantsWith3D.map((p) => (
            <button
              key={p.id}
              onClick={() => setCurrentPlant(p)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
                currentPlant.id === p.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105'
                  : 'glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
              }`}
            >
              <span>🌿</span>
              <span>{getPlantCommonName(p)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Canvas and Interactive Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: 3D Interactive Canvas */}
        <div className="lg:col-span-2 space-y-4">
          
          <div className="relative">
            <ThreeCanvasViewer
              plant={currentPlant}
              selectedHotspot={selectedHotspot}
              onSelectHotspot={handleSelectHotspot}
              wireframe={wireframe}
              isNightMode={isNightMode}
              autoRotate={autoRotate}
            />

            {/* Canvas Overlay Controls */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                title="Toggle Auto Rotation"
                className={`p-2.5 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${
                  autoRotate
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setWireframe(!wireframe)}
                title={t.threeD.wireframe}
                className={`p-2.5 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${
                  wireframe
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsNightMode(!isNightMode)}
                title={t.threeD.dayNight}
                className="p-2.5 rounded-xl bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-black/60 transition-all shadow-md"
              >
                {isNightMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-200" />}
              </button>
            </div>
          </div>

          {/* User Gesture Hint */}
          <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-slate-400 px-2">
            <span>🖱️ {t.threeD.rotateHint}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">+10 XP per hotspot inspected</span>
          </div>

        </div>

        {/* Right 1 Col: Hotspot Anatomical Inspector & Details */}
        <div className="space-y-6">
          
          {/* Active Hotspot Inspector Card */}
          <div className="rounded-3xl p-6 glass-panel border border-emerald-500/30 shadow-xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-emerald-500/10 pb-3">
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                {t.threeD.anatomyDetails}
              </h3>
              {selectedHotspot && (
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Clear Selection
                </button>
              )}
            </div>

            {selectedHotspot ? (
              <div className="space-y-4 animate-in fade-in">
                <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-heading font-extrabold text-lg">
                    <span>🌱</span>
                    <span>{selectedHotspot.name}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    {selectedHotspot.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Associated Phytochemicals & Actions
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPlant.phytochemicals.map(chem => (
                      <span key={chem} className="px-2.5 py-1 rounded-lg text-xs font-semibold glass-panel border border-teal-500/30 text-teal-800 dark:text-teal-300">
                        {chem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Eye className="w-6 h-6 animate-pulse" />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed px-2">
                  {t.threeD.clickToInspect}
                </p>
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  {currentPlant?.threeDConfig?.hotspots?.map(h => (
                    <button
                      key={h.id}
                      onClick={() => handleSelectHotspot(h)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      {h.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Plant Full Profile Action */}
            <div className="pt-2 border-t border-emerald-500/10">
              <button
                onClick={() => onOpenDetails(currentPlant)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-md"
              >
                <span>Read Full Botanical Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Plant Factoid Box */}
          <div className="p-5 rounded-3xl glass-panel border border-amber-500/30 space-y-2">
            <div className="font-heading font-bold text-sm text-amber-900 dark:text-amber-300 flex items-center gap-2">
              <span>🌾</span>
              <span>Traditional Significance</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-4 leading-relaxed">
              {currentPlant.traditionalSignificance}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
"""

virtual_tours_code = """import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { virtualToursData } from '../data/toursData';
import { plantsData } from '../data/plantsData';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Play, 
  CheckCircle,
  Leaf
} from 'lucide-react';

export default function VirtualTours({ onSelectPlant }) {
  const { t, getPlantCommonName } = useLanguage();
  const { addXP } = useGamification();

  const [activeTour, setActiveTour] = useState(virtualToursData[0]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentStep = activeTour.steps[currentStepIndex];
  const stepPlant = plantsData.find(p => p.id === currentStep?.plantId);

  const handleNext = () => {
    if (isPlayingAudio) window.speechSynthesis?.cancel();
    setIsPlayingAudio(false);
    if (currentStepIndex < activeTour.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      addXP(50, 'Completed Virtual Garden Tour');
      alert(`🎉 Tour completed! You earned 50 XP for completing "${activeTour.title}".`);
    }
  };

  const handlePrev = () => {
    if (isPlayingAudio) window.speechSynthesis?.cancel();
    setIsPlayingAudio(false);
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleTourSpeech = () => {
    if (!('speechSynthesis' in window)) return;
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${currentStep.heading}. ${currentStep.narration}`);
    utterance.rate = 0.95;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  return (
    <div className="space-y-8">
      
      {/* Tours Title & Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold border border-teal-300 dark:border-teal-800">
          <MapPin className="w-3.5 h-3.5" />
          <span>Curated Herbal Walkthroughs</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
          Guided Virtual Herbal Trails
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
          Follow themed educational trails curated by AYUSH experts to learn targeted plant remedies for digestion, immunity, and skin vitality.
        </p>
      </div>

      {/* Tour Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {virtualToursData.map((tour) => {
          const isSelected = activeTour.id === tour.id;
          return (
            <div
              key={tour.id}
              onClick={() => {
                setActiveTour(tour);
                setCurrentStepIndex(0);
                if (isPlayingAudio) window.speechSynthesis?.cancel();
                setIsPlayingAudio(false);
              }}
              className={`cursor-pointer p-5 rounded-3xl transition-all ${
                isSelected
                  ? 'glass-panel border-2 border-emerald-500 shadow-xl scale-[1.02]'
                  : 'glass-panel border border-emerald-500/20 hover:border-emerald-500/60 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  {tour.duration}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px]">
                  {tour.steps.length} stops
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
                {tour.title}
              </h3>
              <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mt-0.5">
                {tour.subtitle}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                {tour.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Active Tour Stepper Arena */}
      <div className="rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 p-6 md:p-10 shadow-2xl space-y-8">
        
        {/* Step Progress Bar */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
          <span>{activeTour.title}</span>
          <span className="text-emerald-600 dark:text-emerald-400">
            Stop {currentStepIndex + 1} of {activeTour.steps.length}
          </span>
        </div>

        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-300"
            style={{ width: `${((currentStepIndex + 1) / activeTour.steps.length) * 100}%` }}
          />
        </div>

        {/* Current Step Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Plant Visual Card */}
          {stepPlant && (
            <div className="relative rounded-3xl overflow-hidden h-72 shadow-xl border border-emerald-500/20 group">
              <img
                src={stepPlant.image}
                alt={stepPlant.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Featured Trail Herb
                </div>
                <h4 className="font-heading font-extrabold text-2xl">
                  {getPlantCommonName(stepPlant)}
                </h4>
                <p className="text-xs italic text-slate-200">
                  {stepPlant.scientificName}
                </p>
              </div>
            </div>
          )}

          {/* Narration and Guidance */}
          <div className="space-y-5">
            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                {currentStep.heading}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                {currentStep.narration}
              </p>
            </div>

            {/* Audio & Details Button */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleTourSpeech}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold shadow-md transition-all ${
                  isPlayingAudio
                    ? 'bg-amber-500 text-white animate-pulse'
                    : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200'
                }`}
              >
                {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isPlayingAudio ? 'Pause Narration' : 'Listen Narration'}</span>
              </button>

              {stepPlant && (
                <button
                  onClick={() => onSelectPlant(stepPlant)}
                  className="px-4 py-2.5 rounded-2xl glass-panel border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-colors"
                >
                  View Full Herb Card
                </button>
              )}
            </div>

            {/* Navigation Stepper Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-emerald-500/20">
              <button
                onClick={handlePrev}
                disabled={currentStepIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl glass-panel text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Stop</span>
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-md transition-all"
              >
                <span>{currentStepIndex === activeTour.steps.length - 1 ? 'Finish Tour' : 'Next Stop'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
"""

with open('src/components/ThreeDPlantGarden.jsx', 'w', encoding='utf-8') as f:
    f.write(three_d_garden_code)
with open('src/components/VirtualTours.jsx', 'w', encoding='utf-8') as f:
    f.write(virtual_tours_code)

print("ThreeDPlantGarden.jsx and VirtualTours.jsx generated.")
