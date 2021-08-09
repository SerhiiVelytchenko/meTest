// type
import { ParallaxContainerType } from '@md-modules/shared/types/landing';
// views
import { PictureTopPlanet, WrapperParallaxContainer, PictureRightPlanet } from '../views';

export const ParallaxContainer = ({ isRender, positionX, positionY }: ParallaxContainerType) => {
  // coefficientSpeedPlanet
  const forTopPlanet = 4;
  const forRightPlanet = 2;

  return (
    <WrapperParallaxContainer>
      <PictureTopPlanet
        transform={isRender ? `translate(${positionX / forTopPlanet}%, ${positionY / forTopPlanet}%)` : undefined}
      />
      <PictureRightPlanet
        transform={isRender ? `translate(${positionX / forRightPlanet}%, ${positionY / forRightPlanet}%)` : undefined}
      />
    </WrapperParallaxContainer>
  );
};
