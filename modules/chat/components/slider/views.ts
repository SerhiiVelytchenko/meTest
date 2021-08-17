import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const WrapperSlider = styled.div`
  height: 500px;

  /* @media ${({ theme }) => theme.medias.tablet} {
    margin: -400px auto 0 auto;
  } ; */
`;

export const WrapperContainerReviewsPage = styled.div``;

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

export const ButtonNextArrowReviewsPage = styled(ButtonArrow)`
  background-image: url(/static/images/CultumHome/shape_2@3x.png);
  margin: 20px 0 0 0;
  top: 50%;
  left: 95%;
`;

export const ButtonPrevArrowReviewsPage = styled(ButtonArrow)`
  background-image: url(/static/images/CultumHome/shape_2@3x.png);
  transform: rotate(180deg);
  margin: 20px 0 0 0;
  top: 50%;
  left: 0%;
`;

export const WrapperWrapperImg = styled.div`
  /* width: 300px;
    height: 300px;
    border: 5px solid #515151; */
`;

export const WrapperImg = styled.div`
  width: 80vw;
  height: 70vh;
  margin: auto;
`;

export const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
