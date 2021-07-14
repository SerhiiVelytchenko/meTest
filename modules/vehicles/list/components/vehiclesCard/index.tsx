import React from 'react';
import { Appliance } from '@md-modules/shared/mock';
import { PersonLink } from '@md-vehicles/list/components/vehiclesCard/person-link/index';
import {
  Actions,
  Card,
  ContentWrapper,
  ImageWrapper,
  Title,
  ViewButton
} from '@md-vehicles/list/components/vehiclesCard/views';

interface VehiclesCardProps {
  data: Appliance;
}

const VehiclesCard: React.FC<VehiclesCardProps> = ({ data }) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={data.image} alt={`${data.name} image`} />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{data.name}</Title>
        <Actions>
          <PersonLink pId={data.id}>
            <ViewButton>Details</ViewButton>
          </PersonLink>
        </Actions>
      </ContentWrapper>
    </Card>
  );
};

export { VehiclesCard };
