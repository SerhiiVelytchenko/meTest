import styled from 'styled-components';
// import { colors } from '@md-modules/shared/styles/styled/theme';

export const WrapperCenterContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue300};
  height: 89vh;
`;

export const Form = styled.form`
  display: flex;
  margin: 0 auto;
  width: 90%;
  align-items: center;
  @media (${({ theme }) => theme.medias.tablet}) {
    width: 95%;
  }
`;

export const Textarea = styled.textarea`
  flex: 2;
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 25px;
  line-height: 1.28;
  font-size: 16px;
  margin: 0px 0px 0px 10px;
  padding: 16px 60px 0 30px;
  box-sizing: border-box;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 25px;
  }
  &:active {
    color: ${({ theme }) => theme.colors.blue400};
    border-radius: 25px;
  }
`;

export const ContentCenter = styled.div`
  overflow: auto;
  height: 85vh;
`;

export const ContentBottom = styled.div`
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
  height: 40px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

export const ButtonS = styled.button`
  width: 50px;
  height: 40px;

  margin: 0 0 0 -60px;
  padding: 0;
  background-image: url('https://pngicon.ru/file/uploads/skrepka.png');
  background-size: 80%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;

  z-index: 2;
  /* &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  } */
`;

export const WrapperMessageCard = styled.div`
  margin: 0 auto;
`;

export const InputSubmit = styled.input`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin: 0 0 0 20px;
  background-image: url('https://w1.pngwing.com/pngs/312/809/png-transparent-arrow-icon-interface-icon-send-icon-upload-icon-uploading-icon-pink-line-sign-symbol.png');
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
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
