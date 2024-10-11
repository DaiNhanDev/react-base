import 'styled-components';
import { Theme } from './theme/themes';
import { GlobalToken } from 'antd';
import { BaseTheme, AppTheme  } from 'styles';
import { AliasToken, SeedToken } from 'antd/es/theme/internal';

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  export interface DefaultTheme {
    antd: Partial<AliasToken & SeedToken>;
    base: BaseTheme;
    app: AppTheme;
  }
}
