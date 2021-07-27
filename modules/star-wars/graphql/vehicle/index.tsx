import React from 'react';
import { VehiclePresentation } from '@md-sw-vehicle/layers/presentation';
import { VehicleAPIContextProvider } from '@md-sw-vehicle/layers/api/vehicle';
import { VehicleBLContextProvider } from '@md-sw-vehicle/layers/business';

const VehicleContainer = () => (
  <VehicleAPIContextProvider>
    <VehicleBLContextProvider>
      <VehiclePresentation />
    </VehicleBLContextProvider>
  </VehicleAPIContextProvider>
);

export { VehicleContainer };
