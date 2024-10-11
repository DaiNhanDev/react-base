import React, { useEffect, useMemo, useState } from 'react';
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import 'typeface-montserrat';
import 'typeface-lato';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import { AppRouter } from 'routes/AppRouter';
import { useThemeSlice } from 'slices';
import { ThemeProvider } from 'styles/ThemeProvider';
import GlobalStyle from 'styles/GlobalStyle';
import { componentsTheme, tokensTheme } from 'styles';
import { useBroadcast } from 'slices/broadcast';
import { getLocalStorage, STORAGE } from 'utils/storage';
import { BROADCAST_CHANNEL } from 'constants/broadcast';
import { useAuth } from 'slices/auth';
import { useLoading } from 'slices/loading';
import { Loading } from 'components';

const App: React.FC = () => {
  const { themeKey } = useThemeSlice();
  const { setBroadcastChannel, boardcastChannel } = useBroadcast();
  const { setAuthentication, authenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  // const { loadings } = useLoading();
  useThemeWatcher();
  const userToken = getLocalStorage(STORAGE.USER_TOKEN);

  useEffect(() => {
    if (userToken && !authenticated) {
      setAuthentication({ authenticated: true });
    }
    if (!userToken && authenticated) {
      setAuthentication({ authenticated: false });
    }
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [authenticated, userToken]);
  // console.log('====> loadings: ', loadings);
  useEffect(() => {
    const broadcast = new BroadcastChannel('auth');
    setBroadcastChannel({ broadcast });

    return () => {
      broadcast.close();
    };
  }, []);

  useEffect(() => {
    if (boardcastChannel) {
      boardcastChannel.addEventListener('message', (event) => {
        const userToken = getLocalStorage(STORAGE.USER_TOKEN);
        if (event.data === BROADCAST_CHANNEL.LOGIN && userToken) {
        }
      });
    }
  }, [boardcastChannel]);

  const renderApp = useMemo(() => {
    if (loading) return <Loading />;

    return <AppRouter />;
  }, [loading]);

  return (
    <HelmetProvider>
      <ConfigProvider
        theme={{
          hashed: false,
          cssVar: true,
          token: tokensTheme[themeKey],
          components: componentsTheme[themeKey],
        }}
      >
        <ThemeProvider>
          <GlobalStyle />
          {renderApp}
        </ThemeProvider>
      </ConfigProvider>
    </HelmetProvider>
  );
};

export default App;
