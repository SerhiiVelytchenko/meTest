import styled from 'styled-components';
import { WrapperPage, Text, ButtonArrow, WrapperGrid, Planet } from '../views';

export const WrapperContentPage = styled(WrapperPage)``;

export const WrapperContentPageGrid = styled(WrapperGrid)`
  grid-template-areas: 'leftContainer centerContainer rightContainer';
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: 100vh;
  @media ${({ theme }) => theme.medias.tablet} {
    grid-template-areas:
      'leftContainer rightContainer'
      'leftContainer centerContainer';
    grid-template-columns: 200px 1fr;
    grid-template-rows: 70vh 30vh;
  } ;
`;

export const ContainerContentPage = styled.div`
  grid-area: centerContainer;
  margin: -150px 0 0 0;
`;

export const TextTitleContentPage = styled(Text)`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 30px;
    text-align: center;
    margin: 0;
  } ;
`;

export const TextOneContentPage = styled(Text)`
  font-size: 20px;
  margin: 25px 0 0 0;
  color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 18px;
    text-align: center;
    margin: 0;
  } ;
`;

export const TextTwoContentPage = styled(Text)`
  font-size: 20px;
  margin: 10px 0 0 0;
  color: ${({ theme }) => theme.colors.gray350};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 18px;
    text-align: center;
    margin: 0;
  } ;
`;

export const ButtonArrowContentPage = styled(ButtonArrow)`
  background-image: url(/static/images/CultumHome/shape_2@3x.png);
  margin: 20px 0 0 0;
  top: 70%;
  left: 30%;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 85%;
    left: 45%;
  } ;
`;

export const RightContainer = styled.div<{ background: string }>`
  min-width: 200px;
  height: 400px;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90%;
  grid-area: rightContainer;
  @media ${({ theme }) => theme.medias.tablet} {
    background-size: 80%;
  }
  @media ${({ theme }) => theme.medias.laptop} {
    background-size: 80%;
  } ;
`;

export const WrapperContainerGalaxyLeft = styled.div`
  position: relative;
  width: 200px;
  grid-area: leftContainer;
`;

export const WrapperGalaxyLeft = styled.div`
  position: relative;
  top: 50%auto;
  left: 115px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  width: 500px;
  height: 500px;
  border-radius: 250px;
  transform: translate(-85%, 0%);
`;

export const ImgGalaxyLeft = styled.div`
  width: 20vh;
  height: 20vh;
  margin: 30vh 0 0 43vh;
  background: url('https://cultum.io/static/images/saturn.svg') no-repeat;
  background-size: 90px;
  background-position: center;
`;

export const WrapperPlanet = styled.div<{
  transform: number;
}>`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform-origin: 0% 100%;
  transform: rotate(${({ transform }) => transform}deg);
  transition: 2s cubic-bezier(0.65, 0.05, 0.36, 1) 0s;
  padding-bottom: 50%;
`;

export const PlanetSmall = styled(Planet)`
  width: 20px;
  height: 20px;
  background-size: 20px;
  margin: 0 0 -10px -10px;
`;

export const PlanetBig = styled(Planet)`
  width: 50px;
  height: 50px;
  background-size: 50px;
  margin: 0 0 -25px -25px;
`;
