import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { WrapperPage, Text, ButtonArrow, Quotes } from '@md-modules/landing/views';

export const WrapperPageBackgroundWhite = styled(WrapperPage)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WrapperReviews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.medias.tablet} {
    flex-direction: column;
  } ;
`;

export const TextTitleReviewsPage = styled(Text)`
  font-size: 40px;
  margin: 0 0 0 100px;
  color: ${({ theme }) => theme.colors.black};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 20px;
    margin: 0 0 0 0px;
  } ;
`;

export const WrapperSlider = styled.div`
  min-width: 200px;
  max-height: 60px;
  width: 60vh;
  margin: 10em auto;
  grid-area: rightContainer;
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 30px;
  } ;
`;

export const WrapperContainerReviewsPage = styled.div`
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 0 0 0 25px;
    font-size: 14px;
  } ;
`;

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
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 0 0 0 30px;
    font-size: 14px;
    width: 250px;
  } ;
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
