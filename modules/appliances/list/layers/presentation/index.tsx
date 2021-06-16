import * as React from 'react';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { AppliancesListAPIContext } from '@md-appliances/list/layers/api';
import { ApplianceCard } from '@md-appliances/list/components/applianceCard';
import { CardsWrapper } from '@md-appliances/list/layers/presentation/views';
import { BasketBLContext } from '@md-modules/basket/layers/business';

const AppliancesListPresentation = () => {
  const { loading, appliance } = React.useContext(AppliancesListAPIContext);
  const { addToBasket, items } = React.useContext(BasketBLContext);

  return (
    <ContentLoader isLoading={loading}>
      <CardsWrapper>
        {appliance.map((appliance) => (
          <ApplianceCard data={appliance} key={appliance.id} onAddToBasket={addToBasket} items={items} />
        ))}
      </CardsWrapper>
    </ContentLoader>
  );
};

export { AppliancesListPresentation };
