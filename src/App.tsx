import React from 'react';
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';
import GlobalStyle from 'styles/GlobalStyle';
import 'typeface-montserrat';
import 'typeface-lato';
import { useLanguage } from './hooks/useLanguage';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import { themeObject } from 'styles/themes/themeVariables';
import { AppRouter } from 'routes/AppRouter';
import { useThemeSlice } from 'slices';
import { ThemeProvider } from 'styled/theme/ThemeProvider';

const App: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useThemeSlice();
  useThemeWatcher();

  return (
    <>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <HelmetProvider>
        <ConfigProvider
          theme={{
            hashed: false,
            cssVar: true,
            token: {
              colorPrimary: themeObject[theme].primary,
              colorInfo: themeObject[theme].primary,
              colorSplit: themeObject[theme].success,
              colorError: themeObject[theme].error,
              colorWarning: themeObject[theme].warning,
            },
          }}
          locale={language === 'en' ? enUS : deDe}
        >
          <ThemeProvider>
            <GlobalStyle />
            <AppRouter />
          </ThemeProvider>
        </ConfigProvider>
      </HelmetProvider>
    </>
  );
};

export default App;
