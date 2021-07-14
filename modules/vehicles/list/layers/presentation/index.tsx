import React from 'react';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { VehiclesListAPIContext } from '@md-vehicles/list/layers/api';
import { VehiclesCard } from '@md-vehicles/list/components/vehiclesCard';
import { CardsWrapper } from '@md-vehicles/list/layers/presentation/views';

const VehiclesListPresentation = () => {
  const { loading, vehicles } = React.useContext(VehiclesListAPIContext);

  return (
    <ContentLoader isLoading={loading}>
      <CardsWrapper>
        {vehicles.map((vehicles) => (
          <VehiclesCard data={vehicles} key={vehicles.id} />
        ))}
      </CardsWrapper>
    </ContentLoader>
  );
};

export { VehiclesListPresentation };
