import { AuthState } from './auth/types';
import { BroadcastState } from './broadcast/types';
import { ErrorState } from './errors/types';
import { LoadingState } from './loading/types';
import { ThemeState } from './theme/types';
import { UserState } from './user/types';
import { RootState } from 'types';
const avatarImg = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';

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
  user: {
    id: 1,
    firstName: 'Chris',
    lastName: 'Johnson',
    imgUrl: avatarImg,
    userName: '@john1989',
    email: {
      name: 'chris.johnson@altence.com',
      verified: false,
    },
    phone: {
      number: '+18143519459',
      verified: true,
    },
    sex: 'male',
    birthday: '01/26/2022',
    lang: 'en',
    country: 'GB',
    city: 'London',
    address1: '14 London Road',
    zipcode: 5211,
    website: 'altence.com',
    socials: {
      twitter: '@altence_team',
      facebook: 'https://facebook.com/groups/1076577369582221',
      linkedin: 'https://linkedin.com/company/altence',
    },
  },
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
