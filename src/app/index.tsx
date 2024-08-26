/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
// import { Switch, Route, BrowserRouter } from 'react-router-dom';

// import { HomePage } from 'screens/HomePage/Loadable';
// import { NotFoundPage } from 'screens/NotFoundPage/Loadable';
// import { useTranslation } from 'react-i18next';
// import { SignIn } from 'screens/Auth';
import { useAuth } from 'slices/auth';
// import { useError } from 'slices/errors';
import { STORAGE, getLocalStorage } from 'utils/storage';
import AppRoutes from 'routes';
import Loading from 'components/Loading';
import { useBroadcast } from 'slices/broadcast';
import { BROADCAST_CHANNEL } from 'constant';

export const App: React.FC = () => {
  // const { i18n } = useTranslation();
  const [loading, setLoading] = React.useState(true);

  const { getMe } = useAuth();
  const { setBroadcastChannel, boardcastChannel } = useBroadcast();

  // const { error } = useError();

  useEffect(() => {
    const userToken = getLocalStorage(STORAGE.USER_TOKEN);

    if (userToken) {
      getMe();
    }

    const timer = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
          getMe();
        }
        if (event.data === BROADCAST_CHANNEL.LOGOUT) {
          // handle Logout
        }
      });
    }
  }, [boardcastChannel]);

  if (loading) {
    return <Loading />;
  }
  return <AppRoutes />;
};
