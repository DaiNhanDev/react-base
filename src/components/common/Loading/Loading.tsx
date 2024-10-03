import React from 'react';
import styled from 'styled-components';
import { GlobalSpinner } from 'components/Common/GlobalSpinner';
import { useThemeSlice } from 'slices';

interface LoadingProps {
  size?: string;
  color?: string;
}

export const Loading: React.FC<LoadingProps> = ({ size, color }) => {
  const { theme: { app } } = useThemeSlice()
  const spinnerColor = color || app.spinnerBase;

  return (
    <SpinnerContainer>
      <GlobalSpinner size={size} color={spinnerColor} />
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
