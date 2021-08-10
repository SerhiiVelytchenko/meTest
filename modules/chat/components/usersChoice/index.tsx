// import { ChatContext } from '@md-modules/chat';
import React from 'react';
import { WrapperUsersChoice, UserAvatar, TextUserName } from './views';

export const UsersChoice = ({
  name,
  urlImg,
  isActive
}: {
  id: string;
  name: string;
  urlImg: string;
  isActive: boolean;
}) => {
  // const { stateChat, handleStateChat } = React.useContext(ChatContext);

  return (
    <WrapperUsersChoice
      onClick={() => {
        isActive = true;
        // handleStateChat(id);
        // console.log(id);
      }}
    >
      <UserAvatar url={urlImg} border={isActive ? '5px' : '2px'} />
      <TextUserName>{name}</TextUserName>
    </WrapperUsersChoice>
  );
};
