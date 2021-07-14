import React from 'react';
import { useQuery } from '@md-utils/mock/query';
import { appliances, Appliance } from '@md-modules/shared/mock';

interface Context {
  vehicles: Appliance[];
  loading: boolean;
}

const VehiclesListAPIContext = React.createContext<Context>({
  vehicles: [],
  loading: true
});

const VehiclesListAPIContextProvider: React.FC = ({ children }) => {
  const { data, loading } = useQuery(appliances);

  return (
    <VehiclesListAPIContext.Provider
      value={{
        vehicles: data ?? [],
        loading
      }}
    >
      {children}
    </VehiclesListAPIContext.Provider>
  );
};

export { VehiclesListAPIContextProvider, VehiclesListAPIContext };
