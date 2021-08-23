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
  margin: 20px;
  @media ${({ theme }) => theme.medias.tablet} {
  } ;
`;

export const ButtonArrowTitlePage = styled(ButtonArrow)`
  background-image: url('/static/images/CultumHome/shape_2@3x.png');
  margin-top: 20px;
  top: 120%;
  left: 18%;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 80%;
    left: 10px;
  }
  @media ${({ theme }) => theme.medias.phone} {
    top: 120%;
    left: 10px;
  } ;
`;

export const TextTitleTitlePage = styled(Text)`
  padding-left: 100px;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.black};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 16px;
    padding: 0px;
  } ;
`;

export const RightContainer = styled.div`
  width: 600px;
  height: 100%;
  background: url(/static/images/CultumHome/spaceship-illustration@3x.png) no-repeat;
  background-size: 80%;
  background-position: center;
  @media ${({ theme }) => theme.medias.tablet} {
    height: 400px;
    background-size: 50%;
    margin-top: -150px;
  }
  @media ${({ theme }) => theme.medias.phone} {
    width: 400px;
    height: 200px;
    margin-bottom: 20px;
  } ;
`;

export const WrapperOpportunities = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const WrapperLeftContainer = styled.div`
  position: relative;
  width: 350px;
  height: 600px;
  background: url('/static/images/CultumHome/devices@3x.png') no-repeat;
  background-position: center left;
  background-size: 90%;
  z-index: 3;
  @media ${({ theme }) => theme.medias.phone} {
    width: 0px;
    height: 0px;
  } ;
`;

export const PictureNode = styled(Picture)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url('/static/images/CultumHome/nodejs-1@3x.png');
  background-size: 90px;
  width: 160px;
  height: 120px;
  top: 25%;
  left: 18%;
  border-radius: 15px;
  z-index: 0;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 25%;
    left: 18%;
  }
  @media ${({ theme }) => theme.medias.phone} {
    width: 0px;
    height: 0px;
  } ;
`;

export const PictureRails = styled(Picture)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.red200};
  background-image: url('/static/images/CultumHome/ruby-on-rails-logo@3x.png');
  background-size: 50px;
  width: 100px;
  height: 70px;
  top: 27%;
  left: 75%;
  border-radius: 7px;
  z-index: 0;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 14%;
    left: 33%;
  }
  @media ${({ theme }) => theme.medias.phone} {
    width: 0px;
    height: 0px;
  } ;
`;

export const PictureReact = styled(Picture)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.blue300};
  background-image: url('/static/images/CultumHome/react@3x.png');
  background-size: 50px;
  width: 80px;
  height: 80px;
  top: 17%;
  left: 55%;
  border-radius: 7px;
  z-index: 0;
  @media ${({ theme }) => theme.medias.tablet} {
    top: 0%;
    left: 48%;
  }
  @media ${({ theme }) => theme.medias.phone} {
    width: 0px;
    height: 0px;
  } ;
`;

export const ContentOpportunities = styled(WrapperGrid)`
  height: 70%;
  margin: auto;
  grid-template-areas:
    '1i 2i'
    '3i 4i';
  grid-template-columns: repeat(2, minmax(120px, 450px));
  grid-template-rows: repeat(2, minmax(120px, 200px));
  grid-gap: 10px;
  z-index: 3;
  @media ${({ theme }) => theme.medias.tablet} {
    grid-template-areas:
      '1i'
      '2i'
      '3i'
      '4i';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    margin: 0;
  } ;
`;

export const WrapperRightContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

export const TitleContentOpportunities = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media ${({ theme }) => theme.medias.phone} {
    flex-direction: column;
  }
`;

export const TextTitleOpportunitiesPage = styled(Text)`
  font-size: 35px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 20px;
  } ;
`;

export const ButtonArrowOpportunitiesPage = styled.button`
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: left;
  background-size: 50px;
  height: 20px;
  width: 150px;
  padding-left: 60px;
  margin: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.yellow500};
  background-image: url('/static/images/CultumHome/shape_2@3x.png');
  cursor: pointer;
  z-index: 10;
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
  @media ${({ theme }) => theme.medias.phone} {
    font-size: 24;
  } ;
`;

export const TextItemOpportunitiesPage = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray350};
  margin-top: 10px;
  opacity: 0.5;
  @media ${({ theme }) => theme.medias.phone} {
    font-size: 16px;
  } ;
`;
