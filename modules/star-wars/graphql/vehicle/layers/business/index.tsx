import React from 'react';
// context
import { VehicleAPIContext } from '@md-sw-vehicle/layers/api/vehicle';

interface VehicleInfo {
  label: string;
  value: string | number;
}

interface Context {
  vehicleInfo: VehicleInfo[];
}

const VehicleBLContext = React.createContext<Context>({
  vehicleInfo: []
});

const VehicleBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { vehicle } = React.useContext(VehicleAPIContext);

  const vehicleInfo = React.useMemo<VehicleInfo[]>(() => {
    if (!vehicle) {
      return [];
    }

    return [
      { label: 'Maximum number of kilograms', value: vehicle.cargoCapacity ?? 'N/A' },
      { label: 'Cost of this vehicle', value: vehicle.costInCredits ?? 'N/A' },
      { label: 'Maximum speed in atmosphere.', value: vehicle.maxAtmospheringSpeed ?? 'N/A' },
      { label: 'Maximum passengers', value: vehicle.passengers ?? 'N/A' },
      { label: 'Class of vehicle', value: vehicle.vehicleClass ?? 'N/A' },
      { label: 'Model or vehicle', value: vehicle.model ?? 'N/A' }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof vehicle === 'undefined']);

  return (
    <VehicleBLContext.Provider
      value={{
        vehicleInfo
      }}
    >
      {children}
    </VehicleBLContext.Provider>
  );
};

export { VehicleBLContextProvider, VehicleBLContext };
