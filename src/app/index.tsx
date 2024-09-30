import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { SignIn } from 'screens/Auth';
import { useAuth } from 'slices/auth';
import { STORAGE, getLocalStorage } from 'utils/storage';
import { useBroadcast } from 'slices/broadcast';
import { BROADCAST_CHANNEL } from 'constants/broadcast';

export const App: React.FC = () => {
  // const { i18n } = useTranslation();
  const [loading, setLoading] = React.useState(true);

  const { setBroadcastChannel, boardcastChannel } = useBroadcast();

  // const { error } = useError();

  useEffect(() => {
    const userToken = getLocalStorage(STORAGE.USER_TOKEN);

    if (userToken) {
    }

    const timer = setTimeout(() => setLoading(false), 1000);

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

  // useEffect(() => {
  //   setNotification({
  //     type: 'error',
  //     message: 'failure',
  //     description: <p>resultError</p>,
  //   });
  // }, []);

  useEffect(() => {
    if (boardcastChannel) {
      boardcastChannel.addEventListener('message', (event) => {
        const userToken = getLocalStorage(STORAGE.USER_TOKEN);
        if (event.data === BROADCAST_CHANNEL.LOGIN && userToken) {
        }
        // if (event.data === BROADCAST_CHANNEL.LOGOUT) {
        //   // handle Logout
        // }
      });
    }
  }, [boardcastChannel]);

  // if (loading) {
  //   return <Loading />;
  // }
  return <div />;
};
