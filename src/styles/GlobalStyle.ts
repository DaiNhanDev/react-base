import { createGlobalStyle } from 'styled-components';
import { resetCss } from './resetCss';

export default createGlobalStyle`
  ${resetCss}
  a {
    color: ${({ theme }) => theme.antd.colorPrimary};
    &:hover,:active {
      color: ${({ theme }) => theme.antd.colorLinkHover};
    }
  }
  
`;
