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
  ArrowRight,
  Eye,
  Zap,
  Sliders
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
  const [batterySaver, setBatterySaver] = useState(false);

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
    addXP(10, 'Inspected anatomical node');
  };

  return (
    <div className="space-y-6">
      
      {/* 3D Garden Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
            <Box className="w-3.5 h-3.5" />
            <span>Three.js WebGL Studio</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            {t.threeD.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {t.threeD.subtitle}
          </p>
        </div>

        {/* 3D Model Quick Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {plantsWith3D.map((p) => (
            <button
              key={p.id}
              onClick={() => setCurrentPlant(p)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                currentPlant.id === p.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
              }`}
            >
              {getPlantCommonName(p)}
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Canvas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Canvas Viewport */}
        <div className="lg:col-span-2 space-y-3">
          <div className="relative">
            <ThreeCanvasViewer
              plant={currentPlant}
              selectedHotspot={selectedHotspot}
              onSelectHotspot={handleSelectHotspot}
              wireframe={wireframe}
              isNightMode={isNightMode}
              autoRotate={autoRotate}
              batterySaver={batterySaver}
            />

            {/* Viewport Control Buttons */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <button
                onClick={() => setBatterySaver(!batterySaver)}
                title="Toggle Performance / Low Power Mode"
                className={`p-2 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${
                  batterySaver
                    ? 'bg-amber-600 text-white border-amber-500'
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setAutoRotate(!autoRotate)}
                title="Toggle Rotation"
                className={`p-2 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${
                  autoRotate
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setWireframe(!wireframe)}
                title={t.threeD.wireframe}
                className={`p-2 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${
                  wireframe
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsNightMode(!isNightMode)}
                title={t.threeD.dayNight}
                className="p-2 rounded-xl bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-black/60 transition-all shadow-md"
              >
                {isNightMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-200" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-slate-400 px-1">
            <span>{t.threeD.rotateHint}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">+10 XP per inspection</span>
          </div>
        </div>

        {/* Right 1 Col: Hotspot Inspector Panel */}
        <div className="space-y-4">
          <div className="rounded-3xl p-5 sm:p-6 glass-panel border border-emerald-500/30 shadow-lg space-y-4">
            
            <div className="flex items-center justify-between border-b border-emerald-500/10 pb-3">
              <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                {t.threeD.anatomyDetails}
              </h3>
              {selectedHotspot && (
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Clear
                </button>
              )}
            </div>

            {selectedHotspot ? (
              <div className="space-y-4 animate-in fade-in">
                <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-1.5">
                  <div className="text-emerald-800 dark:text-emerald-300 font-heading font-extrabold text-base">
                    {selectedHotspot.name}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                    {selectedHotspot.description}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Bioactive Phytochemicals
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
              <div className="text-center py-6 space-y-3">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Eye className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed px-1">
                  {t.threeD.clickToInspect}
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center pt-1">
                  {currentPlant?.threeDConfig?.hotspots?.map(h => (
                    <button
                      key={h.id}
                      onClick={() => handleSelectHotspot(h)}
                      className="px-2.5 py-1 rounded-xl text-xs font-semibold glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      {h.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-emerald-500/10">
              <button
                onClick={() => onOpenDetails(currentPlant)}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-sm"
              >
                <span>View Full Botanical Record</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          <div className="p-4 rounded-2xl glass-panel border border-amber-500/30 space-y-1.5">
            <div className="font-heading font-bold text-xs text-amber-900 dark:text-amber-300">
              Traditional Significance
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed">
              {currentPlant.traditionalSignificance}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
"""

with open('src/components/ThreeDPlantGarden.jsx', 'w', encoding='utf-8') as f:
    f.write(three_d_garden_code)

print("ThreeDPlantGarden.jsx cleaned without emojis.")
