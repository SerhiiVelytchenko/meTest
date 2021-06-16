import React from 'react';

export default function useLocalStorage<T = any>(key: string, defaultValue: T) {
  const [value, setValue] = React.useState<T>(defaultValue);

  React.useEffect(() => {
    const itemsValue = window.localStorage.getItem(key);

    if (itemsValue !== null) {
      setValue(JSON.parse(itemsValue));
    }
  }, [key]);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
