import { Loading } from 'components';
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

type Unpromisify<T> = T extends Promise<infer P> ? P : never;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const lazyLoad = <
  T extends Promise<any>,
  U extends React.ComponentType<any>,
>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then((module) => ({ default: selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  return (props: React.ComponentProps<U>): JSX.Element => (
    <Suspense
      fallback={
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      }
    >
      <LazyComponent {...props} />
    </Suspense>
  );
};
