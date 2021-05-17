import * as React from 'react';
import { Modal, ModalContent, CardFooterTitle, CardBlok } from './views';
import { BasketBLContext } from '@md-modules/basket/layers/business';
import { BasketItem } from '../basket-item';

const BasketContainer: React.FC = () => {
  const { active, setActive, items } = React.useContext(BasketBLContext);

  return (
  <Modal opacity={active ? 1 : undefined} pointerEvents={active ? 'all' : undefined} onClick={() => setActive(false)}>
    <ModalContent transform={active ? 'scale(1)' : undefined} onClick={e => e.stopPropagation()}>
      <CardBlok>
        {items.map((item) => (
            <BasketItem key={item.appliance.id} {...item}/>
        ))}
      </CardBlok>
      <CardFooterTitle>
        { items.length ? `Sum: ${items.reduce((ac, item) => ac + item.appliance.price * item.count, 0)}` : 'Ви не вибрали жодного товару'}
      </CardFooterTitle>
    </ModalContent>
  </Modal>

  );
};

export { BasketContainer };
