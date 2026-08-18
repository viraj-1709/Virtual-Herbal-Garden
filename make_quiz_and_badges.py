import os

quiz_code = """import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { quizQuestions } from '../data/quizData';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  Flame, 
  Timer, 
  HelpCircle,
  ArrowRight,
  Trophy
} from 'lucide-react';

export default function HerbalQuiz() {
  const { t, lang } = useLanguage();
  const { recordQuizResult, triggerConfetti, xp } = useGamification();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = quizQuestions[currentIndex];

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = currentQ.options[index].isCorrect;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Complete quiz
      const finalScore = score + (currentQ.options[selectedOption]?.isCorrect ? 0 : 0);
      const percentage = Math.round((finalScore / quizQuestions.length) * 100);
      recordQuizResult(finalScore, quizQuestions.length, percentage);
      setIsCompleted(true);
      triggerConfetti();
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6 p-8 md:p-12 rounded-3xl glass-panel border border-emerald-500/30 shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-xl shadow-amber-500/30 animate-bounce">
          <Trophy className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <h2 className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white">
            {t.quiz.congrats}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            You scored <span className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">{score}</span> out of {quizQuestions.length} ({percentage}%)
          </p>
        </div>

        {/* Score & XP Rewards Banner */}
        <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase">Knowledge Level</div>
            <div className="font-heading font-bold text-xl text-emerald-800 dark:text-emerald-300">
              {percentage >= 80 ? 'Master Herbalist 🏆' : percentage >= 50 ? 'Herbal Scholar 🌿' : 'Herbal Apprentice 🌱'}
            </div>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase">{t.quiz.xpEarned}</div>
            <div className="font-heading font-bold text-xl text-amber-600 dark:text-amber-400 flex items-center justify-center gap-1">
              <Sparkles className="w-5 h-5" />
              +{score * 30 + 50} XP
            </div>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="flex items-center gap-2 px-8 py-3.5 mx-auto rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t.quiz.restart}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Quiz Header & Metrics */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl glass-panel border border-emerald-500/30 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
              {currentQ.category}
            </span>
            <div className="font-heading font-extrabold text-base text-slate-800 dark:text-slate-100">
              {t.quiz.question} {currentIndex + 1} of {quizQuestions.length}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 self-end sm:self-auto">
          {streak > 1 && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold animate-bounce">
              <Flame className="w-4 h-4 fill-amber-500" />
              <span>{streak}x Streak</span>
            </div>
          )}

          <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">
            <span>{t.quiz.score}:</span>
            <span className="font-heading font-extrabold text-base">{score}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="rounded-3xl p-6 md:p-8 glass-panel border border-emerald-500/30 shadow-xl space-y-6">
        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white leading-relaxed">
          {currentQ.question[lang] || currentQ.question.en}
        </h3>

        {/* 4 Option Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const showCorrect = isAnswered && option.isCorrect;
            const showWrong = isAnswered && isSelected && !option.isCorrect;

            let btnStyle = 'glass-panel border-emerald-500/20 text-slate-800 dark:text-slate-100 hover:border-emerald-500';
            if (showCorrect) {
              btnStyle = 'bg-emerald-600 text-white border-emerald-500 shadow-md scale-[1.02]';
            } else if (showWrong) {
              btnStyle = 'bg-rose-600 text-white border-rose-500 shadow-md';
            } else if (isAnswered) {
              btnStyle = 'opacity-50 glass-panel';
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between gap-3 ${btnStyle}`}
              >
                <span>{option.text[lang] || option.text.en}</span>
                {showCorrect && <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
                {showWrong && <XCircle className="w-5 h-5 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation Box after Answering */}
        {isAnswered && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-1.5 animate-in fade-in">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <Sparkles className="w-4 h-4" />
              <span>Classical Context & Explanation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentQ.explanation[lang] || currentQ.explanation.en}
            </p>
          </div>
        )}

        {/* Next Question Action */}
        {isAnswered && (
          <div className="flex justify-end pt-2">
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all animate-bounce"
            >
              <span>{currentIndex === quizQuestions.length - 1 ? t.quiz.viewResults : t.quiz.nextQuestion}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
"""

badges_shelf_code = """import React from 'react';
import { useGamification } from '../context/GamificationContext';
import { useLanguage } from '../context/LanguageContext';
import { Award, Lock, CheckCircle2, Sparkles } from 'lucide-react';

export default function BadgesShelf() {
  const { unlockedBadges, exploredPlants, quizHistory } = useGamification();
  const { t } = useLanguage();

  const allBadges = [
    {
      id: 'explorer_novice',
      title: 'Herbal Apprentice',
      description: 'Embarked on the Virtual Herbal Garden journey.',
      icon: '🌱',
      unlocked: true,
      progress: '100%'
    },
    {
      id: 'plant_explorer_5',
      title: 'Plant Explorer',
      description: 'Explored 5 distinct medicinal species in detail.',
      icon: '🌿',
      unlocked: unlockedBadges.includes('plant_explorer_5'),
      progress: `${Math.min(100, Math.round((exploredPlants.length / 5) * 100))}%`
    },
    {
      id: 'ayush_scholar_10',
      title: 'AYUSH Scholar',
      description: 'Explored 10 verified classical medicinal plants.',
      icon: '📜',
      unlocked: unlockedBadges.includes('ayush_scholar_10'),
      progress: `${Math.min(100, Math.round((exploredPlants.length / 10) * 100))}%`
    },
    {
      id: '3d_botanist',
      title: '3D Botanical Specialist',
      description: 'Inspected 3 interactive 3D plants and hotspots.',
      icon: '🔬',
      unlocked: unlockedBadges.includes('3d_botanist'),
      progress: unlockedBadges.includes('3d_botanist') ? '100%' : '50%'
    },
    {
      id: 'herbal_novice',
      title: 'Herbal Quizzer',
      description: 'Completed your first herbal knowledge quiz.',
      icon: '🎯',
      unlocked: unlockedBadges.includes('herbal_novice') || quizHistory.length > 0,
      progress: quizHistory.length > 0 ? '100%' : '0%'
    },
    {
      id: 'master_herbalist',
      title: 'Master Herbalist',
      description: 'Scored 80% or above in the Herbal Knowledge Quiz.',
      icon: '🏆',
      unlocked: unlockedBadges.includes('master_herbalist'),
      progress: unlockedBadges.includes('master_herbalist') ? '100%' : '0%'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          <span>{t.badges.title}</span>
        </h3>
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
          {allBadges.filter(b => b.unlocked).length} of {allBadges.length} Unlocked
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allBadges.map((b) => (
          <div
            key={b.id}
            className={`p-4 rounded-2xl border transition-all ${
              b.unlocked
                ? 'glass-panel border-amber-500/40 bg-amber-500/5 shadow-md hover:scale-105'
                : 'glass-panel border-slate-300/40 dark:border-slate-800 opacity-60'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
                {b.unlocked ? b.icon : <Lock className="w-5 h-5 text-slate-400" />}
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    {b.title}
                  </h4>
                  {b.unlocked && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  {b.description}
                </p>
                
                {/* Progress bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                  <div
                    className="bg-amber-500 h-full"
                    style={{ width: b.progress }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"""

with open('src/components/HerbalQuiz.jsx', 'w', encoding='utf-8') as f:
    f.write(quiz_code)
with open('src/components/BadgesShelf.jsx', 'w', encoding='utf-8') as f:
    f.write(badges_shelf_code)

print("HerbalQuiz.jsx and BadgesShelf.jsx generated.")
