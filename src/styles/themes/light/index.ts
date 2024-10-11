import {
  AliasToken,
  MappingAlgorithm,
  OverrideToken,
  SeedToken
} from 'antd/es/theme/interface';

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};

export const antLightColorTheme: Partial<AliasToken & SeedToken> = {
  // colorPrimary: '#01509A',
  // colorWarning: '#FFB155',
  // colorSuccess: '#30AF5B',
  // colorError: '#FF5252',
  // colorBgBase: '#ffffff',
  // colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
  // colorBgContainerDisabled: '#c5d3e0',
  // colorBgContainer: '#ffffff'
  
};

export const antComponentsLightColorTheme: ComponentsConfig = {
  Layout: {
    siderBg: 'linear-gradient(261.31deg,#006ccf -29.57%,#00509a 121.11%);',
    headerBg: 'transparent'
  },
  Menu: {
    itemColor: '#ffffff',
    itemSelectedColor: '#FFB765',    
    itemSelectedBg: 'transparent',
    iconSize: 18,
    fontSize: 16,
    itemHoverColor: '#FFB765',
    groupTitleColor: '#FFB765',
  },
};
