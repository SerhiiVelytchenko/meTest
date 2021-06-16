import React from 'react';

export default function useLocalStorage<T = any>(key: string, defaultValue: T) {
  const [value, setValue] = React.useState<T>(defaultValue);

  React.useEffect(() => {
    const itemsValue = window.localStorage.getItem(key);

    if (itemsValue !== null) {
      try {
        setValue(JSON.parse(itemsValue));
      } catch (e) {
        console.error('внешний блок catch', e.message);
      }
    }
  }, [key]);

  React.useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('внешний блок catch', e.message);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
