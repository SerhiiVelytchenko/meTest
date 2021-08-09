import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { WrapperPage, Text, ButtonArrow, WrapperGrid, Quotes } from '../views';

export const WrapperPageBackgroundWhite = styled(WrapperPage)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WrapperReviewsPageGrid = styled(WrapperGrid)`
  grid-template-areas: 'leftContainer rightContainer';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media ${({ theme }) => theme.medias.tablet} {
    grid-template-areas: 'leftContainer' 'rightContainer';
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 8fr;
  } ;
`;

export const TextTitleReviewsPage = styled(Text)`
  font-size: 40px;
  margin: 0 0 0 100px;
  color: ${({ theme }) => theme.colors.black};
  grid-area: leftContainer;
`;

export const WrapperSlider = styled.div`
  min-width: 200px;
  max-height: 60px;
  width: 60vh;
  margin: 10em auto;
  grid-area: rightContainer;
  @media ${({ theme }) => theme.medias.tablet} {
    margin: -400px auto 0 auto;
  } ;
`;

export const WrapperContainerReviewsPage = styled.div``;

export const QuotesLeft = styled(Quotes)`
  background-image: url('https://w7.pngwing.com/pngs/683/436/png-transparent-quotation-marks-in-english-punctuation-wikimedia-foundation-quotation-monochrome-author-black.png');
  background-position: center left;
`;

export const QuotesRight = styled(Quotes)`
  background-image: url('https://img2.freepng.ru/20180511/puq/kisspng-quotation-mark-organization-service-retail-5af5d2a6d0b4e1.0733185215260596868549.jpg');
  background-position: center right;
`;

export const TextQuotesReviewsPage = styled(Text)`
  font-size: 12x;
  margin: 0 15px 0 15px;
  color: ${({ theme }) => theme.colors.black};
`;

export const User = styled.div<{
  backgroundImage: string;
}>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 80px;
  width: 100px;
  height: 100px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const TextUserReviewsPage = styled(Text)`
  font-size: 12x;
  margin: 0 0 0 150px;
  color: ${({ theme }) => theme.colors.yellow500};
`;

export const ButtonNextArrowReviewsPage = styled(ButtonArrow)`
  background-image: url(/static/images/CultumHome/shape_2@3x.png);
  margin: 20px 0 0 0;
  top: 70%;
  left: 75%;
`;

export const ButtonPrevArrowReviewsPage = styled(ButtonArrow)`
  background-image: url(/static/images/CultumHome/shape-copy-4@3x.png);
  margin: 20px 0 0 0;
  top: 70%;
  left: 60%;
`;
