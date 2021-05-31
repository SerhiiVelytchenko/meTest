import { Wrapper, ViewButton, CardItem } from './views';
import { BasketBLContext } from '@md-modules/basket/layers/business';
import React, { useCallback } from 'react';
import { ApplianceBasketItem } from '../basket-item';

const Count: React.FC<ApplianceBasketItem> = ({ count, appliance }) => {
  const { incrementItemCount, decrementItemCount } = React.useContext(BasketBLContext);

  const handleIncrementItemCount = useCallback(() => {
    incrementItemCount(appliance);
  }, [appliance, incrementItemCount]);

  const handleDecrementItemCount = useCallback(() => {
    decrementItemCount(appliance);
  }, [appliance, decrementItemCount]);
  return (
    <Wrapper>
      <ViewButton onClick={handleDecrementItemCount}>-</ViewButton>
      <CardItem>{count}</CardItem>
      <ViewButton onClick={handleIncrementItemCount}>+</ViewButton>
    </Wrapper>
  );
};

export { Count };
