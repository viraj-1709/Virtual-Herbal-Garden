import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useGamification } from '../context/GamificationContext';
import { 
  Sprout, 
  Sun, 
  Moon, 
  Globe, 
  Compass, 
  Box, 
  Bot, 
  BookOpen, 
  Award, 
  User, 
  Menu, 
  X,
  Sparkles,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const { lang, setLang, t, languages } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { xp, level } = useGamification();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home, icon: Sprout },
    { id: 'explore', label: t.nav.explore, icon: Compass },
    { id: '3d-garden', label: t.nav.threeD, icon: Box, badge: 'Interactive' },
    { id: 'assistant', label: t.nav.assistant, icon: Bot, badge: 'AI' },
    { id: 'ayush', label: t.nav.ayush, icon: BookOpen },
    { id: 'tours', label: t.nav.tours, icon: MapPin },
    { id: 'quiz', label: t.nav.quiz, icon: Award },
    { id: 'profile', label: t.nav.profile, icon: User },
  ];

  const handleSelectTab = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Top Header (Visible only on mobile/tablet) */}
      <header className="lg:hidden sticky top-0 z-40 w-full glass-panel border-b border-emerald-500/20 px-4 py-3 flex items-center justify-between shadow-sm">
        <button
          onClick={() => handleSelectTab('home')}
          className="flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
            <Sprout className="w-5 h-5" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
              Herbal Garden
            </span>
            <span className="block text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">
              SIH 2026 • AYUSH
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-200"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-700" />}
          </button>

          {/* Menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open Navigation"
            className="p-2 rounded-xl bg-emerald-600 text-white shadow-md focus:outline-none"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in"
        />
      )}

      {/* Primary Sidebar (Fixed on Desktop, Slide-over on Mobile) */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 lg:w-68 xl:w-72 h-screen glass-panel border-r border-emerald-500/20 flex flex-col justify-between p-4 sm:p-5 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } bg-white dark:bg-herbal-darkCard overflow-y-auto`}
      >
        {/* Top Branding Section */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleSelectTab('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg tracking-tight text-slate-900 dark:text-white leading-tight block">
                  Virtual Herbal
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 block">
                  Garden • AYUSH
                </span>
              </div>
            </button>

            {/* Mobile close button inside drawer */}
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hackathon Badge Pill */}
          <div className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/60 dark:border-emerald-800 text-[11px] font-bold text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              SIH 2026 • PSS03
            </span>
            <span className="text-[10px] uppercase font-extrabold tracking-wider bg-emerald-600 text-white px-1.5 py-0.5 rounded-md">
              Govt. AYUSH
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 pt-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 pb-1">
              Menu Navigation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-700 dark:hover:text-emerald-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

        </div>

        {/* Bottom Section: Gamification, Language, Theme, Profile */}
        <div className="space-y-4 pt-6 border-t border-emerald-500/10">
          
          {/* Gamification Progress Widget */}
          <div
            onClick={() => handleSelectTab('profile')}
            className="cursor-pointer p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300/70 dark:border-amber-800/60 space-y-1.5 transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between text-xs font-bold text-amber-900 dark:text-amber-300">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                Level {level} Explorer
              </span>
              <span>{xp} XP</span>
            </div>
            <div className="w-full bg-amber-200/60 dark:bg-amber-900/60 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-600 h-full rounded-full transition-all"
                style={{ width: `${Math.min(100, (xp % 200) / 2)}%` }}
              />
            </div>
          </div>

          {/* Multilingual Selector Pills (Clean Native Scripts) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                Language
              </span>
              <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">
                {languages.find(l => l.code === lang)?.label}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`py-1.5 rounded-xl text-xs font-bold transition-all text-center ${
                    lang === l.code
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                  }`}
                >
                  {l.short}
                </button>
              ))}
            </div>
          </div>

          {/* Dark/Light Switch & Profile Row */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-xl glass-panel border border-emerald-500/20 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-emerald-500 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-700" />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>

            <button
              onClick={() => handleSelectTab('profile')}
              title="My Profile"
              className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-xs shadow-md ring-2 ring-emerald-500/30 hover:ring-emerald-500 transition-all"
            >
              VS
            </button>
          </div>

        </div>
      </aside>
    </>
  );
}
