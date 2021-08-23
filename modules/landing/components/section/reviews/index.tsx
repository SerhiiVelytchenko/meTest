import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
// components
import { Comments } from '../../constants';
// views
import {
  ButtonPrevArrowReviewsPage,
  ButtonNextArrowReviewsPage,
  TextQuotesReviews,
  User,
  TextUserReviews,
  TextTitleReviews,
  WrapperReviews,
  WrapperBackgroundWhite,
  QuotesLeft,
  QuotesRight,
  WrapperSlider,
  WrapperContainerReviews
} from './views';

export const Reviews = () => {
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

  const textTitle = 'Seems like our clients love us...';

  return (
    <WrapperBackgroundWhite>
      <WrapperReviews>
        <TextTitleReviews>{textTitle}</TextTitleReviews>
        <WrapperSlider>
          <Slider {...settings}>
            {Comments.map((item) => {
              return (
                <WrapperContainerReviews key={item.id}>
                  <QuotesLeft />
                  <TextQuotesReviews>{item.text}</TextQuotesReviews>
                  <QuotesRight />
                  <User backgroundImage={item.user.imgUrl}>
                    <TextUserReviews key={item.id}>{item.user.name}</TextUserReviews>
                  </User>
                </WrapperContainerReviews>
              );
            })}
          </Slider>
        </WrapperSlider>
      </WrapperReviews>
    </WrapperBackgroundWhite>
  );
};
