import { GithubRepoFormState } from 'modules/HomePage/Features/GithubRepoForm/slice/types';
import { UsersState } from 'slices/users/types';
import { ThemeState } from 'slices/theme/types';
import { AuthState } from 'slices/auth/types';
import { ErrorState } from 'slices/errors/types';
import { LoadingState } from 'slices/loading/types';
import { InvoiceState } from 'slices/invoice/types';
import { BroadcastState } from 'slices/broadcast/types';
import { JancodeState } from 'slices/jancode/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  theme: ThemeState;
  errors: ErrorState;
  loading: LoadingState;
  auth: AuthState;
  githubRepoForm: GithubRepoFormState;
  users: UsersState;
  invoice: InvoiceState;
  broadcast: BroadcastState;
  jancode: JancodeState;
}
