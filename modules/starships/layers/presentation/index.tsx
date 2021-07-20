import React from 'react';
// view components
import { Card } from 'modules/starships/layers/presentation/components/card/index';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { VehiclesAPIContext } from '@md-starships/layers/api/vehicles';
import { VehiclesBLContext } from '@md-starships/layers/business';
// views
import { ContentWrapper, Wrapper } from './components/views';

const VehiclesPresentation = () => {
  const { isLoading, error } = React.useContext(VehiclesAPIContext);
  const { vehiclesList } = React.useContext(VehiclesBLContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {vehiclesList?.map((vehicle) => (
            <Card key={vehicle.id} href='/graphql/vehicles/[id]' as={`/graphql/vehicles/${vehicle.id}`} {...vehicle} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { VehiclesPresentation };
