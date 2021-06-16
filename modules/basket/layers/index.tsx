import React, { ReactNode } from 'react';
import { BasketBLContextProvider } from '@md-modules/basket/layers/business';
import { BasketPresentation } from '@md-modules/basket/layers/presentation';

const BasketProvider = ({ children }: { children: ReactNode }) => (
  <BasketBLContextProvider>{children}</BasketBLContextProvider>
);

export { BasketProvider, BasketPresentation };
