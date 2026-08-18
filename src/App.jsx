import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { GamificationProvider, useGamification } from './context/GamificationContext';

import Sidebar from './components/Sidebar';
import HomeHero from './components/HomeHero';
import AiHerbalAssistant from './components/AiHerbalAssistant';
import PlantExplorer from './components/PlantExplorer';
import ThreeDPlantGarden from './components/ThreeDPlantGarden';
import VirtualTours from './components/VirtualTours';
import HerbalQuiz from './components/HerbalQuiz';
import AyushKnowledgeHub from './components/AyushKnowledgeHub';
import UserProfile from './components/UserProfile';
import PlantDetailModal from './components/PlantDetailModal';
import Footer from './components/Footer';

function MainApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [active3DPlant, setActive3DPlant] = useState(null);
  const { recentBadge, clearRecentBadge } = useGamification();

  const handleOpen3D = (plant) => {
    setActive3DPlant(plant);
    setActiveTab('3d-garden');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-herbal-cream dark:bg-herbal-darkBg text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Left Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area (Offset for Desktop Fixed Sidebar) */}
      <div className="flex-1 lg:pl-72 flex flex-col min-h-screen w-full transition-all">
        
        {/* Recent Badge Achievement Toast */}
        {recentBadge && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl glass-panel border-2 border-amber-500 shadow-2xl bg-amber-500/20 backdrop-blur-xl flex items-center gap-3 animate-in slide-in-from-bottom-4">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                Badge Unlocked
              </div>
              <div className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                {recentBadge}
              </div>
            </div>
            <button
              onClick={clearRecentBadge}
              className="ml-2 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Dynamic Views */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
          
          {/* HOME TAB */}
          {activeTab === 'home' && (
            <div className="space-y-10">
              <HomeHero
                setActiveTab={setActiveTab}
              />

              <div className="pt-2">
                <AiHerbalAssistant
                  onSelectPlant={setSelectedPlant}
                  onOpen3D={handleOpen3D}
                />
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between border-b border-emerald-500/10 pb-2">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      Featured Botanical Flora
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Medicinal plant species documented in classical AYUSH pharmacopeias.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('explore')}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    View All Plants →
                  </button>
                </div>

                <PlantExplorer
                  onSelectPlant={setSelectedPlant}
                  onOpen3D={handleOpen3D}
                />
              </div>
            </div>
          )}

          {/* EXPLORE GARDEN TAB */}
          {activeTab === 'explore' && (
            <PlantExplorer
              onSelectPlant={setSelectedPlant}
              onOpen3D={handleOpen3D}
            />
          )}

          {/* 3D GARDEN TAB */}
          {activeTab === '3d-garden' && (
            <ThreeDPlantGarden
              initialPlant={active3DPlant}
              onOpenDetails={setSelectedPlant}
            />
          )}

          {/* AI ASSISTANT TAB */}
          {activeTab === 'assistant' && (
            <AiHerbalAssistant
              onSelectPlant={setSelectedPlant}
              onOpen3D={handleOpen3D}
            />
          )}

          {/* AYUSH SYSTEMS TAB */}
          {activeTab === 'ayush' && (
            <AyushKnowledgeHub />
          )}

          {/* VIRTUAL TOURS TAB */}
          {activeTab === 'tours' && (
            <VirtualTours
              onSelectPlant={setSelectedPlant}
            />
          )}

          {/* QUIZ TAB */}
          {activeTab === 'quiz' && (
            <HerbalQuiz />
          )}

          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <UserProfile
              onSelectPlant={setSelectedPlant}
            />
          )}

        </main>

        {/* Slide-over Plant Details Modal */}
        {selectedPlant && (
          <PlantDetailModal
            plant={selectedPlant}
            onClose={() => setSelectedPlant(null)}
            onOpen3D={handleOpen3D}
          />
        )}

        {/* Global Footer */}
        <Footer setActiveTab={setActiveTab} />

      </div>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <GamificationProvider>
          <MainApp />
        </GamificationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
