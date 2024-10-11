import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as vi from './vi';

import { convertLanguageJsonToObject } from './translations';

export const translationsJson = {
  vi: {
    translation: vi,
  },
};

// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(vi);

export const i18n = i18next
  .use(initReactI18next)
  .init({
    resources: translationsJson,
    fallbackLng: 'vi',
    debug:
      process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
