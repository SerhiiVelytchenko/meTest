import React from 'react';
// context
import { VehiclesAPIContext } from '@md-sw-vehicles/layers/api/vehicles';
// types
import { Vehicle } from '@md-queries/vehicles/types';

type ListItem = Vehicle & { image: string };

interface Context {
  vehiclesList: ListItem[];
}

const VehiclesBLContext = React.createContext<Context>({
  vehiclesList: []
});

const VehiclesBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { vehicles } = React.useContext(VehiclesAPIContext);

  const vehiclesList = React.useMemo<ListItem[]>(() => {
    return vehicles.map(({ id, name }) => ({
      id,
      name,
      image: '/static/images/vehicle.png'
    }));
  }, [vehicles]);

  return (
    <VehiclesBLContext.Provider
      value={{
        vehiclesList
      }}
    >
      {children}
    </VehiclesBLContext.Provider>
  );
};

export { VehiclesBLContextProvider, VehiclesBLContext };
