/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'components/LoadingIndicator';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePage: React.FC = lazyLoad(
  () => import('./index'),
  (module) => module.HomePage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);
