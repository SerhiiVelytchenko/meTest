import React from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Loader } from '@md-modules/shared/components/ui/loaders/loader';
// context
import { StarshipsAPIContext } from '@md-sw-starships/layers/api/starships';
import { StarshipsBLContext } from '@md-sw-starships/layers/business';
// views
import { ContentWrapper, WrapperStarship, ContentItemsWrapper } from '@md-shared/views/common';

const StarshipsPresentation = () => {
  const { isLoading, isLoadingFetchMore, error, fetchMore, totalCount } = React.useContext(StarshipsAPIContext);
  const { starshipsList } = React.useContext(StarshipsBLContext);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    // element height with regard to vertical scrolling
    const scrollHeight = event.currentTarget.scrollHeight;
    // the number of pixels scrolled from the top of the element
    const scrollTop = event.currentTarget.scrollTop;
    // browser window height
    const workspaceHeight = window.innerHeight;
    // fetchMore start mark px from the bottom edge
    const heightStart = 170;
    // the number of elements in the array

    const numberItems = starshipsList.length < totalCount;

    if (scrollHeight - (scrollTop + workspaceHeight) < heightStart && !isLoadingFetchMore && numberItems) {
      fetchMore();
    }
  };

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading && !isLoadingFetchMore} error={error}>
        <WrapperStarship>
          <ContentItemsWrapper onScroll={handleScroll}>
            {starshipsList.map((starship) => (
              <Card
                key={starship.id}
                href='/graphql/starships/[id]'
                as={`/graphql/starships/${starship.id}`}
                {...starship}
              />
            ))}
            {isLoadingFetchMore && <Loader />}
          </ContentItemsWrapper>
        </WrapperStarship>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { StarshipsPresentation };
