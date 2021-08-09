import styled from 'styled-components';

// Why not combine these three components?

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const ContentWrapper = styled.div`
  padding: 30px 0;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
`;

export const ContentItemsWrapper = styled.div`
  height: 610px;
  overflow: auto;
  margin: 0;
  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
`;

export const WrapperStarship = styled.div`
  width: 300px;
  margin: auto;
`;
