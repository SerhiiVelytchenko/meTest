import styled from 'styled-components';

export const WrapperCenterContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  background: linear-gradient(180deg, white, gray);
  z-index: 2;
  @media ${({ theme }) => theme.medias.tablet} {
    margin: 0px;
  } ;
`;

export const ContentCenter = styled.div`
  overflow: auto;
  flex: 1;
`;

export const ContentBottom = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonAddFile = styled.button`
  width: 50px;
  height: 50px;
  margin: 0 0 0 -60px;
  padding: 0;
  border: 1px solid black;
  border-radius: 25px;
  background-image: url('https://pngicon.ru/file/uploads/skrepka.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  z-index: 5;
  &:hover {
  }
  @media ${({ theme }) => theme.medias.tablet} {
    top: 90%;
  } ;
`;

export const Form = styled.form`
  display: flex;
  margin: 10px 0 5px;
  width: 100%;
  align-items: center;
  @media ${({ theme }) => theme.medias.tablet} {
    width: 80vw;
  } ;
`;

export const Textarea = styled.textarea`
  flex: 2;
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
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

export const ButtonSubmit = styled.button`
  height: 50px;
  width: 50px;
  border: 2px solid ${({ theme }) => theme.colors.gray500};
  border-radius: 25px;
  margin: 0 10px 0 30px;
  background-image: url('https://img.icons8.com/color/452/send-letter--v1.png');
  background-size: 130%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
`;
