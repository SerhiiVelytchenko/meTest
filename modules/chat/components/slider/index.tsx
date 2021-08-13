import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
// views
import { ButtonPrevArrowReviewsPage, ButtonNextArrowReviewsPage, WrapperSlider, Img } from './views';

export const SliderContainer = ({ messageImg }: { messageImg: string[] }) => {
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
    prevArrow: <PrevArrow />
  };

  return (
    <WrapperSlider>
      <Slider {...settings}>
        {messageImg.map((item: string | undefined, index: React.Key | null | undefined) => {
          return <Img key={index} src={item} />;
        })}
      </Slider>
    </WrapperSlider>
  );
};
