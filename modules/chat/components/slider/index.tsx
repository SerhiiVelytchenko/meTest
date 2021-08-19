import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
// views
import {
  ButtonPrevArrowReviewsPage,
  WrapperImg,
  WrapperWrapperImg,
  ButtonNextArrowReviewsPage,
  WrapperSlider,
  Img
} from './views';

export const SliderContainer = ({
  messageImg,
  indexActiveImage
}: {
  messageImg: string[];
  indexActiveImage: number;
}) => {
  const NextArrow = ({ onClick }: CustomArrowProps) => {
    return <ButtonNextArrowReviewsPage onClick={onClick} />;
  };

  const PrevArrow = ({ onClick }: CustomArrowProps) => {
    return <ButtonPrevArrowReviewsPage onClick={onClick} />;
  };

  const settings = {
    speed: 600,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: indexActiveImage
  };

  return (
    <WrapperSlider>
      <Slider {...settings}>
        {messageImg.map((item: string | undefined, index: React.Key | null | undefined) => {
          return (
            <WrapperWrapperImg key={index}>
              <WrapperImg>
                <Img src={item} />
              </WrapperImg>
            </WrapperWrapperImg>
          );
        })}
      </Slider>
    </WrapperSlider>
  );
};
