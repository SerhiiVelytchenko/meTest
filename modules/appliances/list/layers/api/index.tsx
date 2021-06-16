import React from 'react';
import { useQuery } from '@md-utils/mock/query';
import { appliances, Appliance } from '@md-modules/shared/mock';

interface Context {
  appliance: Appliance[];
  loading: boolean;
}

const AppliancesListAPIContext = React.createContext<Context>({
  appliance: [],
  loading: true
});

const AppliancesListAPIContextProvider: React.FC = ({ children }) => {
  const { data, loading } = useQuery(appliances);

  return (
    <AppliancesListAPIContext.Provider
      value={{
        appliance: data ?? [],
        loading
      }}
    >
      {children}
    </AppliancesListAPIContext.Provider>
  );
};

export { AppliancesListAPIContextProvider, AppliancesListAPIContext };
