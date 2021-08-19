import styled from 'styled-components';

export const WrapperUsersChoice = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px 0 10px;
  justify-content: left;
  align-items: center;
`;

export const UserAvatar = styled.div<{
  url: string;
  border: string;
}>`
  background: url(${({ url }) => url}) center no-repeat;
  width: 50px;
  height: 50px;
  background-size: 100%;
  border: ${({ border }) => border} solid ${({ theme }) => theme.colors.gray400};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  &:active {
    border: 5px solid ${({ theme }) => theme.colors.blue400};
    box-shadow: 0 0 5px 2px blue;
  }
`;

export const TextUserName = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  height: 25px;
  line-height: 1.28;
  font-size: 16px;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  box-sizing: border-box;
  text-align: center;
`;
