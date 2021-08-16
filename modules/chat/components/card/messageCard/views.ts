import styled from 'styled-components';
// import { colors } from '@md-modules/shared/styles/styled/theme';

export const WrapperMessageCard = styled.div<{
  justifyContent: string;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export const MessageCardContainer = styled.div`
  min-width: 300px;
  max-width: 600px;
  margin: 2px;
  background-color: ${({ theme }) => theme.colors.gray200};
  border: 2px solid ${({ theme }) => theme.colors.gray350};
  border-radius: 10px 35px;
  align-items: center;
  padding: 0 10px 0 10px;
  overflow: hidden;
`;

export const WrapperTopContent = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.div<{
  url: string;
}>`
  background: url(${({ url }) => url}) center no-repeat;
  width: 50px;
  height: 50px;
  background-size: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gray350};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  &:active {
    border: 5px solid ${({ theme }) => theme.colors.gray350};
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.colors.blue400};
  }
`;

export const TextMessage = styled.h1`
  width: 520px;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.red300};
  line-height: 1.28;
  font-size: 16px;
  margin: 0px 0px 0px 10px;
  padding: 0px;
`;

export const WrapperMessageImg = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 300px;
`;

export const WrapperImg = styled.div``;

export const WrapperImgInner = styled.div``;

export const Img = styled.img`
  width: 100px;
  height: 'auto';
`;
