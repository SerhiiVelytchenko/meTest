import React from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { VehiclesAPIContext } from '@md-sw-vehicles/layers/api/vehicles';
import { VehiclesBLContext } from '@md-sw-vehicles/layers/business';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const VehiclesPresentation = () => {
  const { isLoading, error } = React.useContext(VehiclesAPIContext);
  const { vehiclesList } = React.useContext(VehiclesBLContext);

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          {vehiclesList.map((vehicle) => (
            <Card key={vehicle.id} href='/graphql/vehicles/[id]' as={`/graphql/vehicles/${vehicle.id}`} {...vehicle} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { VehiclesPresentation };
