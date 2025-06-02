// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

const resources = {
  en: {
    translation: enTranslations
  },
  es: {
    translation: esTranslations
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language
    debug: process.env.NODE_ENV === 'development',
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false // React already does escaping
    },

    // Namespace configuration
    defaultNS: 'translation',
    ns: ['translation']
  });

export default i18n;