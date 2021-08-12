import React, { ReactChild, ReactChildren } from 'react';
import { ChatContext } from '@md-modules/chat';

import { useDropzone } from 'react-dropzone';
import { WrapperContainer, ButtonS, Container } from './views';

export const Dropzone = ({ children }: { children: ReactChild | ReactChildren }) => {
  const { handleFilesDropzone } = React.useContext(ChatContext);
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, open } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      handleFilesDropzone(acceptedFiles);
    }
  });

  return (
    <WrapperContainer>
      <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />

        {children}
        <ButtonS type='button' onClick={open}></ButtonS>
      </Container>
    </WrapperContainer>
  );
};
