import React, { useCallback } from 'react';
import { Count } from '../count';
import { Appliance } from '@md-modules/shared/mock';
import { BasketBLContext } from '@md-modules/basket/layers/business';
import { CardPrice, ViewButton, Wrapper, CardImg, WrapperImg, CardName, CardCounter, WrapperInfoBlock } from './views';
export interface ApplianceBasketItem {
  count: number;
  appliance: Appliance;
}

const BasketItem: React.FC<ApplianceBasketItem> = ({ count, appliance }) => {
  const { removeFromBasket } = React.useContext(BasketBLContext);

  const handleRemoveFromBasket = useCallback(() => {
    removeFromBasket(appliance);
  }, [appliance, removeFromBasket]);

  return (
    <Wrapper>
      <WrapperImg>
        <CardImg src={appliance.image} alt={appliance.name} />
      </WrapperImg>
      <CardName>{appliance.name}</CardName>
      <WrapperInfoBlock>
        <CardPrice>
          {count}x{appliance.price}
        </CardPrice>
        <ViewButton id={appliance.id} onClick={handleRemoveFromBasket}>
          Remove
        </ViewButton>
        <CardCounter>
          <Count count={count} appliance={appliance} />
        </CardCounter>
      </WrapperInfoBlock>
    </Wrapper>
  );
};

export { BasketItem };
