import { WrapperPage, Text, ButtonArrow, Planet } from '@md-modules/landing/views';
import styled from 'styled-components';

export const WrapperContainer = styled.div`
  position: relative;
`;

export const WrapperLeftContainerFirst = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  visibility: hidden;
  transform: translate(0, 140px);
  z-index: 5;
  @media ${({ theme }) => theme.medias.tablet} {
    z-index: -5;
  } ;
`;

export const WrapperLeftContainerSecond = styled.div`
  position: sticky;
  top: 0;
  visibility: visible;
  width: 300px;
  height: 300px;
  margin: 0 0 450px 0;
`;

export const WrapperContent = styled(WrapperPage)``;

export const WrapperContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100%;
  margin: 0 0 0 250px;
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 0 0 0 0px;
    flex-direction: column-reverse;
  } ;
`;

export const TextTitleContent = styled(Text)`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 30px;
    text-align: center;
    margin: 0;
  } ;
`;

export const TextOneContent = styled(Text)`
  font-size: 20px;
  margin: 25px 0 0 0;
  color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 18px;
    text-align: center;
    margin: 0 5px;
  } ;
`;

export const TextTwoContent = styled(Text)`
  font-size: 20px;
  margin: 10px 0 0 0;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 18px;
    text-align: center;
    margin: 0 5px;
  } ;
`;

export const ButtonArrowContent = styled(ButtonArrow)`
  background-image: url('/static/images/CultumHome/shape_2@3x.png');
  margin: 20px 0 0 0;
  top: 120%;
  left: 23%;
`;

export const ContainerContent = styled.div`
  min-width: 300px;
  position: relative;
  grid-area: centerContainer;
  margin: -150px 0 0 0;
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 0px 0 100px 0;
  } ;
`;

export const RightContent = styled.div<{ background: string }>`
  width: 500px;
  height: 100%;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  @media ${({ theme }) => theme.medias.tablet} {
    background-size: 70%;
    margin: 0;
  }
`;

export const WrapperContainerLeftContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('https://cultum.io/static/images/saturn.svg');
  background-position: center left;
  background-repeat: no-repeat;
  background-size: 90px;
  width: 200px;
  grid-area: leftContainer;
  z-index: 6;
  @media screen and (min-height: 900px) {
    z-index: -3;
  } ;
`;

export const WrapperLeftContainer = styled.div`
  top: 50%;
  left: 116px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  width: 500px;
  height: 500px;
  border-radius: 250px;
  transform: translate(-58%, 0%);
  z-index: 6;
`;

export const WrapperPlanet = styled.div<{
  transform: number | undefined;
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
