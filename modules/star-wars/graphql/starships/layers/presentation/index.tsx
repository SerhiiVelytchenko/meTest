import React from 'react';
// view components
import { Card } from '@md-sw/shared/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// context
import { StarshipsAPIContext } from '@md-sw-starships/layers/api/starships';
import { StarshipsBLContext } from '@md-sw-starships/layers/business';
// views
import { ContentWrapper, Wrapper, ContentItemsWrapper } from '@md-shared/views/common';
// Should be under the comment "components".
import { Loader } from '@md-modules/shared/components/ui/loaders/loader';

const StarshipsPresentation = () => {
  const { isLoading, isLoadingFetchMore, error, fetchMore, totalCount } = React.useContext(StarshipsAPIContext);
  const { starshipsList } = React.useContext(StarshipsBLContext);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    // element height with regard to vertical scrolling

    // This does not have to be typed, the TypeScript itself understands that it will be a number.
    const scrollHeight: number = event.currentTarget.scrollHeight;
    // the number of pixels scrolled from the top of the element
    const scrollTop: number = event.currentTarget.scrollTop;
    // browser window height
    const workspaceHeight: number = window.innerHeight;
    // fetchMore start mark px from the bottom edge
    const heightStart = 170;
    // the number of elements in the array

    // It is too
    const numberItems: boolean = starshipsList.length < totalCount;
    // should be in const | (Neznayka: I agree :D)
    if (scrollHeight - (scrollTop + workspaceHeight) < heightStart && !isLoadingFetchMore && numberItems) {
      // This parameter is not needed here at all. Moreover, at the api level you have already thrown it.
      fetchMore({ after: '' });
    }
  };

  return (
    <ContentWrapper>
      <ContentLoader isLoading={isLoading && !isLoadingFetchMore} error={error}>
        {/* This Wrapper defines the display: grid. Why use it here? */}
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
            {/* can be written like this --> isLoadingFetchMore && <Loader /> */}
            {isLoadingFetchMore ? <Loader /> : ''}
          </ContentItemsWrapper>
        </Wrapper>
      </ContentLoader>
    </ContentWrapper>
  );
};

export { StarshipsPresentation };
