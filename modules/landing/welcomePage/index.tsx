import React, { useState } from 'react';
// components
import { ParallaxContainer } from './parallaxContainer';
// views
import {
  WrapperWelcomePage,
  WrapperButton,
  ContainerWelcomePage,
  TextTitleWelcomePage,
  TextWelcomePage,
  Parallax,
  ButtonWelcomePage,
  LabelCompany,
  LabelMenu,
  WrapperWelcomePageGrid
} from './views';

export const WelcomePage = ({ isRender }: { isRender: boolean }) => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  let coordXprocent = 0;
  let coordYprocent = 0;

  const handleMouseMove = (event: any) => {
    const parallaxWidth = event.currentTarget.offsetWidth;
    const parallaxHeight = event.currentTarget.offsetHeight;

    const coordX = event.pageX / 2;
    const coordY = event.pageY / 2;

    coordXprocent = (coordX / parallaxWidth) * 100;
    coordYprocent = (coordY / parallaxHeight) * 100;

    if (isRender) {
      const speed = 0.8;

      const setMouseParallaxStyle = () => {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        setPositionX(positionX + distX * speed);
        setPositionY(positionY + distY * speed);
      };
      setMouseParallaxStyle();
    }
  };

  const textTitle = 'Digital experiences that make you shine';
  const text = 'Cultum is a digital agency where strategy, creativity and technology converge';
  const textButton = 'DROP US A LINE';
  return (
    <WrapperWelcomePage>
      <Parallax onMouseMove={handleMouseMove}>
        <WrapperWelcomePageGrid>
          <LabelCompany />
          <LabelMenu />
          <ContainerWelcomePage>
            <TextTitleWelcomePage>{textTitle}</TextTitleWelcomePage>
            <TextWelcomePage>{text}</TextWelcomePage>
            <WrapperButton>
              <ButtonWelcomePage>{textButton}</ButtonWelcomePage>
            </WrapperButton>
          </ContainerWelcomePage>
          <ParallaxContainer isRender positionX={positionX} positionY={positionY} />
        </WrapperWelcomePageGrid>
      </Parallax>
    </WrapperWelcomePage>
  );
};
