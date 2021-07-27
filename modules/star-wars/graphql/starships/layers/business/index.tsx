import * as React from 'react';
// context
import { StarshipsAPIContext } from '@md-sw-starships/layers/api/starships';
// types
import { Starship } from '@md-shared/types/starship';

type ListItem = Pick<Starship, 'id' | 'name'> & { image: string };

interface Context {
  starshipsList: ListItem[];
}

const StarshipsBLContext = React.createContext<Context>({
  starshipsList: []
});

const StarshipsBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { starships } = React.useContext(StarshipsAPIContext);

  const starshipsList = React.useMemo<ListItem[]>(
    () =>
      starships.map(({ id, name }) => ({
        id,
        name,
        image: '/static/images/starship.jpg'
      })),
    [starships]
  );

  return (
    <StarshipsBLContext.Provider
      value={{
        starshipsList
      }}
    >
      {children}
    </StarshipsBLContext.Provider>
  );
};

export { StarshipsBLContextProvider, StarshipsBLContext };
