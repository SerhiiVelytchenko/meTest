import React, { ReactChild, ReactChildren } from 'react';
// components
import { ChatContext } from '@md-modules/chat';
import { useDropzone } from 'react-dropzone';
// views
import {
  InputDropzone,
  ThumbInner,
  WrapperContainer,
  ButtonOpenModal,
  Container,
  ThumbsContainer,
  Thumb,
  Img
} from './views';

export const Dropzone = ({ children }: { children: ReactChild | ReactChildren }) => {
  const { filesDropzone, handleFilesDropzone } = React.useContext(ChatContext);
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, open } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      handleFilesDropzone(acceptedFiles);
    }
  });

  const thumbs = filesDropzone
    .filter((_file, index) => index <= 8)
    .map((file: any) => (
      <Thumb key={file.name}>
        <ThumbInner>
          <Img src={file.preview} />
        </ThumbInner>
      </Thumb>
    ));

  return (
    <WrapperContainer>
      <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <InputDropzone {...getInputProps()} />
        {children}
        <ThumbsContainer>{thumbs}</ThumbsContainer>
        <ButtonOpenModal type='button' onClick={open} />
      </Container>
    </WrapperContainer>
  );
};
