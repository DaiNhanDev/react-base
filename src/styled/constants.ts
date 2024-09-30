/*
 * Media queries utility
 */

import {
  // css,
  DefaultTheme,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
  FlattenInterpolation,
} from 'styled-components';

export const BORDER_RADIUS = '7px';

export const BASE_COLORS = {
  white: '#ffffff',
  black: '#000000',
  green: '#008000',
  orange: '#ffb155',
  gray: '#808080',
  lightgrey: '#c5d3e0',
  violet: '#ee82ee',
  lightgreen: '#89dca0',
  pink: '#ffc0cb',
  blue: '#0000ff',
  skyblue: '#35a0dc',
  red: '#ff5252',
};

export const LAYOUT = {
  mobile: {
    paddingVertical: '0.75rem',
    paddingHorizontal: '1rem',
    headerHeight: '4.25rem',
    headerPadding: '1rem',
  },
  desktop: {
    paddingVertical: '1.25rem',
    paddingHorizontal: '2.25rem',
    headerHeight: '5.625rem',
  },
};

export const FONT_FAMILY = {
  main: 'Montserrat',
  secondary: 'Lato',
};

export const FONT_SIZE = {
  xxs: '0.75rem',
  xs: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '1.625rem',
  xxxxl: '2rem',
};

export const FONT_WEIGHT = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

export const BREAKPOINTS = {
  xs: 360,
  sm: 568,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1920,
};

const getMedia = <T extends number>(breakpoint: T): string =>
  `(min-width: ${breakpoint}px)`;

export const media = {
  xs: getMedia(BREAKPOINTS.xs),
  sm: getMedia(BREAKPOINTS.sm),
  md: getMedia(BREAKPOINTS.md),
  lg: getMedia(BREAKPOINTS.lg),
  xl: getMedia(BREAKPOINTS.xl),
  xxl: getMedia(BREAKPOINTS.xxl),
};

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */
type MediaFunction = <P extends object>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>;

export class Media {
  static SIZE = BREAKPOINTS;

  static getMedia(breakpoint) {
    return `@media only screen and (min-width: ${breakpoint}px)`;
  }
  static greaterThan(windowSize: number) {
    return `@media only screen and (min-width: ${windowSize}px)`;
  }

  static lessThan(windowSize: number) {
    return `@media only screen and (max-width: ${windowSize - 1}px)`;
  }

  static xs() {
    return Media.getMedia(BREAKPOINTS.xs);
  }

  static sm() {
    return Media.getMedia(BREAKPOINTS.sm);
  }

  static md() {
    return Media.getMedia(BREAKPOINTS.md);
  }

  static lg() {
    return Media.getMedia(BREAKPOINTS.lg);
  }

  static xl() {
    return Media.getMedia(BREAKPOINTS.xl);
  }

  static xxl() {
    return Media.getMedia(BREAKPOINTS.xxl);
  }
}
