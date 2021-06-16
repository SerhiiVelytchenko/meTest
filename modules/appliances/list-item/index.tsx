import * as React from 'react';
import { PersonPresentation } from './layers/presentation/index';
import { PersonAPIContextProvider } from './layers/api/person/index';
import { PersonBLContextProvider } from './layers/business/index';

const PersonContainer = () => (
  <PersonAPIContextProvider>
    <PersonBLContextProvider>
      <PersonPresentation />
    </PersonBLContextProvider>
  </PersonAPIContextProvider>
);

export { PersonContainer };
