import i18n from 'i18next';
import en from './languages/en.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: en,
    
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  debug: true,
  resources,
});
