import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { virtualToursData } from '../data/toursData';
import { plantsData } from '../data/plantsData';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Volume2, 
  VolumeX, 
  CheckCircle,
  Leaf
} from 'lucide-react';

export default function VirtualTours({ onSelectPlant }) {
  const { t, getPlantCommonName } = useLanguage();
  const { triggerConfetti } = useGamification();

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
      triggerConfetti();
      alert(`Tour completed! You have successfully completed the "${activeTour.title}" trail.`);
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
    <div className="space-y-6">
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold border border-teal-300 dark:border-teal-800">
          <MapPin className="w-3.5 h-3.5" />
          <span>Curated Herbal Walkthroughs</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
          Guided Virtual Herbal Trails
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
          Follow themed educational trails curated by AYUSH specialists to explore targeted botanical remedies for digestion, immunity, and skin health.
        </p>
      </div>

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
              className={`cursor-pointer p-4 sm:p-5 rounded-3xl transition-all ${
                isSelected
                  ? 'glass-panel border-2 border-emerald-500 shadow-lg scale-[1.01]'
                  : 'glass-panel border border-emerald-500/20 hover:border-emerald-500/60 shadow-sm'
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
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
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

      <div className="rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 p-6 md:p-8 shadow-xl space-y-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {stepPlant && (
            <div className="relative rounded-3xl overflow-hidden h-64 sm:h-72 shadow-lg border border-emerald-500/20 group">
              <img
                src={stepPlant.image}
                alt={stepPlant.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                  Featured Trail Herb
                </div>
                <h4 className="font-heading font-extrabold text-xl sm:text-2xl">
                  {getPlantCommonName(stepPlant)}
                </h4>
                <p className="text-xs italic text-slate-200">
                  {stepPlant.scientificName}
                </p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-1.5">
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                {currentStep.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {currentStep.narration}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                onClick={handleTourSpeech}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold shadow-sm transition-all ${
                  isPlayingAudio
                    ? 'bg-amber-500 text-white animate-pulse'
                    : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200'
                }`}
              >
                {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isPlayingAudio ? 'Pause Audio' : 'Listen Audio'}</span>
              </button>

              {stepPlant && (
                <button
                  onClick={() => onSelectPlant(stepPlant)}
                  className="px-3.5 py-2 rounded-xl glass-panel border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-colors"
                >
                  View Details
                </button>
              )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-emerald-500/20">
              <button
                onClick={handlePrev}
                disabled={currentStepIndex === 0}
                className="flex items-center gap-1 px-3.5 py-2 rounded-xl glass-panel text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-sm"
              >
                <span>{currentStepIndex === activeTour.steps.length - 1 ? 'Finish Tour' : 'Next Stop'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
