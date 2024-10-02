import { AliasToken, MappingAlgorithm, OverrideToken } from "antd/es/theme/interface";

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
      algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};

export const antLightColorTheme: Partial<AliasToken> = {
  colorPrimary: '#339CFD',
};

export const antComponentsLightColorTheme: ComponentsConfig = {

}