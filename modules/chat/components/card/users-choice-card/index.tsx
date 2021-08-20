import React from 'react';
// type
import { UsersChoiceCardPropsType } from '@md-modules/shared/types/chat';
// views
import { WrapperUsersChoice, UserAvatar, TextUserName } from './views';

export const UsersChoiceCard = ({ id, name, urlImg, isActive, handleStateUser }: UsersChoiceCardPropsType) => {
  return (
    <WrapperUsersChoice
      onClick={() => {
        handleStateUser(id);
      }}
    >
      <UserAvatar url={urlImg} border={isActive ? '5px' : '2px'} />
      <TextUserName>{name}</TextUserName>
    </WrapperUsersChoice>
  );
};
