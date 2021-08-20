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

export const WrapperContainer = styled.div`
  flex: 1;
  position: relative;
  @media ${({ theme }) => theme.medias.tablet} {
  } ;
`;

export const ThumbsContainer = styled.aside`
  position: absolute;
  bottom: 70px;
  left: 15px;
  width: 100%auto;
  display: 'flex';
  flex-direction: 'row';
  flex-wrap: 'wrap';
  margin-top: 16;
`;

export const Thumb = styled.div`
  position: relative;
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  margin-bottom: 8px;
  margin-right: 8px;
  width: 60px;
  height: 60px;
  padding: 4px;
  box-sizing: border-box;
`;

export const ThumbInner = styled.div`
  display: flex;
  min-width: 0px;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2px;
  border: 2px solid ${(props) => getColor(props)};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border 0.24s ease-in-out;
`;

export const InputDropzone = styled.input`
  display: flex;
  min-width: 0px;
  overflow: hidden;
`;

export const ButtonRemoveFile = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 20px;
  height: 20px;
  margin: 0 0 0 0px;
  padding: 0;
  border: 1px solid black;
  border-radius: 10px;

  background-image: url('https://w7.pngwing.com/pngs/302/374/png-transparent-geneva-trophy-promotion-sarl-computer-icons-symbol-sign-symbol-miscellaneous-angle-logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border: none;

  outline: none;
  cursor: pointer;
  z-index: 5;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  @media ${({ theme }) => theme.medias.tablet} {
    top: 90%;
  } ;
`;
