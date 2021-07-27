import React from 'react';
// context
import { VehicleAPIContext } from '@md-sw-vehicle/layers/api/vehicle';
import { VehicleBLContext } from '@md-sw-vehicle/layers/business';
// view components
import { Info } from '@md-sw/shared/components/info';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// views
import { Name, Wrapper, ImgContainer, InfoContainer, ContentWrapper, DetailsContainer } from '@md-sw/shared/views';

const VehiclePresentation = () => {
  const { isLoading, vehicle, error } = React.useContext(VehicleAPIContext);
  const { vehicleInfo } = React.useContext(VehicleBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading} error={error}>
          <ImgContainer>
            <img src='/static/images/vehicle.png' alt='vehicle' />
          </ImgContainer>
          <DetailsContainer>
            {vehicle && <Name>{vehicle.name}</Name>}
            <InfoContainer>
              {vehicleInfo.map((i, idx) => (
                <Info key={idx} {...i} />
              ))}
            </InfoContainer>
          </DetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { VehiclePresentation };
