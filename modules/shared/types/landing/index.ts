import { colors } from '@md-modules/shared/styles/styled/theme';

export interface PagesType {
  id: string;
  backgroundColorFirst: keyof typeof colors;
  backgroundColorSecond: keyof typeof colors;
  textTitle: string;
  text: {
    textOne: string;
    textTwo?: string;
  };
  background: string;
}

export interface InformationInInformationPageType {
  id: string;
  imgUrl: string;
  textTitle: string;
  text: string;
}

export interface CommentsType {
  id: string;
  text: string;
  user: {
    id: string;
    name: string;
    imgUrl: string;
  };
}

export interface ParallaxContainerType {
  axisX: number;
  axisY: number;
}

export interface GalaxyLeftType {
  scroll: number;
  workspaceHeight: number;
}

export interface PlanetsType {
  transform: number;
  radius?: number;
}
