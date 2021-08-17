import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

export const ButtonArrow = styled.button`
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: left;
  background-size: 50px;
  position: absolute;
  cursor: pointer;
  z-index: 10;
  height: 20px;
  padding: 0 0 0 60px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.yellow500};
`;

export const Quotes = styled.div`
  background-repeat: no-repeat;
  background-size: 10px;
  height: 10px;
  margin: 0px;
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

export const Img = styled.img`
  width: 200px;
  height: auto;
`;
