import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
// components
import { Comments } from '../constants';
// views
import {
  ButtonPrevArrowReviewsPage,
  ButtonNextArrowReviewsPage,
  TextQuotesReviewsPage,
  User,
  TextUserReviewsPage,
  TextTitleReviewsPage,
  WrapperReviewsPageGrid,
  WrapperPageBackgroundWhite,
  QuotesLeft,
  QuotesRight,
  WrapperSlider,
  WrapperContainerReviewsPage
} from './views';

export const ReviewsPage = () => {
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
    <WrapperPageBackgroundWhite>
      <WrapperReviewsPageGrid>
        <TextTitleReviewsPage>{textTitle}</TextTitleReviewsPage>
        <WrapperSlider>
          <Slider {...settings}>
            {Comments.map((item) => {
              return (
                <WrapperContainerReviewsPage key={item.id}>
                  <QuotesLeft />
                  <TextQuotesReviewsPage>{item.text}</TextQuotesReviewsPage>
                  <QuotesRight />
                  <User backgroundImage={item.user.imgUrl}>
                    <TextUserReviewsPage key={item.id}>{item.user.name}</TextUserReviewsPage>
                  </User>
                </WrapperContainerReviewsPage>
              );
            })}
          </Slider>
        </WrapperSlider>
      </WrapperReviewsPageGrid>
    </WrapperPageBackgroundWhite>
  );
};
