import * as React from 'react';
// view components
import { Species } from '@md-sw/redux/species';
import { MainLayout } from '@md-shared/layouts/main';
// store
import { initializeStore } from 'lib/redux/initStore';
import * as API from '@md-store/modules/api';
// types
import { ThunkDispatch } from '@md-store/helpers';

const SpeciesPage = () => (
  <MainLayout>
    <Species />
  </MainLayout>
);

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const dispatch = reduxStore.dispatch as ThunkDispatch;

  await dispatch(API.species.getSpecies.performAPIGetSpecies());

  return { props: { initialReduxState: reduxStore.getState() } };
}

export default SpeciesPage;
