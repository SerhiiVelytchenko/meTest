import styled from 'styled-components';
// import { colors } from '@md-modules/shared/styles/styled/theme';

export const WrapperCenterContent = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 100px;
  background-color: ${({ theme }) => theme.colors.blue300};
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

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  line-height: 1.28;
  font-size: 20px;
  margin: 0px 0px 0px 10px;
  padding: 5px;
  box-sizing: border-box;
  outline: none;
  max-width: 1000px;
  min-width: 200px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
  }
  &:active {
    color: ${({ theme }) => theme.colors.blue400};
    border-radius: 8px;
  }
`;

export const ContentCenter = styled.div`
  overflow: auto;
  height: 75vh;
`;

export const ContentBottom = styled.div``;

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

export const Button = styled.button`
  margin: 5px 0px 5px 0px;
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  background-color: ${({ theme }) => theme.colors.green200};
  /* transition: background-color 0.2s linear; */
  cursor: pointer;
  width: 90px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

export const ButtonS = styled.button`
  margin: 0px;
  padding: 0;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  background-color: ${({ theme }) => theme.colors.green200};
  transition: background-color 0.2s linear;
  cursor: pointer;
  width: 75px;
  height: 40px;
  background: url('https://w7.pngwing.com/pngs/310/241/png-transparent-paper-clip-computer-icons-trombone-miscellaneous-text-pin.png')
    center no-repeat;
  background-size: 80%auto;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

export const WrapperMessageCard = styled.div`
  margin: 0 auto;
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
