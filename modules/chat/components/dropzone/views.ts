import styled from 'styled-components';
// import { colors } from '@md-modules/shared/styles/styled/theme';

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#eeeeee';
};

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
  position: fixed;
  top: 50%;
  left: 50%;
  width: 15%;
  height: 'auto';
`;

export const WrapperContainer = styled.div``;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1px;
  border: 2px solid ${(props) => getColor(props)};
  background-color: #fafafa;
  transition: border 0.24s ease-in-out;
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
export const ButtonS = styled.button`
  position: fixed;
  top: 93%;
  left: 90%;
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
