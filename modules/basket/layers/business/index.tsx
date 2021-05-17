import { Appliance } from '@md-modules/shared/mock';
import React, { useCallback, useMemo, useState } from 'react';
import useLocalStorage from '../../../shared/hooks/useLocalStorage/index';

interface Context {
  items: Array<{
    count: number,
    appliance: Appliance
  }>
  addToBasket: (item: Appliance) => void
  removeFromBasket: (item: Appliance | number) => void
  incrementItemCount: (item: Appliance | number) => void
  decrementItemCount: (item: Appliance | number) => void
  active: boolean
  setActive: (active: boolean) => void
}

const BasketBLContext = React.createContext<Context>({
  items: [],
  addToBasket: () => {},
  removeFromBasket: () => {},
  incrementItemCount: () => {},
  decrementItemCount: () => {},
  active: false,
  setActive: () => {}
});

const BasketBLContextProvider: React.FC = ({ children }) => {
  const [items, setItems] = useLocalStorage<Context['items']>('storageItems', []);
  const [active, setActive] = useState(false);

  const handleAddToBasket = useCallback((item: Appliance) => setItems(items => {
    const currentItem = items.find(({ appliance }) => appliance.id === item.id);

    if (!currentItem) {
      return items.concat({
        appliance: item,
        count: 1
      });
    }

    const currentIndex = items.indexOf(currentItem);

    return items.slice(0, currentIndex).concat({
      ...currentItem,
      count: currentItem.count + 1
    }).concat(items.slice(currentIndex + 1));
  }), []);

  const handleRemoveFromBasket = useCallback((item: Appliance | number) => setItems(items => {
    const itemId = typeof item === 'number' ? item : item.id;
    const currentIndex = items.findIndex(({ appliance }) => appliance.id === itemId);

    return items.slice(0, currentIndex).concat(items.slice(currentIndex + 1));
  }), []);

  const handleIncrementItemCount = useCallback((item: Appliance | number) => setItems(items => {
    const itemId = typeof item === 'number' ? item : item.id;
    const currentItem = items.find(({ appliance }) => appliance.id === itemId);
    if (!currentItem) return items;
    const currentIndex = items.indexOf(currentItem);

    return items.slice(0, currentIndex).concat({
      ...currentItem,
      count: currentItem.count + 1
    }).concat(items.slice(currentIndex + 1));
  }), []);

  const handleDecrementItemCount = useCallback((item: Appliance | number) => setItems(items => {
    const itemId = typeof item === 'number' ? item : item.id;
    const currentItem = items.find(({ appliance }) => appliance.id === itemId);
    if (!currentItem) return items;
    const currentIndex = items.indexOf(currentItem);

    if (currentItem.count === 1) return items.slice(0, currentIndex).concat(items.slice(currentIndex + 1));

    return items.slice(0, currentIndex).concat({
      ...currentItem,
      count: currentItem.count - 1
    }).concat(items.slice(currentIndex + 1));
  }), []);

  return (
    <BasketBLContext.Provider value={useMemo(() => ({
      items,
      addToBasket: handleAddToBasket,
      removeFromBasket: handleRemoveFromBasket,
      incrementItemCount: handleIncrementItemCount,
      decrementItemCount: handleDecrementItemCount,
      active,
      setActive
    }), [items, active])}>
      {children}
    </BasketBLContext.Provider>
  );
};

export { BasketBLContextProvider, BasketBLContext };
