import React, { ReactNode } from 'react';
import { BasketAPIContextProvider } from '@md-modules/basket/layers/api';
import { BasketBLContextProvider } from '@md-modules/basket/layers/business';
import { BasketPresentation } from '@md-modules/basket/layers/presentation';

const BasketProvider = ({ children }: {children: ReactNode}) => (
  <BasketAPIContextProvider>
    <BasketBLContextProvider>
      {children}
    </BasketBLContextProvider>
  </BasketAPIContextProvider>
);

export { BasketProvider, BasketPresentation };
