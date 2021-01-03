import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import ru from './ru';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      'en-EN': en,
      'ru-RU': ru,
    },
    lng: 'en-EN',
    fallbackLng: 'en-EN',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
