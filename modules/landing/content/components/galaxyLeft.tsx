// type
import { GalaxyLeftType } from '@md-modules/shared/types/landing';
// views
import { PlanetSmall, PlanetBig, WrapperContainerGalaxyLeft, WrapperGalaxyLeft, WrapperPlanet } from '../views';

export const GalaxyLeft = ({ scroll, workspaceHeight, isRender }: GalaxyLeftType) => {
  const planets: {
    transform: number;
    radius?: number;
  }[] = [];

  let transform = planets[0]?.transform;

  if (isRender) {
    const numberPlanets = (amount: number) => {
      const degrees = 180 / amount;
      const firstPlanet = degrees / 2;
      let nextPlanet = firstPlanet + degrees;

      for (let i = 1; i < amount; i++) {
        if (planets.length === 0) {
          planets.push({ transform: firstPlanet });
        }

        planets.push({ transform: nextPlanet });

        nextPlanet += degrees;
      }
    };

    const numberOfPlanets = 3;
    numberPlanets(numberOfPlanets);

    let compensator = 60;
    const y = Math.trunc((scroll - compensator) / workspaceHeight - 0.5);
    if (planets.length > y) {
      transform = planets[y]?.transform;
    }
    if (planets.length === y) {
      transform = planets[y - 1]?.transform;
    }
    if (y === 1) {
      compensator = 0;
    }
  }

  return (
    <WrapperContainerGalaxyLeft>
      <WrapperGalaxyLeft>
        {planets.map((planet, index) => {
          return (
            <WrapperPlanet key={index} transform={planet.transform}>
              <PlanetSmall transform={planet.transform} />
            </WrapperPlanet>
          );
        })}
        <WrapperPlanet transform={transform}>
          <PlanetBig transform={transform} />
        </WrapperPlanet>
      </WrapperGalaxyLeft>
    </WrapperContainerGalaxyLeft>
  );
};
