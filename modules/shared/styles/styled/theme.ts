import { DefaultTheme, css } from 'styled-components';

export const colors = {
  // yellow
  yellow400: '#e3ce0e',
  // blue
  blue400: '#0070f3',
  // green
  green200: '#87cc43',
  green300: '#2ab736',
  // gray
  gray300: '#C5D0E6',
  gray400: '#272d3d',
  gray500: '#21293d',
  gray600: '#191e2d',
  // red
  red200: '#FFCBDB',
  red300: '#B03F35',
  red400: '#AB274F',
  red500: '#ff294b',
  // other
  white: '#fff',
  black: '#000',
  // undefined
  undefined: undefined
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
  pageMaxWidth: 1071,
  pageMinWidth: 320
};

export const medias = {
  phone: 'max-width: 480px',
  tablet: 'max-width: 768px'
};

export const theme: DefaultTheme = {
  colors,
  templates,
  dimensions,
  medias
};
