import * as React from 'react';
// context
import { PeopleAPIContext } from '@md-sw-people/layers/api/people';
// mock
import { Person } from '@md-modules/shared/mock';

interface Context {
  peopleList: Pick<Person, 'id' | 'name'>[];
}

const PeopleBLContext = React.createContext<Context>({
  peopleList: []
});

const PeopleBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { people } = React.useContext(PeopleAPIContext);

  const peopleList = React.useMemo<Pick<Person, 'id' | 'name'>[]>(
    () => {
      if (!people) {
        return [];
      }

      return people.map(({ id, name }) => ({
        name,
        id
      }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [typeof people === 'undefined']
  );

  return (
    <PeopleBLContext.Provider
      value={{
        peopleList
      }}
    >
      {children}
    </PeopleBLContext.Provider>
  );
};

export { PeopleBLContextProvider, PeopleBLContext };
