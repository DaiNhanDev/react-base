import { MappingAlgorithm, OverrideToken } from "antd/es/theme/interface";
import { AliasToken } from "antd/es/theme/internal";

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
      algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};


export const antDarkColorTheme: Partial<AliasToken>  = {
  colorPrimary: '#339CFD',
};

export const antComponentsDarkColorTheme: ComponentsConfig = {

}