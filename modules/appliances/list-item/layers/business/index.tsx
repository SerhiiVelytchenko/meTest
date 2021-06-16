import React from 'react';
import { PersonAPIContext } from '@md-appliances/list-item/layers/api/person/index';
import { Appliance } from '@md-modules/shared/mock';

interface Context {
  personInfo: Appliance | undefined;
  personInfoOdj: Array<{ label: string; value: string | number }>;
}

const PersonBLContext = React.createContext<Context>({
  personInfo: undefined,
  personInfoOdj: []
});

const PersonBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { person } = React.useContext(PersonAPIContext);

  const personInfo = React.useMemo(
    () => {
      if (!person) {
        return undefined;
      }
      return person;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [typeof person === 'undefined']
  );

  const personInfoOdj = React.useMemo(
    () => {
      if (!person) {
        return [];
      }
      return [
        { label: 'Гарантія', value: person.info.guarantee },
        { label: 'Держава виробник', value: person.info.producingCountry },
        { label: 'Рівень енергозбереження', value: person.info.energyClass },
        { label: 'Вага', value: person.info.weight },
        { label: 'Колір', value: person.info.productColor },
        { label: 'Особливості', value: person.info.feature },
        { label: 'Ціна', value: person.price }
      ];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [typeof person === 'undefined']
  );

  return (
    <PersonBLContext.Provider
      value={{
        personInfo,
        personInfoOdj
      }}
    >
      {children}
    </PersonBLContext.Provider>
  );
};

export { PersonBLContextProvider, PersonBLContext };
