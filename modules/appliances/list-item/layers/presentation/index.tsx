import React, { useCallback } from 'react';
import { PersonAPIContext } from '../api/person/index';
import { PersonBLContext } from '../business/index';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { PersonInfo } from '../../components/person-info/index';
// views
import {
  ContentWrapper,
  PersonDetailsContainer,
  PersonImgContainer,
  PersonInfoContainer,
  PersonName,
  Wrapper,
  ViewButton
} from './views';
import { BasketBLContext } from '@md-modules/basket/layers/business';

const PersonPresentation = () => {
  const { isLoading } = React.useContext(PersonAPIContext);
  const { personInfo, personInfoOdj } = React.useContext(PersonBLContext);
  const { addToBasket } = React.useContext(BasketBLContext);

  const handleAddToBasket = useCallback(() => {
    addToBasket(personInfo);
  }, [personInfo, addToBasket]);

  const value = {
    image: personInfo === undefined ? '' : personInfo?.image,
    name: personInfo === undefined ? '' : personInfo?.name,
    id: personInfo === undefined ? '' : personInfo?.id
  };

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading}>
          <PersonImgContainer>
            <img src={value.image} alt={value.name} />
          </PersonImgContainer>
          <PersonDetailsContainer>
            <PersonName>{value.name}</PersonName>
            <PersonInfoContainer>
              {personInfoOdj.map((i, idI) => (
                <PersonInfo key={idI} {...i} />
              ))}
            </PersonInfoContainer>
            <ViewButton name={value.id} onClick={handleAddToBasket}>
              Add to card
            </ViewButton>
          </PersonDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { PersonPresentation };
