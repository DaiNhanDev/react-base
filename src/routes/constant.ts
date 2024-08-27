import HomeLayout from 'layouts/HomeLayout/home';
// import { Categories } from 'modules/Categories/Loadable';
import { Auctions } from 'modules/Auctions/Loadable';

import { Detail } from 'modules/Detail/Loadable';

export const RoutesName = {
  LOGIN: '/login',
  HOME: '/',
  CATEGORIES: '/',
  AUCTIONS: '/',
  DETAIL: '/detail/:id',
};

export const PUBLIC_ROUTES = [
  {
    path: RoutesName.AUCTIONS,
    component: Auctions,
    layout: HomeLayout,
    exact: true,
  },
  {
    path: RoutesName.DETAIL,
    component: Detail,
    layout: HomeLayout,
    exact: true,
  },
];

export const PRIVATE_ROUTES = [
  // {
  //   path: RoutesName.HOME,
  //   component: HomePage,
  //   layout: HomeLayout,
  //   exact: true,
  // },
];

export const CUSTOME_ROUTE = [];

export default RoutesName;
