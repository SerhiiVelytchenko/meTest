import React from 'react';
import { VehiclesAPIContextProvider } from '@md-sw-vehicles/layers/api/vehicles';
import { VehiclesBLContextProvider } from '@md-sw-vehicles/layers/business';
import { VehiclesPresentation } from '@md-sw-vehicles/layers/presentation';

const VehiclesContainer = () => (
  <VehiclesAPIContextProvider>
    <VehiclesBLContextProvider>
      <VehiclesPresentation />
    </VehiclesBLContextProvider>
  </VehiclesAPIContextProvider>
);

export { VehiclesContainer };
