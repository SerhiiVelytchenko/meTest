import React, { useState, useEffect } from 'react';
// type
import { ContextChat, StateChatType, CorrespondenceType } from '@md-modules/shared/types/chat';
// components
import { LeftContent } from './components/left-content';
import { User } from './constants/users';
import { CenterContent } from './components/center-content';
// views
import { WrapperChatPage } from './views';

export const ChatContext = React.createContext<ContextChat>({
  filesDropzone: [],
  stateUser: [],
  inputValue: '',
  indexActiveImage: 0,
  correspondence: [],
  handleStateUser: () => {},
  handleCorrespondence: () => {},
  handleChange: () => {},
  handleSubmit: () => {},
  handleClickButtonReverse: () => {},
  handleFilesDropzone: () => {},
  handleClickImage: () => {}
});

export const ChatPage = () => {
  const [filesDropzone, setFilesDropzone] = useState<any>([]);
  const [stateUser, setStateUser] = useState<StateChatType[]>(User);
  const [correspondence, setCorrespondence] = useState<CorrespondenceType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [indexActiveImage, setIndexActiveImage] = useState(0);

  const isActiveUser = stateUser.find((user) => user.isActive === true);
  const isActiveDialog = correspondence.find((dialog) => dialog.isActive === true);

  useEffect(() => {
    setCorrespondence(
      stateUser.map((user, index) => {
        const firstMessage = index === 1;
        return {
          id: `${index}c`,
          isActive: firstMessage,
          users: {
            firstId: '',
            secondId: user.id
          },
          message: [
            {
              id: user.id,
              message: 'no messages',
              messageImg: []
            }
          ]
        };
      })
    );
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;

    setInputValue(value);
  };

  const handleCorrespondence = (id: string) => {
    const idIndexItemIsActive = isActiveDialog?.id;

    return setCorrespondence(
      correspondence.map((el) =>
        el.id === id ? { ...el, isActive: true } : el.id === idIndexItemIsActive ? { ...el, isActive: false } : el
      )
    );
  };

  const handleStateUser = (id: string) => {
    const idIndexItemIsActive = isActiveUser?.id;

    return setStateUser(
      stateUser.map((el) =>
        el.id === id ? { ...el, isActive: true } : el.id === idIndexItemIsActive ? { ...el, isActive: false } : el
      )
    );
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event?.preventDefault();
    const isActiveUserId = isActiveUser?.id;
    const isfirstId = isActiveDialog?.users.firstId.length;

    const firstId = isfirstId || 0 > 1 ? isActiveDialog?.users.firstId : isActiveUserId;

    const arrMessageImg = filesDropzone.map((el: { preview: string }) => el.preview) || [];

    if (inputValue.length > 0 || filesDropzone.length > 0) {
      setCorrespondence(
        correspondence.map((dialog) =>
          dialog.isActive === true
            ? {
                ...dialog,
                message: [
                  ...dialog.message,
                  { id: isActiveUserId || 'no Id', message: `${inputValue}`, messageImg: arrMessageImg }
                ],
                users: { ...dialog.users, firstId: firstId || 'no Id' }
              }
            : dialog
        )
      );
      setInputValue('');
      setFilesDropzone([]);
    }
  };

  const handleClickButtonReverse = () => {
    setStateUser((stateUser) => {
      return stateUser.map((user) =>
        user.isActive === true
          ? { ...user, isActive: false }
          : user.id === isActiveDialog?.users.secondId
          ? { ...user, isActive: true }
          : user
      );
    });

    setCorrespondence(
      correspondence.map((dialog, index) =>
        index === 0
          ? { ...dialog, users: { ...dialog.users, secondId: isActiveDialog?.users.secondId || '' } }
          : dialog.isActive === true
          ? { ...dialog, users: { ...dialog.users, firstId: dialog.users.secondId, secondId: dialog.users.firstId } }
          : dialog
      )
    );
  };

  const handleFilesDropzone = <T extends File>(acceptedFiles: T[]) => {
    return setFilesDropzone(acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })));
  };

  const handleClickImage = (index: number) => {
    setIndexActiveImage(index);
  };

  return (
    <ChatContext.Provider
      value={{
        filesDropzone,
        stateUser,
        correspondence,
        inputValue,
        indexActiveImage,
        handleStateUser,
        handleCorrespondence,
        handleChange,
        handleSubmit,
        handleClickButtonReverse,
        handleFilesDropzone,
        handleClickImage
      }}
    >
      <WrapperChatPage>
        <LeftContent />
        <CenterContent />
      </WrapperChatPage>
    </ChatContext.Provider>
  );
};
