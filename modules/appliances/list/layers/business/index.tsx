import * as React from 'react';

const AppliancesListBLContext = React.createContext({});

const AppliancesListBLContextProvider: React.FC = ({ children }) => {
  return (
    <AppliancesListBLContext.Provider value={{}}>
      {children}
    </AppliancesListBLContext.Provider>
  );
};

export { AppliancesListBLContextProvider, AppliancesListBLContext };
