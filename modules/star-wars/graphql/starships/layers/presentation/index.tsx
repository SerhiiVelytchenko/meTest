import React from 'react';
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
  const { isLoading, isLoadingFetchMore, error, fetchMore, totalCount } = React.useContext(StarshipsAPIContext);
  const { starshipsList } = React.useContext(StarshipsBLContext);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    // element height with regard to vertical scrolling
    const scrollHeight: number = event.currentTarget.scrollHeight;
    // the number of pixels scrolled from the top of the element
    const scrollTop: number = event.currentTarget.scrollTop;
    // browser window height
    const workspaceHeight: number = window.innerHeight;
    // fetchMore start mark px from the bottom edge
    const heightStart = 170;
    // the number of elements in the array
    const numberItems: boolean = starshipsList.length < totalCount;
    // should be in const
    if (scrollHeight - (scrollTop + workspaceHeight) < heightStart && !isLoadingFetchMore && numberItems) {
      fetchMore({ after: '' });
    }
  };

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading && !isLoadingFetchMore} error={error}>
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
            {isLoadingFetchMore ? <Loader /> : ''}
          </ContentItemsWrapper>
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { StarshipsPresentation };
