// type

// components

// views
import React, { useState, useEffect } from 'react';
import { RightContent } from './components/rightContent';
import { LeftContent } from './components/leftContent';
import { WrapperChatPage } from './views';
import { ContextChat, StateChatType, CorrespondenceType } from '@md-modules/shared/types/chat';
import { User } from './constants/users';
import { CenterContent } from './components/centerContent';

export const ChatContext = React.createContext<ContextChat>({
  stateUser: [],
  inputValue: '',
  handleStateUser: () => {},
  correspondence: [],
  handleCorrespondence: () => {},
  handleChange: () => {},
  handleSubmit: () => {}
});

export const ChatPage = () => {
  const [stateUser, setStateUser] = useState<StateChatType[]>(User);
  const [correspondence, setCorrespondence] = useState<CorrespondenceType[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setCorrespondence(
      stateUser.map((user, index) => {
        return {
          id: `${index}c`,
          isActive: false,
          users: {
            firstId: '',
            secondId: user.id
          },
          message: [
            {
              id: user.id,
              message: 'no messages'
            }
          ]
        };
      })
    );
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setInputValue(value);
  };

  const handleCorrespondence = (id: string) => {
    const idIndexItemIsActive = correspondence.find((item) => item.isActive === true)?.id;

    return setCorrespondence(
      correspondence.map((el) =>
        el.id === id ? { ...el, isActive: true } : el.id === idIndexItemIsActive ? { ...el, isActive: false } : el
      )
    );
  };

  const handleStateUser = (id: string) => {
    const idIndexItemIsActive = stateUser.find((item) => item.isActive === true)?.id;

    return setStateUser(
      stateUser.map((el) =>
        el.id === id ? { ...el, isActive: true } : el.id === idIndexItemIsActive ? { ...el, isActive: false } : el
      )
    );
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event?.preventDefault();

    setCorrespondence(
      correspondence.map((dialog, index) =>
        dialog.isActive === true
          ? { ...dialog, message: [...dialog.message, { id: `${index + 1}u`, message: `${inputValue}` }] }
          : dialog
      )
    );
    setInputValue('');

    // const currentItem = correspondence[0];
    // const currentIndex = 0;
    // setCorrespondence(
    //   correspondence
    //     .slice(0, currentIndex)
    //     .concat({ ...currentItem, message: [...currentItem.message, { id: '1u', message: inputValue }] })
    //     .concat(correspondence.slice(currentIndex + 1))
    // );
    setInputValue('');
    // console.log(correspondence);
    // const submitValue = event.currentTarget.children[0].value;
  };

  return (
    <ChatContext.Provider
      value={{
        stateUser,
        correspondence,
        inputValue,
        handleStateUser,
        handleCorrespondence,
        handleChange,
        handleSubmit
      }}
    >
      <WrapperChatPage>
        <LeftContent />
        <CenterContent />
        <RightContent />
      </WrapperChatPage>
    </ChatContext.Provider>
  );
};
