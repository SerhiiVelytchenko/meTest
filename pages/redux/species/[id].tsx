import * as React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { KindContainer } from '@md-modules/star-wars/redux/kind';

const KindPage = () => (
  <MainLayout>
    <KindContainer />
  </MainLayout>
);

export default KindPage;
