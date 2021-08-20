import styled from 'styled-components';

export const WrapperLeftContent = styled.div`
  position: relative;
  background: linear-gradient(180deg, white, gray);
  width: 300px;
  overflow: hidden;

  @media ${({ theme }) => theme.medias.tablet} {
    width: 0px;
  }
`;

export const WrapperUsersChoice = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
  overflow: auto;
  width: 280px;
  height: 95px;
  background-color: ${({ theme }) => theme.colors.gray300};
  box-shadow: 0 0 15px 5px;
  border-radius: 20px;
  @media ${({ theme }) => theme.medias.tablet} {
    width: 0px;
  } ;
`;

export const ButtonReverse = styled.button`
  margin: 5px 0px 5px 0px;
  padding: 0 5px;
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  background-color: ${({ theme }) => theme.colors.gray350};
  cursor: pointer;
  width: 80px;
  height: 40px;
  transform: rotate(270deg);
  &:hover {
    background-color: ${({ theme }) => theme.colors.red700};
  }
`;
