import * as React from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';
// hooks
import { useSelector } from 'react-redux';
// types
import { Planet } from '@md-shared/types/planet';
import { RootStore } from '@md-store/index';
// utils
import { clientError } from '@md-shared/services/api';

type ListItem = Pick<Planet, 'id' | 'name'> & { image: string };

export const Species = () => {
  // store
  const { data, error, loading } = useSelector<
    RootStore,
    Pick<RootStore['api']['species']['getSpecies'], 'data' | 'error' | 'loading'>
  >((state) => ({
    data: state.api.species.getSpecies.data,
    error: state.api.species.getSpecies.error,
    loading: state.api.species.getSpecies.loading
  }));

  // data transformation
  const planetsList = React.useMemo<ListItem[] | undefined>(
    () =>
      data?.results?.map(({ name }, index) => ({
        name,
        id: `${index + 1}`,
        image: '/static/images/planet.png'
      })),
    [data]
  );

  return (
    <ContentWrapper>
      <ContentLoader isLoading={loading} error={clientError(error)}>
        <Wrapper>
          {planetsList?.map((planet) => (
            <Card key={planet.id} href='/redux/species/[id]' as={`/redux/species/${planet.id}`} {...planet} />
          ))}
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};
