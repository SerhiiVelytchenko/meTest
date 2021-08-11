import React from 'react';
import { ChatContext } from '@md-modules/chat';
import {
  UnreadMassage,
  ArrivalTimeMassage,
  InfoContainer,
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
  message
}: {
  name: string;
  urlImg: string;
  id: string;
  isActive: boolean;
  message: string;
}) => {
  const { handleCorrespondence } = React.useContext(ChatContext);

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
        <TextUserMassage>{message}</TextUserMassage>
      </CenterContainer>
      <InfoContainer>
        <ArrivalTimeMassage>11:20</ArrivalTimeMassage>
        <UnreadMassage>2</UnreadMassage>
      </InfoContainer>
    </WrapperUsersListCard>
  );
};
