import styled from 'styled-components';
import { Card } from '@md-appliances/list/components/applianceCard/views';

export const CardsWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  ${Card} {
    flex: 0 1 48%;
    margin-bottom: 4%;
  }
`;
