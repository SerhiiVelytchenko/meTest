import * as React from 'react';
import { AppliancesListAPIContextProvider } from '@md-appliances/list/layers/api';
import { AppliancesListBLContextProvider } from '@md-appliances/list/layers/business';
import { AppliancesListPresentation } from '@md-appliances/list/layers/presentation';

const AppliancesListContainer = () => (
  <AppliancesListAPIContextProvider>
    <AppliancesListBLContextProvider>
      <AppliancesListPresentation />
    </AppliancesListBLContextProvider>
  </AppliancesListAPIContextProvider>
);

export { AppliancesListContainer };
