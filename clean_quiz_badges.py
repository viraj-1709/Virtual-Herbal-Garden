quiz_code = """import React, { useState } from 'react';
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
  ArrowRight,
  Trophy,
  HelpCircle
} from 'lucide-react';

export default function HerbalQuiz() {
  const { t, lang } = useLanguage();
  const { recordQuizResult, triggerConfetti } = useGamification();

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
      <div className="max-w-2xl mx-auto text-center space-y-5 p-6 sm:p-10 rounded-3xl glass-panel border border-emerald-500/30 shadow-xl animate-in zoom-in-95 duration-200">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
          <Trophy className="w-10 h-10" />
        </div>

        <div className="space-y-1">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            {t.quiz.congrats}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            You scored <span className="font-bold text-emerald-600 dark:text-emerald-400 text-base">{score}</span> out of {quizQuestions.length} ({percentage}%)
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800">
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase">Proficiency Level</div>
            <div className="font-heading font-bold text-base text-emerald-800 dark:text-emerald-300">
              {percentage >= 80 ? 'Master Herbalist' : percentage >= 50 ? 'Herbal Scholar' : 'Herbal Apprentice'}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase">{t.quiz.xpEarned}</div>
            <div className="font-heading font-bold text-base text-amber-600 dark:text-amber-400 flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4" />
              +{score * 30 + 50} XP
            </div>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="flex items-center gap-2 px-6 py-3 mx-auto rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.quiz.restart}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-3xl glass-panel border border-emerald-500/30 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
              {currentQ.category}
            </span>
            <div className="font-heading font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100">
              {t.quiz.question} {currentIndex + 1} of {quizQuestions.length}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {streak > 1 && (
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold">
              <Flame className="w-3.5 h-3.5 fill-amber-500" />
              <span>{streak}x Streak</span>
            </div>
          )}

          <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">
            <span>{t.quiz.score}:</span>
            <span className="font-heading font-extrabold text-sm">{score}</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <div className="rounded-3xl p-5 sm:p-7 glass-panel border border-emerald-500/30 shadow-lg space-y-5">
        <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-relaxed">
          {currentQ.question[lang] || currentQ.question.en}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const showCorrect = isAnswered && option.isCorrect;
            const showWrong = isAnswered && isSelected && !option.isCorrect;

            let btnStyle = 'glass-panel border-emerald-500/20 text-slate-800 dark:text-slate-100 hover:border-emerald-500';
            if (showCorrect) {
              btnStyle = 'bg-emerald-600 text-white border-emerald-500 shadow-md';
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
                className={`p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between gap-2 ${btnStyle}`}
              >
                <span>{option.text[lang] || option.text.en}</span>
                {showCorrect && <CheckCircle2 className="w-4 h-4 flex-shrink-0" />}
                {showWrong && <XCircle className="w-4 h-4 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-1 animate-in fade-in">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Classical Scripture Reference</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentQ.explanation[lang] || currentQ.explanation.en}
            </p>
          </div>
        )}

        {isAnswered && (
          <div className="flex justify-end pt-1">
            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
            >
              <span>{currentIndex === quizQuestions.length - 1 ? t.quiz.viewResults : t.quiz.nextQuestion}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
"""

badges_code = """import React from 'react';
import { useGamification } from '../context/GamificationContext';
import { useLanguage } from '../context/LanguageContext';
import { Award, Lock, CheckCircle2, ShieldCheck, Compass, BookMarked, Target, Trophy, Cpu } from 'lucide-react';

export default function BadgesShelf() {
  const { unlockedBadges, exploredPlants, quizHistory } = useGamification();
  const { t } = useLanguage();

  const allBadges = [
    {
      id: 'explorer_novice',
      title: 'Herbal Apprentice',
      description: 'Started the Virtual Herbal Garden exploration.',
      icon: Compass,
      unlocked: true,
      progress: '100%'
    },
    {
      id: 'plant_explorer_5',
      title: 'Plant Explorer',
      description: 'Explored 5 distinct medicinal species in detail.',
      icon: BookMarked,
      unlocked: unlockedBadges.includes('plant_explorer_5'),
      progress: `${Math.min(100, Math.round((exploredPlants.length / 5) * 100))}%`
    },
    {
      id: 'ayush_scholar_10',
      title: 'AYUSH Scholar',
      description: 'Explored 10 verified classical medicinal plants.',
      icon: ShieldCheck,
      unlocked: unlockedBadges.includes('ayush_scholar_10'),
      progress: `${Math.min(100, Math.round((exploredPlants.length / 10) * 100))}%`
    },
    {
      id: '3d_botanist',
      title: '3D Botanical Specialist',
      description: 'Inspected 3 interactive 3D plants and hotspots.',
      icon: Cpu,
      unlocked: unlockedBadges.includes('3d_botanist'),
      progress: unlockedBadges.includes('3d_botanist') ? '100%' : '50%'
    },
    {
      id: 'herbal_novice',
      title: 'Herbal Quizzer',
      description: 'Completed your first herbal knowledge quiz.',
      icon: Target,
      unlocked: unlockedBadges.includes('herbal_novice') || quizHistory.length > 0,
      progress: quizHistory.length > 0 ? '100%' : '0%'
    },
    {
      id: 'master_herbalist',
      title: 'Master Herbalist',
      description: 'Scored 80% or above in the Herbal Knowledge Quiz.',
      icon: Trophy,
      unlocked: unlockedBadges.includes('master_herbalist'),
      progress: unlockedBadges.includes('master_herbalist') ? '100%' : '0%'
    }
  ];

  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-500" />
          <span>{t.badges.title}</span>
        </h3>
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
          {allBadges.filter(b => b.unlocked).length} of {allBadges.length} Unlocked
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {allBadges.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.id}
              className={`p-3.5 rounded-2xl border transition-all ${
                b.unlocked
                  ? 'glass-panel border-amber-500/40 bg-amber-500/5 shadow-sm'
                  : 'glass-panel border-slate-300/40 dark:border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  b.unlocked ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                }`}>
                  {b.unlocked ? <Icon className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {b.title}
                    </h4>
                    {b.unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {b.description}
                  </p>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full overflow-hidden mt-1.5">
                    <div
                      className="bg-amber-500 h-full rounded-full"
                      style={{ width: b.progress }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
"""

with open('src/components/HerbalQuiz.jsx', 'w', encoding='utf-8') as f:
    f.write(quiz_code)
with open('src/components/BadgesShelf.jsx', 'w', encoding='utf-8') as f:
    f.write(badges_code)

print("HerbalQuiz.jsx and BadgesShelf.jsx cleaned without emojis.")
