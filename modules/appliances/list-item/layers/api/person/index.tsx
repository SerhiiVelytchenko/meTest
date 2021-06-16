import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@md-utils/mock/query';
import { appliances, Appliance } from '@md-modules/shared/mock';

interface Context {
  person: Appliance | undefined;
  isLoading: boolean;
}

const PersonAPIContext = React.createContext<Context>({
  person: undefined,
  isLoading: false
});

const PersonAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();

  const { data, loading } = useQuery(appliances.find(({ id }) => id === query.id));

  return (
    <PersonAPIContext.Provider
      value={{
        person: data,
        isLoading: loading
      }}
    >
      {children}
    </PersonAPIContext.Provider>
  );
};

export { PersonAPIContextProvider, PersonAPIContext };
