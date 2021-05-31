import React, { useCallback } from 'react';
import { Count } from '../count';
import { Appliance } from '@md-modules/shared/mock';
import { BasketBLContext } from '@md-modules/basket/layers/business';
import {
  CardPrice,
  ViewButton,
  CardWrapper,
  CardImg,
  WrapperImg,
  CardName,
  CardCounter,
  WrapperInfoBlock,
  WrapperPriceAndButton
} from './views';
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
    <CardWrapper>
      <WrapperImg>
        <CardImg src={appliance.image} alt={appliance.name} />
      </WrapperImg>

      <WrapperInfoBlock>
        <CardName>{appliance.name}</CardName>
        <CardCounter>
          <Count count={count} appliance={appliance} />
        </CardCounter>
      </WrapperInfoBlock>

      <WrapperPriceAndButton>
        <CardPrice>
          {count}x{appliance.price}
        </CardPrice>
        <ViewButton id={appliance.id} onClick={handleRemoveFromBasket}>
          Remove
        </ViewButton>
      </WrapperPriceAndButton>
    </CardWrapper>
  );
};

export { BasketItem };
