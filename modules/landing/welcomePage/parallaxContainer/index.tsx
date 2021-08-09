// type
import { ParallaxContainerType } from '@md-modules/shared/types/landing';
// views
import { PictureTopPlanet, WrapperParallaxContainer, PictureRightPlanet } from '../views';

export const ParallaxContainer = ({ positionX, positionY }: ParallaxContainerType) => {
  // coefficientSpeedPlanet
  const forTopPlanet = 4;
  const forRightPlanet = 2;

  return (
    <WrapperParallaxContainer>
      <PictureTopPlanet transform={`translate(${positionX / forTopPlanet}%, ${positionY / forTopPlanet}%)`} />
      <PictureRightPlanet transform={`translate(${positionX / forRightPlanet}%, ${positionY / forRightPlanet}%)`} />
    </WrapperParallaxContainer>
  );
};
