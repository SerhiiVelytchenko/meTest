import styled from 'styled-components';
// import { colors } from '@md-modules/shared/styles/styled/theme';

export const WrapperLeftContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray300};
  height: 110%;
  width: 300px;
`;

export const WrapperUsersChoice = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 85%;
  left: 0.5%;
  overflow: auto;
  width: 290px;
  height: 95px;
  background-color: ${({ theme }) => theme.colors.gray300};
  box-shadow: 0 0 15px 10px;
`;
