import 'styled-components';
import { Theme } from './themes';
import { GlobalToken } from 'antd';

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    antd: GlobalToken;
  }
}
