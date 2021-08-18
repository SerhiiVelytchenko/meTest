import React, { useEffect, useState } from 'react';
// components
import { Welcome } from './components/section/welcome';
import { Content } from './components/section/content-galaxy';
import { Information } from './components/section/information';
import { Reviews } from './components/section/reviews';
import { Footer } from './components/section/footer';
// views
import { WrapperPages } from './views';

export const LandingPage = () => {
  const [scrollFactor, setScrollFactor] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setScrollFactor(() => {
        return Math.trunc((window.pageYOffset - 60) / window.innerHeight - 0.5);
      });
    };
    return () =>
      window.removeEventListener('scroll', () =>
        setScrollFactor(() => {
          return Math.trunc((window.pageYOffset - 60) / window.innerHeight - 0.5);
        })
      );
  }, []);

  return (
    <WrapperPages>
      <Welcome />
      <Content scrollFactor={scrollFactor} />
      <Information />
      <Reviews />
      <Footer />
    </WrapperPages>
  );
};
