import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray400};
  height: 100%;
  padding-top: 60px;
  justify-content: center;
  align-items: center;
`;
