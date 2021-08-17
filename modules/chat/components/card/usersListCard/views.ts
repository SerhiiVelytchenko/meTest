import styled from 'styled-components';
import { colors } from '@md-modules/shared/styles/styled/theme';

export const WrapperUsersListCard = styled.div<{
  border: string;
}>`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 80px;
  border: ${({ border }) => border} solid ${({ theme }) => theme.colors.blue400};
  margin: 10px;
  align-items: center;
`;

export const UserAvatar = styled.div<{
  url: string;
}>`
  background: url(${({ url }) => url}) center no-repeat;
  width: 50px;
  height: 50px;
  background-size: 100%;
  border: 2px solid ${({ theme }) => theme.colors.blue400};
  border-radius: 25px;
`;

export const CenterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const TextUserName = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  height: 25px;
  line-height: 1.28;
  font-size: 16px;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  box-sizing: border-box;
`;

export const TextUserMassage = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  height: 25px;
  line-height: 1.28;
  font-size: 16px;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  box-sizing: border-box;
`;

export const InfoContainer = styled(CenterContainer)``;

export const ArrivalTimeMassage = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  height: 25px;
  line-height: 1.28;
  font-size: 16px;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  box-sizing: border-box;
`;

export const UnreadMassage = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  height: 25px;
  line-height: 1.28;
  font-size: 16px;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  @media (${({ theme }) => theme.medias.tablet}) {
    width: 95%;
  }
`;

export const InputWrapper = styled.div`
  margin: 0 auto;
`;

export const InputButton = styled.input`
  margin: 5px 0px 5px 0px;
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;
  width: 130px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green200};
  }
`;

export const Input = styled.input<{ border: keyof typeof colors }>`
  background-color: ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.black};
  border-top: 2px solid ${({ theme }) => theme.colors.gray400};
  line-height: 1.28;
  font-size: 20px;
  margin: 0px 0px 0px 10px;
  padding: 5px;
  box-sizing: border-box;
  border-color: ${({ border, theme }) => theme.colors[border] ?? 0};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
  &:active {
    color: ${({ theme }) => theme.colors.blue400};
  }
`;
