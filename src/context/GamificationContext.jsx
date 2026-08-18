import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const GamificationContext = createContext();

export function GamificationProvider({ children }) {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem('vhg_gamification');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      exploredPlants: ['tulsi', 'neem'],
      viewed3DPlants: ['tulsi'],
      bookmarkedPlants: ['tulsi'],
      quizHistory: [],
      notes: {
        tulsi: 'Excellent for morning herbal tea with fresh ginger and honey for immunity.'
      }
    };
  });

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

  const markPlantExplored = (plantId) => {
    setState(prev => {
      if (prev.exploredPlants.includes(plantId)) return prev;
      return {
        ...prev,
        exploredPlants: [...prev.exploredPlants, plantId]
      };
    });
  };

  const mark3DViewed = (plantId) => {
    setState(prev => {
      if (prev.viewed3DPlants.includes(plantId)) return prev;
      return {
        ...prev,
        viewed3DPlants: [...prev.viewed3DPlants, plantId]
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
      }
    }));
  };

  const recordQuizResult = (score, total, percentage) => {
    setState(prev => {
      const newHistory = [
        { date: new Date().toISOString(), score, total, percentage },
        ...prev.quizHistory
      ];
      return {
        ...prev,
        quizHistory: newHistory
      };
    });
  };

  return (
    <GamificationContext.Provider
      value={{
        ...state,
        markPlantExplored,
        mark3DViewed,
        toggleBookmark,
        saveNote,
        recordQuizResult,
        triggerConfetti
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
}

export const useGamification = () => useContext(GamificationContext);
