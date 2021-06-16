import React from 'react';
import { BasketBLContext } from '@md-modules/basket/layers/business';
import { BasketContainer } from '@md-modules/basket/components/presentation';
import { ViewButton, CardImg, ProductBasket } from './views';

const BasketPresentation = () => {
  const { items, active, setActive } = React.useContext(BasketBLContext);

  if (items.length === 0) {
    setTimeout(() => setActive(false), 600);
  }

  return (
    <>
      <ViewButton onClick={() => setActive(true)}>
        <CardImg src='https://pngicon.ru/file/uploads/telejka.png' alt='Basket-Logo' />
        <ProductBasket item={items.length ? '#82DE59' : ''}>{items.length ? items.length : ''}</ProductBasket>
      </ViewButton>
      {active ? <BasketContainer /> : null}
    </>
  );
};

export { BasketPresentation };
