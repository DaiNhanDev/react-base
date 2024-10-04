import {
  AliasToken,
  MappingAlgorithm,
  OverrideToken,
} from 'antd/es/theme/interface';

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};

export const antLightColorTheme: Partial<AliasToken> = {
  colorPrimary: '#339CFD',
};

export const antComponentsLightColorTheme: ComponentsConfig = {
  Layout: {
    siderBg: 'linear-gradient(261.31deg,#006ccf -29.57%,#00509a 121.11%);',
    headerBg: 'transparent'
  },
  Popover: {
    colorBgElevated: '#ffffff'
  }
};
