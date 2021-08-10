import styled from 'styled-components';
// import { colors } from '@md-modules/shared/styles/styled/theme';

export const WrapperLeftContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray300};
  height: 100%;
`;

export const WrapperUsersChoice = styled.div`
  display: grid;
  position: fixed;
  overflow: auto;
  max-width: 24%;
  height: 95px;
  top: 85%;
  left: 0.5%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray300};
  align-items: center;
  box-shadow: 0 0 15px 10px;
`;
