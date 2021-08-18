// type
import { PlanetsType } from '@md-modules/shared/types/landing';
import React, { useEffect, useState } from 'react';
// views
import {
  PlanetSmall,
  PlanetBig,
  WrapperContainerLeftContainer,
  WrapperLeftContainer,
  WrapperPlanet,
  WrapperLeftContainerFirst,
  WrapperLeftContainerSecond
} from '../views';

export const LeftContainer = ({
  scrollFactor: scroll,
  numberOfSections
}: {
  scrollFactor: number | undefined;
  numberOfSections: number;
}) => {
  const [transformPlanet, setTransformPlanet] = useState(0);

  const planets: PlanetsType[] = [...Array(numberOfSections)].map((planet, index) => {
    const degrees = 180 / numberOfSections;
    const firstPlanet = degrees / 2;
    return { ...planet, transform: firstPlanet + degrees * index };
  });

  const scrollFactor = scroll || 0;

  useEffect(
    () =>
      planets.length <= scrollFactor
        ? setTransformPlanet(planets[planets.length - 1].transform)
        : setTransformPlanet(planets[scrollFactor].transform),
    [scrollFactor, planets]
  );
  return (
    <WrapperLeftContainerFirst>
      <WrapperLeftContainerSecond>
        <WrapperContainerLeftContainer>
          <WrapperLeftContainer>
            {planets.map((planet, index) => {
              return (
                <WrapperPlanet key={index} transform={planet.transform}>
                  <PlanetSmall transform={planet.transform} />
                </WrapperPlanet>
              );
            })}
            <WrapperPlanet transform={transformPlanet}>
              <PlanetBig transform={transformPlanet} />
            </WrapperPlanet>
          </WrapperLeftContainer>
        </WrapperContainerLeftContainer>
      </WrapperLeftContainerSecond>
    </WrapperLeftContainerFirst>
  );
};
