import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { BASE_COLORS } from 'styles';
import { BaseButton as BaseButton } from 'components/Common';
import { useThemeSlice } from 'slices';

const Button = styled(BaseButton)<{ $isDark: boolean }>`
  color: ${(props) => BASE_COLORS[props.$isDark ? 'white' : 'black']};
  background: ${(props) => BASE_COLORS[props.$isDark ? 'black' : 'white']};
  border-radius: 50px;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  align-items: center;

  &:hover,
  &:active,
  &:focus {
    color: ${(props) => BASE_COLORS[props.$isDark ? 'black' : 'white']};
    background: ${(props) => BASE_COLORS[props.$isDark ? 'white' : 'black']};
  }
`;

const GithubIcon = styled(GithubOutlined)`
  font-size: 1.5rem;
  vertical-align: middle;
`;

export const GitHubButton: React.FC = (props) => {
  const { themeKey } = useThemeSlice();
  return (
    <Button
      type="default"
      href="https://github.com/altence/lightence-admin"
      icon={<GithubIcon />}
      target="_blank"
      $isDark={themeKey === 'dark'}
      {...props}
    >
      GitHub
    </Button>
  );
};
