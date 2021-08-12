import styled from 'styled-components';
// import { colors } from '@md-modules/shared/styles/styled/theme';

export const WrapperMessageCard = styled.div<{
  justifyContent: string;
}>`
  /* position: absolute; */
  display: grid;

  justify-content: ${({ justifyContent }) => justifyContent};
  margin: 0;
`;

export const MessageCardContainer = styled.div`
  /* position: absolute; */
  display: grid;
  min-width: 300px;
  max-width: 600px;
  grid-template-columns: 50px 3fr;
  grid-template-rows: 50px;

  background-color: ${({ theme }) => theme.colors.blue300};
  border: 2px solid blue;
  border-radius: 5px;
  align-items: flex-end;
  margin: 2px;
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
  background-color: ${({ theme }) => theme.colors.white};
  &:active {
    border: 5px solid ${({ theme }) => theme.colors.blue400};
    box-shadow: 0 0 5px 2px blue;
  }
`;

export const TextMessage = styled.h1`
  color: ${({ theme }) => theme.colors.red300};
  height: 25px;
  line-height: 1.28;
  font-size: 16px;
  margin: 0px 0px 10px 10px;
  padding: 0px;
  box-sizing: border-box;
`;

export const ThumbsContainer = styled.aside`
  display: 'flex';
  flex-direction: 'row';
  flex-wrap: 'wrap';
  margin-top: 16;
`;

export const Thumb = styled.div`
  display: 'inline-flex';
  border-radius: 2;
  border: '1px solid #eaeaea';
  margin-bottom: 8;
  margin-right: 8;
  width: 100;
  height: 100;
  padding: 4;
  box-sizing: 'border-box';
`;

export const ThumbInner = styled.div`
  position: relative;
  display: 'flex';
  min-width: 0;
  overflow: 'hidden';
`;

export const Img = styled.img`
  width: 300%;
  height: 'auto';
`;

// export const InputButton = styled.input`
//   margin: 5px 0px 5px 0px;
//   padding: 5px 10px;
//   background-color: transparent;
//   border-radius: 3px;
//   border: 1px solid ${({ theme }) => theme.colors.green200};
//   color: ${({ theme }) => theme.colors.white};
//   outline: none;
//   transition: background-color 0.2s linear;
//   cursor: pointer;
//   width: 130px;
//   &:hover {
//     background-color: ${({ theme }) => theme.colors.green200};
//   }
// `;

// export const TextError = styled.div`
//   color: ${({ theme }) => theme.colors.red300};
//   height: 25px;
//   line-height: 1.28;
//   font-size: 16px;
//   margin: 0px 0px 10px 10px;
//   padding: 0px;
//   box-sizing: border-box;
//   &:active {
//     color: ${({ theme }) => theme.colors.blue400};
//   }
//   @media (max-width: 570px) {
//     font-size: 14px;
//   }
// `;
