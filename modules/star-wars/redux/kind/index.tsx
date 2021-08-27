import * as React from 'react';
// view components
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
// types
import { RootStore } from '@md-store/index';
// helpers
import { clientError } from '@md-utils/errors';
// store
import * as API from '@md-store/modules/api';
import { ThunkDispatch } from '@md-store/helpers';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

interface PlanetInfoProps {
  label: string;
  value: string | number;
}

export const KindContainer = () => {
  // hooks
  const dispatch = useDispatch<ThunkDispatch>();
  const { query } = useRouter();

  // store
  const { data: kind, error, loading } = useSelector<
    RootStore,
    Pick<RootStore['api']['species']['getKind'], 'data' | 'error' | 'loading'>
  >((state) => ({
    data: state.api.species.getKind.data,
    error: state.api.species.getKind.error,
    loading: state.api.species.getKind.loading
  }));

  // data transformation
  const kindInfo = React.useMemo<PlanetInfoProps[]>(() => {
    if (!kind) {
      return [];
    }

    return [
      { label: 'Name', value: kind?.name ?? 'N/A' },
      { label: 'Average height', value: kind?.average_height ?? 'N/A' },
      { label: 'Designation', value: kind?.designation ?? 'N/A' },
      { label: 'Eye colors', value: kind?.eye_colors ?? 'N/A' },
      { label: 'Language', value: kind?.language ?? 'N/A' },
      { label: 'Skin colors', value: kind?.skin_colors ?? 'N/A' }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind]);

  React.useEffect(() => {
    if (!query.id) return;
    dispatch(API.species.getKind.performAPIGetKind(query.id as string));
  }, [dispatch, query.id]);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={loading} error={clientError(error)}>
          <ImgContainer>
            <img src='/static/images/species.jpg' alt='planet' />
          </ImgContainer>
          <DetailsContainer>
            {kind && <Name>{kind?.name}</Name>}
            <InfoContainer>
              {kindInfo.map((i, idx) => (
                <Info key={idx} {...i} />
              ))}
            </InfoContainer>
          </DetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};
