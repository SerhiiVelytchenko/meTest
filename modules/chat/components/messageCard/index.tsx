import { ChatContext } from '@md-modules/chat';
import React from 'react';
import { WrapperMessageCard, TextMessage, UserAvatar } from './views';

export const MessageCard = ({ id, message }: { id: string; message: string }) => {
  const { stateChat } = React.useContext(ChatContext);

  const urlUserAvatar = stateChat.find((item) => item.id === id)?.urlImg || '';

  return (
    <WrapperMessageCard>
      <UserAvatar url={urlUserAvatar} />
      <TextMessage>{message}</TextMessage>
    </WrapperMessageCard>
  );
};
