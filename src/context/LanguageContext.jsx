import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN', native: 'English' },
  { code: 'hi', label: 'Hindi', short: 'HI', native: 'हिंदी' },
  { code: 'ta', label: 'Tamil', short: 'TA', native: 'தமிழ்' },
  { code: 'bn', label: 'Bengali', short: 'BN', native: 'বাংলা' }
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
