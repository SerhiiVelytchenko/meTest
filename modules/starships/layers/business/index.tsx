import React from 'react';
// context
import { VehiclesAPIContext } from '@md-starships/layers/api/vehicles';
// types
import { Vehicle } from '@md-queries/vehicles/types';

type ListItem = Vehicle & { image: string };

interface Context {
  vehiclesList: ListItem[];
}

const VehiclesBLContext = React.createContext<Context>({
  vehiclesList: []
});

const url = 'https://static.wikia.nocookie.net/starwars/images/2/24/TantiveIV-TSWB.png';
const VehiclesBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { vehicles } = React.useContext(VehiclesAPIContext);

  const vehiclesList = React.useMemo<ListItem[]>(() => {
    return vehicles?.map(({ id, name }) => ({
      id,
      name,
      image: url
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
