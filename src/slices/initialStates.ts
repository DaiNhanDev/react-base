import { getThemeFromStorage } from 'styled';
import { AuthState } from './auth/types';
import { BroadcastState } from './broadcast/types';
import { ErrorState } from './errors/types';
import { LoadingState } from './loading/types';
import { ThemeState } from './theme/types';
import { UserState } from './user/types';
import { readUser } from 'services/localStorage.service';
import { RootState } from 'types';

const themeKey = getThemeFromStorage() || 'system';

const auth: AuthState = {
  token: null,
};

const broadcast: BroadcastState = {
  boardcastChannel: null,
};

const errors: ErrorState = {
  error: null,
};

const loading: LoadingState = {
  loading: false,
};

// const toast:  = {
//   notification: null,
// };

const theme: ThemeState = {
  selected: themeKey,
  theme: 'light',
};

const user: UserState = {
  user: readUser(),
};

export const initialStates: RootState = {
  auth,
  broadcast,
  errors,
  loading,
  // notification,
  theme,
  user,
};
