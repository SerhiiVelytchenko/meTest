import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(2, 300px);
  margin: 5px;
`;
