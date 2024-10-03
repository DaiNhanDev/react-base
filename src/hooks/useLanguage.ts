import { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dates } from 'utils/date';

const localLanguage = (localStorage.getItem('lng') as any) || 'en';

export const useLanguage = (): {
  language: any;
  setLanguage: (locale: any) => Promise<void>;
} => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = useCallback(
    async (locale: any) => {
      Dates.setLocale(locale);
      localStorage.setItem('lng', locale);
      await i18n.changeLanguage(locale);
    },
    [i18n],
  );

  useEffect(() => {
    localLanguage && handleChangeLanguage(localLanguage);
  }, [handleChangeLanguage]);

  return useMemo(
    () => ({
      language: i18n.language as any,
      setLanguage: handleChangeLanguage,
    }),
    [handleChangeLanguage, i18n.language],
  );
};
