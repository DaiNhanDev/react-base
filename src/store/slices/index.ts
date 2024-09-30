import userReducer from 'store/slices/userSlice';
import authReducer from 'store/slices/authSlice';
import nightModeReducer from 'store/slices/nightModeSlice';
import themeReducer from 'store/slices/themeSlice';
import pwaReducer from 'store/slices/pwaSlice';

export default {
  user: userReducer,
  auth: authReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  pwa: pwaReducer,
};
