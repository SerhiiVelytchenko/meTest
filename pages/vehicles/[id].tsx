import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { VehiclesPersonContainer } from '@md-modules/vehicles/list-item';

const VehiclesPersonPage = () => {
  return (
    <MainLayout>
      <VehiclesPersonContainer />
    </MainLayout>
  );
};

export default VehiclesPersonPage;
