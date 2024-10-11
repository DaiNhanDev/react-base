// Update your breakpoints if you want
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

export class Media {
  static SIZE = BREAKPOINTS;

  static getMedia(breakpoint: number) {
    return `@media only screen and (min-width: ${breakpoint}px)`;
  }
  static greaterThan(windowSize: number) {
    return `@media only screen and (min-width: ${windowSize}px)`;
  }

  static lessThan(windowSize: number) {
    return `@media only screen and (max-width: ${windowSize - 1}px)`;
  }

  static xs = Media.getMedia(BREAKPOINTS.xs);
  static sm = Media.getMedia(BREAKPOINTS.sm);

  static md = Media.getMedia(BREAKPOINTS.md);

  static lg = Media.getMedia(BREAKPOINTS.lg);

  static xl = Media.getMedia(BREAKPOINTS.xl);

  static xxl = Media.getMedia(BREAKPOINTS.xxl);
}
