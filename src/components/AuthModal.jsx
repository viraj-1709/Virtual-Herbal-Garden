import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Sprout, 
  ShieldCheck, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  X, 
  AlertCircle, 
  ArrowRight,
  UserCheck
} from 'lucide-react';

export default function AuthModal() {
  const { 
    isAuthModalOpen, 
    closeAuthModal, 
    authModalTab, 
    setAuthModalTab, 
    authRoleTab, 
    setAuthRoleTab,
    login, 
    signup 
  } = useAuth();

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Clear errors on tab or role switch
  useEffect(() => {
    setError('');
  }, [authModalTab, authRoleTab, isAuthModalOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isAuthModalOpen) {
        closeAuthModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthModalOpen, closeAuthModal]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (authModalTab === 'signin') {
        const res = login({ 
          email, 
          password, 
          role: authRoleTab 
        });
        if (!res.success) {
          setError(res.error);
          setLoading(false);
        }
      } else {
        const res = signup({ 
          name, 
          email, 
          password, 
          role: authRoleTab
        });
        if (!res.success) {
          setError(res.error);
          setLoading(false);
        }
      }
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Dark backdrop blur overlay */}
      <div 
        onClick={closeAuthModal}
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity animate-in fade-in" 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md my-8 rounded-3xl glass-panel bg-white/95 dark:bg-herbal-darkCard/95 border border-emerald-500/30 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 p-5 text-white relative">
          <button
            onClick={closeAuthModal}
            aria-label="Close"
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white/90 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner">
              {authRoleTab === 'admin' ? (
                <ShieldCheck className="w-6 h-6 text-amber-300" />
              ) : (
                <Sprout className="w-6 h-6 text-emerald-200" />
              )}
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white">
                {authRoleTab === 'admin' ? 'AYUSH Admin Portal' : 'AYUSH Botanical Portal'}
              </h3>
              <p className="text-xs text-emerald-100 font-medium">
                {authModalTab === 'signin' 
                  ? (authRoleTab === 'admin' ? 'Sign in to access administrator privileges' : 'Sign in to your botanical research account')
                  : (authRoleTab === 'admin' ? 'Register a new AYUSH administrator account' : 'Create your botanical explorer profile')}
              </p>
            </div>
          </div>

          {/* Role Switcher Tabs */}
          <div className="mt-4 grid grid-cols-2 gap-1.5 p-1 bg-black/25 rounded-2xl border border-white/10">
            <button
              type="button"
              onClick={() => {
                setAuthRoleTab('user');
                setError('');
              }}
              className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
                authRoleTab === 'user'
                  ? 'bg-white text-emerald-900 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              User / Researcher
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthRoleTab('admin');
                setError('');
              }}
              className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
                authRoleTab === 'admin'
                  ? 'bg-amber-400 text-slate-900 shadow-md font-extrabold'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              AYUSH Admin
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">

          {/* Error Banner */}
          {error && (
            <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-700 dark:text-red-300 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            
            {/* SIGN UP: Name Field */}
            {authModalTab === 'signup' && (
              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-emerald-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            {/* Email Address */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={authRoleTab === 'admin' ? "admin@ayush.gov.in" : "user@ayush.gov.in"}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-emerald-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-emerald-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-2 py-3 rounded-2xl text-xs sm:text-sm font-heading font-extrabold flex items-center justify-center gap-2 shadow-lg transition-all ${
                authRoleTab === 'admin'
                  ? 'bg-gradient-to-r from-amber-600 to-emerald-700 hover:from-amber-500 hover:to-emerald-600 text-white shadow-amber-600/20'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white shadow-emerald-600/25'
              } disabled:opacity-70 active:scale-[0.98]`}
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {authModalTab === 'signin' ? (
                    <>
                      <span>Sign In as {authRoleTab === 'admin' ? 'Admin' : 'User'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Sign Up as {authRoleTab === 'admin' ? 'Admin' : 'User'}</span>
                      <UserCheck className="w-4 h-4" />
                    </>
                  )}
                </>
              )}
            </button>

          </form>

          {/* Footer toggle text */}
          <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400">
            {authModalTab === 'signin' ? (
              <p>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setAuthModalTab('signup');
                    setError('');
                  }}
                  className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setAuthModalTab('signin');
                    setError('');
                  }}
                  className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Sign In
                </button>
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

