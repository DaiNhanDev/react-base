import { getThemeFromStorage } from 'styles';
import { AuthState } from './auth/types';
import { BroadcastState } from './broadcast/types';
import { ErrorState } from './errors/types';
import { LoadingState } from './loading/types';
import { ThemeState } from './theme/types';
import { UserState } from './user/types';
import { RootState } from 'types';

const themeKey = getThemeFromStorage();

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
  selected: 'light',
};

const user: UserState = {
  user: null,
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
