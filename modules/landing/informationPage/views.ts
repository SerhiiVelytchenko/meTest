import styled from 'styled-components';
import { WrapperPage, Text, ButtonArrow, Picture, WrapperGrid } from '../views';

export const WrapperPageBackgroundWhite = styled(WrapperPage)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WrapperTitlePageGrid = styled(WrapperGrid)`
  grid-template-areas: 'leftContainer rightContainer';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
  @media ${({ theme }) => theme.medias.tablet} {
    grid-template-areas: 'rightContainer' 'leftContainer';
    grid-template-columns: 100vh;
    grid-template-rows: 60vh 40vh;
  } ;
`;

export const ContainerTitleInformationPage = styled.div`
  grid-area: leftContainer;
`;

export const ButtonArrowTitlePage = styled(ButtonArrow)`
  background-image: url(/static/images/CultumHome/shape_2@3x.png);
  margin: 20px 0 0 0;
  top: 70%;
  left: 12%;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 90%;
    left: 20%;
  } ;
`;

export const TextTitleTitlePage = styled(Text)`
  padding: 0 0 0 100px;
  font-size: 25px;

  color: ${({ theme }) => theme.colors.black};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 20px;
    padding: 0 150px 0 150px;
  } ;
`;

export const RightContainer = styled.div`
  margin: 0;
  min-width: 200px;
  max-width: 600px;
  height: 500px;
  background: url(/static/images/CultumHome/spaceship-illustration@3x.png) no-repeat;
  background-size: 80%;
  background-position: center;
  grid-area: rightContainer;
  @media ${({ theme }) => theme.medias.tablet} {
    width: 100vh;
    background-size: 60%;
  } ;
`;

export const WrapperOpportunitiesPageGrid = styled(WrapperGrid)`
  height: 100vh;
  grid-template-areas: 1fr 2fr;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100vh;
  z-index: 3;
  @media ${({ theme }) => theme.medias.tablet} {
    grid-template-columns: 150px 1fr;
  } ;
`;

export const ContainerOpportunitiesPage = styled.div`
  position: relative;

  height: 480px;
  background: url('/static/images/CultumHome/devices@3x.png') no-repeat;
  background-position: center left;
  background-size: 50vh auto;
  z-index: 3;

  @media ${({ theme }) => theme.medias.tablet} {
    margin: 0 0 0 -160px;
  } ;
`;

export const PictureInformationPageNode = styled(Picture)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url('/static/images/CultumHome/nodejs-1@3x.png');
  background-size: 90px;
  width: 160px;
  height: 120px;
  top: 25%;
  right: 0px;
  bottom: 0px;
  left: 18%;
  border-radius: 15px;
  z-index: 0;
  @media ${({ theme }) => theme.medias.tablet} {
    width: 130px;
    height: 80px;
    top: 23%;
    left: 60%;
  } ;
`;

export const PictureInformationPageRails = styled(Picture)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.red200};
  background-image: url('/static/images/CultumHome/ruby-on-rails-logo@3x.png');
  background-size: 50px;
  width: 100px;
  height: 70px;
  top: 27%;
  right: 0px;
  bottom: 0px;
  left: 70%;
  border-radius: 7px;
  z-index: 0;
  @media ${({ theme }) => theme.medias.tablet} {
    top: -4%;
    left: 60%;
  } ;
`;

export const PictureInformationPageReact = styled(Picture)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.blue300};
  background-image: url('/static/images/CultumHome/react@3x.png');
  background-size: 50px;
  width: 80px;
  height: 80px;
  top: 20%;
  right: 0px;
  bottom: 0px;
  left: 55%;
  border-radius: 7px;
  z-index: 0;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 9%;
    left: 64%;
  } ;
`;

export const WrapperContentOpportunitiesPageGrid = styled(WrapperGrid)`
  height: 70%;
  min-width: 350px;
  grid-template-areas:
    'title title'
    '1i 2i'
    '3i 4i';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  z-index: 3;
  @media ${({ theme }) => theme.medias.tablet} {
    grid-template-areas:
      'title'
      '1i'
      '2i'
      '3i'
      '4i';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  } ;
`;

export const ContentOpportunitiesPageGrid = styled(WrapperGrid)<{
  gridArea: string;
}>`
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 1fr;
  grid-area: ${({ gridArea }) => gridArea};
`;

export const TextTitleOpportunitiesPage = styled(Text)`
  font-size: 35px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 0 20px;
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 30px;
    margin: -20px -40px 30px 0px;
  } ;
`;

export const ButtonArrowOpportunitiesPage = styled(ButtonArrow)`
  background-image: url(/static/images/CultumHome/shape_2@3x.png);
  margin: 20px 0 0 0;
  top: 33%;
  left: 80%;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 25%;
    left: 65%;
  }
`;

export const ItemContentOpportunitiesPageGrid = styled(WrapperGrid)<{
  gridArea: string;
}>`
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  grid-area: ${({ gridArea }) => gridArea};
`;

export const ImgOpportunitiesPage = styled.div<{
  backgroundImage: string;
}>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 30px;
  height: 50px;
`;

export const ItemContainerOpportunitiesPage = styled.div``;

export const TextTitleItemOpportunitiesPage = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

export const TextItemOpportunitiesPage = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray350};
  margin: 10px 0 0 0;
`;
