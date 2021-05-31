import { DefaultTheme, css } from 'styled-components';

export interface Colors {
  // blue
  blue400: string;
  // green
  green300: string;
  green200: string;
  // gray
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  // red
  red200: string;
  red300: string;
  red400: string;
  // other
  white: string;
  black: string;
}

export const colors: Colors = {
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
