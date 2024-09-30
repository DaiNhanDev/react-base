import { AuthState } from 'slices/auth/types';
import { BroadcastState } from 'slices/broadcast/types';
import { ErrorState } from 'slices/errors/types';
import { LoadingState } from 'slices/loading/types';
import { ThemeState } from 'slices/theme/types';
import { UserState } from 'slices/user/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  auth: AuthState;
  broadcast: BroadcastState;
  errors: ErrorState;
  loading: LoadingState;
  // toast: NotificationState;
  theme: ThemeState;
  user: UserState;
}
