import React from 'react';
// components
import { Welcome } from './components/section/welcome';
import { Content } from './components/section/content-galaxy';
import { Information } from './components/section/information';
import { Reviews } from './components/section/reviews';
import { Footer } from './components/section/footer';
// views
import { WrapperPages } from './views';

export const LandingPage = () => {
  return (
    <WrapperPages>
      <Welcome />
      <Content />
      <Information />
      <Reviews />
      <Footer />
    </WrapperPages>
  );
};
