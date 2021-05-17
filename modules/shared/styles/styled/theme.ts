import { DefaultTheme, css } from 'styled-components';

export const colors = {
  // blue
  blue400: '#0070f3',
  // green
  green300: '#2ab736',
  green200: '#87cc43',
  // gray
  gray300: '#C5D0E6',
  gray400: '#272d3d',
  gray500: '#21293d',
  gray600: '#191e2d',
  // red
  red200: '#FFCBDB',
  red300: '#B03F35',
  red400: '#AB274F',
  // other
  white: '#fff',
  black: '#000'

};

export const templates = {
  absolute: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  centerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerItems: css`
    display: flex;
    align-items: center;
  `
};

export const dimensions = {
  pageMaxWidth: 1071
};

export const theme: DefaultTheme = {
  colors,
  templates,
  dimensions
};
