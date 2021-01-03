import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from "i18next-browser-languagedetector";

import en from './en';
import ru from './ru';
import { EN_LANG, RU_LANG } from '../const';

const initLang = localStorage.getItem('i18nextLng') || EN_LANG;

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      [EN_LANG]: en,
      [RU_LANG]: ru,
    },
    lng: initLang,
    fallbackLng: EN_LANG,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
