import * as React from 'react';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { VehiclesContainer } from '@md-sw-vehicles/index';
// queries
import { GET_VEHICLES_QUERY } from '@md-queries/vehicles';
// types
import { GetVehiclesResponse, GetVehiclesVariables } from '@md-queries/vehicles/types';
// libs
import { initializeApollo } from '../../../lib/apolloClient';

const PlanetsPage = () => (
  <MainLayout>
    <VehiclesContainer />
  </MainLayout>
);

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query<GetVehiclesResponse, GetVehiclesVariables>({
      query: GET_VEHICLES_QUERY,
      variables: { first: 5 }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('GET_VEHICLES_QUERY_ERROR', error);
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default PlanetsPage;
