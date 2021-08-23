import styled from 'styled-components';
import { Text, Button, Picture } from '@md-modules/landing/views';

export const WrapperWelcome = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    left: 70%;
    width: 300px;
    height: 120%;
    background: ${({ theme }) => theme.colors.red100};
    transform: skew(40deg);
  }
`;

export const WrapperLabel = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
`;

export const Label = styled.div`
  width: 280px;
  height: 150px;
  background-repeat: no-repeat;
  z-index: 2;

  @media ${({ theme }) => theme.medias.laptop} {
    width: 240px;
    height: 120px;
  }

  @media ${({ theme }) => theme.medias.phone} {
    height: 150px;
    width: 110px;
    margin: 0px 10px 0 10px;
  } ;
`;

export const LabelCompany = styled(Label)`
  background-image: url('/static/images/CultumHome/logo@3x.png');
  background-size: 100px;
  background-position: center;
`;

export const LabelMenu = styled(Label)`
  background-image: url('/static/images/CultumHome/menu@3x.png');
  background-size: 35px;
  background-position: center;
`;

export const WrapperWelcomeContainers = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  position: relative;
  height: 100%;
  @media ${({ theme }) => theme.medias.laptop} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const WrapperWelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  z-index: 1;
`;

export const WrapperParallaxContainer = styled.div`
  height: 100%;
  display: flex;
`;

export const WrapperBlok = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 100%;
  @media ${({ theme }) => theme.medias.laptop} {
    height: auto;
  }
`;

export const BlokWelcomeContainer = styled.div`
  padding-left: 100px;
  width: 600px;
  @media ${({ theme }) => theme.medias.laptop} {
    padding: 0;
    padding-bottom: 10px;
    width: 500px;
  }

  @media ${({ theme }) => theme.medias.phone} {
    width: 280px;
    padding: 10px;
  } ;
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  @media ${({ theme }) => theme.medias.laptop} {
    width: 500px;
  }

  @media ${({ theme }) => theme.medias.phone} {
    max-width: 280px;
  } ;
`;

export const TextTitleWelcomeContainer = styled(Text)`
  padding: 5px;
  font-size: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  @media ${({ theme }) => theme.medias.laptop} {
    font-size: 20px;
    margin: 0;
  } ;
`;

export const TextWelcomeContainer = styled(Text)`
  padding: 5px;
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.gray400};
  @media ${({ theme }) => theme.medias.laptop} {
    font-size: 16px;
    text-align: center;
    margin: 10px 0 10px 0;
  } ;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonWelcomeContainer = styled(Button)`
  margin: 0;
`;

export const BlokParallax = styled.div`
  width: 600px;
  height: 660px;
  position: relative;
  background-color: transparent;
  background-image: url('https://cultum.io/static/images/cultum/cultum.svg');
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  @media ${({ theme }) => theme.medias.laptop} {
    width: 450px;
    height: 460px;
  }
  @media ${({ theme }) => theme.medias.phone} {
    width: 55vw;
    height: 30vh;
  } ;
`;

export const PictureTopPlanet = styled(Picture)`
  position: absolute;
  background-image: url('https://cultum.io/static/images/cultum/left-planet.svg');
  background-size: 40px;
  width: 45px;
  height: 45px;
  left: 10%;
  z-index: 3;
  @media ${({ theme }) => theme.medias.laptop} {
    left: 10%;
    top: 5%;
  }
  @media ${({ theme }) => theme.medias.phone} {
    width: 0;
    height: 0;
  } ;
`;

export const PictureRightPlanet = styled(Picture)`
  width: 100px;
  height: 90px;
  position: absolute;
  top: 30%;
  right: 20%;
  transform: translate(50%, 50%);
  background-image: url('https://cultum.io/static/images/cultum/right-planet.svg');
  background-size: 90px;
  z-index: 3;
  @media ${({ theme }) => theme.medias.laptop} {
    top: 30%;
    right: 10%;
  }
  @media ${({ theme }) => theme.medias.phone} {
    width: 0;
    height: 0;
  } ;
`;
