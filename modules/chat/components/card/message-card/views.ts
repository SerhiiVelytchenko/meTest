import styled from 'styled-components';
// import { colors } from '@md-modules/shared/styles/styled/theme';

export const WrapperMessageCard = styled.div<{
  justifyContent: string;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: 10px;
`;

export const MessageCardContainer = styled.div`
  min-width: 300px;
  max-width: 500px;
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
  url: string | undefined;
}>`
  background: url(${({ url }) => url || 'http://s1.iconbird.com/ico/0912/CrystalBW/w256h2561348673504budymsnnoir.png'})
    center no-repeat;
  width: 50px;
  height: 50px;
  margin: 5px 0 5px 0;
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
  max-width: 400px;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.28;
  font-size: 16px;
  margin: 0px 0px 0px 10px;
  padding: 0px;
`;

export const WrapperMessageImg = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const WrapperImg = styled.div``;

export const WrapperImgInner = styled.div`
  margin: 3px;
`;

export const Img = styled.img`
  width: 'auto';
  height: 50px;
`;

export const Ref = styled.div``;
