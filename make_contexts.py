import os

os.makedirs('src/context', exist_ok=True)

theme_context = """import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('vhg_theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('vhg_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
"""

language_context = """import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'हिंदी (Hindi)', flag: '🇮🇳' },
  { code: 'ta', label: 'தமிழ் (Tamil)', flag: '🇮🇳' },
  { code: 'bn', label: 'বাংলা (Bengali)', flag: '🇮🇳' }
];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('vhg_language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('vhg_language', lang);
  }, [lang]);

  const t = translations[lang] || translations.en;

  const getPlantCommonName = (plant) => {
    if (!plant || !plant.commonNames) return plant?.name || '';
    return plant.commonNames[lang] || plant.commonNames.en || plant.name;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages: LANGUAGES, getPlantCommonName }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
"""

gamification_context = """import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const GamificationContext = createContext();

export function GamificationProvider({ children }) {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem('vhg_gamification');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      xp: 150,
      level: 1,
      exploredPlants: ['tulsi', 'neem'],
      viewed3DPlants: ['tulsi'],
      bookmarkedPlants: ['tulsi'],
      quizHistory: [],
      notes: {
        tulsi: 'Excellent for morning herbal tea with fresh ginger and honey for immunity.'
      },
      unlockedBadges: ['explorer_novice']
    };
  });

  const [recentBadge, setRecentBadge] = useState(null);

  useEffect(() => {
    localStorage.setItem('vhg_gamification', JSON.stringify(state));
  }, [state]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  const addXP = (amount, reason = '') => {
    setState(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 200) + 1;
      const leveledUp = newLevel > prev.level;
      if (leveledUp) {
        triggerConfetti();
      }
      return {
        ...prev,
        xp: newXP,
        level: newLevel
      };
    });
  };

  const markPlantExplored = (plantId) => {
    setState(prev => {
      if (prev.exploredPlants.includes(plantId)) return prev;
      const updatedExplored = [...prev.exploredPlants, plantId];
      const newBadges = [...prev.unlockedBadges];

      if (updatedExplored.length >= 5 && !newBadges.includes('plant_explorer_5')) {
        newBadges.push('plant_explorer_5');
        setRecentBadge('Plant Explorer (5 plants unlocked!)');
        triggerConfetti();
      }
      if (updatedExplored.length >= 10 && !newBadges.includes('ayush_scholar_10')) {
        newBadges.push('ayush_scholar_10');
        setRecentBadge('AYUSH Scholar (10 plants unlocked!)');
        triggerConfetti();
      }

      return {
        ...prev,
        exploredPlants: updatedExplored,
        unlockedBadges: newBadges,
        xp: prev.xp + 25
      };
    });
  };

  const mark3DViewed = (plantId) => {
    setState(prev => {
      if (prev.viewed3DPlants.includes(plantId)) return prev;
      const updated3D = [...prev.viewed3DPlants, plantId];
      const newBadges = [...prev.unlockedBadges];
      if (updated3D.length >= 3 && !newBadges.includes('3d_botanist')) {
        newBadges.push('3d_botanist');
        setRecentBadge('3D Botanical Explorer');
        triggerConfetti();
      }
      return {
        ...prev,
        viewed3DPlants: updated3D,
        unlockedBadges: newBadges,
        xp: prev.xp + 35
      };
    });
  };

  const toggleBookmark = (plantId) => {
    setState(prev => {
      const isBookmarked = prev.bookmarkedPlants.includes(plantId);
      const updated = isBookmarked
        ? prev.bookmarkedPlants.filter(id => id !== plantId)
        : [...prev.bookmarkedPlants, plantId];
      return {
        ...prev,
        bookmarkedPlants: updated
      };
    });
  };

  const saveNote = (plantId, noteText) => {
    setState(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [plantId]: noteText
      },
      xp: prev.xp + 15
    }));
  };

  const recordQuizResult = (score, total, percentage) => {
    setState(prev => {
      const newHistory = [
        { date: new Date().toISOString(), score, total, percentage },
        ...prev.quizHistory
      ];
      const newBadges = [...prev.unlockedBadges];
      if (!newBadges.includes('herbal_novice')) {
        newBadges.push('herbal_novice');
      }
      if (percentage >= 80 && !newBadges.includes('master_herbalist')) {
        newBadges.push('master_herbalist');
        setRecentBadge('Master Herbalist (Score 80%+)');
        triggerConfetti();
      }
      const earnedXP = score * 30 + 50;
      return {
        ...prev,
        quizHistory: newHistory,
        unlockedBadges: newBadges,
        xp: prev.xp + earnedXP
      };
    });
  };

  return (
    <GamificationContext.Provider
      value={{
        ...state,
        addXP,
        markPlantExplored,
        mark3DViewed,
        toggleBookmark,
        saveNote,
        recordQuizResult,
        recentBadge,
        clearRecentBadge: () => setRecentBadge(null),
        triggerConfetti
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
}

export const useGamification = () => useContext(GamificationContext);
"""

with open('src/context/ThemeContext.jsx', 'w', encoding='utf-8') as f:
    f.write(theme_context)
with open('src/context/LanguageContext.jsx', 'w', encoding='utf-8') as f:
    f.write(language_context)
with open('src/context/GamificationContext.jsx', 'w', encoding='utf-8') as f:
    f.write(gamification_context)

print("All context providers created!")
