import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { AppliancesListContainer } from '@md-appliances/list/layers';

const AppliancesListPage = () => (
  <MainLayout>
    <AppliancesListContainer />
  </MainLayout>
);

export default AppliancesListPage;
