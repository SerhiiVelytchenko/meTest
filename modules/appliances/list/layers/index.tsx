import React from 'react';
import { AppliancesListAPIContextProvider } from '@md-appliances/list/layers/api';
import { AppliancesListPresentation } from '@md-appliances/list/layers/presentation';

const AppliancesListContainer = () => (
  <AppliancesListAPIContextProvider>
    <AppliancesListPresentation />
  </AppliancesListAPIContextProvider>
);

export { AppliancesListContainer };
