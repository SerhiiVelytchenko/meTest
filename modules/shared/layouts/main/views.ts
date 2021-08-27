import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-top: 60px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray400};
  justify-content: center;
  align-items: center;
`;
