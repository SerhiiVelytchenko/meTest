import React, { useMemo, useState } from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { StarshipsAPIContext } from '@md-sw-starships/layers/api/starships';
import { StarshipsBLContext } from '@md-sw-starships/layers/business';
// views
import { ContentWrapper, Wrapper, ContentItemsWrapper } from '@md-shared/views/common';
import { Loader } from '@md-modules/shared/components/ui/loaders/loader';

const StarshipsPresentation = () => {
  const { isLoading, error, addNewPositions, totalCount } = React.useContext(StarshipsAPIContext);
  const { starshipsList } = React.useContext(StarshipsBLContext);
  const [fetching, setFetching] = useState(true);

  useMemo(() => {
    setFetching(true);
  }, [starshipsList.length]);

  const handleScroll = (event: any) => {
    if (starshipsList.length === totalCount) return setFetching(false);
    if (event.currentTarget.scrollHeight - (event.currentTarget.scrollTop + window.innerHeight) < 170 && fetching) {
      addNewPositions();
      setFetching(false);
    }
  };

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading} error={error}>
        <Wrapper>
          <ContentItemsWrapper onScroll={handleScroll}>
            {starshipsList.map((starship) => (
              <Card
                key={starship.id}
                href='/graphql/starships/[id]'
                as={`/graphql/starships/${starship.id}`}
                {...starship}
              />
            ))}
            {totalCount > starshipsList.length ? <Loader /> : ''}
          </ContentItemsWrapper>
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { StarshipsPresentation };
