import React, { useState, useEffect } from 'react';
// type
import { StateUserChatType, CorrespondenceType, HandleSubmitType } from '@md-modules/shared/types/chat';
// components
import { LeftContent } from './components/left-content';
import { User } from './constants/users';
import { CenterContent } from './components/center-content';
// views
import { WrapperChatPage } from './views';

export const ChatPage = () => {
  const [stateUserChat, setStateUserChat] = useState<StateUserChatType[]>(User);
  const [correspondence, setCorrespondence] = useState<CorrespondenceType[]>([]);

  const activeUser = stateUserChat.find((user) => user.isActive);
  const activeDialog = correspondence.find((dialog) => dialog.isActive);

  useEffect(() => {
    return setCorrespondence(
      stateUserChat.map((user, index) => {
        const firstMessage = index === 1;
        return {
          id: `${index}c`,
          isActive: firstMessage,
          users: {
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
  }, [stateUserChat.length]);

  const handleCorrespondence = (id: string) => {
    const idActiveDialog = activeDialog?.id;

    return setCorrespondence((prevState) => {
      return prevState.map((dialog) =>
        dialog.id === id
          ? { ...dialog, isActive: true }
          : dialog.id === idActiveDialog
          ? { ...dialog, isActive: false }
          : dialog
      );
    });
  };

  const handleStateUser = (id: string) => {
    const idActiveUser = activeUser?.id;

    return setStateUserChat((prevState) => {
      return prevState.map((user) =>
        user.id === id ? { ...user, isActive: true } : user.id === idActiveUser ? { ...user, isActive: false } : user
      );
    });
  };

  const handleSubmit: HandleSubmitType = (event, inputValue, filesDropzone) => {
    event?.preventDefault();
    const idActiveUser = activeUser?.id;
    const isfirstId = activeDialog?.users.firstId;

    const firstId = isfirstId ? activeDialog?.users.firstId : idActiveUser;

    const arrMessageImg = filesDropzone.map((el: { preview: string }) => el.preview);

    if (inputValue.length > 0 || filesDropzone.length > 0) {
      setCorrespondence((prevState) => {
        return prevState.map((dialog) =>
          dialog.isActive
            ? {
                ...dialog,
                message: [
                  ...dialog.message,
                  { id: idActiveUser || 'no Id', message: `${inputValue}`, messageImg: arrMessageImg }
                ],
                users: { ...dialog.users, firstId: firstId || 'no Id' }
              }
            : dialog
        );
      });
    }
  };

  const handleClickButtonReverse = () => {
    setStateUserChat((prevState) => {
      return prevState.map((user) =>
        user.isActive
          ? { ...user, isActive: false }
          : user.id === activeDialog?.users.secondId
          ? { ...user, isActive: true }
          : user
      );
    });

    setCorrespondence((prevState) => {
      return prevState.map((dialog, index) =>
        index === 0
          ? { ...dialog, users: { ...dialog.users, secondId: activeDialog?.users.secondId } }
          : dialog.isActive
          ? { ...dialog, users: { ...dialog.users, firstId: dialog.users.secondId, secondId: dialog.users.firstId } }
          : dialog
      );
    });
  };

  return (
    <WrapperChatPage>
      <LeftContent
        handleStateUser={handleStateUser}
        handleCorrespondence={handleCorrespondence}
        stateUserChat={stateUserChat}
        correspondence={correspondence}
        handleClickButtonReverse={handleClickButtonReverse}
      />
      <CenterContent stateUserChat={stateUserChat} activeDialog={activeDialog} handleSubmit={handleSubmit} />
    </WrapperChatPage>
  );
};
