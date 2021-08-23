import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { WrapperPage, Text, ButtonArrow, Quotes } from '@md-modules/landing/views';

export const WrapperBackgroundWhite = styled(WrapperPage)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WrapperReviews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  @media ${({ theme }) => theme.medias.tablet} {
    flex-direction: column;
  } ;
`;

export const TextTitleReviews = styled(Text)`
  font-size: 40px;
  margin-left: 100px;
  color: ${({ theme }) => theme.colors.black};
  @media ${({ theme }) => theme.medias.tablet} {
    font-size: 30px;
    margin: 0px;
    text-align: center;
  } ;
`;

export const WrapperSlider = styled.div`
  width: 90%;
  margin: 30px;
  width: 270px;
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 30px;
  }
  @media ${({ theme }) => theme.medias.phone} {
    margin: 0;
  } ;
`;

export const WrapperContainerReviews = styled.div`
  @media ${({ theme }) => theme.medias.tablet} {
    flex-direction: column;
    font-size: 14px;
    padding: 20px;
  }
`;

export const QuotesLeft = styled(Quotes)`
  margin-left: 10px;
  background-image: url('https://w7.pngwing.com/pngs/683/436/png-transparent-quotation-marks-in-english-punctuation-wikimedia-foundation-quotation-monochrome-author-black.png');
  background-position: center left;
`;

export const TextQuotesReviews = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.yellow300};
  border-radius: 20px;
  padding: 10px;
`;

export const QuotesRight = styled(Quotes)`
  margin-right: 10px;
  background-image: url('https://img2.freepng.ru/20180511/puq/kisspng-quotation-mark-organization-service-retail-5af5d2a6d0b4e1.0733185215260596868549.jpg');
  background-position: center right;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextUserReviews = styled(Text)`
  font-size: 12px;
  margin-top: 100px;
  color: ${({ theme }) => theme.colors.yellow500};
`;

export const ButtonNextArrowReviewsPage = styled(ButtonArrow)`
  background-image: url('/static/images/CultumHome/shape_2@3x.png');
  margin-top: 20px;
  top: 70%;
  left: 77%;
`;

export const ButtonPrevArrowReviewsPage = styled(ButtonArrow)`
  background-image: url('/static/images/CultumHome/shape-copy-4@3x.png');
  margin-top: 20px;
  top: 70%;
  left: 58%;
`;
