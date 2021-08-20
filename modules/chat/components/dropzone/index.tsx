import { useEffect } from 'react';
// type
import { DropzonePropsType } from '@md-modules/shared/types/chat';
// components
import { useDropzone } from 'react-dropzone';
// views
import {
  ButtonRemoveFile,
  InputDropzone,
  ThumbInner,
  WrapperContainer,
  Container,
  ThumbsContainer,
  Thumb,
  Img
} from './views';

export const Dropzone = ({
  handleRemoveFile,
  children,
  filesDropzone,
  handleFilesDropzone,
  isOpenWindowAddFiles
}: DropzonePropsType) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, open } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      handleFilesDropzone(acceptedFiles);
    }
  });

  useEffect(() => {
    if (isOpenWindowAddFiles) {
      open();
    }
  }, [isOpenWindowAddFiles, open]);

  const thumbs = filesDropzone
    .filter((_file, index) => index <= 8)
    .map((file: any, index) => (
      <Thumb key={file.name}>
        <ButtonRemoveFile
          onClick={() => {
            handleRemoveFile(index);
          }}
        />
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
      </Container>
    </WrapperContainer>
  );
};
