import React from 'react';
// type
import { UsersListCardPropsType } from '@md-modules/shared/types/chat';
// views
import {
  ArrivalTimeMassage,
  WrapperUsersListCard,
  UserAvatar,
  CenterContainer,
  TextUserName,
  TextUserMassage
} from './views';

export const UsersListCard = ({
  name,
  urlImg,
  id,
  isActive,
  message,
  handleCorrespondence
}: UsersListCardPropsType) => {
  const userMassage = message.length > 18 ? `${message.slice(0, 14)}...` : message;

  return (
    <WrapperUsersListCard
      onClick={() => {
        handleCorrespondence(id);
      }}
      border={isActive ? '5px' : '2px'}
    >
      <UserAvatar url={urlImg} />
      <CenterContainer>
        <TextUserName>{name}</TextUserName>
        <TextUserMassage>{userMassage}</TextUserMassage>
      </CenterContainer>
      <ArrivalTimeMassage>11:20</ArrivalTimeMassage>
    </WrapperUsersListCard>
  );
};
