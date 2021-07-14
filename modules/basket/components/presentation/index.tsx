import React, { useEffect } from 'react';
import { BasketBLContext } from '@md-modules/basket/layers/business';
import { BasketItem } from '@md-modules/basket/components/basket-item/index';
import { Modal, ModalContent, CardFooter, CardBlok } from './views';

const BasketContainer: React.FC = () => {
  const { active, setActive, items } = React.useContext(BasketBLContext);

  useEffect(() => {
    if (items.length === 0) {
      const timerId = setTimeout(() => setActive(false), 600);
      return () => clearTimeout(timerId);
    }
  }, [items.length === 0]);

  return (
    <Modal opacity={active ? 1 : undefined} pointerEvents={active ? 'all' : undefined} onClick={() => setActive(false)}>
      <ModalContent transform={active ? 'scale(1)' : undefined} onClick={(e) => e.stopPropagation()}>
        <CardBlok>
          {items.map((item) => (
            <BasketItem key={item.appliance.id} {...item} />
          ))}
        </CardBlok>
        <CardFooter>
          {items.length
            ? `Sum: ${items.reduce((ac, item) => ac + item.appliance.price * item.count, 0)}`
            : 'No product'}
        </CardFooter>
      </ModalContent>
    </Modal>
  );
};

export { BasketContainer };
