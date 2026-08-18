import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useGamification } from '../context/GamificationContext';
import { useLanguage } from '../context/LanguageContext';
import { plantsData } from '../data/plantsData';
import { 
  User, 
  Bookmark, 
  BookOpen, 
  Award, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  LogOut,
  LogIn,
  UserPlus,
  Database,
  Layers,
  Sparkles,
  Mail,
  Calendar,
  Building
} from 'lucide-react';

export default function UserProfile({ onSelectPlant }) {
  const { currentUser, isAdmin, logout, openAuthModal } = useAuth();
  const { bookmarkedPlants, notes } = useGamification();
  const { t, getPlantCommonName } = useLanguage();

  const savedBookmarks = plantsData.filter(p => bookmarkedPlants.includes(p.id));
  const noteKeys = Object.keys(notes).filter(k => notes[k]?.trim().length > 0);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header Profile Banner */}
      {currentUser ? (
        <div className={`rounded-3xl p-5 sm:p-7 glass-panel border shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5 transition-all ${
          isAdmin 
            ? 'border-amber-500/40 bg-gradient-to-r from-amber-950/20 via-emerald-950/20 to-transparent' 
            : 'border-emerald-500/30 bg-gradient-to-r from-emerald-900/20 via-teal-900/10 to-transparent'
        }`}>
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left w-full sm:w-auto">
            <div className="relative flex-shrink-0">
              <div className={`w-20 h-20 rounded-3xl p-1 shadow-lg ${
                isAdmin 
                  ? 'bg-gradient-to-tr from-amber-500 via-amber-600 to-emerald-700 shadow-amber-600/30' 
                  : 'bg-gradient-to-tr from-emerald-600 via-teal-500 to-teal-700 shadow-emerald-600/30'
              }`}>
                <div className="w-full h-full rounded-[22px] bg-slate-900 flex items-center justify-center text-white font-heading font-extrabold text-2xl">
                  {currentUser.avatarInitials || 'U'}
                </div>
              </div>
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  {currentUser.name}
                </h2>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold flex items-center gap-1 ${
                  isAdmin 
                    ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-400/40' 
                    : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30'
                }`}>
                  {isAdmin ? <ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> : <Sparkles className="w-3.5 h-3.5 text-emerald-600" />}
                  {isAdmin ? 'AYUSH Administrator' : 'Botanical Researcher'}
                </span>
              </div>
              
              <p className="text-xs text-emerald-800 dark:text-emerald-300 font-semibold">
                {currentUser.designation || 'AYUSH Botanical Fellow'}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  {currentUser.email}
                </span>
                {currentUser.institution && (
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-teal-600" />
                    {currentUser.institution}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Member since {currentUser.joinedDate || '2026'}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
            <button
              onClick={() => openAuthModal({ tab: 'signin', role: isAdmin ? 'admin' : 'user' })}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl glass-panel border border-emerald-500/30 hover:border-emerald-500 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-emerald-600" />
              <span>Switch Account</span>
            </button>
            <button
              onClick={logout}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-500/20 text-red-600 dark:text-red-300 hover:bg-red-100 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      ) : (
        /* Guest / Not logged in banner */
        <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-emerald-500/30 shadow-lg bg-gradient-to-r from-emerald-900/20 via-teal-900/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              AYUSH Knowledge Access
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
              Sign In to Your AYUSH Account
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-lg">
              Sign in or create an account as a Botanical Researcher or AYUSH Administrator to save plant bookmarks, log field notes, and access official pharmacopeia records.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => openAuthModal({ tab: 'signin', role: 'user' })}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </button>
            <button
              onClick={() => openAuthModal({ tab: 'signup', role: 'user' })}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-2xl glass-panel border border-emerald-500/40 text-slate-800 dark:text-white font-heading font-extrabold text-xs sm:text-sm hover:border-emerald-500 transition-all flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4 text-emerald-600" />
              <span>Create Account</span>
            </button>
          </div>
        </div>
      )}

      {/* Admin Specific Control & Overview Widget */}
      {isAdmin && (
        <div className="p-5 sm:p-6 rounded-3xl glass-panel border border-amber-500/30 shadow-md bg-amber-500/5 space-y-4">
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
                  AYUSH Botanical Registry & System Overview
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  National Medicinal Plants Board (NMPB) & AYUSH Pharmacopoeia Catalog
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider border border-emerald-500/30">
              System Active
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-emerald-500/20 space-y-1 text-center">
              <div className="font-heading font-extrabold text-xl text-emerald-700 dark:text-emerald-400">
                {plantsData.length}
              </div>
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Flora Species
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-emerald-500/20 space-y-1 text-center">
              <div className="font-heading font-extrabold text-xl text-teal-700 dark:text-teal-400">
                5 Systems
              </div>
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                AYUSH Disciplines
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-emerald-500/20 space-y-1 text-center">
              <div className="font-heading font-extrabold text-xl text-amber-600 dark:text-amber-400">
                3D Interactive
              </div>
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Real-time Models
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/50 border border-emerald-500/20 space-y-1 text-center">
              <div className="font-heading font-extrabold text-xl text-emerald-600 dark:text-emerald-400">
                SIH 2026
              </div>
              <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                PSS03 Compliant
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bookmarks and Notes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Bookmarks */}
        <div className="p-5 rounded-3xl glass-panel border border-emerald-500/20 shadow-md space-y-3.5">
          <div className="flex items-center justify-between border-b border-emerald-500/10 pb-2.5">
            <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{t.profile.bookmarksTitle} ({savedBookmarks.length})</span>
            </h3>
          </div>

          {savedBookmarks.length === 0 ? (
            <p className="text-xs text-slate-500 py-6 text-center">
              {t.profile.noBookmarks}
            </p>
          ) : (
            <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
              {savedBookmarks.map((plant) => (
                <div
                  key={plant.id}
                  onClick={() => onSelectPlant(plant)}
                  className="cursor-pointer p-2.5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-emerald-500 flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <img src={plant.image} alt={plant.name} className="w-10 h-10 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-slate-900 dark:text-white">
                        {getPlantCommonName(plant)}
                      </h4>
                      <p className="text-[10px] italic text-emerald-600 dark:text-emerald-400">
                        {plant.scientificName}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Field Notes */}
        <div className="p-5 rounded-3xl glass-panel border border-emerald-500/20 shadow-md space-y-3.5">
          <div className="flex items-center justify-between border-b border-emerald-500/10 pb-2.5">
            <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-600" />
              <span>{t.profile.notesTitle} ({noteKeys.length})</span>
            </h3>
          </div>

          {noteKeys.length === 0 ? (
            <p className="text-xs text-slate-500 py-6 text-center">
              {t.profile.noNotes}
            </p>
          ) : (
            <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
              {noteKeys.map((pId) => {
                const plant = plantsData.find(p => p.id === pId);
                return (
                  <div key={pId} className="p-3.5 rounded-2xl glass-panel border border-emerald-500/20 space-y-1">
                    <div className="font-heading font-bold text-xs text-emerald-700 dark:text-emerald-300">
                      {plant ? getPlantCommonName(plant) : pId}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                      "{notes[pId]}"
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

