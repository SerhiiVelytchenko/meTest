import React, { useCallback, useMemo, useState } from 'react';
import { Appliance } from '@md-modules/shared/mock';
import useLocalStorage from '../../../shared/hooks/useLocalStorage/index';

interface Context {
  items: Array<{
    count: number;
    appliance: Appliance;
  }>;
  addToBasket: (item: Appliance | undefined) => void;
  removeFromBasket: (item: Appliance | number) => void;
  incrementItemCount: (item: Appliance | number) => void;
  decrementItemCount: (item: Appliance | number) => void;
  active: boolean;
  setActive: (active: boolean) => void;
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

  const handleAddToBasket = useCallback(
    (item) =>
      setItems((items) => {
        const currentItem = items.find(({ appliance }) => appliance.id === item.id);
        if (!currentItem) {
          return items.concat({
            appliance: item,
            count: 1
          });
        }
        const currentIndex = items.indexOf(currentItem);

        return items
          .slice(0, currentIndex)
          .concat({
            ...currentItem,
            count: currentItem.count + 1
          })
          .concat(items.slice(currentIndex + 1));
      }),
    [setItems]
  );

  const handleRemoveFromBasket = useCallback(
    (item: Appliance | number) =>
      setItems((items) => {
        const itemId = typeof item === 'number' ? item : item.id;
        const currentIndex = items.findIndex(({ appliance }) => appliance.id === itemId);

        return items.slice(0, currentIndex).concat(items.slice(currentIndex + 1));
      }),
    [setItems]
  );

  const handleIncrementItemCount = useCallback(
    (item: Appliance | number) =>
      setItems((items) => {
        const itemId = typeof item === 'number' ? item : item.id;
        const currentItem = items.find(({ appliance }) => appliance.id === itemId);
        if (!currentItem) return items;
        const currentIndex = items.indexOf(currentItem);

        return items
          .slice(0, currentIndex)
          .concat({
            ...currentItem,
            count: currentItem.count + 1
          })
          .concat(items.slice(currentIndex + 1));
      }),
    [setItems]
  );

  const handleDecrementItemCount = useCallback(
    (item: Appliance | number) =>
      setItems((items) => {
        const itemId = typeof item === 'number' ? item : item.id;
        const currentItem = items.find(({ appliance }) => appliance.id === itemId);
        if (!currentItem) return items;
        const currentIndex = items.indexOf(currentItem);
        if (currentItem.count === 1) return items.slice(0, currentIndex).concat(items.slice(currentIndex + 1));

        return items
          .slice(0, currentIndex)
          .concat({
            ...currentItem,
            count: currentItem.count - 1
          })
          .concat(items.slice(currentIndex + 1));
      }),
    [setItems]
  );

  return (
    <BasketBLContext.Provider
      value={useMemo(
        () => ({
          items,
          addToBasket: handleAddToBasket,
          removeFromBasket: handleRemoveFromBasket,
          incrementItemCount: handleIncrementItemCount,
          decrementItemCount: handleDecrementItemCount,
          active,
          setActive
        }),
        [items, handleAddToBasket, handleRemoveFromBasket, handleIncrementItemCount, handleDecrementItemCount, active]
      )}
    >
      {children}
    </BasketBLContext.Provider>
  );
};

export { BasketBLContextProvider, BasketBLContext };
