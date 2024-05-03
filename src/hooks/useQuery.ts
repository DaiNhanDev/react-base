import React from 'react';
import { useLocation } from 'react-router-dom';

export const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export function useSearchParams<P>(): P {
  const { search } = useLocation();
  const params: P = React.useMemo(() => {
    const searchParams = new URLSearchParams(search);
    const newParams = {};

    searchParams.forEach((value, key) => {
      newParams[key] = value;
    });
    return newParams as P;
  }, [search]);

  return params;
}
