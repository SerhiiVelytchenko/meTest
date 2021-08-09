import { DefaultTheme, css } from 'styled-components';

export const colors = {
  // yellow
  yellow400: '#e3ce0e',
  yellow500: '#FF8E53',
  // blue
  blue300: '#e5f9ff',
  blue400: '#0070f3',

  // green
  green200: '#87cc43',
  green300: '#2ab736',
  // gray
  gray300: '#C5D0E6',
  gray350: '#505050',
  gray400: '#272d3d',
  gray500: '#21293d',
  gray600: '#191e2d',
  // shades of red
  red200: '#FFCBDB',
  red300: '#B03F35',
  red400: '#AB274F',
  red500: '#ff294b',
  red550: '#b43840',
  red600: '#FE6B8B',
  red650: '#b84268',
  red700: '#7a3547',
  red800: '#371a3a',
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
  tablet: 'screen and (max-width: 768px)',
  laptop: 'screen and (min-width: 1280px)'
};

export const theme: DefaultTheme = {
  colors,
  templates,
  dimensions,
  medias
};
