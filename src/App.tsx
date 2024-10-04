import React from 'react';
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';
import 'typeface-montserrat';
import 'typeface-lato';
import { useLanguage } from './hooks/useLanguage';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import { AppRouter } from 'routes/AppRouter';
import { useThemeSlice } from 'slices';
import { ThemeProvider } from 'styles/ThemeProvider';
import GlobalStyle from 'styles/GlobalStyle';
import { componentsTheme } from 'styles';
// import { themes } from 'styles';

const App: React.FC = () => {
  const { language } = useLanguage();
  const { themeKey } = useThemeSlice();
  useThemeWatcher();

  return (
    <>
      {/* <meta name="theme-color" content={themes[theme].primary} /> */}
      <HelmetProvider>
        <ConfigProvider
          theme={{
            hashed: false,
            cssVar: true,
            token: {
              // colorPrimary: themeObject[theme].primary,
              // colorInfo: themeObject[theme].primary,
              // colorSplit: themeObject[theme].success,
              // colorError: themeObject[theme].error,
              // colorWarning: themeObject[theme].warning,
            },
            components: componentsTheme[themeKey]
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
