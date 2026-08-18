import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Sprout, 
  Sun, 
  Moon, 
  Globe, 
  Compass, 
  Box, 
  BookOpen, 
  Award, 
  User, 
  Menu, 
  X, 
  MapPin
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenSearch }) {
  const { lang, setLang, t, languages } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home, icon: Sprout },
    { id: 'explore', label: t.nav.explore, icon: Compass },
    { id: '3d-garden', label: t.nav.threeD, icon: Box },
    { id: 'ayush', label: t.nav.ayush, icon: BookOpen },
    { id: 'tours', label: t.nav.tours, icon: MapPin },
    { id: 'quiz', label: t.nav.quiz, icon: Award },
    { id: 'profile', label: t.nav.profile, icon: User },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-emerald-500/20 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Branding */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 via-garden-600 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
              <Sprout className="w-7 h-7 animate-leaf-sway" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl md:text-2xl tracking-tight bg-gradient-to-r from-emerald-800 via-garden-700 to-teal-800 dark:from-emerald-300 dark:via-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
                  Virtual Herbal Garden
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 uppercase tracking-widest">
                  SIH 2026
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                Explore • Learn • Preserve AYUSH Wisdom
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-700 dark:hover:text-emerald-300'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Tools: Lang, Theme, Profile */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold glass-panel border border-emerald-500/30 text-slate-700 dark:text-slate-200 hover:border-emerald-500 transition-all shadow-sm"
              >
                <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{languages.find(l => l.code === lang)?.flag}</span>
                <span className="hidden md:inline">{languages.find(l => l.code === lang)?.label.split(' ')[0]}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl glass-panel shadow-2xl border border-emerald-500/30 p-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1.5">
                    Select Language
                  </div>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                        lang === l.code
                          ? 'bg-emerald-600 text-white'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/60'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {lang === l.code && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl glass-panel border border-emerald-500/30 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all shadow-sm hover:scale-105"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-700" />}
            </button>

            {/* User Avatar Button */}
            <button
              onClick={() => setActiveTab('profile')}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-sm shadow-md ring-2 ring-emerald-500/30 hover:ring-emerald-500 transition-all"
            >
              VS
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-200"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-emerald-600 text-white shadow-md focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-emerald-500/20 glass-panel px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border ${
                  lang === l.code
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'glass-panel border-emerald-500/20 text-slate-700 dark:text-slate-200'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
