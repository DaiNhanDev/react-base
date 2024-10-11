/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';

export const PageNofound: React.FC = lazyLoad(
  () => import('./index'),
  (module) => module.default,
);
