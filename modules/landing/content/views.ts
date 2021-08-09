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
  position: relative;
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
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 18px;
    text-align: center;
    margin: 0;
  } ;
`;

export const ButtonArrowContentPage = styled(ButtonArrow)`
  background-image: url(/static/images/CultumHome/shape_2@3x.png);
  margin: 20px 0 0 0;
  top: 130%;
  left: 0%;
`;

export const RightContainer = styled.div<{ background: string }>`
  min-width: 200px;
  max-width: 490px;
  height: 400px;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90%;
  grid-area: rightContainer;
  @media ${({ theme }) => theme.medias.tablet} {
    background-size: 80%;
  }
`;

export const WrapperContainerGalaxyLeft = styled.div`
  background-image: url('https://cultum.io/static/images/saturn.svg');
  background-position: center left;
  background-repeat: no-repeat;
  background-size: 90px;
  position: relative;
  position: relative;
  width: 200px;
  grid-area: leftContainer;
`;

export const WrapperGalaxyLeft = styled.div`
  top: 50%;
  left: 116px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  width: 500px;
  height: 500px;
  border-radius: 250px;
  transform: translate(-58%, 0%);
  @media screen and (min-height: 900px) {
    background-size: 80%;
  } ;
`;

export const WrapperPlanet = styled.div<{
  transform: number;
}>`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform-origin: 0% 100%;
  transform: rotate(${({ transform }) => transform}deg);
  transition: 1s cubic-bezier(0.65, 0.05, 0.36, 1) 0s;
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
