import * as React from 'react';
// view components
import { SpeciesComponent } from '@md-sw/redux/species';
import { MainLayout } from '@md-shared/layouts/main';

const SpeciesPage = () => (
  <MainLayout>
    <SpeciesComponent />
  </MainLayout>
);

export default SpeciesPage;
