import 'styled-components';
import { colors, templates, dimensions, medias } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    templates: typeof templates;
    dimensions: typeof dimensions;
    medias: typeof medias;
  }
}
