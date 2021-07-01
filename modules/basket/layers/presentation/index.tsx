import React from 'react';
import { BasketBLContext } from '@md-modules/basket/layers/business';
import { BasketContainer } from '@md-modules/basket/components/presentation';
import { ViewButton, CardImg, ProductBasket } from './views';

const BasketPresentation = () => {
  const { items, active, setActive } = React.useContext(BasketBLContext);

  const handleClick = () => {
    setActive(true);
  };

  return (
    <>
      <ViewButton onClick={handleClick}>
        <CardImg src='https://pngicon.ru/file/uploads/telejka.png' alt='Basket-Logo' />
        <ProductBasket item={items.length ? '#82DE59' : ''}>{items.length ? items.length : ''}</ProductBasket>
      </ViewButton>
      {active ? <BasketContainer /> : null}
    </>
  );
};

export { BasketPresentation };
