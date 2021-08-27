import styled from 'styled-components';

// Why not combine these three components?

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContentWrapper = styled.div``;

export const ContentItemsWrapper = styled.div`
  overflow: auto;

  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
`;

export const WrapperStarship = styled.div``;
