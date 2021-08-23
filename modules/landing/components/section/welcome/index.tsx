import React, { useState, MouseEvent } from 'react';
import { ParallaxContainerType } from '@md-modules/shared/types/landing';
// components
import { ParallaxContainer } from './components/parallax-container';
import { WelcomeContainer } from './components/welcome-container';
// views
import { WrapperWelcomeContainers, WrapperWelcome, WrapperLabel, LabelCompany, LabelMenu } from './views';

export const Welcome = () => {
  const [position, setPosition] = useState<ParallaxContainerType>({ axisX: 0, axisY: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    // browser window dimensions
    const parallaxWidth = event.currentTarget.offsetWidth;
    const parallaxHeight = event.currentTarget.offsetHeight;
    // mouse arrow coordinates
    const coordX = event.pageX / 2;
    const coordY = event.pageY / 2;

    const coordXprocent = (coordX / parallaxWidth) * 100;
    const coordYprocent = (coordY / parallaxHeight) * 100;

    const speed = 0.8;

    const distX = coordXprocent - position.axisX;
    const distY = coordYprocent - position.axisY;

    setPosition({ axisX: position.axisX + distX * speed, axisY: position.axisY + distY * speed });
  };

  return (
    <WrapperWelcome>
      {React.useMemo(
        () => (
          <WrapperLabel>
            <LabelCompany />
            <LabelMenu />
          </WrapperLabel>
        ),
        []
      )}
      <WrapperWelcomeContainers onMouseMove={handleMouseMove}>
        <WelcomeContainer />
        <ParallaxContainer position={position} />
      </WrapperWelcomeContainers>
    </WrapperWelcome>
  );
};
