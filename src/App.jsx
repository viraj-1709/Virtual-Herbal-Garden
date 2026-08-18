import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { GamificationProvider } from './context/GamificationContext';
import { AuthProvider } from './context/AuthContext';

import Sidebar from './components/Sidebar';
import HomeHero from './components/HomeHero';
import PlantExplorer from './components/PlantExplorer';
import ThreeDPlantGarden from './components/ThreeDPlantGarden';
import VirtualTours from './components/VirtualTours';
import HerbalQuiz from './components/HerbalQuiz';
import AyushKnowledgeHub from './components/AyushKnowledgeHub';
import UserProfile from './components/UserProfile';
import PlantDetailModal from './components/PlantDetailModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

function MainApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [active3DPlant, setActive3DPlant] = useState(null);

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
        
        {/* Dynamic Views */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
          
          {/* HOME TAB */}
          {activeTab === 'home' && (
            <div className="space-y-10">
              <HomeHero
                setActiveTab={setActiveTab}
              />

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

        {/* Global Auth Modal (User & Admin Sign In / Sign Up) */}
        <AuthModal />

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
          <AuthProvider>
            <MainApp />
          </AuthProvider>
        </GamificationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

