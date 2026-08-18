import os

footer_code = """import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sprout, Heart, Shield, Award, ExternalLink } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-emerald-500/20 glass-panel mt-20 pt-12 pb-8 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Platform Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
                  Virtual Herbal Garden
                </span>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                  SIH 2026 Problem Statement PSS03
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
              An interactive 3D digital botanical platform promoting public education, biodiversity preservation, and research access across India's sacred AYUSH healthcare heritage.
            </p>
          </div>

          {/* Quick Platform Navigation */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Explore Platform
            </div>
            <ul className="space-y-1.5 font-medium">
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
                  AI Herbal Knowledge Assistant
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tours')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Guided Virtual Tours
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('quiz')} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Gamified Herbal Quiz
                </button>
              </li>
            </ul>
          </div>

          {/* AYUSH Ministry & Hackathon Badges */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              National Initiative
            </div>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Developed for the <strong>Smart India Hackathon 2026</strong> in collaboration with traditional knowledge preservation guidelines.
            </p>
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-800 dark:text-emerald-300 font-medium">
              🇮🇳 Inspiring a Healthier, Greener, and Self-Reliant India.
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-emerald-950/20 dark:bg-emerald-950/60 border border-emerald-500/20 flex items-center gap-3 text-slate-700 dark:text-slate-300">
          <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <p className="text-[11px] leading-relaxed">
            {t.disclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-[11px] text-slate-400 pt-2 border-t border-emerald-500/10">
          © 2026 Virtual Herbal Garden Prototype • Smart India Hackathon 2026. Built with React & Three.js.
        </div>

      </div>
    </footer>
  );
}
"""

app_code = """import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { GamificationProvider, useGamification } from './context/GamificationContext';

import Navbar from './components/Navbar';
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
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'explore' | '3d-garden' | 'assistant' | 'ayush' | 'tours' | 'quiz' | 'profile'
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [active3DPlant, setActive3DPlant] = useState(null);
  const { recentBadge, clearRecentBadge } = useGamification();

  const handleOpen3D = (plant) => {
    setActive3DPlant(plant);
    setActiveTab('3d-garden');
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Recent Badge Achievement Toast */}
      {recentBadge && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl glass-panel border-2 border-amber-500 shadow-2xl bg-amber-500/20 backdrop-blur-xl flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <span className="text-2xl">🏆</span>
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 dark:text-amber-300">
              Badge Unlocked!
            </div>
            <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">
              {recentBadge}
            </div>
          </div>
          <button
            onClick={clearRecentBadge}
            className="ml-2 text-xs font-bold text-slate-500 hover:text-slate-800"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Tab Router Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
        
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div className="space-y-16">
            <HomeHero
              setActiveTab={setActiveTab}
              onSelectPlant={setSelectedPlant}
            />

            {/* AI Assistant Section right on home page (Matching Reference Layout) */}
            <div className="pt-4">
              <AiHerbalAssistant
                onSelectPlant={setSelectedPlant}
                onOpen3D={handleOpen3D}
              />
            </div>

            {/* Featured Plant Collection Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
                    Featured Medicinal Flora
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Sacred healing herbs revered across Ayurveda, Unani, and Siddha scriptures.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
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

      {/* Plant Details Slide-over / Modal */}
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

main_code = """import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"""

with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(footer_code)
with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_code)
with open('src/main.jsx', 'w', encoding='utf-8') as f:
    f.write(main_code)

print("Footer.jsx, App.jsx, and main.jsx generated!")
