import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationPL from './locales/pl/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  nl: {
    translation: translationPL,
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
