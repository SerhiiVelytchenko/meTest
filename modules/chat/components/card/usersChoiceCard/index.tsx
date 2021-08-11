import { ChatContext } from '@md-modules/chat';
import React from 'react';
import { WrapperUsersChoice, UserAvatar, TextUserName } from './views';

export const UsersChoiceCard = ({
  id,
  name,
  urlImg,
  isActive
}: {
  id: string;
  name: string;
  urlImg: string;
  isActive: boolean;
}) => {
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
