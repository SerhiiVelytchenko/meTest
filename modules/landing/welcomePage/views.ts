import styled from 'styled-components';
import { WrapperPage, Label, Text, Button, Picture, WrapperGrid } from '../views';

export const WrapperWelcomePage = styled(WrapperPage)``;

export const Parallax = styled.div`
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    top: 0%;
    left: 70%;
    width: 30%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.red100};
    transform: skew(40deg);
    z-index: -100;
  }
`;

export const WrapperWelcomePageGrid = styled(WrapperGrid)`
  grid-template-areas:
    'labelCompany labelMenu'
    'text parallax';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.01fr 0.5fr 1fr;
  @media ${({ theme }) => theme.medias.tablet} {
    grid-template-areas:
      'labelCompany labelMenu'
      'parallax parallax'
      'text text';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.1fr 0.1fr 0.1fr;
  } ;
`;

export const LabelCompany = styled(Label)`
  background-image: url('/static/images/CultumHome/logo@3x.png');
  background-size: 100px;
  background-position: center left;
  margin: 0 0 0 50px;
  grid-area: labelCompany;
`;

export const LabelMenu = styled(Label)`
  background: url('/static/images/CultumHome/menu@3x.png') center / cover no-repeat;
  background-size: 40px;
  background-position: center right;
  margin: 0 50px 0 0;
  grid-area: labelMenu;
`;

export const ContainerWelcomePage = styled.div`
  min-width: 200px;
  max-width: 600px;
  padding: 0 0 0 50px;
  grid-area: text;
  @media ${({ theme }) => theme.medias.tablet} {
    padding: 0px;
    max-width: 840px;
  } ;
`;

export const TextTitleWelcomePage = styled(Text)`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.black};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 20px;
    text-align: center;
    margin: 0;
  } ;
`;

export const TextWelcomePage = styled(Text)`
  font-size: 1.5em;
  line-height: 1.4;
  font-weight: 300;
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.gray400};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 16px;
    text-align: center;
    margin: 10px 0 10px 0;
  } ;
`;

export const ButtonWelcomePage = styled(Button)`
  margin: 0;
`;

export const WrapperParallaxContainer = styled.div`
  background-image: url('https://cultum.io/static/images/cultum/cultum.svg');
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  min-width: 480px;
  max-width: 560px;
  height: 500px;
  grid-area: parallax;
  @media ${({ theme }) => theme.medias.tablet} {
    background-size: 60%;
    max-width: 840px;
  } ;
`;

export const PictureTopPlanet = styled(Picture)`
  position: absolute;
  background-image: url('https://cultum.io/static/images/cultum/left-planet.svg');
  background-size: 40px;
  width: 45px;
  height: 45px;
  top: -10%;
  right: 0px;
  bottom: 0px;
  left: 20%;
  @media ${({ theme }) => theme.medias.tablet} {
    left: 40%;
    top: -5%;
  } ;
`;

export const PictureRightPlanet = styled(Picture)`
  position: absolute;
  background-image: url('https://cultum.io/static/images/cultum/right-planet.svg');
  background-size: 90px;
  width: 100px;
  height: 90px;
  top: 27%;
  right: 0px;
  bottom: 0px;
  left: 65%;
  z-index: 2;
  @media ${({ theme }) => theme.medias.tablet} {
    left: 65%;
    background-size: 80px;
  } ;
`;

export const WrapperButton = styled(WrapperGrid)``;
