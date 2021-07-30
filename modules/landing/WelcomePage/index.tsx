import React, { useEffect, useState } from 'react';
// type

// components

// views
import {
  ParalaxContainer,
  Text,
  ParalaxImagest,
  ParalaxLabel,
  ParalaxTitle,
  Parallax,
  ParallaxBody,
  Wrapper,
  TextTitle,
  ParalaxWrapper,
  Button,
  ParalaxImagestLeftPlanet,
  ParalaxImagestRightPlanet,
  ParalaxImagestCultum,
  ParalaxMenu
} from '../views';

export const WelcomePage = () => {
  const [isRender, setIsRender] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  let coordXprocent = 0;
  let coordYprocent = 0;
  const forOnePlanet = 1;
  const forTwoPlanet = 0.5;
  const forThreePlanet = 10;

  useEffect(() => {
    setIsRender(true);
  }, []);

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

  return (
    <Wrapper>
      <Parallax onMouseMove={handleMouseMove}>
        <ParallaxBody>
{/* Label */}

            <ParalaxLabel />
            <ParalaxMenu />

{/* words greetings */}
          <ParalaxContainer>
            <ParalaxWrapper>
              <ParalaxTitle>
                <TextTitle>Digital experiences that make you shine</TextTitle>
                <Text>Cultum is a digital agency where strategy, creativity and technology converge</Text>
                <div>
                  <Button>hellow</Button>
                  <Button>hellow</Button>
                </div>
              </ParalaxTitle>
            </ParalaxWrapper>
{/* plenet */}
            <ParalaxWrapper>
              <div>
                {/* One planet */}
                <ParalaxImagest>
                  <ParalaxImagestLeftPlanet
                    transform={
                      isRender ? `translate(${positionX / forOnePlanet}%, ${positionY / forOnePlanet}%)` : undefined
                    }
                  />
                </ParalaxImagest>
                {/* Two planet */}
                <ParalaxImagest>
                  <ParalaxImagestRightPlanet
                    transform={
                      isRender ? `translate(${positionX / forTwoPlanet}%, ${positionY / forTwoPlanet}%)` : undefined
                    }
                  />
                </ParalaxImagest>
                {/* Three planet */}
                <ParalaxImagest>
                  <ParalaxImagestCultum
                    transform={
                      isRender ? `translate(${positionX / forThreePlanet}%, ${positionY / forThreePlanet}%)` : undefined
                    }
                  />
                </ParalaxImagest>
              </div>
            </ParalaxWrapper>

          </ParalaxContainer>
        </ParallaxBody>
      </Parallax>
    </Wrapper>
  );
};
