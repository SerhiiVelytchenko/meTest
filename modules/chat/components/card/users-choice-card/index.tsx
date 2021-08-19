import React from 'react';
// type
import { PropsUsersChoiceCardType } from '@md-modules/shared/types/chat';
// components
import { ChatContext } from '@md-modules/chat';
// views
import { WrapperUsersChoice, UserAvatar, TextUserName } from './views';

export const UsersChoiceCard = ({ id, name, urlImg, isActive }: PropsUsersChoiceCardType) => {
  const { handleStateUser } = React.useContext(ChatContext);

  return (
    <WrapperUsersChoice
      onClick={() => {
        isActive = true;
        handleStateUser(id);
      }}
    >
      <UserAvatar url={urlImg} border={isActive ? '5px' : '2px'} />
      <TextUserName>{name}</TextUserName>
    </WrapperUsersChoice>
  );
};
