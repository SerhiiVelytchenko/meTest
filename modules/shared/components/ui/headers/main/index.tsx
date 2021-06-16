import * as React from 'react';
import { MenuItem } from '@md-ui/menu-items/main';
import { Logo } from '@md-ui/logos/main';
import { menuItems } from './constants';
import { BasketPresentation } from '@md-modules/basket/layers';
import { Wrapper, IWrapper, LWrapper, RWrapper } from './views';

const Header = () => {
  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          {menuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
          <BasketPresentation />
        </RWrapper>
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
