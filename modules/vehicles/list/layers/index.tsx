import React from 'react';
import { VehiclesListAPIContextProvider } from '@md-vehicles/list/layers/api';
import { VehiclesListPresentation } from '@md-vehicles/list/layers/presentation';

const VehiclesListContainer = () => (
  <VehiclesListAPIContextProvider>
    <VehiclesListPresentation />
  </VehiclesListAPIContextProvider>
);

export { VehiclesListContainer };
