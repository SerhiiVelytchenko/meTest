import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 7px;
`;

export const InfoName = styled.div`
  text-align: left;
  padding: 0px 10px;
  width: 160px;
`;

export const InfoValue = styled.div`
  padding: 0 10px;
  width: 120px;
`;
