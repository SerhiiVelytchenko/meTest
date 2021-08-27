import * as React from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';
// hooks
import { useDispatch, useSelector } from 'react-redux';
// store
import * as API from '@md-store/modules/api';
// utils
import { clientError } from '@md-shared/services/api/index';
// types
import { Species } from '@md-shared/types/species';
import { RootStore } from '@md-store/index';
import { ThunkDispatch } from '@md-store/helpers';

type ListItem = Pick<Species, 'id' | 'name'> & { image: string };

export const SpeciesComponent = () => {
  // hooks
  const dispatch = useDispatch<ThunkDispatch>();

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

  React.useEffect(() => {
    dispatch(API.species.getSpecies.performAPIGetSpecies());
  }, [dispatch]);

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
