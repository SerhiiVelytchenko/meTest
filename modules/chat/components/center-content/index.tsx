import React, { KeyboardEvent, useState } from 'react';
// type
import { CenterContentPropsType } from '@md-modules/shared/types/chat';
// components
import { MessageCard } from '../card/message-card';
import { Dropzone } from '../dropzone';
// views
import {
  WrapperCenterContent,
  Form,
  ButtonAddFile,
  Textarea,
  ButtonSubmit,
  ContentCenter,
  ContentBottom
} from './views';

export const CenterContent = ({ activeDialog, handleSubmit, stateUserChat }: CenterContentPropsType) => {
  const [inputValue, setInputValue] = useState('');
  const [filesDropzone, setFilesDropzone] = useState<{ preview: string }[]>([]);
  const [isOpenWindowAddFiles, setIsOpenWindowAddFiles] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    setInputValue(value);
  };

  const handleOpenModal = () => {
    setIsOpenWindowAddFiles(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.keyCode === 13) {
      handleSubmit(event, inputValue, filesDropzone);
      setFilesDropzone([]);
      setInputValue('');
      setIsOpenWindowAddFiles(false);
    }
  };

  const handleFilesDropzone = <T extends File>(acceptedFiles: T[]) => {
    return setFilesDropzone(acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })));
  };

  const handleRemoveFile = (index: number) => {
    setFilesDropzone((prevStat) => {
      return prevStat.filter((file, indexFile) => indexFile !== index);
    });
  };

  const contentCenterContainer = activeDialog?.message.map((item, index) => {
    return (
      <MessageCard
        key={index}
        id={item.id}
        message={item.message}
        messageImg={item.messageImg}
        firstId={activeDialog.users.firstId}
        stateUserChat={stateUserChat}
      />
    );
  });

  return (
    <Dropzone
      handleRemoveFile={handleRemoveFile}
      filesDropzone={filesDropzone}
      handleFilesDropzone={handleFilesDropzone}
      isOpenWindowAddFiles={isOpenWindowAddFiles}
    >
      <WrapperCenterContent>
        <>
          <ContentCenter>{contentCenterContainer}</ContentCenter>
          <ContentBottom>
            <Form
              onSubmit={(event) => {
                handleSubmit(event, inputValue, filesDropzone);
                setFilesDropzone([]);
                setInputValue('');
                setIsOpenWindowAddFiles(false);
              }}
            >
              <Textarea onChange={handleChange} value={inputValue} onKeyDown={handleKeyDown} />{' '}
              <ButtonAddFile onClick={() => handleOpenModal()} />
              <ButtonSubmit type={'submit'} value={''}></ButtonSubmit>
            </Form>
          </ContentBottom>
        </>
      </WrapperCenterContent>
    </Dropzone>
  );
};
