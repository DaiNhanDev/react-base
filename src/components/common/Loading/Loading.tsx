import React from 'react';
import styled from 'styled-components';
// import { GlobalSpinner } from 'components/common/GlobalSpinner/GlobalSpinner';
import { useAppSelector } from 'hooks/reduxHooks';
// import { themeObject } from 'styles/themes/themeVariables';

interface LoadingProps {
  size?: string;
  color?: string;
}

export const Loading: React.FC<LoadingProps> = ({ size, color }) => {
  // const theme = useAppSelector((state) => state.theme.theme);
  // const spinnerColor = color || themeObject[theme].spinnerBase;

  return (
    <SpinnerContainer>
      {/* <GlobalSpinner size={size} color={'red'} /> */}
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
