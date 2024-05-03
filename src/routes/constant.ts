import HomeLayout from 'layouts/HomeLayout/home';
import { SignIn } from 'screens/Auth/SignIn/Loadable';
import { HomePage } from 'screens/HomePage/Loadable';

export const RoutesName = {
  LOGIN: '/login',
  HOME: '/',
};

export const PUBLIC_ROUTES = [
  {
    path: RoutesName.LOGIN,
    component: SignIn,
    layout: HomeLayout,
    exact: true,
  },
];

export const PRIVATE_ROUTES = [
  {
    path: RoutesName.HOME,
    component: HomePage,
    layout: HomeLayout,
    exact: true,
  },
];

export const CUSTOME_ROUTE = [];

export default RoutesName;
