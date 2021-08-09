import React, { useEffect, useState } from 'react';
// components
import { WelcomePage } from './welcomePage';
import { ContentPage } from './content';
import { InformationPage } from './informationPage';
import { ReviewsPage } from './reviewsPage';
import { FooterPage } from './footerPage';
// views
import { Wrapper, WrapperPages } from './views';

export const LandingPage = () => {
  const [isRender, setIsRender] = useState(false);
  const [scroll, setScroll] = useState(1);
  const [workspaceHeight, setWorkspaceHeight] = useState(1);

  useEffect(() => {
    setIsRender(true);
  }, []);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    setScroll(event.currentTarget.scrollTop || 1);
    setWorkspaceHeight(window.innerHeight);
  };

  return (
    <Wrapper>
      <WrapperPages onScroll={handleScroll}>
        <WelcomePage isRender={isRender} />
        <ContentPage scroll={scroll} workspaceHeight={workspaceHeight} isRender={isRender} />
        <InformationPage />
        <ReviewsPage />
        <FooterPage />
      </WrapperPages>
    </Wrapper>
  );
};
