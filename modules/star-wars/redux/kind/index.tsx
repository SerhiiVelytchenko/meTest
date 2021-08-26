import * as React from 'react';
// view components
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// hooks
import { useSelector } from 'react-redux';
// types
import { RootStore } from '@md-store/index';
// helpers
import { clientError } from '@md-utils/errors';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

interface PlanetInfoProps {
  label: string;
  value: string | number;
}

export const KindContainer = () => {
  // store
  const { data: planet, error, loading } = useSelector<
    RootStore,
    Pick<RootStore['api']['species']['getKind'], 'data' | 'error' | 'loading'>
  >((state) => ({
    data: state.api.species.getKind.data,
    error: state.api.species.getKind.error,
    loading: state.api.species.getKind.loading
  }));

  const planetInfo = React.useMemo<PlanetInfoProps[]>(() => {
    if (!planet) {
      return [];
    }

    return [
      { label: 'Name', value: planet?.name ?? 'N/A' },
      { label: 'Average height', value: planet?.average_height ?? 'N/A' },
      { label: 'Designation', value: planet?.designation ?? 'N/A' },
      { label: 'Eye colors', value: planet?.eye_colors ?? 'N/A' },
      { label: 'Language', value: planet?.language ?? 'N/A' },
      { label: 'Skin colors', value: planet?.skin_colors ?? 'N/A' }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planet]);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={loading} error={clientError(error)}>
          <ImgContainer>
            <img src='/static/images/planet.png' alt='planet' />
          </ImgContainer>
          <DetailsContainer>
            {planet && <Name>{planet?.name}</Name>}
            <InfoContainer>
              {planetInfo.map((i, idx) => (
                <Info key={idx} {...i} />
              ))}
            </InfoContainer>
          </DetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};
