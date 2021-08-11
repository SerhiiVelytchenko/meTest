import { ChatContext } from '@md-modules/chat';
import React from 'react';
import { WrapperMessageCard, TextMessage, UserAvatar } from './views';

export const MessageCard = ({ id, message }: { id: string; message: string }) => {
  const { stateUser } = React.useContext(ChatContext);

  const urlUserAvatar = stateUser.find((item) => item.id === id)?.urlImg || '';

  return (
    <WrapperMessageCard>
      <UserAvatar url={urlUserAvatar} />
      <TextMessage>{message}</TextMessage>
    </WrapperMessageCard>
  );
};
