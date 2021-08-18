import React, { ReactChild, ReactChildren } from 'react';
import { ChatContext } from '@md-modules/chat';

import { useDropzone } from 'react-dropzone';
import { WrapperContainer, ButtonS, Container, ThumbsContainer, Thumb, Img } from './views';

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

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
        <div style={thumbInner}>
          <Img src={file.preview} />
        </div>
      </Thumb>
    ));

  return (
    <WrapperContainer>
      <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        {children}
        <ThumbsContainer>{thumbs}</ThumbsContainer>
        <ButtonS type='button' onClick={open} />
      </Container>
    </WrapperContainer>
  );
};
