import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { VehiclesListContainer } from '@md-modules/vehicles/list/layers';

const VehiclesListPage = () => (
  <MainLayout>
    <VehiclesListContainer />
  </MainLayout>
);

export default VehiclesListPage;
