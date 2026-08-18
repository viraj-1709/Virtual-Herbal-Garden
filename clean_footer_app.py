footer_code = """import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sprout, ShieldCheck, ExternalLink, Heart } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-emerald-500/20 glass-panel mt-16 pt-10 pb-6 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
                  Virtual Herbal Garden
                </span>
                <p className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">
                  Smart India Hackathon 2026 • PSS03
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
              An interactive 3D digital botanical platform promoting public education, biodiversity preservation, and research access across India's traditional AYUSH healthcare heritage.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
              Platform Modules
            </div>
            <ul className="space-y-1 font-medium">
              <li>
                <button onClick={() => setActiveTab('explore')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Virtual Plant Explorer
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('3d-garden')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Interactive 3D Garden
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('assistant')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  AI Knowledge Assistant
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tours')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Guided Virtual Tours
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('quiz')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Knowledge Quiz
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
              National Initiative
            </div>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Developed for the Smart India Hackathon 2026 aligned with Ministry of AYUSH botanical preservation standards.
            </p>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-800 dark:text-emerald-300 font-semibold">
              Inspiring a Healthier, Greener, and Self-Reliant India.
            </div>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-emerald-950/20 dark:bg-emerald-950/60 border border-emerald-500/20 flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <p className="text-[10px] sm:text-[11px] leading-relaxed">
            {t.disclaimer}
          </p>
        </div>

        <div className="text-center text-[10px] text-slate-400 pt-1 border-t border-emerald-500/10">
          © 2026 Virtual Herbal Garden Prototype • Smart India Hackathon 2026. Built with React & Three.js.
        </div>
      </div>
    </footer>
  );
}
"""

app_code = """import React, { useState } from 'react';
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
              ✕
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
"""

with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(footer_code)
with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_code)

print("Footer.jsx and App.jsx updated with left sidebar layout and zero emojis.")
