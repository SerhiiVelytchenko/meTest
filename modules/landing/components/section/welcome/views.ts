import styled from 'styled-components';
import { Text, Button, Picture } from '@md-modules/landing/views';

export const WrapperWelcome = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  height: 100%;
`;

export const WrapperWelcomeContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0%;
    left: 70%;
    width: 30%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.red100};
    transform: skew(40deg);
    z-index: -1;
  }
`;

export const WrapperLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.div`
  min-width: 180px;
  height: 100px;
  background-repeat: no-repeat;
  z-index: 2;
  @media ${({ theme }) => theme.medias.tablet} {
    height: 40px;
    width: 50px;
  } ;
`;

export const LabelCompany = styled(Label)`
  background-image: url('/static/images/CultumHome/logo@3x.png');
  background-size: 100px;
  background-position: center left;
  margin: 0 0 0 50px;

  @media ${({ theme }) => theme.medias.tablet} {
    margin: 0 0 0 10px;
  } ;
`;

export const LabelMenu = styled(Label)`
  background-image: url('/static/images/CultumHome/menu@3x.png');
  background-size: 40px;
  background-position: center;
  margin: 0 50px 0 0;
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 0;
  } ;
`;

export const WrapperContainer = styled.div`
  padding: 0 450px 0 50px;

  @media ${({ theme }) => theme.medias.tablet} {
    padding: 360px 0 0 0;
  } ;
`;

export const TextTitleWelcomeContainer = styled(Text)`
  max-width: 700px;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.black};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 20px;
    text-align: center;
    margin: 0;
  } ;
`;

export const TextWelcomeContainer = styled(Text)`
  max-width: 700px;
  font-size: 1.5em;
  font-weight: 300;
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.gray400};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 16px;
    text-align: center;
    margin: 10px 0 10px 0;
  } ;
`;

export const ButtonWelcomeContainer = styled(Button)`
  margin: 0;
`;

export const WrapperParallaxContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(0%, -50%);
  background-image: url('https://cultum.io/static/images/cultum/cultum.svg');
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  width: 500px;
  height: 100%;
  grid-area: parallax;
  z-index: 2;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 5%;
    right: 50%;
    transform: translate(50%, 0%);
    width: 380px;
    height: 380px;
  } ;
`;

export const PictureTopPlanet = styled(Picture)`
  position: absolute;
  background-image: url('https://cultum.io/static/images/cultum/left-planet.svg');
  background-size: 40px;
  width: 45px;
  height: 45px;
  top: 10%;
  right: 0px;
  bottom: 0px;
  left: 20%;
  z-index: 3;
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
  z-index: 3;
  @media ${({ theme }) => theme.medias.tablet} {
    left: 65%;
    background-size: 80px;
  } ;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`;
