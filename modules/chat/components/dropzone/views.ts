import styled from 'styled-components';

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
  position: absolute;
  top: 75%;
  left: 30%;
  width: 100%auto;
  display: 'flex';
  flex-direction: 'row';
  flex-wrap: 'wrap';
  margin-top: 16;
`;

export const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

export const ThumbInner = styled.div`
  display: flex;
  min-width: 0px;
  overflow: hidden;
`;

export const Img = styled.img`
  display: 'block';
  width: 'auto';
  height: '100%';
`;

export const WrapperContainer = styled.div``;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2px;
  border: 2px solid ${(props) => getColor(props)};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border 0.24s ease-in-out;
`;

export const A1 = styled.div`
  height: 100px;
  width: 100px;
`;

export const ButtonOpenModal = styled.button`
  width: 50px;
  height: 40px;
  position: fixed;
  top: 92.5%;
  right: 100px;
  margin: 0px;
  padding: 0;
  background-image: url('https://pngicon.ru/file/uploads/skrepka.png');
  background-size: 80%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export const InputDropzone = styled.input`
  display: flex;
  min-width: 0px;
  overflow: hidden;
`;
