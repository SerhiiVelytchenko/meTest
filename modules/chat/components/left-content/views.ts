import styled from 'styled-components';

export const WrapperLeftContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray300};
  width: 300px;
  overflow: hidden;
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 0 0 0 -300px;
  }
`;

export const WrapperUsersChoice = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 85%;
  left: 0.5%;
  overflow: auto;
  width: 280px;
  height: 95px;
  background-color: ${({ theme }) => theme.colors.gray300};
  box-shadow: 0 0 15px 5px;
  border-radius: 20px;
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 0 0 0 -300px;
  } ;
`;
