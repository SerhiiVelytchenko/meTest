// type

// components

// views
import React, { useState } from 'react';
import { RightContent } from './components/rightContent';
import { LeftContent } from './components/leftContent';
import { WrapperChatPage } from './views';
import { ContextChat, StateChatType } from '@md-modules/shared/types/chat';
import { User } from './constants/users';

export const ChatContext = React.createContext<ContextChat>({
  stateChat: [],
  handleStateChat: () => {}
});

export const ChatPage = () => {
  const [stateChat, setStateChat] = useState<StateChatType[]>(User);

  // console.log(stateChat);

  const handleStateChat = (id: string) => {
    const currentItem = stateChat.find((item) => item.id === id);
    const currentIndex = stateChat.findIndex((item) => item.id === id);
    // const ItemisActive = stateChat.find((item) => item.isActive === true);
    // const IndexItemisActive = stateChat.find((item) => item.isActive === true);

    // console.log(id);
    // console.log(currentIndex);
    // console.log(currentItem);

    return setStateChat(
      stateChat
        .slice(0, currentIndex)
        .concat({ ...currentItem, isActive: true })
        .concat(stateChat.slice(currentIndex + 1))
    );
  };

  return (
    <ChatContext.Provider
      value={{
        stateChat,
        handleStateChat
      }}
    >
      <WrapperChatPage>
        <LeftContent stateChat={stateChat} />
        <RightContent />
      </WrapperChatPage>
    </ChatContext.Provider>
  );
};
