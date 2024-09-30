/*
 * Media queries utility
 */

// import {
//   css,
//   DefaultTheme,
//   CSSObject,
//   InterpolationFunction,
//   ThemedStyledProps,
//   Interpolation,
//   FlattenInterpolation,
// } from 'styled-components';

// // Iterate through the sizes and create a media template
// export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
//   (acc, label) => {
//     acc[label] = (first: any, ...interpolations: any[]) => css`
//       @media (min-width: ${sizes[label]}px) {
//         ${css(first, ...interpolations)}
//       }
//     `;

//     return acc;
//   },
//   {} as { [key in keyof typeof sizes]: MediaFunction },
// );

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */
// type MediaFunction = <P extends object>(
//   first:
//     | TemplateStringsArray
//     | CSSObject
//     | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
//   ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
// ) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>;

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.medium`
    display: block
  `}
`;
*/

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
