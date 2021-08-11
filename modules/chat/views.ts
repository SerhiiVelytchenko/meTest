import styled from 'styled-components';
// import { colors } from '@md-modules/shared/styles/styled/theme';

export const WrapperChatPage = styled.div`
  display: grid;
  grid-template-columns: 300px 3fr;
  grid-template-rows: 100%;
`;

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   width: 50%;
//   @media (${({ theme }) => theme.medias.tablet}) {
//     width: 95%;
//   }
// `;

// export const InputWrapper = styled.div`
//   margin: 0 auto;
// `;

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

// export const Input = styled.input<{ border: keyof typeof colors }>`
//   background-color: ${({ theme }) => theme.colors.gray300};
//   color: ${({ theme }) => theme.colors.black};
//   border-top: 2px solid ${({ theme }) => theme.colors.gray400};
//   line-height: 1.28;
//   font-size: 20px;
//   margin: 0px 0px 0px 10px;
//   padding: 5px;
//   box-sizing: border-box;
//   border-color: ${({ border, theme }) => theme.colors[border] ?? 0};
//   &:hover {
//     background-color: ${({ theme }) => theme.colors.white};
//   }
//   &:active {
//     color: ${({ theme }) => theme.colors.blue400};
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
