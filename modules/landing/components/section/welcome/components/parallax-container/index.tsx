// type
import { ParallaxContainerType } from '@md-modules/shared/types/landing';
// views
import { PictureTopPlanet, WrapperParallaxContainer, PictureRightPlanet } from '../../views';

export const ParallaxContainer = ({ position }: { position: ParallaxContainerType }) => {
  // coefficientSpeedPlanet
  const forTopPlanet = 4;
  const forRightPlanet = 2;

  return (
    <WrapperParallaxContainer>
      <PictureTopPlanet transform={`translate(${position.axisX / forTopPlanet}%, ${position.axisY / forTopPlanet}%)`} />
      <PictureRightPlanet
        transform={`translate(${position.axisX / forRightPlanet}%, ${position.axisY / forRightPlanet}%)`}
      />
    </WrapperParallaxContainer>
  );
};
