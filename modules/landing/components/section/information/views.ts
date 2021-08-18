import styled from 'styled-components';
import { WrapperPage, Text, ButtonArrow, Picture, WrapperGrid } from '@md-modules/landing/views';

export const WrapperBackgroundWhite = styled(WrapperPage)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WrapperTitle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.medias.tablet} {
    flex-direction: column-reverse;
  } ;
`;

export const ContainerTitleInformationPage = styled.div`
  position: relative;
  max-width: 500px;
  @media ${({ theme }) => theme.medias.tablet} {
  } ;
`;

export const ButtonArrowTitlePage = styled(ButtonArrow)`
  background-image: url(/static/images/CultumHome/shape_2@3x.png);
  margin: 20px 0 0 0;
  top: 120%;
  left: 18%;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 80%;
    left: 20%;
  } ;
`;

export const TextTitleTitlePage = styled(Text)`
  padding: 0 0 0 100px;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.black};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 16px;
    padding: 0 10px;
    margin: -100px 0 0 0;
  } ;
`;

export const RightContainer = styled.div`
  margin: 0;
  width: 600px;
  height: 100%;
  background: url(/static/images/CultumHome/spaceship-illustration@3x.png) no-repeat;
  background-size: 80%;
  background-position: center;
  @media ${({ theme }) => theme.medias.tablet} {
    width: 100vh;
    background-size: 50%;
    margin: -150px 0 0 0;
  } ;
`;

export const WrapperOpportunities = styled.div`
  display: flex;
  z-index: 3;
  @media ${({ theme }) => theme.medias.tablet} {
  } ;
`;

export const ContainerOpportunitiesPage = styled.div`
  position: relative;
  width: 350px;
  height: 600px;
  margin: 0 0 0 -30px;
  background: url('/static/images/CultumHome/devices@3x.png') no-repeat;
  background-position: center left;
  background-size: 90%;
  z-index: 3;
  @media ${({ theme }) => theme.medias.tablet} {
    background: none;
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
    background: none;
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
    background: none;
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
    background: none;
  } ;
`;

export const WrapperContentOpportunities = styled(WrapperGrid)`
  height: 70%;
  min-width: 350px;
  margin: auto;
  grid-template-areas:
    'title title'
    '1i 2i'
    '3i 4i';
  grid-template-columns: repeat(2, minmax(120px, 450px));
  grid-template-rows: repeat(3, minmax(120px, 200px));
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
    margin: 0 0 0 25px;
  } ;
`;

export const ContentOpportunities = styled(WrapperGrid)<{
  gridArea: string;
}>`
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 1fr;
  grid-area: ${({ gridArea }) => gridArea};
  @media ${({ theme }) => theme.medias.tablet} {
  }
`;

export const TextTitleOpportunitiesPage = styled(Text)`
  font-size: 35px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 0 20px;
  text-align: center;
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 20px;
    margin: 0 30px;
  } ;
`;

export const ButtonArrowOpportunitiesPage = styled(ButtonArrow)`
  background-image: url(/static/images/CultumHome/shape_2@3x.png);
  width: 10px;
  margin: 20px 0 0 0;
  top: 15%;
  left: 80%;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 10%;
    left: 60%;
  }
`;

export const ItemContentOpportunities = styled(WrapperGrid)<{
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
  opacity: 0.5;
`;
