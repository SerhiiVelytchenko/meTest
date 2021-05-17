import * as React from 'react';
import { useQuery } from '@md-utils/mock/query';
import { appliances, Appliance } from '@md-modules/shared/mock';
import { useMemo } from 'react'

interface Context {}

const BasketAPIContext = React.createContext<Context>({});

const BasketAPIContextProvider: React.FC = ({ children }) => {

  return (
    <BasketAPIContext.Provider value={useMemo(() => ({}), [])}>
      {children}
    </BasketAPIContext.Provider>
  );
};

export { BasketAPIContextProvider, BasketAPIContext };
