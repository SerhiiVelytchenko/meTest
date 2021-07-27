import * as React from 'react';
// libs
import { initializeApollo } from '../../../lib/apolloClient';
// view components
import { MainLayout } from '@md-shared/layouts/main';
import { PlanetContainer } from '@md-sw-planet/index';
// types
import { GetServerSidePropsContext } from 'next';
import { GetPlanetResponse, GetPlanetVariables } from '@md-queries/planet/types';
// queries
import { GET_PLANET_QUERY } from '@md-queries/planet';

const StarshipPage = () => (
  <MainLayout>
    <PlanetContainer />
  </MainLayout>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloClient = initializeApollo();

  const { params } = context;

  try {
    await apolloClient.query<GetPlanetResponse, GetPlanetVariables>({
      query: GET_PLANET_QUERY,
      variables: { id: params?.id as string }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('GET_PLANET_QUERY_ERROR', error);
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default StarshipPage;
