import React from 'react';
import { VehiclesAPIContextProvider } from '@md-starships/layers/api/vehicles';
import { VehiclesBLContextProvider } from '@md-starships/layers/business';
import { VehiclesPresentation } from '@md-starships/layers/presentation';

const VehiclesContainer = () => (
  <VehiclesAPIContextProvider>
    <VehiclesBLContextProvider>
      <VehiclesPresentation />
    </VehiclesBLContextProvider>
  </VehiclesAPIContextProvider>
);

export { VehiclesContainer };
